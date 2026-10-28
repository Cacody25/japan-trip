import React from "react";
import {
  Plane,
  Train,
  Utensils,
  ShoppingBag,
  Watch,
  Sparkles,
  Landmark,
  Trees,
  Moon,
  Info,
  MapPin,
} from "lucide-react";

const ICONS = {
  transit: Plane,
  train: Train,
  food: Utensils,
  shop: ShoppingBag,
  watch: Watch,
  tcg: Sparkles,
  sight: Landmark,
  nature: Trees,
  rest: Moon,
  note: Info,
};

export default function StopRow({ stop }) {
  const Icon = ICONS[stop.kind] || MapPin;
  return (
    <div className="flex gap-3">
      <div className="w-[74px] shrink-0 pt-[3px] text-right md:w-[58px] md:pt-[2px]">
        {stop.time ? (
          <span className="text-[10px] uppercase leading-tight tracking-[0.14em] text-gold/85 tabular-nums">{stop.time}</span>
        ) : null}
      </div>
      <div className="relative flex-1 border-l border-white/10 pb-6 pl-4 md:pb-4">
        <span className="absolute -left-[9px] top-[3px] flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/10 bg-card">
          <Icon className="h-[10px] w-[10px] text-gold" strokeWidth={1.8} />
        </span>
        <h3 className="text-[14.5px] font-medium leading-snug text-foreground md:text-[13.5px]">{stop.title}</h3>
        {stop.detail ? (
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground md:text-[11.5px]">{stop.detail}</p>
        ) : null}
        {stop.image ? (
          <div className="mt-3 inline-block rounded-xl bg-white p-3">
            <img
              src={`${import.meta.env.BASE_URL}${String(stop.image).replace(/^\//, "")}`}
              alt={stop.imageAlt || stop.title}
              className="h-auto w-[168px] max-w-full"
              decoding="async"
            />
          </div>
        ) : null}
        {stop.items?.length ? (
          <ul className="mt-2.5 space-y-1.5">
            {stop.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-[12.5px] leading-relaxed text-muted-foreground md:text-[11.5px]">
                <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-vermilion/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}