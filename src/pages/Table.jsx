import React from "react";
import { UtensilsCrossed } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { tableMoments } from "@/data/table";

export default function Table() {
  return (
    <>
      <SectionHeading
        eyebrow="Sit down"
        title="Table"
        subtitle="Four lines for the meal — before, cheers, compliment, thank-you."
      />

      <div className="grid gap-3 px-5 pt-8 md:grid-cols-2 md:gap-4 md:px-8">
        {tableMoments.map((moment) => (
          <section key={moment.id} className="rounded-3xl border border-white/[0.07] bg-card/60 p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <UtensilsCrossed className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">{moment.when}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{moment.do}</p>
              </div>
            </div>

            <div className="mt-5 border-t border-white/[0.06] pt-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{moment.en}</p>
              <p className="mt-1.5 text-[22px] leading-snug text-foreground">{moment.jp}</p>
              <p className="mt-1 text-[14px] text-gold">{moment.romaji}</p>
              <p className="mt-0.5 text-[12px] italic text-muted-foreground">{moment.say}</p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
