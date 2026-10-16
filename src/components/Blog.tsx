"use client";

import React from "react";
import { blogPosts } from "@/data/trendoraData";
import { ArrowUpRight } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        width: "100%",
        padding: "90px 24px 100px",
        backgroundColor: "var(--canvas-bg)",
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
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <div className="badge-pill">Blog</div>
          <AnimatedHeading
            as="h2"
            className="font-display"
            text="Where the Latest Trends Go Viral"
            style={{
              fontSize: "clamp(38px, 4.8vw, 60px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
            }}
          />
        </div>

        {/* Blog Post Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "28px",
          }}
          className="blog-grid"
        >
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card-base"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                borderRadius: "24px",
                gap: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Post Details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      lineHeight: 1.15,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.45,
                      color: "var(--text-secondary)",
                      marginTop: "8px",
                    }}
                  >
                    {post.description}
                  </p>
                </div>

                {/* Bottom Row: Tag & Arrow */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "16px",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(30, 30, 30, 0.05)",
                  }}
                >
                  <span
                    className="badge-pill"
                    style={{
                      backgroundColor: "rgba(30, 30, 30, 0.04)",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {post.tag}
                  </span>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(30, 30, 30, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-dark)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
