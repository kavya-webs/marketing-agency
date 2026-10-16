"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/trendoraData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      style={{
        width: "100%",
        padding: "80px 24px 100px",
        backgroundColor: "var(--canvas-bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <div className="badge-pill">Real Feedback</div>
          <AnimatedHeading
            as="h2"
            className="font-display"
            text="Trusted by Creators Worldwide"
            style={{
              fontSize: "clamp(38px, 4.8vw, 60px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
            }}
          />
        </div>

        {/* Testimonial Card */}
        <div
          className="card-base testimonial-split"
          style={{
            padding: "56px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "48px",
            alignItems: "center",
            position: "relative",
            minHeight: "500px",
            overflow: "hidden",
          }}
        >
          {/* Left Column: Quote & Creator Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              gap: "36px",
              minHeight: "360px",
            }}
          >
            {/* Top Row: Pill Tag & Arrow Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--brand-orange)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                }}
              >
                {active.tag}
              </span>

              {/* Navigation Arrows */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 92, 0, 0.2)",
                    color: "var(--brand-orange)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--brand-orange)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 92, 0, 0.2)";
                    e.currentTarget.style.color = "var(--brand-orange)";
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "var(--brand-orange)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--brand-orange-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--brand-orange)";
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Main Quote with AnimatePresence */}
            <div style={{ minHeight: "140px", display: "flex", alignItems: "center" }}>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display"
                  style={{
                    fontSize: "clamp(24px, 3.2vw, 36px)",
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: "var(--text-dark)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  &ldquo;{active.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Creator Attribution */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                    }}
                  >
                    {active.name}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      marginTop: "2px",
                    }}
                  >
                    {active.role}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: High-Res Creator Portrait with Crossfade */}
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "380px",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              backgroundColor: "#1e1e1e",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  position: "absolute",
                  inset: 0,
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .testimonial-split {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
