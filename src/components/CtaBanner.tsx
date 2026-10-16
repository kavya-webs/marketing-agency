"use client";

import React from "react";
import Link from "next/link";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function CtaBanner() {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 24px",
        backgroundColor: "var(--canvas-bg)",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid rgba(30, 30, 30, 0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "24px",
        }}
      >
        <AnimatedHeading
          as="h2"
          className="font-display"
          text="Your Brand Deserves More Attention"
          style={{
            fontSize: "clamp(42px, 5.5vw, 68px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "var(--text-dark)",
          }}
        />

        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.5,
            color: "var(--text-secondary)",
            maxWidth: "520px",
          }}
        >
          We design content systems built to scale and built to win.
        </p>

        <div style={{ marginTop: "12px" }}>
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              padding: "16px 40px",
              fontSize: "16px",
            }}
          >
            Start for free
          </Link>
        </div>
      </div>
    </section>
  );
}
