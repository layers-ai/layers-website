"use client";

import { useEffect } from "react";
import { initializeGoogleAnalytics } from "@/utils/GoogleAnalytics";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGoogleAnalytics();
      window.GA_INITIALIZED = true;
    }
  }, []);
}
