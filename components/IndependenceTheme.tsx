"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function IndependenceTheme() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const now = new Date();
    // Turn off on or after 16th of August
    const isThemeActive = now.getMonth() === 7 && now.getDate() < 16;
    
    setIsActive(isThemeActive);

    if (isThemeActive) {
      // Fire tricolor confetti
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FF9933', '#FFFFFF', '#138808'] // Saffron, White, Green
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FF9933', '#FFFFFF', '#138808']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      
      // Delay slightly so it doesn't fire before the page paints
      setTimeout(() => {
         frame();
      }, 500);
    }
  }, []);

  if (!isActive) return null;

  return (
    <>
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#FF9933] via-white to-[#138808] opacity-40 dark:opacity-20"></div>
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-slate-900 py-2 px-4 text-center font-semibold text-sm md:text-base shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[100] flex items-center justify-center gap-2">
        <span>🇮🇳</span>
        <p>Happy 80th Independence Day! Celebrating freedom and innovation.</p>
        <span>🇮🇳</span>
      </div>
    </>
  );
}
