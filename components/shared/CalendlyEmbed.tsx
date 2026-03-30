"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  /** Height of the embed container (default: 700px) */
  height?: number;
}

/**
 * Styled Calendly inline embed that matches the navy/gold brand.
 * Uses Calendly's widget.js for inline scheduling.
 *
 * Brand overrides:
 *  - Background: navy (#0D1B2A)
 *  - Text: white (#FFFFFF)
 *  - Primary button: gold (#D4AF37)
 */
export default function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script once
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Calendly supports color overrides via URL params
  const brandedUrl = new URL(url);
  brandedUrl.searchParams.set("background_color", "0b0f19");
  brandedUrl.searchParams.set("text_color", "ffffff");
  brandedUrl.searchParams.set("primary_color", "d4af37");
  brandedUrl.searchParams.set("hide_gdpr_banner", "1");

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-base">
      <div
        className="calendly-inline-widget"
        data-url={brandedUrl.toString()}
        style={{ minWidth: 320, height }}
      />
    </div>
  );
}
