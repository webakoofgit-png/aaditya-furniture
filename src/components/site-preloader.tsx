import { useEffect, useState } from "react";
import brandLogo from "@/assets/aditya-furniture-logo.webp";

const DISPLAY_TIME_MS = 1100;
const EXIT_TIME_MS = 500;

export function SitePreloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    let started = false;

    document.documentElement.classList.add("preloader-active");

    const finish = () => {
      if (started) return;
      started = true;

      const leaveTimer = setTimeout(
        () => {
          setLeaving(true);
          const removeTimer = setTimeout(
            () => {
              setVisible(false);
              document.documentElement.classList.remove("preloader-active");
            },
            reducedMotion ? 0 : EXIT_TIME_MS,
          );
          timers.add(removeTimer);
        },
        reducedMotion ? 120 : DISPLAY_TIME_MS,
      );
      timers.add(leaveTimer);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    const fallbackTimer = setTimeout(finish, 3500);
    timers.add(fallbackTimer);

    return () => {
      window.removeEventListener("load", finish);
      timers.forEach(clearTimeout);
      document.documentElement.classList.remove("preloader-active");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-preloader ${leaving ? "site-preloader-leaving" : ""}`}
      role="status"
      aria-label="Loading Aditya Furniture and Interior"
    >
      <div className="preloader-panel">
        <div className="preloader-brand" aria-hidden="true">
          <img className="preloader-logo" src={brandLogo} alt="" width="72" height="72" />
          <span className="preloader-wordmark">
            <strong>ADITYA</strong>
            <small>FURNITURE &amp; INTERIOR</small>
          </span>
        </div>
        <span className="preloader-status">Design · Manufacture · Install</span>
        <span className="preloader-track" aria-hidden="true">
          <span />
        </span>
      </div>
    </div>
  );
}
