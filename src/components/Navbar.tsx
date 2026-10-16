"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/trendoraData";

export default function Navbar() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active tab pill
      const sections = ["services", "benefits", "impact", "blog", "testimonials"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 24px",
          borderRadius: "9999px",
          backgroundColor: scrolled
            ? "rgba(242, 239, 233, 0.88)"
            : "rgba(242, 239, 233, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(30, 30, 30, 0.08)",
          boxShadow: scrolled
            ? "0 8px 30px rgba(0, 0, 0, 0.06)"
            : "0 2px 10px rgba(0, 0, 0, 0.02)",
          transition: "all 0.3s ease",
          pointerEvents: "auto",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--brand-orange)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(255, 92, 0, 0.35)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            className="font-display"
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "var(--text-dark)",
              letterSpacing: "-0.04em",
            }}
          >
            TG media
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="desktop-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {navItems.map((item) => {
            const isActive = !isContactPage && activeSection === item.href.replace("/#", "").replace("#", "");
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: isActive ? "var(--brand-orange)" : "var(--text-dark)",
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.85)" : "transparent",
                  boxShadow: isActive ? "0 2px 6px rgba(0,0,0,0.04)" : "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--brand-orange)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-dark)";
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="desktop-cta" style={{ display: "flex", alignItems: "center" }}>
          <Link
            href="/contact"
            className={isContactPage ? "btn-primary" : "btn-dark"}
            style={isContactPage ? { padding: "10px 24px", fontSize: "14px" } : undefined}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            gap: "5px",
          }}
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "var(--text-dark)",
              borderRadius: "2px",
              transition: "transform 0.3s ease",
              transform: mobileMenuOpen
                ? "translateY(7px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "var(--text-dark)",
              borderRadius: "2px",
              transition: "opacity 0.2s ease",
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "var(--text-dark)",
              borderRadius: "2px",
              transition: "transform 0.3s ease",
              transform: mobileMenuOpen
                ? "translateY(-7px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "88px",
            left: "20px",
            right: "20px",
            backgroundColor: "var(--card-bg)",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            border: "1px solid rgba(30, 30, 30, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            pointerEvents: "auto",
            zIndex: 60,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--text-dark)",
                padding: "8px 0",
                borderBottom: "1px solid rgba(30, 30, 30, 0.06)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={isContactPage ? "btn-primary" : "btn-dark"}
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "14px",
              textAlign: "center",
            }}
          >
            Contact
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 820px) {
          .desktop-links,
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
