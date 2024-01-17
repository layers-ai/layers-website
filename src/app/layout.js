import localFont from "next/font/local";
import Script from "next/script";

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
    "Don't think of layers as a conventional journaling app—think of it as your personal AI journaling companion. Gain deep insights into your mind with 5 minutes a day.",
  openGraph: {
    title: "layers - AI Journaling App - Effortless Self-Discovery",
    description:
      "Don't think of layers as a conventional journaling app—think of it as your personal AI journaling companion. Gain deep insights into your mind with 5 minutes a day.",
    url: "https://layersjournal.app",
    siteName: "layers - AI Journaling App - Effortless Self-Discovery",
    images: [
      {
        url: "https://7c31-2a02-8109-9705-3100-3dae-d9ef-ccc8-ce92.ngrok-free.app/images/layers-ai-journaling-app-1200x630.png",
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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BF2M6XH0XD"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-BF2M6XH0XD');
        `}
      </Script>
      <body className={`${circular.variable} font-sans`}>{children}</body>
    </html>
  );
}
