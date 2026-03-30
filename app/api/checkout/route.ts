import { NextRequest, NextResponse } from "next/server";
import { stripe, PRICE_IDS } from "@/lib/stripe";

const PRODUCT_MAP: Record<string, string> = {
  ebook: PRICE_IDS.ebook,
  lender_tool: PRICE_IDS.lenderTool,
  credit_audit: PRICE_IDS.creditAudit,
  mentorship_standard: PRICE_IDS.mentorshipStandard,
  mentorship_premium: PRICE_IDS.mentorshipPremium,
  mentorship_vip: PRICE_IDS.mentorshipVip,
  lender_brief: PRICE_IDS.lenderBrief,
  video_dist_starter: PRICE_IDS.videoDistStarter,
  video_dist_growth: PRICE_IDS.videoDistGrowth,
  video_dist_pro: PRICE_IDS.videoDistPro,
};

const SUBSCRIPTION_PRODUCTS = new Set([
  "lender_brief",
  "video_dist_starter",
  "video_dist_growth",
  "video_dist_pro",
]);

export async function GET(req: NextRequest) {
  const product = req.nextUrl.searchParams.get("product");
  if (!product || !PRODUCT_MAP[product]) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const priceId = PRODUCT_MAP[product];
  const isSubscription = SUBSCRIPTION_PRODUCTS.has(product);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? req.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: isSubscription ? "subscription" : "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/thank-you?product=${product}`,
    cancel_url: `${siteUrl}/${product.replace(/_/g, "-")}`,
  });

  return NextResponse.redirect(session.url!, 303);
}
