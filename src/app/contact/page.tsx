"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedHeading from "@/components/AnimatedHeading";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calendar,
  MessageSquare,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

const SERVICE_OPTIONS = [
  "Content Creation",
  "Social Media Strategy",
  "Performance Marketing",
  "Analytics & Insights",
  "Creator Management",
  "Full Growth Retainer",
];

const BUDGET_OPTIONS = [
  "< $5,000 / mo",
  "$5,000 – $10,000 / mo",
  "$10,000 – $25,000 / mo",
  "$25,000+ / mo",
];

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Content Creation",
    "Social Media Strategy",
  ]);
  const [budget, setBudget] = useState("$5,000 – $10,000 / mo");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in your name, email, and project details.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "var(--brand-orange)",
      }}
    >
      {/* Floating Sticky Glass Navbar */}
      <Navbar />

      {/* Main Page Canvas Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "var(--canvas-bg)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
          paddingTop: "140px",
          paddingBottom: "120px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "64px",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
              maxWidth: "820px",
              margin: "0 auto",
            }}
          >
            <div className="badge-pill">
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-orange)",
                  display: "inline-block",
                  marginRight: "4px",
                }}
              />
              Start a Conversation
            </div>

            <AnimatedHeading
              as="h1"
              className="font-display"
              text="Let's Build Something Huge Together"
              style={{
                fontSize: "clamp(42px, 5.5vw, 68px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "var(--text-dark)",
              }}
            />

            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                maxWidth: "680px",
              }}
            >
              Whether you need scroll-stopping content, a full social strategy overhaul, or
              conversion-driven paid ads, our team is ready. Tell us about your goals.
            </p>

            {/* Live Response Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "9999px",
                backgroundColor: "rgba(30, 30, 30, 0.04)",
                border: "1px solid rgba(30, 30, 30, 0.06)",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--text-dark)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)",
                  display: "inline-block",
                }}
              />
              Strategy Team Active • Average response under 2 hours
            </div>
          </div>

          {/* Main 2-Column Content Grid: Form + Contact Info Cards */}
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.18fr 0.82fr",
              gap: "36px",
              alignItems: "flex-start",
            }}
          >
            {/* Left Column: Interactive Project Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: "var(--card-bg)",
                borderRadius: "28px",
                padding: "44px 40px",
                boxShadow: "0 10px 36px rgba(0,0,0,0.04)",
                border: "1px solid rgba(30,30,30,0.06)",
                position: "relative",
              }}
            >
              {isSubmitted ? (
                <div
                  style={{
                    padding: "40px 10px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10b981",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Inquiry Received!
                  </h3>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "16px",
                      lineHeight: 1.55,
                      maxWidth: "460px",
                    }}
                  >
                    Thank you, <strong>{fullName}</strong>. We have received your project details
                    for <strong>{brandName || "your brand"}</strong>. Dan and our strategy team will
                    review your channels and email you back at <strong>{email}</strong> within 24
                    hours.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage("");
                    }}
                    className="btn-dark"
                    style={{ marginTop: "12px", padding: "14px 28px" }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "28px" }}
                >
                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "28px",
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Tell Us About Your Project
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "15px",
                        marginTop: "6px",
                      }}
                    >
                      Fill in the details below and we will prepare a tailored strategy proposal.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        color: "#dc2626",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  {/* Row: Name & Email */}
                  <div
                    className="form-row-2"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="contact-input"
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@brand.com"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Brand / Website */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                      Brand Name or Social Handle
                    </label>
                    <input
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Acme Studio / @acmestudio"
                      className="contact-input"
                    />
                  </div>

                  {/* Services Interested In (Multi-select Chips) */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                      Services You Need
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {SERVICE_OPTIONS.map((srv) => {
                        const selected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            style={{
                              padding: "9px 16px",
                              borderRadius: "9999px",
                              fontSize: "13.5px",
                              fontWeight: 500,
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                              border: selected
                                ? "1px solid var(--brand-orange)"
                                : "1px solid rgba(30, 30, 30, 0.12)",
                              backgroundColor: selected ? "var(--brand-orange)" : "#ffffff",
                              color: selected ? "#ffffff" : "var(--text-dark)",
                              boxShadow: selected
                                ? "0 4px 12px rgba(255, 92, 0, 0.25)"
                                : "0 1px 3px rgba(0,0,0,0.03)",
                            }}
                          >
                            {selected && "✓ "}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Monthly Budget */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                      Estimated Monthly Budget
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {BUDGET_OPTIONS.map((opt) => {
                        const isChosen = budget === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setBudget(opt)}
                            style={{
                              padding: "8px 16px",
                              borderRadius: "9999px",
                              fontSize: "13px",
                              fontWeight: 500,
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                              border: isChosen
                                ? "1px solid var(--text-dark)"
                                : "1px solid rgba(30, 30, 30, 0.12)",
                              backgroundColor: isChosen ? "var(--text-dark)" : "#ffffff",
                              color: isChosen ? "#ffffff" : "var(--text-dark)",
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                      Project Goals & Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your brand, current bottlenecks, target audience, and what metrics matter most to you..."
                      className="contact-input"
                      style={{ resize: "vertical", minHeight: "110px", lineHeight: 1.55 }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        Transmitting Inquiry...
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      color: "var(--text-muted)",
                      fontSize: "12.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <ShieldCheck size={14} color="#10b981" /> Strict NDA Guaranteed
                    </span>
                    <span>•</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Zap size={14} color="var(--brand-orange)" /> 24-Hour Review Turnaround
                    </span>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column: Realistic Contact Details & Discovery Booking */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Card 1: Direct Studio Details */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderRadius: "28px",
                  padding: "36px",
                  boxShadow: "0 10px 36px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(30,30,30,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <h4
                    className="font-display"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Studio Details
                  </h4>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                    Reach our leadership directly or visit our creative lab in Manhattan.
                  </p>
                </div>

                {/* Email Item */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-orange)",
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Email Inquiries
                    </div>
                    <a
                      href="mailto:hello@tgmedia.agency"
                      style={{
                        display: "block",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--text-dark)",
                        textDecoration: "none",
                        marginTop: "2px",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-orange)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dark)")}
                    >
                      hello@tgmedia.agency
                    </a>
                    <a
                      href="mailto:growth@tgmedia.agency"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        marginTop: "2px",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-orange)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      growth@tgmedia.agency (Clients)
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-orange)",
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Phone &amp; Direct Line
                    </div>
                    <a
                      href="tel:+12128473920"
                      style={{
                        display: "block",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--text-dark)",
                        textDecoration: "none",
                        marginTop: "2px",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-orange)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dark)")}
                    >
                      +1 (212) 847-3920
                    </a>
                    <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "2px" }}>
                      Toll-free: +1 (800) 873-6367
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-orange)",
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      SoHo Studio Headquarters
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-dark)", marginTop: "2px" }}>
                      482 Broadway, Suite 500
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                      SoHo, New York, NY 10013
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-orange)",
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Working Hours
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--text-dark)", fontWeight: 500, marginTop: "2px" }}>
                      Monday – Friday: 9:00 AM – 6:30 PM EST
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                      Weekend: Urgent Content Monitoring Only
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Fast-Track 15-Minute Call Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "28px",
                  padding: "36px",
                  color: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Subtle Brand Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 92, 0, 0.22)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--brand-orange)",
                  }}
                >
                  <Calendar size={14} /> Fast Track Booking
                </div>

                <h4
                  className="font-display"
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  Prefer a Live Discovery Call?
                </h4>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  Skip email exchanges and pick a 15-minute slot directly on our creative director&apos;s
                  calendar.
                </p>

                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    width: "fit-content",
                    marginTop: "8px",
                    padding: "12px 24px",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Schedule 15-Min Intro ↗
                </a>
              </motion.div>
            </div>
          </div>

          {/* 3-Step "What Happens Next?" Roadmap */}
          <div
            style={{
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div className="badge-pill" style={{ marginBottom: "12px" }}>
                Process Overview
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  letterSpacing: "-0.03em",
                }}
              >
                What Happens After You Reach Out
              </h3>
            </div>

            <div
              className="process-3-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {[
                {
                  step: "01",
                  title: "Channel & Asset Audit",
                  desc: "Within 24 hours, our team studies your current social accounts, content engagement rates, and competitors to locate instant leverage points.",
                },
                {
                  step: "02",
                  title: "Strategic Discovery Call",
                  desc: "A focused 25-minute session to discuss your creative taste, target milestones, timeline, and ideal deliverables without sales pressure.",
                },
                {
                  step: "03",
                  title: "Custom Execution Roadmap",
                  desc: "You receive a clear, milestone-driven proposal outlining exact deliverables, monthly content volume, and transparent ROI metrics.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderRadius: "24px",
                    padding: "32px",
                    border: "1px solid rgba(30, 30, 30, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "var(--brand-orange)",
                    }}
                  >
                    {item.step}
                  </div>
                  <h4
                    className="font-display"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.55,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curtain Reveal Orange Footer */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <Footer />
      </div>

      {/* Scoped CSS for Contact Page */}
      <style jsx>{`
        .contact-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: 14px;
          border: 1px solid rgba(30, 30, 30, 0.12);
          background-color: #ffffff;
          font-family: inherit;
          font-size: 15px;
          color: var(--text-dark);
          outline: none;
          transition: all 0.2s ease;
        }
        .contact-input:focus {
          border-color: var(--brand-orange);
          box-shadow: 0 0 0 3px rgba(255, 92, 0, 0.14);
        }
        .contact-input::placeholder {
          color: #9ca3af;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: #ffffff;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .process-3-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
