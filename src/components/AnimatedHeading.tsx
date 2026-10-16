"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedHeadingProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  stagger?: number; // fast typewriter stagger per character, e.g. 0.018s
  delay?: number;
}

export default function AnimatedHeading({
  children,
  text,
  className = "",
  style = {},
  as = "h2",
  stagger = 0.018,
  delay = 0,
}: AnimatedHeadingProps) {
  // Extract string content
  const rawText = text || (typeof children === "string" ? children : "");

  // If text is not a simple string, render children directly with fade
  if (!rawText) {
    const FallbackTag = motion[as] || motion.h2;
    return (
      <FallbackTag
        className={className}
        style={style}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </FallbackTag>
    );
  }

  // Split by line breaks if present
  const lines = rawText.split("\n");

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: delay + i * stagger,
        duration: 0.16,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const MotionTag = motion[as] || motion.h2;

  // Track global character index across lines and words for smooth sequential typewriter animation
  let globalCharIndex = 0;

  return (
    <MotionTag
      className={className}
      style={{
        display: "block",
        ...style,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {lines.map((line, lineIdx) => {
        const words = line.trim().split(/\s+/).filter(Boolean);

        return (
          <span
            key={`line-${lineIdx}`}
            style={{
              display: "block",
              lineHeight: "inherit",
            }}
          >
            {words.map((word, wordIdx) => (
              <span
                key={`w-${lineIdx}-${wordIdx}`}
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  marginRight: wordIdx === words.length - 1 ? 0 : "0.26em",
                }}
              >
                {Array.from(word).map((char, charIdx) => {
                  const idx = globalCharIndex++;
                  return (
                    <motion.span
                      key={`c-${charIdx}`}
                      custom={idx}
                      variants={charVariants}
                      style={{
                        display: "inline-block",
                        willChange: "transform, opacity, filter",
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </span>
        );
      })}
    </MotionTag>
  );
}
