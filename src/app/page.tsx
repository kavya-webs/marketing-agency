import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", backgroundColor: "var(--brand-orange)" }}>
      {/* Opening Blur Intro */}
      <PageLoader />

      {/* Floating Sticky Glass Navbar */}
      <Navbar />

      {/* Primary Page Content Wrapper (Curtain Overlay) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "var(--canvas-bg)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
          marginBottom: "0px",
        }}
      >
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <Metrics />
        <Testimonials />
        <Blog />
        <CtaBanner />
        <Faq />
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
    </main>
  );
}
