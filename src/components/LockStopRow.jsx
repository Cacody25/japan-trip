import React from "react";

export default function LockStopRow({ stop }) {
  return (
    <div className="flex items-baseline gap-3.5">
      <span className="w-[58px] shrink-0 text-right text-[9.5px] uppercase leading-tight tracking-[0.14em] text-gold/75 tabular-nums">
        {stop.time}
      </span>
      <span className="text-[13.5px] leading-snug text-white/90">{stop.title}</span>
    </div>
  );
}