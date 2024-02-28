import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

const circular = localFont({
  src: [
    {
      path: "./fonts/CircularStd-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/CircularStd-BookItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CircularStd-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CircularStd-BookItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/CircularStd-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/CircularStd-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-circular",
});

import "./globals.css";

export const metadata = {
  title: "layers - AI Journaling App - Effortless Self-Discovery",
  description:
    "Your personal AI journaling companion. Reveal your patterns and find clarity. Create a life full of purpose and connection. Discover layers today.",
  metadataBase: new URL("https://layersjournal.app"),
  openGraph: {
    title: "layers - AI Journaling App - Effortless Self-Discovery",
    description:
      "Your personal AI journaling companion. Reveal your patterns and find clarity. Create a life full of purpose and connection. Discover layers today.",
    url: "https://layersjournal.app",
    siteName: "layers - AI Journaling App - Effortless Self-Discovery",
    images: [
      {
        url: "https://layersjournal.app/images/layers-ai-journaling-app-1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${circular.variable} font-sans`}>
        {children}
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-BF2M6XH0XD" />
    </html>
  );
}
