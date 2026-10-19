import React from "react";
import { Utensils, Heart, Music, Wine, MapPin, Clock, TrainFront } from "lucide-react";

export default function FoodCard({ spot, tone = "food" }) {
  const Icon = tone === "mom" ? Heart : tone === "cafe" ? Music : tone === "bar" ? Wine : Utensils;
  const iconClass = tone === "mom" || tone === "cafe" || tone === "bar" ? "text-gold" : "text-vermilion";

  return (
    <article className="rounded-2xl border border-white/[0.07] bg-card/60 p-5 md:p-4">
      <div className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
          <Icon className={`h-3.5 w-3.5 ${iconClass}`} strokeWidth={1.6} />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[15px] font-medium leading-snug text-foreground md:text-[13.5px]">{spot.name}</h3>
            {spot.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-1.5 text-[10.5px] uppercase tracking-[0.18em] text-gold/85">{spot.area}</p>
          <p className="mt-2.5 flex items-start gap-1.5 text-[12.5px] leading-relaxed text-muted-foreground md:text-[11.5px]">
            <MapPin className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.7} />
            <span>{spot.address}</span>
          </p>
          {spot.access ? (
            <p className="mt-1.5 flex items-start gap-1.5 text-[12.5px] leading-relaxed text-muted-foreground md:text-[11.5px]">
              <TrainFront className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.7} />
              <span>{spot.access}</span>
            </p>
          ) : null}
          {spot.hours ? (
            <p className="mt-1.5 flex items-start gap-1.5 text-[12.5px] leading-relaxed text-muted-foreground md:text-[11.5px]">
              <Clock className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.7} />
              <span>{spot.hours}</span>
            </p>
          ) : null}
          {spot.note ? (
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground md:mt-2 md:text-[11.5px]">{spot.note}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
