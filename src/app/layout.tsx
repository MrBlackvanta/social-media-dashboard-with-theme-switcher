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

const applyStoredTheme = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch(e){}`;

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1f29" },
  ],
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
        {children}
      </body>
    </html>
  );
}
