import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { days, trip } from "@/data/itinerary";
import DayCard from "@/components/DayCard";
import LockScreen from "@/components/LockScreen";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export default function Days() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [locked, setLocked] = useState(false);
  const day = days[index];

  const step = useCallback((delta) => {
    setDir(delta);
    setIndex((i) => (i + delta + days.length) % days.length);
  }, []);

  const jump = (target) => {
    setDir(target > index ? 1 : -1);
    setIndex(target);
  };

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "Escape") setLocked(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  return (
    <>
      <SectionHeading
        eyebrow={trip.name}
        title={trip.range}
        subtitle="Swipe the card, tap the arrows, or jump with the rail below."
      />

      <div className="px-5 pt-7 md:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: dir * 42 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -42 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragEnd={(event, info) => {
              if (info.offset.x < -70) step(1);
              else if (info.offset.x > 70) step(-1);
            }}
          >
            <DayCard day={day} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => step(-1)}
            aria-label="Previous day"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.7} />
          </button>

          <div className="flex items-center gap-1.5">
            {days.map((d, i) => (
              <button
                key={d.n}
                onClick={() => jump(i)}
                aria-label={`Day ${d.n}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-vermilion" : "w-1.5 bg-white/15 hover:bg-white/30",
                )}
              />
            ))}
          </div>

          <button
            onClick={() => step(1)}
            aria-label="Next day"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.7} />
          </button>
        </div>

        <button
          onClick={() => setLocked(true)}
          className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-card/60 py-4 text-[10.5px] uppercase tracking-[0.28em] text-gold transition-colors hover:border-gold/40"
        >
          <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.7} />
          Lock screen view
        </button>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
          Fills your phone screen for a clean screenshot. The top stays clear so your own clock sits above the day.
        </p>
      </div>

      <AnimatePresence>
        {locked ? (
          <LockScreen
            day={day}
            total={days.length}
            onClose={() => setLocked(false)}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}