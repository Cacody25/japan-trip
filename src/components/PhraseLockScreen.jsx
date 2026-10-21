import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PhraseLockScreen({ screen, index, total, onClose, onPrev, onNext }) {
  const [chrome, setChrome] = useState(true);

  useEffect(() => {
    setChrome(true);
    const timer = setTimeout(() => setChrome(false), 3200);
    return () => clearTimeout(timer);
  }, [screen.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.12}
      onDragEnd={(event, info) => {
        if (info.offset.x < -70) onNext();
        else if (info.offset.x > 70) onPrev();
      }}
      onTap={() => setChrome((value) => !value)}
      className="fixed inset-0 z-50 overflow-hidden bg-[#07080b]"
    >
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(120% 68% at 50% -12%, ${screen.accent}38 0%, transparent 62%)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(85% 45% at 50% 110%, ${screen.accent}1f 0%, transparent 62%)` }}
      />

      <div className="relative mx-auto flex h-[100dvh] w-full max-w-[440px] flex-col px-5 pb-8 pt-[15vh]">
        <div className="border-l border-vermilion/70 pl-5">
          <p className="text-[10px] uppercase tracking-[0.36em] text-gold/85">Phrases</p>
          <h2 className="mt-3 font-display text-[28px] leading-none text-white">{screen.title}</h2>
        </div>

        <div className="mt-8 flex-1 overflow-hidden">
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 border-l border-white/[0.14] pl-3">
            {screen.lines.map((line) => (
              <div key={`${screen.id}-${line.en}`} className="min-w-0">
                <span className="block text-[9px] uppercase leading-tight tracking-[0.12em] text-gold/75">{line.en}</span>
                <span className="mt-1 block whitespace-nowrap text-[15px] leading-snug text-white/92">{line.jp}</span>
                <span className="mt-0.5 block text-[11px] leading-snug text-white/45">{line.romaji}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-white/25">
          <span>Japan 2026</span>
          <span>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 mx-auto w-full max-w-[440px] transition-opacity duration-500",
          chrome ? "opacity-100" : "opacity-0",
        )}
      >
        <button
          onClick={onClose}
          aria-label="Close lock screen"
          className="pointer-events-auto absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur"
        >
          <X className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          onClick={onPrev}
          aria-label="Previous phrase screen"
          className="pointer-events-auto absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/45"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={onNext}
          aria-label="Next phrase screen"
          className="pointer-events-auto absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/45"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </motion.div>
  );
}
