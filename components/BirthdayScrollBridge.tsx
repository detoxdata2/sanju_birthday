"use client";

import { useEffect } from "react";

/**
 * Listens for a `birthday-scroll-down` postMessage from the embedded
 * /birthday.html iframe and scrolls the parent page down to the next
 * section (#birthday-hero). Lets the reveal's "Scroll down" cue move
 * the user past the iframe without them having to fight its inner scroll.
 */
export default function BirthdayScrollBridge() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data && e.data.type === "birthday-scroll-down") {
        const target = document.getElementById("birthday-hero");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
