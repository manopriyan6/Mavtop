import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 — Onnume Theriyalaye | Mavtop Technologies",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0D0D0F] flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">

        {/* 404 number */}
        <p className="font-grotesk font-extrabold text-[120px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none mb-2">
          404
        </p>

        {/* Meme image */}
        <div className="relative w-72 h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-6">
          <Image
            src="/404-meme.png"
            alt="Onnume Theriyalaye"
            fill
            className="object-cover"
            unoptimized
          />
          {/* Meme subtitle overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
            <p
              className="text-white font-bold text-lg leading-tight"
              style={{ textShadow: "0 1px 4px #000", fontFamily: "Arial, sans-serif" }}
            >
              &ldquo;ஒண்ணுமே தெரியலையே!&rdquo;
            </p>
            <p className="text-white/70 text-xs mt-0.5">— Page not found, da! 😂</p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-2">
          Aiyo! Page Kadaikala 🫙
        </h1>
        <p className="font-jakarta text-slate-400 text-base mb-8 leading-relaxed">
          The page you&apos;re looking for went missing like our friend up there —&nbsp;
          <span className="text-white/60 italic">onnume theriyalaye!</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white font-grotesk font-semibold text-sm hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            ← Home Page ku Po
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-grotesk font-semibold text-sm hover:bg-white/10 transition-all duration-200"
          >
            📞 Contact Panna
          </Link>
        </div>

      </div>
    </main>
  );
}
