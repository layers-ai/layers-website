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
  title: "layers app - your companion for well-being",
  description: "Your companion for well-being.",
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
