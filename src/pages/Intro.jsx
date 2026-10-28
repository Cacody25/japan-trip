import React, { useEffect, useState } from "react";
import { HandHeart, Volume2, Square } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { introSpeech } from "@/data/intro";
import { speakJapanese, stopSpeaking } from "@/lib/speakJapanese";

export default function Intro() {
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
    speakJapanese(introSpeech.jp, {
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
        eyebrow="At the door"
        title="Intro!"
        subtitle={introSpeech.blurb}
      />

      <div className="px-5 pt-8 md:px-8">
        <section className="mx-auto max-w-[520px] rounded-[28px] border border-white/[0.07] bg-card/60 p-6">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <HandHeart className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
            </span>
            <div className="min-w-0">
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">Show this</p>
              <h2 className="mt-1.5 font-display text-[22px] leading-snug text-foreground">Door greeting</h2>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                Hold the phone up, then tap Speak so they hear native Japanese from your device.
              </p>
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
              Uses your phone’s Japanese voice when installed (iPhone: Settings → Accessibility → Spoken Content → Voices).
            </p>
          )}

          <div className="mt-6 space-y-5 border-t border-white/[0.06] pt-5">
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">Japanese</p>
              <p className="mt-2 text-[18px] leading-[1.7] text-foreground">{introSpeech.jp}</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">Romaji</p>
              <p className="mt-2 text-[14px] leading-relaxed text-gold">{introSpeech.romaji}</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">English</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{introSpeech.en}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
