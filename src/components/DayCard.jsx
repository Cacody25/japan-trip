import React from "react";
import StopRow from "@/components/StopRow";

export default function DayCard({ day }) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-card/70">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[240px]"
        style={{ background: `radial-gradient(95% 100% at 10% 0%, ${day.accent}2b 0%, transparent 68%)` }}
      />
      <div className="relative px-6 pb-7 pt-7 md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-10 md:px-8 md:py-8">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.34em] text-vermilion">
              Day {String(day.n).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{day.city}</span>
          </div>
          <p className="mt-5 text-[10.5px] uppercase tracking-[0.26em] text-gold md:mt-4">
            {day.weekday} · {day.dateLabel}
          </p>
          <h2 className="mt-2.5 font-display text-[26px] leading-[1.18] text-foreground md:text-[24px]">{day.title}</h2>
          {day.blurb ? <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">{day.blurb}</p> : null}
        </div>
        <div className="mt-7 md:mt-0">
          {day.stops.map((stop, i) => (
            <StopRow key={`${day.n}-${i}`} stop={stop} />
          ))}
        </div>
      </div>
    </article>
  );
}