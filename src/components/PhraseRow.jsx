import React from "react";

export default function PhraseRow({ en, jp, romaji, say, meaning }) {
  return (
    <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start gap-3 border-b border-white/[0.06] py-4 last:border-b-0 md:gap-4 md:py-2.5">
      <div className="min-w-0">
        {en ? <p className="text-[11px] uppercase leading-snug tracking-[0.16em] text-muted-foreground md:text-[10px]">{en}</p> : null}
        {meaning ? (
          <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground md:mt-1 md:text-[11px]">{meaning}</p>
        ) : null}
      </div>
      <div className="min-w-0">
        {jp ? <p className="text-[18px] leading-snug text-foreground md:text-[17px]">{jp}</p> : null}
        {romaji ? <p className="mt-1 text-[13px] leading-relaxed text-gold md:text-[12px]">{romaji}</p> : null}
        {say ? (
          <p className="mt-0.5 text-[11.5px] italic leading-relaxed text-muted-foreground md:text-[11px]">{say}</p>
        ) : null}
      </div>
    </div>
  );
}