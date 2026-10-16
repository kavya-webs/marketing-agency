import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "TG media — Social Media Marketing Agency",
  description: "High performing social media strategies that grow your audience and drive real business results.",
  icons: {
    icon: "https://framerusercontent.com/images/leXBVGCrt3snMbvtDlFnNaSXJEc.png",
    apple: "https://framerusercontent.com/images/leXBVGCrt3snMbvtDlFnNaSXJEc.png",
  },
  openGraph: {
    title: "TG media — Social Media Marketing Agency",
    description: "High performing social media strategies that grow your audience and drive real business results.",
    images: ["https://framerusercontent.com/images/fh0qx1gXb6OyUbiUjLN3HeZyZ4.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Magra:wght@400;700&family=Libre+Franklin:wght@400;500;600;700&family=Fragment+Mono&display=swap"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
