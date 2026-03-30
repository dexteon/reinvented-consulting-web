"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// These are Dub's product pages — this site is a demo of what we'd build for him
const products = [
  { label: "Free Webinar", href: "/webinar", tag: "Free" },
  { label: "Credit Playbook (Ebook)", href: "/ebook", tag: "$49" },
  { label: "Lender Matching Tool", href: "/lender-tool", tag: "$197" },
  { label: "Credit Repair Audit", href: "/credit-audit", tag: "$297" },
  { label: "Mentorship Program", href: "/mentorship", tag: "$1,997+" },
  { label: "Lender Intelligence Brief", href: "/lender-brief", tag: "$19/mo" },
  { label: "Video Distribution", href: "/video-distribution", tag: "$300/mo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="container-section flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-white">
            Reinvented<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
          <Link href="/webinar" className="hover:text-gold transition-colors">
            Free Webinar
          </Link>

          {/* Products dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-gold transition-colors"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-navy-card border border-white/10 rounded-xl shadow-2xl py-2">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white/90 text-sm">{p.label}</span>
                    <span className="text-gold text-xs font-semibold">{p.tag}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://www.skool.com/reinvented-mentorship-9193"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Community
          </a>
          <a
            href="https://www.instagram.com/reinventedconsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/webinar" className="btn-gold text-sm px-5 py-2.5">
            Join Free Webinar →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-card border-t border-white/10 px-4 py-4 space-y-1">
          <Link
            href="/webinar"
            onClick={() => setOpen(false)}
            className="block text-white/90 py-2.5 hover:text-gold transition-colors"
          >
            Free Webinar
          </Link>
          <div className="h-px bg-white/10 my-1" />
          {products.slice(1).map((p) => (
            <Link
              key={p.href}
              href={p.href}
              onClick={() => setOpen(false)}
              className="flex justify-between text-white/80 py-2.5 hover:text-gold transition-colors text-sm"
            >
              <span>{p.label}</span>
              <span className="text-gold text-xs font-semibold">{p.tag}</span>
            </Link>
          ))}
          <div className="h-px bg-white/10 my-1" />
          <Link
            href="/webinar"
            onClick={() => setOpen(false)}
            className="block btn-gold text-center mt-3"
          >
            Join Free Webinar →
          </Link>
        </div>
      )}
    </nav>
  );
}
