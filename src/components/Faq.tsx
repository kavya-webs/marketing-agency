"use client";

import React, { useState } from "react";
import { faqs } from "@/data/trendoraData";
import { Plus, Minus } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        width: "100%",
        padding: "100px 24px 120px",
        backgroundColor: "var(--canvas-bg)",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          <div className="badge-pill">FAQ</div>
          <AnimatedHeading
            as="h2"
            className="font-display"
            text="Frequently asked questions"
            style={{
              fontSize: "clamp(38px, 4.8vw, 60px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
            }}
          />
        </div>

        {/* Accordion Container */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "background-color 0.2s ease",
                  border: "1px solid rgba(30, 30, 30, 0.04)",
                }}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 28px",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      lineHeight: 1.25,
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: isOpen
                        ? "rgba(255, 92, 0, 0.15)"
                        : "rgba(30, 30, 30, 0.05)",
                      color: isOpen ? "var(--brand-orange)" : "var(--text-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 28px 26px 28px",
                      color: "var(--text-secondary)",
                      fontSize: "16px",
                      lineHeight: 1.55,
                      animation: "fadeIn 0.25s ease-in-out",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
