import React from "react";

export default function KonbiniCard({ scenario }) {
  return (
    <article className="rounded-3xl border border-white/[0.07] bg-card/60 p-6 md:p-5">
      <div className="flex items-baseline gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-vermilion">
          {String(scenario.n).padStart(2, "0")}
        </span>
        <h3 className="text-[12px] uppercase tracking-[0.2em] text-muted-foreground">{scenario.topic}</h3>
      </div>

      <p className="mt-5 text-[10.5px] uppercase tracking-[0.2em] text-gold/85">Clerk asks</p>
      <p className="mt-2 text-[19px] leading-snug text-foreground md:text-[17px]">{scenario.clerk.kana}</p>
      <p className="mt-1.5 text-[13px] text-gold">{scenario.clerk.romaji}</p>
      <p className="mt-1 text-[12.5px] italic leading-relaxed text-muted-foreground">
        {scenario.clerk.say} — {scenario.clerk.meaning}
      </p>

      <p className="mt-6 text-[10.5px] uppercase tracking-[0.2em] text-gold/85">You say</p>
      <ul className="mt-2.5 space-y-3">
        {scenario.replies.map((reply) => (
          <li key={reply.romaji + reply.when} className="rounded-2xl bg-white/[0.03] px-4 py-3.5">
            {reply.when ? (
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">{reply.when}</p>
            ) : null}
            <p className="mt-1.5 text-[19px] leading-snug text-foreground md:text-[17px]">{reply.kana}</p>
            <p className="mt-1 text-[13px] text-gold">{reply.romaji}</p>
            <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground">{reply.meaning}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}