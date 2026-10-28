import React from "react";
import { Gift } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { gifts } from "@/data/gifts";

export default function Gifts() {
  return (
    <>
      <SectionHeading
        eyebrow="Bring home"
        title="Gifts!"
        subtitle="Things to hunt for — add more anytime."
      />

      <div className="grid gap-3 px-5 pt-8 md:grid-cols-2 md:gap-4 md:px-8">
        {gifts.map((gift, index) => (
          <section key={gift.id} className="rounded-3xl border border-white/[0.07] bg-card/60 p-5">
            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Gift className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">
                  Gift {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1.5 font-display text-[22px] leading-snug text-foreground">{gift.name}</h2>
                {gift.note ? (
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{gift.note}</p>
                ) : null}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
