"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Play, Volume2, ArrowRight } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";

// Rich hero card media collections arranged to match the reference site & screenshot:
// Col 0: Leftmost, starts LOWEST (plague doctor / creator hat peeking at bottom)
// Col 1: Second from left (church spire "How should brands think ?")
// Col 2: Third from left (woman in pink circle "Instagram")
// Col 3: Rightmost, starts HIGHEST (man in blue suit / peach sky "This is my music b*tch")
const heroColumnsData = [
  // Column 0 (Leftmost, starts LOWEST)
  [
    {
      id: "h0-1",
      title: "Thinking like a Creator",
      image: "https://framerusercontent.com/images/Uj6tg5NjSfTof0vElpIFWsmXV7Q.jpeg?width=633&height=802",
      hasPlay: true,
    },
    {
      id: "h0-2",
      title: "NKHSE PARTY 2026",
      subtitle: "Thinking like a Creator",
      image: "https://framerusercontent.com/images/kGOKcP6XR1oBp0FGwEyTIZz7m0.jpeg?width=636&height=807",
      hasPlay: true,
      hasControls: true,
    },
    {
      id: "h0-3",
      title: "what makes content actually work?",
      badge: "Video",
      image: "https://framerusercontent.com/images/pxCBafcrXHV6oillWst5ZcDLE.jpeg?width=633&height=802",
      hasPlay: true,
    },
    {
      id: "h0-4",
      title: "What Drives True Human Influence",
      image: "https://framerusercontent.com/images/IivirAWxo8LDF3YCVScEr8R7Ec.jpeg?width=633&height=802",
      hasPlay: true,
    },
  ],
  // Column 1 (Second from left)
  [
    {
      id: "h1-1",
      title: "How should brands think ?",
      image: "https://framerusercontent.com/images/69gqr1LTuwdx9iand9gGgMvr0.jpeg?width=633&height=802",
      hasPlay: true,
    },
    {
      id: "h1-2",
      title: "most interesting dishes",
      image: "https://framerusercontent.com/images/scclMWDH1UjoURejCfgjeVsSNLw.jpeg?width=636&height=807",
      hasPlay: true,
    },
    {
      id: "h1-3",
      title: "bag guide 101",
      subtitle: "How to choose the right bag?",
      image: "https://framerusercontent.com/images/sfmTOIwvGnHSwRnGS5D78QGhM.jpeg?width=633&height=802",
    },
    {
      id: "h1-4",
      title: "Tips for affordable bungalows",
      image: "https://framerusercontent.com/images/Xqz7r62LOGsOqQdQxGCHdpYr4.jpeg?width=636&height=807",
    },
  ],
  // Column 2 (Third from left / second from right)
  [
    {
      id: "h2-1",
      title: "Instagram",
      isScript: true,
      image: "https://framerusercontent.com/images/MADkUHoQJD1TdGtrLfVZC0JFNg.jpeg?width=633&height=758",
      hasPlay: true,
    },
    {
      id: "h2-2",
      title: "Practical breakfast Recipe",
      image: "https://framerusercontent.com/images/DQYDxzRLJXgijGSGl6MLRHb8.jpeg?width=633&height=802",
      hasPlay: true,
    },
    {
      id: "h2-3",
      title: "Easy Shadow Technique In 1 Min",
      image: "https://framerusercontent.com/images/8ziPvLMmqNE3eak0qPXO1V0.jpeg?width=634&height=804",
      hasPlay: true,
    },
    {
      id: "h2-4",
      title: "What Drives True Human Influence",
      image: "https://framerusercontent.com/images/IivirAWxo8LDF3YCVScEr8R7Ec.jpeg?width=633&height=802",
    },
  ],
  // Column 3 (Rightmost, starts HIGHEST)
  [
    {
      id: "h3-1",
      title: "This is my music b*tch",
      subtitle: "MC flag · Block3 and LVBL C5 ARMA",
      image: "https://framerusercontent.com/images/nWxvFu308A3B5u38SHPmDaqjnM.jpeg?width=633&height=802",
      hasPlay: true,
    },
    {
      id: "h3-2",
      title: "Enjoying a boat trip in the Arctic",
      subtitle: "Welcome to Zonguldak!",
      image: "https://framerusercontent.com/images/Xqz7r62LOGsOqQdQxGCHdpYr4.jpeg?width=636&height=807",
      hasControls: true,
      hasPlay: true,
    },
    {
      id: "h3-3",
      title: "This - was - made with AI",
      image: "https://framerusercontent.com/images/OZdcomRqZfrRz2VcSNOTUb1wOm4.jpeg?width=633&height=802",
      hasControls: true,
    },
    {
      id: "h3-4",
      title: "AI Studio Preview",
      subtitle: "This - was - made with AI",
      image: "https://framerusercontent.com/images/scclMWDH1UjoURejCfgjeVsSNLw.jpeg?width=636&height=807",
    },
  ],
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive screen mode detection:
  // Desktop: 4 columns
  // Tablet: 3 columns
  // Mobile: 2 columns
  const [screenMode, setScreenMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        setScreenMode("desktop");
      } else if (w >= 640) {
        setScreenMode("tablet");
      } else {
        setScreenMode("mobile");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numCols = screenMode === "desktop" ? 4 : screenMode === "tablet" ? 3 : 2;
  // Pick the appropriate columns:
  // Desktop: all 4 [0, 1, 2, 3]
  // Tablet: 3 columns [1, 2, 3]
  // Mobile: 2 columns [2, 3]
  const visibleColumns =
    screenMode === "desktop"
      ? heroColumnsData
      : screenMode === "tablet"
      ? heroColumnsData.slice(1, 4)
      : heroColumnsData.slice(2, 4);

  // Scroll driver for Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Physics spring for buttery smooth interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  // Aligns columns completely by 70% of the hero section's scroll range
  const alignProgress = useTransform(smoothProgress, [0, 0.7], [0, 1], {
    clamp: true,
  });

  // Left typography subtle upward parallax
  const yText = useTransform(smoothProgress, [0, 0.6], [0, -35], { clamp: true });
  const opacityText = useTransform(smoothProgress, [0, 0.55], [1, 0.7], { clamp: true });

  // Dimension & staircase parameters:
  // Reduced card width by further 10% (83% container width) and card height by 15% (285px tall on desktop)
  const cardHeight = screenMode === "desktop" ? 285 : screenMode === "tablet" ? 240 : 188;
  const gap = screenMode === "mobile" ? 12 : 16;
  const step = screenMode === "desktop" ? 110 : screenMode === "tablet" ? 75 : 55;
  const targetY = screenMode === "desktop" ? 780 : (numCols - 1) * step + 80;

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        width: "100%",
        paddingTop: screenMode === "desktop" ? "36px" : "120px",
        paddingBottom: "100px",
        paddingLeft: 0,
        paddingRight: 0,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--canvas-bg)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1680px",
          margin: "0 auto",
          position: "relative",
          paddingLeft: screenMode === "desktop" ? "40px" : "20px",
          paddingRight: screenMode === "desktop" ? "40px" : "20px",
        }}
      >
        {/* Left Column: Typography & Action Button (Shifted down slightly for healthy navbar whitespace, ~10% bigger) */}
        <motion.div
          style={{
            position: screenMode === "desktop" ? "absolute" : "relative",
            top: screenMode === "desktop" ? "95px" : "0", // Healthy whitespace below navbar
            left: screenMode === "desktop" ? "68px" : "0",
            zIndex: 10,
            maxWidth: "640px",
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            y: yText,
            opacity: opacityText,
            pointerEvents: "auto",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge Pill with orange dot */}
          <Link
            href="#blog"
            className="badge-pill-orange"
            style={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              width: "fit-content",
              padding: "8px 20px",
            }}
          >
            <span className="pulse-dot" />
            <span style={{ fontSize: "15.5px", fontWeight: 500 }}>
              See 2026 social media trends
            </span>
            <ArrowRight size={15} style={{ marginLeft: "2px" }} />
          </Link>

          {/* Rapid Letter-by-Letter Reveal Heading in authentic Magra 700 (~10% bigger) */}
          <AnimatedHeading
            as="h1"
            className="font-display"
            text={"Scale your brand\non social media"}
            style={{
              fontSize:
                screenMode === "desktop"
                  ? "clamp(66px, 6.4vw, 96px)"
                  : screenMode === "tablet"
                  ? "clamp(56px, 7vw, 74px)"
                  : "clamp(42px, 11vw, 52px)",
              fontWeight: 700,
              lineHeight: 0.94,
              color: "var(--text-dark)",
              letterSpacing: "-0.04em",
              margin: 0,
              maxWidth: "640px",
            }}
            stagger={0.016}
          />

          {/* Subtitle (~10% bigger) */}
          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.48,
              color: "var(--text-secondary)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            High performing social media strategies that grow your audience and drive real business results.
          </p>

          {/* CTA Button Group */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingTop: "6px",
            }}
          >
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                width: "fit-content",
                padding: "19px 44px",
                fontSize: "17.5px",
                borderRadius: "9999px",
              }}
            >
              Start for free
            </Link>
            <span
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                letterSpacing: "-0.01em",
              }}
            >
              No contracts. Just growth.
            </span>
          </div>
        </motion.div>

        {/* Dynamic Scroll-Linked Image Grid (Width reduced by 10%, height by 15%, shifted upwards) */}
        <div
          className="hero-reels-container"
          style={{
            position: "relative",
            height: screenMode === "desktop" ? "1320px" : screenMode === "tablet" ? "950px" : "700px",
            marginTop: screenMode === "desktop" ? "0px" : "40px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 1fr)`,
            gap: `${gap}px`,
            width: screenMode === "desktop" ? "83%" : "100%",
            margin: screenMode === "desktop" ? "0 auto" : "0",
            borderRadius: "28px",
          }}
        >
          {/* Top Fade Gradient Mask */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "110px",
              background:
                "linear-gradient(to bottom, var(--canvas-bg) 25%, rgba(242, 239, 233, 0))",
              zIndex: 5,
              pointerEvents: "none",
            }}
          />

          {/* Bottom Fade Gradient Mask */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "110px",
              background:
                "linear-gradient(to top, var(--canvas-bg) 25%, rgba(242, 239, 233, 0))",
              zIndex: 5,
              pointerEvents: "none",
            }}
          />

          {/* Render Columns with Dynamic Staircase Movement */}
          {visibleColumns.map((cards, colIndex) => (
            <StaircaseColumn
              key={`col-${screenMode}-${colIndex}`}
              cards={cards}
              colIndex={colIndex}
              numCols={numCols}
              alignProgress={alignProgress}
              step={step}
              targetY={targetY}
              cardHeight={cardHeight}
              gap={gap}
              screenMode={screenMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual image column moving downward according to staircase physics
function StaircaseColumn({
  cards,
  colIndex,
  numCols,
  alignProgress,
  step,
  targetY,
  cardHeight,
  gap,
  screenMode,
}: {
  cards: any[];
  colIndex: number;
  numCols: number;
  alignProgress: MotionValue<number>;
  step: number;
  targetY: number;
  cardHeight: number;
  gap: number;
  screenMode?: string;
}) {
  // Staircase arrangement:
  // colIndex = numCols - 1 (rightmost): stairIndex = 0 (HIGHEST start, shifted upwards to ~325px)
  // colIndex = 0 (leftmost): stairIndex = numCols - 1 (LOWEST start)
  const stairIndex = numCols - 1 - colIndex;
  const startY = screenMode === "desktop" ? stairIndex * step + 325 : stairIndex * step + 15;

  // Downward movement on scroll:
  // Col (rightmost): travels from startY to targetY (largest downward distance, fastest)
  // Col (leftmost): travels from startY to targetY (smallest downward distance, slowest)
  // All finish at the exact same targetY position, aligning into a clean horizontal grid!
  const y = useTransform(alignProgress, [0, 1], [startY, targetY], { clamp: true });

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        overflow: "visible",
      }}
    >
      <motion.div
        style={{
          y,
          willChange: "transform",
          display: "flex",
          flexDirection: "column",
          gap: `${gap}px`,
        }}
      >
        {cards.map((item, idx) => (
          <HeroCard key={`${item.id}-${idx}`} item={item} height={cardHeight} />
        ))}
      </motion.div>
    </div>
  );
}

function HeroCard({ item, height }: { item: any; height: number }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        height: `${height}px`,
        backgroundColor: "#1e1e1e",
        boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        flexShrink: 0,
      }}
    >
      {item.video ? (
        <video
          src={item.video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={item.title || "Social reel"}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}

      {/* Subtle Dark Vignette for Typography Readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Play Badge */}
      {item.hasPlay && (
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
          }}
        >
          <Play size={14} fill="#ffffff" style={{ marginLeft: "2px" }} />
        </div>
      )}

      {/* Sound / Volume Controls Overlay */}
      {item.hasControls && (
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
          }}
        >
          <Volume2 size={14} />
        </div>
      )}

      {/* Bottom Content / Title */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          color: "#ffffff",
          pointerEvents: "none",
        }}
      >
        {item.badge && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--brand-orange)",
            }}
          >
            {item.badge}
          </span>
        )}
        <h4
          style={{
            margin: 0,
            fontSize: item.isScript ? "28px" : "17px",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#ffffff",
            fontFamily: item.isScript ? "cursive, sans-serif" : "var(--font-body)",
          }}
        >
          {item.title}
        </h4>
        {item.subtitle && (
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.75)",
              lineHeight: 1.3,
            }}
          >
            {item.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
