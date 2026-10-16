"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--brand-orange)",
        color: "#ffffff",
        paddingTop: "120px",
        paddingBottom: "32px",
        paddingLeft: "24px",
        paddingRight: "24px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          gap: "36px",
        }}
      >
        {/* Top Grid: Newsletter + Sitemap Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "56px",
            alignItems: "flex-start",
          }}
          className="footer-top-grid"
        >
          {/* Left: Insignia + Newsletter */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* White Circle Brand Insignia */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  fill="var(--brand-orange)"
                  stroke="var(--brand-orange)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <AnimatedHeading
                as="h3"
                className="font-display"
                text="Join our newsletter"
                style={{
                  fontSize: "34px",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              />
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255, 255, 255, 0.85)",
                  maxWidth: "440px",
                  lineHeight: 1.5,
                }}
              >
                Sign up to our mailing list below and be the first to know about new updates. Don&apos;t worry, we hate spam too.
              </p>
            </div>

            {/* Newsletter Input Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "8px",
              }}
            >
              <input
                type="email"
                required
                placeholder="jane@framer.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "var(--canvas-bg)",
                  color: "var(--text-dark)",
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  border: "none",
                  outline: "none",
                  fontSize: "15px",
                  width: "280px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#ffffff",
                  color: "var(--text-dark)",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2efe9";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {submitted ? (
                  <>
                    <Check size={16} /> Subscribed
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>

          {/* Right: Sitemap Links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            {/* Pages Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4
                className="font-display"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Pages
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  href="#hero"
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "15px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)")}
                >
                  Home
                </Link>
                <Link
                  href="#blog"
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "15px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)")}
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "15px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)")}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Information Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4
                className="font-display"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Information
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  404
                </span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Privacy
                </span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Massive TG MEDIA Wordmark */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            overflow: "hidden",
            lineHeight: 0.85,
            paddingTop: "8px",
            userSelect: "none",
          }}
        >
          <div
            className="font-display"
            style={{
              fontSize: "clamp(56px, 14.5vw, 185px)",
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.95)",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              width: "100%",
              display: "block",
            }}
          >
            TG MEDIA
          </div>
        </div>

        {/* Bottom Bar: Social Icons & Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.25)",
            paddingTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
          className="footer-bottom-bar"
        >
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              style={{
                color: "#ffffff",
                transition: "opacity 0.2s ease",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              style={{
                color: "#ffffff",
                transition: "opacity 0.2s ease",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{
                color: "#ffffff",
                transition: "opacity 0.2s ease",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            © 2026 TG media Studio Created by Ahmet Köse
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 820px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
