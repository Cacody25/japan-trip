import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import LockStopRow from "@/components/LockStopRow";

export default function LockScreen({ day, total, onClose, onPrev, onNext }) {
  const [chrome, setChrome] = useState(true);

  useEffect(() => {
    setChrome(true);
    const timer = setTimeout(() => setChrome(false), 3200);
    return () => clearTimeout(timer);
  }, [day.n]);

  const rows = day.stops.slice(0, 7);
  const extra = day.stops.length - rows.length;

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
        style={{ background: `radial-gradient(120% 68% at 50% -12%, ${day.accent}38 0%, transparent 62%)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(85% 45% at 50% 110%, ${day.accent}1f 0%, transparent 62%)` }}
      />

      <div className="relative mx-auto flex h-[100dvh] w-full max-w-[440px] flex-col px-7 pb-9 pt-[15vh]">
        <span className="pointer-events-none absolute -bottom-8 right-2 font-display text-[150px] leading-none text-white/[0.035]">
          {String(day.n).padStart(2, "0")}
        </span>

        <div className="border-l border-vermilion/70 pl-5">
          <p className="text-[10px] uppercase tracking-[0.36em] text-gold/85">
            Day {String(day.n).padStart(2, "0")} · {day.weekday}
          </p>
          <p className="mt-3 font-display text-[12px] uppercase tracking-[0.3em] text-white/45">{day.dateLabel} 2026</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-[27px] leading-[1.22] text-white">{day.title}</h2>
        </div>

        <div className="mt-9 flex-1 overflow-hidden">
          <div className="space-y-3.5 border-l border-white/[0.14] pl-5">
            {rows.map((stop, i) => (
              <LockStopRow key={`${day.n}-${i}`} stop={stop} />
            ))}
          </div>
          {extra > 0 ? (
            <p className="mt-4 pl-5 text-[10px] uppercase tracking-[0.2em] text-white/35">+ {extra} more</p>
          ) : null}
        </div>

        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-white/25">
          <span>Japan 2026</span>
          <span>
            {String(day.n).padStart(2, "0")} / {total}
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
          aria-label="Previous day"
          className="pointer-events-auto absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/45"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={onNext}
          aria-label="Next day"
          className="pointer-events-auto absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/45"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </motion.div>
  );
}