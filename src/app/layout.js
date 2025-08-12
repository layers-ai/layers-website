import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
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
  title: "layers - Smart Voice Journaling App - Effortless Self-Reflection",
  description:
    "layers: A voice journal app that helps you understand yourself and lead a happy life. We make journaling easy and insightful. Download now and start your journey!",
  metadataBase: new URL("https://getlayers.app"),
  openGraph: {
    title: "layers - Smart Voice Journaling App - Effortless Self-Reflection",
    description:
      "layers: A voice journal app that helps you understand yourself and lead a happy life. We make journaling easy and insightful. Download now and start your journey!",
    url: "https://getlayers.app",
    siteName: "layers - Smart Journaling App - Effortless Self-Discovery",
    images: [
      {
        url: "https://getlayers.app/images/layers-ai-journaling-app-1200x630.jpg",
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
    <html lang="en" className="h-full">
      <GoogleTagManager gtmId="GTM-MCSMM8Q9" />
      <body className={`${circular.variable} h-full font-sans`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
