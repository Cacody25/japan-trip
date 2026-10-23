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
import { pokefutaMapPlaces } from "@/data/pokefuta";
import { skinMapPlaces } from "@/data/skin";
import { recordMapPlaces } from "@/data/records";
import { bookOffMapPlaces } from "@/data/bookoffs";
import { shrineMapPlaces, templeMapPlaces } from "@/data/shrines";
import { days as itineraryDays } from "@/data/itinerary";
import { cn } from "@/lib/utils";

const LAYERS = [
  { id: "food", label: "Food!", places: foodMapPlaces },
  { id: "mom", label: "Mom+Pop", places: momAndPopMapPlaces },
  { id: "jazz", label: "Jazz", places: jazzCafeMapPlaces },
  { id: "bars", label: "Bars", places: barMapPlaces },
  { id: "poke", label: "Poke!", places: [...pokeMapPlaces, ...pokefutaMapPlaces] },
  { id: "skin", label: "Skin", places: skinMapPlaces },
  { id: "records", label: "Records!", places: recordMapPlaces },
  { id: "bookoff", label: "Book Off", places: bookOffMapPlaces },
  { id: "shrine", label: "Shrines", places: shrineMapPlaces },
  { id: "temple", label: "Temples", places: templeMapPlaces },
];

const INITIAL_LAYERS = Object.fromEntries(LAYERS.map((layer) => [layer.id, true]));

export default function MapPage() {
  const [day, setDay] = useState("all");
  const [layers, setLayers] = useState(INITIAL_LAYERS);
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const dayOptions = useMemo(
    () => [{ value: "all", label: "All days" }, ...itineraryDays.map((item) => ({ value: item.n, label: `Day ${item.n}` }))],
    [],
  );

  const shown = useMemo(() => {
    const onThisDay = (place) => day === "all" || place.days.includes(day);
    const base = mapPlaces.filter((place) => {
      if (!onThisDay(place)) return false;
      if (!layers.food && place.kind === "food") return false;
      return true;
    });
    const extras = LAYERS.flatMap((layer) => (layers[layer.id] ? layer.places.filter(onThisDay) : []));
    return [...base, ...extras];
  }, [day, layers]);

  const toggleLayer = (id) => {
    setLayers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
  }, [updateScrollState, dayOptions.length]);

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
        subtitle="All days, or one day. Each row of switches turns a list on or off without hiding the sights. Positions are approximate, for orientation."
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
            {dayOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setDay(option.value)}
                className={cn(
                  "shrink-0 rounded-full border px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.14em] transition-colors",
                  day === option.value
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
        <div className="mt-2 flex flex-wrap gap-2">
          {LAYERS.map((layer) => (
            <button
              key={layer.id}
              type="button"
              aria-pressed={layers[layer.id]}
              onClick={() => toggleLayer(layer.id)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.14em] transition-colors",
                layers[layer.id]
                  ? "border-gold/50 bg-gold/15 text-foreground"
                  : "border-white/10 text-muted-foreground/50 line-through hover:text-foreground/80",
              )}
            >
              {layer.label}
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
