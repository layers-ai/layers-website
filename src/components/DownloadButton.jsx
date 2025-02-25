"use client";

import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";

export default function DownloadButton({
  section = "unknown",
  size = "medium",
}) {
  const handleAppStoreClick = () => {
    sendGTMEvent({ event: "generate_lead", currency: "USD", value: 100 });
    sendGTMEvent({ event: "download_app", section: section });
  };

  let width = 130;
  let height = 44;

  if (size === "large") {
    width = 200;
    height = 64;
  }

  if (size === "small") {
    width = 100;
    height = 34;
  }

  return (
    <>
      <a
        href="https://apps.apple.com/de/app/layers-voice-journal/id6504188329"
        target="_blank"
        onClick={handleAppStoreClick}
      >
        <Image
          src="/images/download_on_the_app_store.svg"
          alt="Download on the App Store"
          width={width}
          height={height}
        />
      </a>
    </>
  );
}
