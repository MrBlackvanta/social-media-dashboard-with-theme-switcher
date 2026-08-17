import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Social Media Dashboard";
const description =
  "Follower counts and today's engagement across Facebook, Twitter, Instagram and YouTube, with a light and dark theme — a Frontend Mentor challenge built with Next.js, TypeScript and Tailwind CSS.";
const siteUrl =
  "https://social-media-dashboard-with-theme-switcher.abdelrhman-ahmed8881.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
