"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { processSteps } from "@/data/trendoraData";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 820);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll progress of the Process section:
  // "start end": when the top of the section enters the bottom of the viewport
  // "center center": when the center of the section reaches the center of the screen
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Smooth physics spring for organic, ultra-fluid scroll tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // Card 1 (Left / Strategy): slides in from the left (-150px) and scales into place
  const leftX = useTransform(smoothProgress, [0, 1], [-150, 0], { clamp: true });
  const leftScale = useTransform(smoothProgress, [0, 1], [0.72, 1], { clamp: true });
  const leftOpacity = useTransform(smoothProgress, [0, 0.65], [0.35, 1], { clamp: true });

  // Card 2 (Center / Create): slides up from the bottom (+70px) and scales into place
  const centerY = useTransform(smoothProgress, [0, 1], [70, 0], { clamp: true });
  const centerScale = useTransform(smoothProgress, [0, 1], [0.82, 1], { clamp: true });
  const centerOpacity = useTransform(smoothProgress, [0, 0.65], [0.35, 1], { clamp: true });

  // Card 3 (Right / Optimize): slides in from the right (+150px) and scales into place
  const rightX = useTransform(smoothProgress, [0, 1], [150, 0], { clamp: true });
  const rightScale = useTransform(smoothProgress, [0, 1], [0.72, 1], { clamp: true });
  const rightOpacity = useTransform(smoothProgress, [0, 0.65], [0.35, 1], { clamp: true });

  // Mobile fallback transforms (smooth vertical entrance on small screens)
  const mobileY = useTransform(smoothProgress, [0, 1], [40, 0], { clamp: true });
  const mobileScale = useTransform(smoothProgress, [0, 1], [0.92, 1], { clamp: true });
  const mobileOpacity = useTransform(smoothProgress, [0, 0.6], [0.4, 1], { clamp: true });

  // Header subtle entrance
  const headerY = useTransform(smoothProgress, [0, 0.7], [20, 0], { clamp: true });
  const headerOpacity = useTransform(smoothProgress, [0, 0.5], [0.4, 1], { clamp: true });

  const getMotionStyle = (index: number) => {
    if (!isDesktop) {
      return {
        y: mobileY,
        scale: mobileScale,
        opacity: mobileOpacity,
      };
    }
    if (index === 0) {
      return {
        x: leftX,
        scale: leftScale,
        opacity: leftOpacity,
      };
    }
    if (index === 1) {
      return {
        y: centerY,
        scale: centerScale,
        opacity: centerOpacity,
      };
    }
    return {
      x: rightX,
      scale: rightScale,
      opacity: rightOpacity,
    };
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        width: "100%",
        padding: "100px 24px 120px",
        backgroundColor: "var(--canvas-bg)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "56px",
        }}
      >
        {/* Header */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
            y: headerY,
            opacity: headerOpacity,
          }}
        >
          <div className="badge-pill">Simple Steps</div>
          <AnimatedHeading
            as="h2"
            className="font-display"
            text="We keep things clear and effective"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
            }}
          />
        </motion.div>

        {/* 3 Step Cards Grid with scroll animation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
          className="process-grid"
        >
          {processSteps.map((step, index) => {
            const motionStyle = getMotionStyle(index);

            return (
              <motion.div
                key={step.step}
                style={{
                  ...motionStyle,
                  willChange: "transform, opacity",
                  transformOrigin:
                    index === 0
                      ? "right center"
                      : index === 1
                      ? "center bottom"
                      : "left center",
                  height: "100%",
                }}
              >
                <div
                  className="card-base"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "52px 32px 56px",
                    gap: "20px",
                    position: "relative",
                    height: "100%",
                    borderRadius: "28px",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid rgba(30, 30, 30, 0.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(0, 0, 0, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0, 0, 0, 0.02)";
                  }}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "20px",
                      backgroundColor: "rgba(255, 255, 255, 0.85)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                      border: "1px solid rgba(30, 30, 30, 0.04)",
                      marginBottom: "6px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.icon}
                      alt={step.title}
                      style={{
                        width: "36px",
                        height: "36px",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: "var(--text-dark)",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "15px",
                      lineHeight: 1.55,
                      maxWidth: "290px",
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 820px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
