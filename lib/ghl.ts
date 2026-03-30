const GHL_BASE = process.env.GHL_BASE_URL ?? "https://rest.gohighlevel.com/v1";
const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;

interface ContactPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  tags?: string[];
  customField?: Record<string, string>;
  locationId?: string;
}

export async function upsertContact(payload: ContactPayload): Promise<string | null> {
  const body: Record<string, unknown> = {
    locationId: GHL_LOCATION_ID,
    firstName: payload.firstName,
    email: payload.email,
    tags: payload.tags ?? [],
  };
  if (payload.lastName) body.lastName = payload.lastName;
  if (payload.phone) body.phone = payload.phone;
  if (payload.customField) body.customField = payload.customField;

  const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.error("GHL upsert failed:", await res.text());
    return null;
  }

  const data = await res.json();
  return data?.contact?.id ?? null;
}

export async function addTagsByEmail(email: string, tags: string[]): Promise<void> {
  // Find contact first
  const searchRes = await fetch(
    `${GHL_BASE}/contacts/search?locationId=${GHL_LOCATION_ID}&email=${encodeURIComponent(email)}`,
    {
      headers: { Authorization: `Bearer ${GHL_API_KEY}` },
    }
  );

  if (!searchRes.ok) return;
  const searchData = await searchRes.json();
  const contactId: string | undefined = searchData?.contacts?.[0]?.id;
  if (!contactId) return;

  await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tags }),
  });
}
