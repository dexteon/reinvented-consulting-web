import { NextRequest, NextResponse } from "next/server";
import { stripe, PRICE_TO_GHL_TAG } from "@/lib/stripe";
import { addTagsByEmail } from "@/lib/ghl";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle checkout.session.completed (one-time purchases)
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    if (!email) return NextResponse.json({ received: true });

    // Get the line items to determine which product was bought
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 5 });
    for (const item of lineItems.data) {
      const priceId = item.price?.id;
      if (!priceId) continue;
      const tags = PRICE_TO_GHL_TAG[priceId];
      if (tags?.length) {
        await addTagsByEmail(email, tags);
      }
    }
  }

  // Handle subscription created (recurring products)
  if (event.type === "customer.subscription.created") {
    const sub = event.data.object as Stripe.Subscription;
    const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;
    const email = customer.email;
    if (!email) return NextResponse.json({ received: true });

    for (const item of sub.items.data) {
      const priceId = item.price.id;
      const tags = PRICE_TO_GHL_TAG[priceId];
      if (tags?.length) {
        await addTagsByEmail(email, tags);
      }
    }
  }

  // Handle subscription cancelled
  if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as Stripe.Subscription;
    const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;
    const email = customer.email;
    if (!email) return NextResponse.json({ received: true });

    // Check which subscription was cancelled and apply cancellation tags
    for (const item of sub.items.data) {
      if (item.price.id === process.env.STRIPE_PRICE_LENDER_BRIEF) {
        await addTagsByEmail(email, ["lender_brief_cancelled"]);
      }
    }
  }

  return NextResponse.json({ received: true });
}
