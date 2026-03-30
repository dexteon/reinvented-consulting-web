import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export const PRICE_IDS = {
  ebook: process.env.STRIPE_PRICE_EBOOK!,
  lenderTool: process.env.STRIPE_PRICE_LENDER_TOOL!,
  creditAudit: process.env.STRIPE_PRICE_CREDIT_AUDIT!,
  mentorshipStandard: process.env.STRIPE_PRICE_MENTORSHIP_STANDARD!,
  mentorshipPremium: process.env.STRIPE_PRICE_MENTORSHIP_PREMIUM!,
  mentorshipVip: process.env.STRIPE_PRICE_MENTORSHIP_VIP!,
  lenderBrief: process.env.STRIPE_PRICE_LENDER_BRIEF!,
  videoDistStarter: process.env.STRIPE_PRICE_VIDEO_DIST_STARTER!,
  videoDistGrowth: process.env.STRIPE_PRICE_VIDEO_DIST_GROWTH!,
  videoDistPro: process.env.STRIPE_PRICE_VIDEO_DIST_PRO!,
} as const;

// Maps Stripe price IDs to GHL tags
export const PRICE_TO_GHL_TAG: Record<string, string[]> = {
  [PRICE_IDS.ebook]: ["ebook_purchased"],
  [PRICE_IDS.lenderTool]: ["lender_tool_purchased"],
  [PRICE_IDS.creditAudit]: ["credit_audit_purchased"],
  [PRICE_IDS.mentorshipStandard]: ["mentorship_enrolled", "mentorship_standard"],
  [PRICE_IDS.mentorshipPremium]: ["mentorship_enrolled", "mentorship_premium"],
  [PRICE_IDS.mentorshipVip]: ["mentorship_enrolled", "mentorship_vip"],
  [PRICE_IDS.lenderBrief]: ["lender_brief_subscriber"],
  [PRICE_IDS.videoDistStarter]: ["video_distribution_subscriber", "video_dist_starter"],
  [PRICE_IDS.videoDistGrowth]: ["video_distribution_subscriber", "video_dist_growth"],
  [PRICE_IDS.videoDistPro]: ["video_distribution_subscriber", "video_dist_pro"],
};
