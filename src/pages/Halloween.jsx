import React from "react";
import { Ghost } from "lucide-react";
import { halloweenPacks } from "@/data/halloween";
import SectionHeading from "@/components/SectionHeading";

export default function Halloween() {
  return (
    <>
      <SectionHeading
        eyebrow="Trick or Trade"
        title="Halloween!"
        subtitle="Packs you're handing out — show people the English name, then the Japanese so they know what they pulled."
      />

      <div className="grid gap-4 px-5 pt-8 md:grid-cols-2 md:gap-5 md:px-8">
        {halloweenPacks.map((pack) => (
          <section key={pack.id} className="rounded-3xl border border-white/[0.07] bg-card/60 p-6">
            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Ghost className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">{pack.year}</p>
                <h2 className="mt-1.5 font-display text-[22px] leading-snug text-foreground">{pack.title}</h2>
                <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{pack.blurb}</p>
              </div>
            </div>

            <ol className="mt-6 space-y-4 border-t border-white/[0.06] pt-5">
              {pack.hits.map((hit) => (
                <li key={`${pack.id}-${hit.rank}`} className="flex gap-3.5">
                  <span className="mt-0.5 w-5 shrink-0 text-[11px] tabular-nums text-muted-foreground/70">{hit.rank}</span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-medium leading-snug text-foreground">{hit.en}</p>
                    <p className="mt-1 whitespace-nowrap text-[15px] leading-snug text-foreground/90">{hit.jp}</p>
                    <p className="mt-1 text-[11.5px] tracking-wide text-muted-foreground">{hit.romaji}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  );
}
