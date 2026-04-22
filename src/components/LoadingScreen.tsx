"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = window.setTimeout(() => setVisible(false), 300);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setProgress((current) => Math.min(100, current + Math.ceil(Math.random() * 5 + 3)));
    }, 70);

    return () => window.clearTimeout(timeout);
  }, [progress]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm text-white">
      <div className="mx-4 w-full max-w-md rounded-[2rem] border border-white/10 bg-black/90 p-8 shadow-2xl shadow-black/50">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">Loading portfolio</p>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-white">
          <span className="text-cyan-300">&lt;</span>tethcode<span className="text-cyan-300"> /&gt;</span>
        </h1>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-sm text-gray-300">{progress}%</p>
      </div>
    </div>
  );
}
