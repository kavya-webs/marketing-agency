"use client";

import React from "react";
import { benefitsData } from "@/data/trendoraData";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Benefits() {
  return (
    <section
      id="benefits"
      style={{
        width: "100%",
        padding: "100px 24px 120px",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid rgba(30, 30, 30, 0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          position: "relative",
        }}
        className="benefits-split"
      >
        {/* Left Column (Sticky) */}
        <div
          className="benefits-sticky-left"
          style={{
            position: "sticky",
            top: "120px",
            alignSelf: "flex-start",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            paddingRight: "20px",
          }}
        >
          <div className="badge-pill">{benefitsData.badge}</div>

          <AnimatedHeading
            as="h2"
            className="font-display"
            text={benefitsData.title}
            style={{
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
            }}
          />

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: "var(--text-secondary)",
              maxWidth: "480px",
            }}
          >
            {benefitsData.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "12px",
            }}
          >
            {benefitsData.tags.map((tag) => (
              <span
                key={tag}
                className="badge-pill"
                style={{
                  backgroundColor: "var(--card-bg)",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-orange)",
                  }}
                />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column (Scrollable List with Orange Border Line) */}
        <div
          className="benefits-list-right"
          style={{
            borderLeft: "2px solid rgba(255, 92, 0, 0.35)",
            paddingLeft: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          {benefitsData.items.map((item, idx) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                position: "relative",
              }}
            >
              {/* Icon & Title Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: "var(--card-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.5,
                  color: "var(--text-secondary)",
                  maxWidth: "460px",
                  paddingLeft: "64px",
                }}
                className="benefit-desc"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .benefits-split {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .benefits-sticky-left {
            position: relative !important;
            top: 0 !important;
            padding-right: 0 !important;
          }
          .benefits-list-right {
            border-left: none !important;
            border-top: 2px solid rgba(255, 92, 0, 0.35) !important;
            padding-left: 0 !important;
            padding-top: 36px !important;
          }
          .benefit-desc {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
