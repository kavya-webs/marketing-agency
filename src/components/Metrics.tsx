"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { impactData } from "@/data/trendoraData";
import AnimatedHeading from "@/components/AnimatedHeading";

// ---------------------------------------------------------------------------
// 6 Authentic Vector Icons (Orange #ff5c00) from user recording
// ---------------------------------------------------------------------------

function SnapchatIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
    </svg>
  );
}

function YouTubeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 60 42" fill="none">
      <path
        d="M 23.715 29.87 L 23.715 12.139 L 39.299 21.005 Z M 58.38 6.56 C 57.694 3.978 55.673 1.944 53.108 1.254 C 48.458 0 29.813 0 29.813 0 C 29.813 0 11.167 0 6.517 1.254 C 3.952 1.944 1.932 3.978 1.246 6.56 C 0 11.24 0 21.005 0 21.005 C 0 21.005 0 30.769 1.246 35.449 C 1.932 38.031 3.952 40.065 6.517 40.755 C 11.167 42.009 29.813 42.009 29.813 42.009 C 29.813 42.009 48.458 42.009 53.108 40.755 C 55.673 40.065 57.694 38.031 58.38 35.449 C 59.626 30.769 59.626 21.005 59.626 21.005 C 59.626 21.005 59.626 11.24 58.38 6.56"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 37 42" fill="none">
      <path
        d="M 37 18.273 C 36.879 8.462 29.12 0.451 19.317 0.018 C 9.515 -0.415 1.08 6.881 0.095 16.643 C -0.89 26.406 5.918 35.239 15.609 36.773 L 15.609 23.661 L 10.984 23.661 L 10.984 18.273 L 15.609 18.273 L 15.609 14.18 C 15.392 12.253 16.041 10.329 17.381 8.928 C 18.72 7.526 20.612 6.79 22.547 6.918 C 23.934 6.937 25.317 7.062 26.686 7.288 L 26.686 11.913 L 24.373 11.913 C 23.566 11.812 22.755 12.082 22.171 12.649 C 21.586 13.215 21.291 14.017 21.367 14.827 L 21.367 18.319 L 26.501 18.319 L 25.668 23.707 L 21.39 23.707 L 21.39 36.657 C 30.422 35.229 37.055 27.416 37 18.273 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.91} viewBox="0 0 46 42" fill="none">
      <path
        d="M 36.522 0 L 43.602 0 L 28.137 17.795 L 46.398 41.925 L 32.05 41.925 L 20.87 27.298 L 8.012 41.925 L 0.932 41.925 L 17.516 22.919 L 0 0 L 14.72 0 L 24.876 13.416 Z M 34.006 37.64 L 37.919 37.64 L 12.578 4.006 L 8.292 4.006 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ThreadsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 37 42" fill="none">
      <path
        d="M 13.938 15.791 C 13.231 15.321 10.883 13.687 10.883 13.687 C 12.863 10.848 15.476 9.743 19.086 9.743 C 21.64 9.743 23.808 10.604 25.356 12.233 C 26.905 13.863 27.789 16.194 27.99 19.174 C 28.848 19.534 29.641 19.958 30.361 20.443 C 33.263 22.4 34.862 25.325 34.862 28.679 C 34.862 35.808 29.031 42 18.477 42 C 9.415 42 0 36.717 0 20.984 C 0 5.342 9.12 0 18.451 0 C 22.761 0 32.869 0.638 36.67 13.218 L 33.105 14.145 C 30.166 5.182 24.004 3.755 18.354 3.755 C 9.015 3.755 3.732 9.455 3.732 21.581 C 3.732 32.454 9.637 38.23 18.478 38.23 C 25.752 38.23 31.175 34.442 31.175 28.895 C 31.175 25.121 28.011 23.314 27.849 23.314 C 27.231 26.552 25.575 32 18.303 32 C 14.066 32 10.413 29.067 10.413 25.224 C 10.413 19.736 15.607 17.749 19.71 17.749 C 21.246 17.749 23.1 17.853 24.065 18.05 C 24.065 16.377 22.653 13.515 19.087 13.515 C 15.817 13.514 14.988 14.577 13.938 15.791 Z M 20.211 21.498 C 14.867 21.498 14.176 23.781 14.176 25.215 C 14.176 27.519 16.907 28.283 18.365 28.283 C 21.036 28.283 23.781 27.541 24.213 21.92 C 22.858 21.616 21.848 21.498 20.211 21.498 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none">
      <path
        d="M 12.303 0.147 C 10.068 0.252 8.543 0.609 7.209 1.133 C 5.828 1.671 4.658 2.393 3.494 3.561 C 2.329 4.73 1.612 5.901 1.078 7.284 C 0.561 8.62 0.211 10.148 0.112 12.383 C 0.013 14.619 -0.008 15.337 0.003 21.04 C 0.013 26.743 0.039 27.458 0.147 29.698 C 0.254 31.932 0.609 33.458 1.133 34.792 C 1.672 36.172 2.393 37.342 3.562 38.507 C 4.731 39.672 5.901 40.387 7.287 40.922 C 8.623 41.438 10.15 41.79 12.386 41.888 C 14.621 41.986 15.34 42.008 21.041 41.997 C 26.743 41.987 27.46 41.961 29.7 41.855 C 31.94 41.749 33.458 41.391 34.792 40.869 C 36.173 40.329 37.343 39.609 38.507 38.44 C 39.671 37.271 40.388 36.099 40.921 34.716 C 41.439 33.38 41.79 31.852 41.887 29.619 C 41.985 27.377 42.008 26.662 41.998 20.96 C 41.987 15.258 41.961 14.543 41.855 12.303 C 41.748 10.064 41.393 8.543 40.869 7.208 C 40.329 5.827 39.609 4.659 38.441 3.493 C 37.272 2.328 36.099 1.611 34.716 1.079 C 33.38 0.562 31.853 0.209 29.618 0.113 C 27.383 0.016 26.663 -0.009 20.96 0.002 C 15.257 0.013 14.543 0.038 12.303 0.147 M 12.548 38.11 C 10.501 38.021 9.389 37.681 8.648 37.396 C 7.667 37.018 6.968 36.561 6.23 35.83 C 5.491 35.099 5.038 34.397 4.655 33.418 C 4.367 32.677 4.02 31.567 3.925 29.519 C 3.82 27.306 3.799 26.642 3.786 21.035 C 3.774 15.429 3.796 14.765 3.893 12.551 C 3.98 10.505 4.322 9.392 4.607 8.652 C 4.985 7.67 5.44 6.972 6.173 6.234 C 6.906 5.496 7.605 5.042 8.585 4.659 C 9.325 4.37 10.435 4.026 12.482 3.929 C 14.697 3.824 15.36 3.803 20.966 3.79 C 26.572 3.778 27.237 3.799 29.453 3.897 C 31.499 3.986 32.612 4.325 33.352 4.611 C 34.333 4.989 35.032 5.443 35.77 6.177 C 36.508 6.911 36.963 7.608 37.346 8.59 C 37.635 9.328 37.978 10.438 38.075 12.486 C 38.181 14.7 38.204 15.364 38.215 20.97 C 38.225 26.575 38.205 27.241 38.108 29.454 C 38.018 31.501 37.679 32.613 37.394 33.355 C 37.016 34.336 36.56 35.035 35.827 35.773 C 35.093 36.51 34.395 36.965 33.415 37.348 C 32.676 37.636 31.564 37.981 29.519 38.078 C 27.304 38.182 26.64 38.204 21.033 38.216 C 15.425 38.228 14.763 38.206 12.549 38.11 M 29.668 9.776 C 29.67 10.796 30.285 11.713 31.228 12.102 C 32.17 12.49 33.254 12.273 33.973 11.551 C 34.693 10.829 34.906 9.744 34.514 8.803 C 34.122 7.862 33.202 7.25 32.183 7.252 C 30.791 7.255 29.666 8.385 29.668 9.776 M 10.217 21.021 C 10.229 26.977 15.066 31.794 21.02 31.782 C 26.975 31.771 31.795 26.935 31.784 20.979 C 31.773 15.023 26.934 10.205 20.979 10.217 C 15.024 10.229 10.206 15.066 10.217 21.021 M 14 21.013 C 13.992 17.147 17.12 14.007 20.986 13.999 C 24.852 13.992 27.993 17.12 28 20.986 C 28.008 24.852 24.88 27.992 21.014 28 C 19.157 28.004 17.375 27.27 16.06 25.959 C 14.744 24.649 14.003 22.87 14 21.013"
        fill="currentColor"
      />
    </svg>
  );
}

// 6-icon cycle matching the video
const socialIconsList = [
  { name: "Snapchat", render: (size: number) => <SnapchatIcon size={size} /> },
  { name: "YouTube", render: (size: number) => <YouTubeIcon size={size} /> },
  { name: "Facebook", render: (size: number) => <FacebookIcon size={size} /> },
  { name: "X", render: (size: number) => <XIcon size={size} /> },
  { name: "Threads", render: (size: number) => <ThreadsIcon size={size} /> },
  { name: "Instagram", render: (size: number) => <InstagramIcon size={size} /> },
];

// Configuration of the 3 concentric rings measured from Screen Recording
const ringsConfig = [
  {
    id: "inner",
    radius: 250,
    badgeSize: 36,
    iconSize: 19,
    duration: 32,
    offsetIndex: 3, // Starts with X near top as in video
  },
  {
    id: "middle",
    radius: 334,
    badgeSize: 48,
    iconSize: 26,
    duration: 42,
    offsetIndex: 3, // Starts with X near top as in video
  },
  {
    id: "outer",
    radius: 418,
    badgeSize: 60,
    iconSize: 32,
    duration: 54,
    offsetIndex: 0, // Starts with Snapchat near top as in video
  },
];

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="impact"
      ref={containerRef}
      style={{
        width: "100%",
        padding: "100px 24px 110px",
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
          alignItems: "center",
          gap: "40px",
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
          <div className="badge-pill">{impactData.badge}</div>
          <AnimatedHeading
            as="h2"
            className="font-display"
            text={impactData.title}
            style={{
              fontSize: "clamp(38px, 4.8vw, 62px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
            }}
          />
        </div>

        {/* 3 Concentric Rotating Rings from Screen Recording */}
        <div
          className="concentric-orbit-container"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            className="concentric-orbit-stage"
            style={{
              width: "900px",
              height: "900px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {ringsConfig.map((ring) => {
              // 24 badges per ring spaced at 15 degrees
              const items = Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const rad = (angle * Math.PI) / 180;
                const x = Math.round(Math.cos(rad) * ring.radius * 10) / 10;
                const y = Math.round(Math.sin(rad) * ring.radius * 10) / 10;
                const icon = socialIconsList[(i + ring.offsetIndex) % socialIconsList.length];
                return { x, y, icon };
              });

              return (
                <motion.div
                  key={ring.id}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    pointerEvents: "none",
                  }}
                >
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%, -50%) translate(${item.x}px, ${item.y}px)`,
                        width: `${ring.badgeSize}px`,
                        height: `${ring.badgeSize}px`,
                        borderRadius: "50%",
                        backgroundColor: "#ebe6de",
                        color: "var(--brand-orange, #ff5c00)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      {item.icon.render(ring.iconSize)}
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3 Metric Cards Grid with Animated Number Counters */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            width: "100%",
          }}
          className="metrics-grid"
        >
          {impactData.metrics.map((metric, idx) => (
            <CounterCard key={metric.label} metric={metric} delay={idx * 0.15} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .concentric-orbit-container {
          height: 900px;
        }
        @media (max-width: 1100px) {
          .concentric-orbit-container {
            height: 760px;
          }
          .concentric-orbit-stage {
            transform: scale(0.84);
          }
        }
        @media (max-width: 900px) {
          .concentric-orbit-container {
            height: 620px;
          }
          .concentric-orbit-stage {
            transform: scale(0.68);
          }
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .concentric-orbit-container {
            height: 480px;
          }
          .concentric-orbit-stage {
            transform: scale(0.52);
          }
        }
        @media (max-width: 480px) {
          .concentric-orbit-container {
            height: 380px;
          }
          .concentric-orbit-stage {
            transform: scale(0.41);
          }
        }
      `}</style>
    </section>
  );
}

function CounterCard({ metric, delay }: { metric: any; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = metric.value;
    const duration = 1600; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(metric.decimals ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, metric.value, metric.decimals]);

  return (
    <motion.div
      ref={ref}
      className="card-base"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "48px 32px",
        gap: "16px",
      }}
    >
      {/* Animated Big Number */}
      <div
        className="font-display"
        style={{
          fontSize: "clamp(54px, 6vw, 76px)",
          fontWeight: 700,
          lineHeight: 1,
          color: "var(--text-dark)",
          letterSpacing: "-0.04em",
        }}
      >
        {metric.decimals ? count.toFixed(1) : count}
        {metric.suffix}
      </div>

      {/* Label */}
      <h3
        className="font-display"
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "var(--text-dark)",
        }}
      >
        {metric.label}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.5,
          color: "var(--text-secondary)",
          maxWidth: "280px",
        }}
      >
        {metric.description}
      </p>
    </motion.div>
  );
}
