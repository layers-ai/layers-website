import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "Layers - AI Journaling App - Effortless Self-Discovery",
  description:
    "Don't think of layers as a conventional journaling app—think of it as your personal AI journaling companion. Gain deep insights into your mind with 5 minutes a day.",
  metadataBase: new URL("https://layersjournal.app"),
  openGraph: {
    title: "Layers - AI Journaling App - Effortless Self-Discovery",
    description:
      "Don't think of layers as a conventional journaling app—think of it as your personal AI journaling companion. Gain deep insights into your mind with 5 minutes a day.",
    url: "https://layersjournal.app",
    siteName: "Layers - AI Journaling App - Effortless Self-Discovery",
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
      <body className={`${circular.variable} font-sans`}>{children}</body>
      <GoogleAnalytics gaId="G-BF2M6XH0XD" />
    </html>
  );
}
