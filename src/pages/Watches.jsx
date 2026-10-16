import React from "react";
import { watchAreas } from "@/data/watches";
import SectionHeading from "@/components/SectionHeading";
import WatchCard from "@/components/WatchCard";

export default function Watches() {
  return (
    <>
      <SectionHeading
        eyebrow="Directory"
        title="Watch Stores"
        subtitle="Every watch stop from the trip, grouped by area — Day 11 is the big one."
      />

      <div className="grid gap-9 px-5 pt-8 md:grid-cols-2 md:gap-8 md:px-8 lg:grid-cols-3">
        {watchAreas.map((area) => (
          <section key={area.id}>
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-[19px] leading-snug text-foreground md:text-[17px]">{area.area}</h2>
              {area.hub ? (
                <span className="shrink-0 rounded-full border border-vermilion/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-vermilion">
                  Day 11 hub
                </span>
              ) : null}
            </div>
            <p className="mt-1.5 text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">{area.place}</p>
            <div className="mt-4 space-y-3">
              {area.stores.map((store) => (
                <WatchCard key={`${area.id}-${store.name}`} store={store} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}