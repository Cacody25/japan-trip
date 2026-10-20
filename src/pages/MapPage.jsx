import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceMap from "@/components/map/PlaceMap";
import MapLegend from "@/components/map/MapLegend";
import { mapPlaces } from "@/data/mapPlaces";
import { foodMapPlaces } from "@/data/food";
import { momAndPopMapPlaces } from "@/data/momAndPop";
import { jazzCafeMapPlaces } from "@/data/jazzCafes";
import { barMapPlaces } from "@/data/bars";
import { pokeMapPlaces } from "@/data/poke";
import { days as itineraryDays } from "@/data/itinerary";
import { cn } from "@/lib/utils";

const allPlaces = [
  ...mapPlaces,
  ...foodMapPlaces,
  ...momAndPopMapPlaces,
  ...jazzCafeMapPlaces,
  ...barMapPlaces,
  ...pokeMapPlaces,
];

export default function MapPage() {
  const [active, setActive] = useState("all");
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const dayOptions = useMemo(() => itineraryDays.map((day) => day.n), []);

  const shown = useMemo(() => {
    if (active === "all") return allPlaces;
    if (active === "food") return foodMapPlaces;
    if (active === "mom") return momAndPopMapPlaces;
    if (active === "jazz") return jazzCafeMapPlaces;
    if (active === "bars") return barMapPlaces;
    if (active === "poke") return pokeMapPlaces;
    return [
      ...mapPlaces.filter((place) => place.days.includes(active)),
      ...pokeMapPlaces.filter((place) => place.days.includes(active)),
      ...jazzCafeMapPlaces.filter((place) => place.days.includes(active)),
      ...foodMapPlaces.filter((place) => place.days.includes(active)),
      ...momAndPopMapPlaces.filter((place) => place.days.includes(active)),
    ];
  }, [active]);

  const options = useMemo(
    () => [
      { value: "all", label: "All" },
      { value: "food", label: "Food!" },
      { value: "mom", label: "Mom+Pop" },
      { value: "jazz", label: "Jazz" },
      { value: "bars", label: "Bars" },
      { value: "poke", label: "Poke!" },
      ...dayOptions.map((day) => ({ value: day, label: `Day ${day}` })),
    ],
    [dayOptions],
  );

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(max > 1 && el.scrollLeft < max - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const schedule = () => {
      requestAnimationFrame(updateScrollState);
    };

    const onWheel = (event) => {
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
      updateScrollState();
    };

    schedule();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", schedule);

    const observer = new ResizeObserver(schedule);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);

    document.fonts?.ready?.then(schedule);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [updateScrollState, options.length]);

  const scrollByAmount = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.max(180, el.clientWidth * 0.65), behavior: "smooth" });
  };

  return (
    <>
      <SectionHeading
        eyebrow="Reference"
        title="Map"
        subtitle="Planned stops plus Food!, Mom+Pop, Jazz, Bars, and Poke! — tap a dot to see what's there. Positions are approximate, for orientation."
      />

      <div className="sticky top-0 z-30 mt-5 border-b border-white/[0.06] bg-background/85 px-5 py-3 backdrop-blur-xl md:px-8">
        <div className="flex w-full min-w-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll filters left"
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors",
              canScrollLeft ? "hover:text-foreground" : "pointer-events-none opacity-25",
            )}
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.7} />
          </button>

          <div
            ref={scrollerRef}
            className="flex min-w-0 flex-1 gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin]"
          >
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

          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll filters right"
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors",
              canScrollRight ? "hover:text-foreground" : "pointer-events-none opacity-25",
            )}
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.7} />
          </button>
        </div>
      </div>

      <div className="px-5 pt-6 md:px-8">
        <PlaceMap places={shown} />
        <MapLegend count={shown.length} />
      </div>
    </>
  );
}
