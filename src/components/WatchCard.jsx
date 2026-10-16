import React from "react";
import { Watch, MapPin } from "lucide-react";

export default function WatchCard({ store }) {
  return (
    <article className="rounded-2xl border border-white/[0.07] bg-card/60 p-5 md:p-4">
      <div className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
          <Watch className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
        </span>
        <div className="min-w-0">
          <h3 className="text-[15px] font-medium leading-snug text-foreground md:text-[13.5px]">{store.name}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground md:mt-1">
            <MapPin className="h-3 w-3 shrink-0" strokeWidth={1.7} />
            {store.location}
          </p>
          <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground md:mt-2 md:text-[11.5px]">{store.note}</p>
          {store.extra ? <p className="mt-2 text-[12.5px] leading-relaxed text-gold/85">{store.extra}</p> : null}
        </div>
      </div>
    </article>
  );
}