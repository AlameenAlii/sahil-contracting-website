import { useEffect, useRef, useState } from "react";

export default function HomePreloader() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("home-preloader-shown")) return;
    } catch {
      // sessionStorage can throw in private mode or with storage blocked.
      // Failing open is correct here: the intro simply plays again.
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setShow(true);
    try {
      sessionStorage.setItem("home-preloader-shown", "1");
    } catch {
      // Persisting the "already seen" flag is best-effort. The 4.5s hard cap
      // and the click/onEnded handlers still dismiss the overlay.
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const hardCap = window.setTimeout(() => dismiss(), 4500);
    return () => window.clearTimeout(hardCap);
  }, [show]);

  function dismiss() {
    setFading(true);
    window.setTimeout(() => setShow(false), 400);
  }

  if (!mounted || !show) return null;

  return (
    <div
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-400 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "#ffffff" }}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src="/preloader.mp4"
        autoPlay
        muted
        playsInline
        onEnded={dismiss}
        className="h-auto w-full max-w-[576px]"
      />
    </div>
  );
}
