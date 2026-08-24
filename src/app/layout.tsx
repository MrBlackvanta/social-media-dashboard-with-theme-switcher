import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { InstagramGradient } from "@/components/icons";
import { applyStoredTheme } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Social Media Dashboard";
const title = `${siteName} | Four platforms at a glance`;
const description =
  "Followers, likes and views across Facebook, Twitter, Instagram and YouTube, with a light theme and a dark one.";
const siteUrl =
  "https://social-media-dashboard-with-theme-switcher.abdelrhman-ahmed8881.workers.dev";
const card = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Social Media Dashboard, with follower counts and today's engagement for four platforms",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [card],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [card],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="relative isolate flex min-h-dvh flex-col">
        <script dangerouslySetInnerHTML={{ __html: applyStoredTheme }} />
        <InstagramGradient />
        {children}
      </body>
    </html>
  );
}
