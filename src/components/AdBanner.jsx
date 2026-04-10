"use client";

/**
 * Google AdSense Ad Component
 * Replace 'ca-pub-XXXXXXXXXXXXXXXX' with your actual AdSense publisher ID
 * Replace the slot IDs with your actual ad unit slot IDs
 */

import { useEffect, useRef } from "react";

const AD_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX"; // Replace with your AdSense publisher ID

export function AdBanner({ slot = "1234567890", format = "auto", responsive = true, className = "" }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !pushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        console.log("AdSense push error:", e);
      }
    }
  }, []);

  return (
    <div className={`ad-container my-6 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
        ref={adRef}
      />
    </div>
  );
}

export function AdBannerPlaceholder({ label = "Advertisement", className = "" }) {
  // Shows a placeholder in development, real ads in production
  if (process.env.NODE_ENV === "development") {
    return (
      <div className={`my-6 mx-auto max-w-4xl ${className}`}>
        <div className="border border-dashed border-white/10 rounded-xl bg-white/[0.02] px-4 py-8 text-center">
          <p className="text-text-muted/40 text-xs uppercase tracking-widest">{label}</p>
        </div>
      </div>
    );
  }

  return <AdBanner className={className} />;
}

export function SidebarAd({ className = "" }) {
  return <AdBannerPlaceholder label="Sponsored" className={`max-w-xs ${className}`} />;
}

export function InFeedAd({ className = "" }) {
  return <AdBannerPlaceholder label="Advertisement" className={className} />;
}
