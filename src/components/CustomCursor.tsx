"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const hoverTargets = Array.from(document.querySelectorAll("button, a, .cursor-hover"));
    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", handleEnter);
      target.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleEnter);
        target.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        style={{ left: position.x, top: position.y }}
        className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.4)]"
      />
      <div
        style={{ left: position.x, top: position.y }}
        className={`pointer-events-none absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 transition-transform duration-200 ${
          hovering ? "scale-110 opacity-100" : "opacity-70"
        }`}
      />
    </div>
  );
}
