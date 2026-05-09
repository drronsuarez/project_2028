/*
 * PROJECT 2028 — NAVIGATION COMPONENT
 * Design: Democratic Modernism — forest green top bar, amber accents, Fraunces logo
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/planks", label: "Policy Planks" },
  { href: "/integrations", label: "Our Tools" },
  { href: "/trademark", label: "Brand & Legal" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0D2137] border-b border-[#1A3A5C] shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#D97706] flex items-center justify-center rounded-sm flex-shrink-0">
              <span className="text-white font-bold text-sm font-mono" style={{ fontFamily: "'DM Mono', monospace" }}>28</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none block" style={{ fontFamily: "'Fraunces', serif" }}>
                Project 2028
              </span>
              <span className="text-[#D97706] text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                Planks Not Platitudes
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                  location === link.href
                    ? "bg-[#1B4332] text-white"
                    : "text-[#B8C9D8] hover:text-white hover:bg-[#1A3A5C]"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://project2028.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 bg-[#D97706] text-white text-sm font-semibold rounded-sm hover:bg-[#B45309] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Join the Movement
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-[#1A3A5C] pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium rounded-sm mb-1 transition-colors ${
                  location === link.href
                    ? "bg-[#1B4332] text-white"
                    : "text-[#B8C9D8] hover:text-white hover:bg-[#1A3A5C]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://project2028.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-3 py-2 bg-[#D97706] text-white text-sm font-semibold rounded-sm text-center"
            >
              Join the Movement
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
