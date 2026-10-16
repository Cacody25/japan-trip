import React from "react";
import { PLACE_KINDS } from "@/data/mapPlaces";

const ORDER = ["stay", "sight", "nature", "shop", "food", "watch"];

export default function MapLegend({ count }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
      {ORDER.map((key) => (
        <span
          key={key}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
        >
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: PLACE_KINDS[key].color }}
          />
          {PLACE_KINDS[key].label}
        </span>
      ))}
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">{count} places</span>
    </div>
  );
}