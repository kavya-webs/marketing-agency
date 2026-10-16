"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Services() {
  const [isRotating, setIsRotating] = useState(true);

  // Exact 8 images from Framer reference 3D Carousel (Image 2)
  const carousel3DImages = [
    { id: 1, angle: 0, src: "https://framerusercontent.com/images/cnbzScs0RIvyvY0CWqOSwqpXTc.png?width=154&height=218" },
    { id: 2, angle: 45, src: "https://framerusercontent.com/images/WaEdC2iRBTdq5i9We1UFGpwJnw.png?width=154&height=218" },
    { id: 3, angle: 90, src: "https://framerusercontent.com/images/mGn73Itej7pk3pOHKjWctOlo.png?width=154&height=218" },
    { id: 4, angle: 135, src: "https://framerusercontent.com/images/mJidfmxIKQxrUF9W0J9JoX91Sog.png?width=154&height=218" },
    { id: 5, angle: 180, src: "https://framerusercontent.com/images/nNqiiVxVMscq88dRAd1aufVaqc.png?width=154&height=218" },
    { id: 6, angle: 225, src: "https://framerusercontent.com/images/z74xRx8wXp5ohlELYxoqT3Y8aqc.png?width=154&height=218" },
    { id: 7, angle: 270, src: "https://framerusercontent.com/images/7c8SgDopN73TqYwB6SsQa4vnCAI.png?width=154&height=218" },
    { id: 8, angle: 315, src: "https://framerusercontent.com/images/DrxdwzJTSLcvbhy78xfQwq7JXM.png?width=154&height=218" },
  ];

  // Authentic original social icons from Framer with chrome gradients
  const socialIconsList = [
    { name: "TikTok", component: <OriginalTikTokIcon /> },
    { name: "Instagram", component: <OriginalInstagramIcon /> },
    { name: "Threads", component: <OriginalThreadsIcon /> },
    { name: "YouTube", component: <OriginalYouTubeIcon /> },
    { name: "X", component: <OriginalXIcon /> },
    { name: "Facebook", component: <OriginalFacebookIcon /> },
  ];

  const row1Icons = [...socialIconsList, ...socialIconsList, ...socialIconsList];
  const row2Icons = [...socialIconsList.slice(3), ...socialIconsList, ...socialIconsList, ...socialIconsList.slice(0, 3)];
  const row3Icons = [...socialIconsList.slice(1), ...socialIconsList, ...socialIconsList, ...socialIconsList.slice(0, 1)];

  return (
    <section
      id="services"
      style={{
        width: "100%",
        padding: "110px 32px",
        backgroundColor: "var(--canvas-bg)",
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
        {/* Section Header matching original */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <div className="badge-pill" style={{ fontSize: "14px", padding: "6px 18px" }}>
            Services
          </div>
          <AnimatedHeading
            as="h2"
            className="font-display"
            text="How We Drive Your Growth"
            style={{
              fontSize: "clamp(38px, 4.8vw, 62px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
            }}
          />
        </div>

        {/* Row 1: Content Creation (3D Rotating Cylinder Carousel) & Social Media Strategy */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2.15fr)",
            gap: "28px",
          }}
          className="services-grid-2"
        >
          {/* Card 1: Content Creation with 3D Rotating Cylinder (Image 2) */}
          <motion.div
            className="card-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "480px",
              overflow: "hidden",
              position: "relative",
              padding: "40px",
              backgroundColor: "var(--card-bg)",
              borderRadius: "28px",
            }}
            onMouseEnter={() => setIsRotating(false)}
            onMouseLeave={() => setIsRotating(true)}
          >
            {/* 3D Rotating Object Viewport */}
            <div
              style={{
                height: "270px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1200px",
                position: "relative",
                overflow: "visible",
                mask: "linear-gradient(26deg, rgba(0,0,0,1) 48%, rgba(0,0,0,0.1) 90%)",
                WebkitMask: "linear-gradient(26deg, rgba(0,0,0,1) 48%, rgba(0,0,0,0.1) 90%)",
              }}
            >
              {/* Rotating 3D Object Cylinder */}
              <motion.div
                animate={{
                  rotateY: isRotating ? [0, 360] : undefined,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: "160px",
                  height: "220px",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {carousel3DImages.map((card) => {
                  return (
                    <div
                      key={card.id}
                      style={{
                        position: "absolute",
                        width: "140px",
                        height: "196px",
                        transform: `rotateY(${card.angle}deg) translateZ(92.5px)`,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "visible",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "20px",
                          overflow: "hidden",
                          transform: "rotateY(45deg)",
                          boxShadow: "0 14px 32px rgba(0, 0, 0, 0.16)",
                          border: "1px solid rgba(255, 255, 255, 0.6)",
                          backgroundColor: "#1e1e1e",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={card.src}
                          alt={`Creative 3D asset ${card.id}`}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Typography */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  letterSpacing: "-0.03em",
                }}
              >
                Content Creation
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.45 }}>
                High-impact visuals and short videos built to stop the scroll instantly.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Social Media Strategy with Authentic Monochromatic Chrome Icons (Image 3) */}
          <motion.div
            className="card-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "480px",
              overflow: "hidden",
              padding: "40px",
              backgroundColor: "var(--card-bg)",
              borderRadius: "28px",
            }}
          >
            {/* Visual: Scrolling Monochromatic Platform Icons */}
            <div
              style={{
                height: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "24px",
                position: "relative",
                overflow: "hidden",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              {/* Row 1 Left */}
              <div className="animate-ticker-left" style={{ gap: "40px" }}>
                {row1Icons.map((item, i) => (
                  <div key={`r1-${i}`} className="social-badge-icon">
                    {item.component}
                  </div>
                ))}
              </div>

              {/* Row 2 Right */}
              <div className="animate-ticker-right" style={{ gap: "44px" }}>
                {row2Icons.map((item, i) => (
                  <div key={`r2-${i}`} className="social-badge-icon">
                    {item.component}
                  </div>
                ))}
              </div>

              {/* Row 3 Left */}
              <div className="animate-ticker-left" style={{ gap: "40px" }}>
                {row3Icons.map((item, i) => (
                  <div key={`r3-${i}`} className="social-badge-icon">
                    {item.component}
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  letterSpacing: "-0.03em",
                }}
              >
                Social Media Strategy
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.45 }}>
                Platform specific growth plans built around trends, audience behavior and performance data.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Performance Marketing & Analytics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px",
          }}
          className="services-grid-2"
        >
          {/* Card 3: Performance Marketing (Bars) */}
          <motion.div
            className="card-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "450px",
              overflow: "hidden",
              padding: "40px",
              backgroundColor: "var(--card-bg)",
              borderRadius: "28px",
            }}
          >
            <div
              style={{
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "46px",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  99%
                </div>
                <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "6px" }}>
                  Audience retention rate
                </div>
              </div>

              {/* Animated Dual-Layer Monthly Bars */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  height: "150px",
                  gap: "14px",
                  paddingBottom: "10px",
                }}
              >
                {[
                  { month: "Jan", height: "45%" },
                  { month: "Feb", height: "70%" },
                  { month: "Mar", height: "35%" },
                  { month: "Apr", height: "85%" },
                  { month: "May", height: "100%" },
                  { month: "Jun", height: "78%" },
                  { month: "Jul", height: "92%" },
                ].map((bar, i) => (
                  <div
                    key={bar.month}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      height: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* Background Track Pill + Orange Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: "110px",
                        backgroundColor: "var(--canvas-bg)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "3px",
                      }}
                    >
                      <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: bar.height }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          width: "100%",
                          backgroundColor: "var(--brand-orange, #ff5c00)",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  letterSpacing: "-0.03em",
                }}
              >
                Performance Marketing
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.45 }}>
                Paid campaigns optimized for conversions, reach and measurable return on investment.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Analytics & Insights */}
          <motion.div
            className="card-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "450px",
              overflow: "hidden",
              padding: "40px",
              backgroundColor: "var(--card-bg)",
              borderRadius: "28px",
            }}
          >
            <div
              style={{
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 420 180"
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "visible",
                }}
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff5c00" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ff5c00" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="40" x2="420" y2="40" stroke="rgba(30, 30, 30, 0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="95" x2="420" y2="95" stroke="rgba(30, 30, 30, 0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="150" x2="420" y2="150" stroke="rgba(30, 30, 30, 0.06)" />

                {/* Gradient Fill under Path */}
                <motion.path
                  d="M 10 135 L 50 50 L 95 55 L 145 110 L 195 150 L 235 125 L 260 138 L 320 38 L 335 70 L 355 40 L 390 100 L 415 80 L 415 150 L 10 150 Z"
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                />

                {/* Main Curve */}
                <motion.path
                  d="M 10 135 L 50 50 L 95 55 L 145 110 L 195 150 L 235 125 L 260 138 L 320 38 L 335 70 L 355 40 L 390 100 L 415 80"
                  fill="none"
                  stroke="#ff5c00"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Pulsing Peak Dots */}
                {[
                  { cx: 50, cy: 50 },
                  { cx: 320, cy: 38 },
                  { cx: 355, cy: 40 },
                ].map((pt, idx) => (
                  <motion.circle
                    key={idx}
                    cx={pt.cx}
                    cy={pt.cy}
                    r="4.5"
                    fill="#ff5c00"
                    stroke="#ffffff"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + idx * 0.15, duration: 0.4 }}
                  />
                ))}
              </svg>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <h3
                className="font-display"
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  letterSpacing: "-0.03em",
                }}
              >
                Analytics &amp; Insights
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.45 }}>
                Clear reporting systems that turn numbers into decisions and opportunities into growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Videos on both sides + Animated Conic Gradient in Center (Image 4) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr 1fr",
            gap: "28px",
            alignItems: "stretch",
          }}
          className="services-row3-grid"
        >
          {/* Left: Video 1 (Close-up beauty reel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              minHeight: "400px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              backgroundColor: "#1e1e1e",
              position: "relative",
            }}
          >
            <video
              src="https://framerusercontent.com/assets/aCr0sZ8eom2A8XOl1iUCX8Ezzq8.mp4"
              poster="https://framerusercontent.com/images/tIl3Mgk9jEMQ2SUMssK90PATc.jpeg"
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
          </motion.div>

          {/* Middle: Trend & Viral Research with Authentic Rotating Conic Gradient (Image 4) */}
          <motion.div
            className="card-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "48px 36px",
              overflow: "hidden",
              minHeight: "400px",
              height: "100%",
              position: "relative",
              textAlign: "center",
              borderRadius: "28px",
              isolation: "isolate",
            }}
          >
            {/* Spinning Conic Gradient Background from Framer */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-220px",
                background:
                  "conic-gradient(from 0deg at 50% 50%, #ff5c00 0deg, #f2efe9 180deg, #ff5c00 360deg)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Inner Content overlay with frosted pill styling */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "18px",
                maxWidth: "460px",
              }}
            >
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(34px, 4.2vw, 46px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: "#ffffff",
                  textShadow: "0 2px 14px rgba(0,0,0,0.35)",
                  margin: 0,
                }}
              >
                Trend &amp; Viral Research
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.5,
                  color: "#1e1e1e",
                  fontWeight: 500,
                  margin: 0,
                  backgroundColor: "rgba(242, 239, 233, 0.88)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  padding: "12px 22px",
                  borderRadius: "18px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                We track emerging trends before they peak and turn them into strategic opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right: Video 2 (Streetwear model motion reel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              minHeight: "400px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              backgroundColor: "#1e1e1e",
              position: "relative",
            }}
          >
            <video
              src="https://framerusercontent.com/assets/OFGaxmPgfb8FQAws0S32iiKZY4.mp4"
              poster="https://framerusercontent.com/images/69gqr1LTuwdx9iand9gGgMvr0.jpeg"
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
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .social-badge-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background-color: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .social-badge-icon:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }
        @media (max-width: 900px) {
          .services-grid-2 {
            grid-template-columns: 1fr !important;
          }
          .services-row3-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// --------------------------------------------------------------------------
// Authentic Framer Vector Icons with Metallic Chrome Gradients (from page.html)
// --------------------------------------------------------------------------

function OriginalFacebookIcon() {
  return (
    <svg width="24" height="28" viewBox="0 0 37 42" fill="none">
      <defs>
        <linearGradient id="fb-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#8c8c8c" />
        </linearGradient>
      </defs>
      <path
        d="M 37 18.273 C 36.879 8.462 29.12 0.451 19.317 0.018 C 9.515 -0.415 1.08 6.881 0.095 16.643 C -0.89 26.406 5.918 35.239 15.609 36.773 L 15.609 23.661 L 10.984 23.661 L 10.984 18.273 L 15.609 18.273 L 15.609 14.18 C 15.392 12.253 16.041 10.329 17.381 8.928 C 18.72 7.526 20.612 6.79 22.547 6.918 C 23.934 6.937 25.317 7.062 26.686 7.288 L 26.686 11.913 L 24.373 11.913 C 23.566 11.812 22.755 12.082 22.171 12.649 C 21.586 13.215 21.291 14.017 21.367 14.827 L 21.367 18.319 L 26.501 18.319 L 25.668 23.707 L 21.39 23.707 L 21.39 36.657 C 30.422 35.229 37.055 27.416 37 18.273 Z"
        fill="url(#fb-grad)"
      />
    </svg>
  );
}

function OriginalInstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 42 42" fill="none">
      <defs>
        <linearGradient id="ig-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#8c8c8c" />
        </linearGradient>
      </defs>
      <path
        d="M 12.303 0.147 C 10.068 0.252 8.543 0.609 7.209 1.133 C 5.828 1.671 4.658 2.393 3.494 3.561 C 2.329 4.73 1.612 5.901 1.078 7.284 C 0.561 8.62 0.211 10.148 0.112 12.383 C 0.013 14.619 -0.008 15.337 0.003 21.04 C 0.013 26.743 0.039 27.458 0.147 29.698 C 0.254 31.932 0.609 33.458 1.133 34.792 C 1.672 36.172 2.393 37.342 3.562 38.507 C 4.731 39.672 5.901 40.387 7.287 40.922 C 8.623 41.438 10.15 41.79 12.386 41.888 C 14.621 41.986 15.34 42.008 21.041 41.997 C 26.743 41.987 27.46 41.961 29.7 41.855 C 31.94 41.749 33.458 41.391 34.792 40.869 C 36.173 40.329 37.343 39.609 38.507 38.44 C 39.671 37.271 40.388 36.099 40.921 34.716 C 41.439 33.38 41.79 31.852 41.887 29.619 C 41.985 27.377 42.008 26.662 41.998 20.96 C 41.987 15.258 41.961 14.543 41.855 12.303 C 41.748 10.064 41.393 8.543 40.869 7.208 C 40.329 5.827 39.609 4.659 38.441 3.493 C 37.272 2.328 36.099 1.611 34.716 1.079 C 33.38 0.562 31.853 0.209 29.618 0.113 C 27.383 0.016 26.663 -0.009 20.96 0.002 C 15.257 0.013 14.543 0.038 12.303 0.147 M 12.548 38.11 C 10.501 38.021 9.389 37.681 8.648 37.396 C 7.667 37.018 6.968 36.561 6.23 35.83 C 5.491 35.099 5.038 34.397 4.655 33.418 C 4.367 32.677 4.02 31.567 3.925 29.519 C 3.82 27.306 3.799 26.642 3.786 21.035 C 3.774 15.429 3.796 14.765 3.893 12.551 C 3.98 10.505 4.322 9.392 4.607 8.652 C 4.985 7.67 5.44 6.972 6.173 6.234 C 6.906 5.496 7.605 5.042 8.585 4.659 C 9.325 4.37 10.435 4.026 12.482 3.929 C 14.697 3.824 15.36 3.803 20.966 3.79 C 26.572 3.778 27.237 3.799 29.453 3.897 C 31.499 3.986 32.612 4.325 33.352 4.611 C 34.333 4.989 35.032 5.443 35.77 6.177 C 36.508 6.911 36.963 7.608 37.346 8.59 C 37.635 9.328 37.978 10.438 38.075 12.486 C 38.181 14.7 38.204 15.364 38.215 20.97 C 38.225 26.575 38.205 27.241 38.108 29.454 C 38.018 31.501 37.679 32.613 37.394 33.355 C 37.016 34.336 36.56 35.035 35.827 35.773 C 35.093 36.51 34.395 36.965 33.415 37.348 C 32.676 37.636 31.564 37.981 29.519 38.078 C 27.304 38.182 26.64 38.204 21.033 38.216 C 15.425 38.228 14.763 38.206 12.549 38.11 M 29.668 9.776 C 29.67 10.796 30.285 11.713 31.228 12.102 C 32.17 12.49 33.254 12.273 33.973 11.551 C 34.693 10.829 34.906 9.744 34.514 8.803 C 34.122 7.862 33.202 7.25 32.183 7.252 C 30.791 7.255 29.666 8.385 29.668 9.776 M 10.217 21.021 C 10.229 26.977 15.066 31.794 21.02 31.782 C 26.975 31.771 31.795 26.935 31.784 20.979 C 31.773 15.023 26.934 10.205 20.979 10.217 C 15.024 10.229 10.206 15.066 10.217 21.021 M 14 21.013 C 13.992 17.147 17.12 14.007 20.986 13.999 C 24.852 13.992 27.993 17.12 28 20.986 C 28.008 24.852 24.88 27.992 21.014 28 C 19.157 28.004 17.375 27.27 16.06 25.959 C 14.744 24.649 14.003 22.87 14 21.013"
        fill="url(#ig-grad)"
      />
    </svg>
  );
}

function OriginalTikTokIcon() {
  return (
    <svg width="24" height="28" viewBox="0 0 37 42" fill="none">
      <defs>
        <linearGradient id="tt-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#8c8c8c" />
        </linearGradient>
      </defs>
      <path
        d="M 31.172 8.428 C 28.323 6.569 26.597 3.404 26.597 0 L 19.369 0 L 19.355 28.962 C 19.228 32.309 16.407 34.927 13.06 34.794 C 9.712 34.667 7.095 31.846 7.228 28.499 C 7.355 25.236 10.035 22.66 13.298 22.66 C 13.909 22.66 14.513 22.758 15.088 22.941 L 15.088 15.558 C 14.491 15.474 13.895 15.432 13.298 15.425 C 5.965 15.425 0 21.39 0 28.723 C 0.014 36.064 5.958 42.015 13.306 42.022 C 20.639 42.022 26.604 36.057 26.604 28.723 L 26.604 14.042 C 29.53 16.148 33.046 17.285 36.653 17.278 L 36.653 10.049 C 34.702 10.056 32.801 9.488 31.172 8.428 Z"
        fill="url(#tt-grad)"
      />
    </svg>
  );
}

function OriginalYouTubeIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 60 42" fill="none">
      <defs>
        <linearGradient id="yt-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#8c8c8c" />
        </linearGradient>
      </defs>
      <path
        d="M 23.715 29.87 L 23.715 12.139 L 39.299 21.005 Z M 58.38 6.56 C 57.694 3.978 55.673 1.944 53.108 1.254 C 48.458 0 29.813 0 29.813 0 C 29.813 0 11.167 0 6.517 1.254 C 3.952 1.944 1.932 3.978 1.246 6.56 C 0 11.24 0 21.005 0 21.005 C 0 21.005 0 30.769 1.246 35.449 C 1.932 38.031 3.952 40.065 6.517 40.755 C 11.167 42.009 29.813 42.009 29.813 42.009 C 29.813 42.009 48.458 42.009 53.108 40.755 C 55.673 40.065 57.694 38.031 58.38 35.449 C 59.626 30.769 59.626 21.005 59.626 21.005 C 59.626 21.005 59.626 11.24 58.38 6.56"
        fill="url(#yt-grad)"
      />
    </svg>
  );
}

function OriginalXIcon() {
  return (
    <svg width="24" height="22" viewBox="0 0 46 42" fill="none">
      <defs>
        <linearGradient id="x-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#8c8c8c" />
        </linearGradient>
      </defs>
      <path
        d="M 36.522 0 L 43.602 0 L 28.137 17.795 L 46.398 41.925 L 32.05 41.925 L 20.87 27.298 L 8.012 41.925 L 0.932 41.925 L 17.516 22.919 L 0 0 L 14.72 0 L 24.876 13.416 Z M 34.006 37.64 L 37.919 37.64 L 12.578 4.006 L 8.292 4.006 Z"
        fill="url(#x-grad)"
      />
    </svg>
  );
}

function OriginalThreadsIcon() {
  return (
    <svg width="24" height="28" viewBox="0 0 37 42" fill="none">
      <defs>
        <linearGradient id="th-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#8c8c8c" />
        </linearGradient>
      </defs>
      <path
        d="M 13.938 15.791 C 13.231 15.321 10.883 13.687 10.883 13.687 C 12.863 10.848 15.476 9.743 19.086 9.743 C 21.64 9.743 23.808 10.604 25.356 12.233 C 26.905 13.863 27.789 16.194 27.99 19.174 C 28.848 19.534 29.641 19.958 30.361 20.443 C 33.263 22.4 34.862 25.325 34.862 28.679 C 34.862 35.808 29.031 42 18.477 42 C 9.415 42 0 36.717 0 20.984 C 0 5.342 9.12 0 18.451 0 C 22.761 0 32.869 0.638 36.67 13.218 L 33.105 14.145 C 30.166 5.182 24.004 3.755 18.354 3.755 C 9.015 3.755 3.732 9.455 3.732 21.581 C 3.732 32.454 9.637 38.23 18.478 38.23 C 25.752 38.23 31.175 34.442 31.175 28.895 C 31.175 25.121 28.011 23.314 27.849 23.314 C 27.231 26.552 25.575 32 18.303 32 C 14.066 32 10.413 29.067 10.413 25.224 C 10.413 19.736 15.607 17.749 19.71 17.749 C 21.246 17.749 23.1 17.853 24.065 18.05 C 24.065 16.377 22.653 13.515 19.087 13.515 C 15.817 13.514 14.988 14.577 13.938 15.791 Z M 20.211 21.498 C 14.867 21.498 14.176 23.781 14.176 25.215 C 14.176 27.519 16.907 28.283 18.365 28.283 C 21.036 28.283 23.781 27.541 24.213 21.92 C 22.858 21.616 21.848 21.498 20.211 21.498 Z"
        fill="url(#th-grad)"
      />
    </svg>
  );
}
