import React, { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PlaceMap from "@/components/map/PlaceMap";
import MapLegend from "@/components/map/MapLegend";
import { mapPlaces } from "@/data/mapPlaces";
import { foodMapPlaces } from "@/data/food";
import { momAndPopMapPlaces } from "@/data/momAndPop";
import { cn } from "@/lib/utils";

const allPlaces = [...mapPlaces, ...foodMapPlaces, ...momAndPopMapPlaces];

export default function MapPage() {
  const [active, setActive] = useState("all");

  const dayOptions = useMemo(() => {
    const set = new Set();
    mapPlaces.forEach((place) => place.days.forEach((day) => set.add(day)));
    return [...set].sort((a, b) => a - b);
  }, []);

  const shown = useMemo(() => {
    if (active === "all") return allPlaces;
    if (active === "food") return foodMapPlaces;
    if (active === "mom") return momAndPopMapPlaces;
    return mapPlaces.filter((place) => place.days.includes(active));
  }, [active]);

  const options = useMemo(
    () => [
      { value: "all", label: "All" },
      { value: "food", label: "Food!" },
      { value: "mom", label: "Mom+Pop" },
      ...dayOptions.map((day) => ({ value: day, label: `Day ${day}` })),
    ],
    [dayOptions],
  );

  return (
    <>
      <SectionHeading
        eyebrow="Reference"
        title="Map"
        subtitle="Planned stops plus Food! and Mom+Pop backups — tap a dot to see what's there. Positions are approximate, for orientation."
      />

      <div className="sticky top-0 z-30 mt-5 border-b border-white/[0.06] bg-background/85 px-5 py-3 backdrop-blur-xl md:px-8">
        <div className="flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => setActive(option.value)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.14em] transition-colors",
                active === option.value
                  ? "border-vermilion/60 bg-vermilion/15 text-foreground"
                  : "border-white/10 text-muted-foreground hover:text-foreground/80",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pt-6 md:px-8">
        <PlaceMap places={shown} />
        <MapLegend count={shown.length} />
      </div>
    </>
  );
}
