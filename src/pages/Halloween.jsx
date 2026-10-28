import React, { useEffect, useState } from "react";
import { Ghost, Volume2, Square } from "lucide-react";
import { halloweenPacks, halloweenPitch } from "@/data/halloween";
import SectionHeading from "@/components/SectionHeading";
import { speakJapanese, stopSpeaking } from "@/lib/speakJapanese";

export default function Halloween() {
  const [speaking, setSpeaking] = useState(false);
  const [speechNote, setSpeechNote] = useState("");

  useEffect(() => () => stopSpeaking(), []);

  function toggleSpeak() {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }

    setSpeechNote("");
    speakJapanese(halloweenPitch.jp, {
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
      onError: () => {
        setSpeaking(false);
        setSpeechNote("Speech isn’t available here — show the Japanese text instead.");
      },
    });
  }

  return (
    <>
      <SectionHeading
        eyebrow="Trick or Trade"
        title="Halloween!"
        subtitle="Hand someone a pack, play the pitch, then show them the hit list."
      />

      <div className="px-5 pt-8 md:px-8">
        <section className="mx-auto max-w-[560px] rounded-[28px] border border-white/[0.07] bg-card/60 p-6">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <Ghost className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
            </span>
            <div className="min-w-0">
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">Handing out packs</p>
              <h2 className="mt-1.5 font-display text-[22px] leading-snug text-foreground">{halloweenPitch.title}</h2>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{halloweenPitch.blurb}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleSpeak}
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl border border-vermilion/50 bg-vermilion/15 py-4 text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-vermilion/25"
          >
            {speaking ? (
              <>
                <Square className="h-3.5 w-3.5" strokeWidth={1.8} />
                Stop
              </>
            ) : (
              <>
                <Volume2 className="h-3.5 w-3.5" strokeWidth={1.7} />
                Speak Japanese
              </>
            )}
          </button>
          {speechNote ? (
            <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">{speechNote}</p>
          ) : (
            <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
              Uses your phone’s Japanese voice when installed.
            </p>
          )}

          <div className="mt-6 space-y-5 border-t border-white/[0.06] pt-5">
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">Japanese</p>
              <p className="mt-2 text-[17px] leading-[1.7] text-foreground">{halloweenPitch.jp}</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">Romaji</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gold">{halloweenPitch.romaji}</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">English</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{halloweenPitch.en}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-4 px-5 pt-5 md:grid-cols-2 md:gap-5 md:px-8 md:pt-6">
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
