import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Onnume Theriyalaye | Mavtop Technologies",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <main className="relative w-full h-screen min-h-screen bg-[#FAFAFA] dark:bg-[#0D0D0F] flex flex-col items-center justify-between px-4 py-8 overflow-hidden select-none transition-colors duration-300">
      {/* Massive 404 watermark positioned for mobile and desktop */}
      <div className="absolute inset-0 flex items-start sm:items-center justify-center pt-20 sm:pt-0 pointer-events-none z-0">
        <span className="font-grotesk font-black text-[50vw] sm:text-[35vw] md:text-[40vw] leading-none text-slate-900/35 dark:text-white/20 select-none tracking-tighter transition-colors duration-300">
          404
        </span>
      </div>

      {/* Background meme image layer */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <Image
          src="/404-meme.png"
          alt="Onnume Theriyalaye"
          fill
          className="object-cover object-center opacity-85 dark:opacity-75 filter brightness-100 dark:brightness-90 transition-all duration-300"
          priority
          unoptimized
        />
        {/* Soft gradient vignetting adapted for light & dark themes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/20 to-[#FAFAFA]/70 dark:from-[#0D0D0F] dark:via-[#0D0D0F]/20 dark:to-[#0D0D0F]/70 transition-colors duration-300" />
      </div>

      {/* Foreground Content (Onnume Theriyalaye text in front) */}
      <Link href="/" className="relative z-20 flex flex-col items-center text-center px-2 max-w-4xl cursor-pointer group mt-auto mb-6 sm:mb-20">
        <div className="space-y-2 sm:space-y-3">
          <h1
            className="text-slate-900 dark:text-white font-extrabold text-[7.5vw] sm:text-6xl md:text-7xl lg:text-8xl tracking-wide whitespace-nowrap drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            ஒண்ணுமே தெரியலையே!
          </h1>
          <p className="text-slate-800 dark:text-slate-200 font-bold text-[3.8vw] sm:text-2xl md:text-4xl tracking-[0.2em] sm:tracking-[0.25em] uppercase opacity-95 drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition-colors duration-300">
            ONNUME THERIYALAYE
          </p>
        </div>
      </Link>
    </main>
  );
}




