import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PhraseRow from "@/components/PhraseRow";
import KonbiniCard from "@/components/KonbiniCard";
import Panel from "@/components/Panel";
import PhraseLockScreen from "@/components/PhraseLockScreen";
import { cn } from "@/lib/utils";
import {
  konbiniScenarios,
  everydayPhrases,
  helpPhrases,
  diningPhrases,
  diningWords,
  diningCustoms,
  foodVocab,
  tcgPhrases,
  pokemonNames,
  currency,
  phraseLockScreens,
} from "@/data/phrases";

const CATEGORIES = [
  { id: "konbini", label: "Konbini" },
  { id: "everyday", label: "Everyday" },
  { id: "help", label: "Help" },
  { id: "dining", label: "Dining" },
  { id: "food", label: "Food" },
  { id: "tcg", label: "Pokémon" },
  { id: "money", label: "Money" },
];

const TWO_COL = "md:grid md:grid-cols-2 md:gap-x-8 md:px-6";
const THREE_COL = "md:grid md:grid-cols-3 md:gap-x-6 md:px-6";

export default function Translate() {
  const [active, setActive] = useState("konbini");
  const [locked, setLocked] = useState(false);
  const [lockIndex, setLockIndex] = useState(0);
  const screen = phraseLockScreens[lockIndex];

  const stepLock = useCallback((delta) => {
    setLockIndex((i) => (i + delta + phraseLockScreens.length) % phraseLockScreens.length);
  }, []);

  useEffect(() => {
    if (!locked) return undefined;
    const onKey = (event) => {
      if (event.key === "ArrowRight") stepLock(1);
      else if (event.key === "ArrowLeft") stepLock(-1);
      else if (event.key === "Escape") setLocked(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locked, stepLock]);

  return (
    <>
      <SectionHeading
        eyebrow="Quick sheet"
        title="Translate"
        subtitle="What the clerk asks and what you say back — plus the phrases you'll reach for all day."
      />

      <div className="px-5 pt-6 md:px-8">
        <button
          onClick={() => setLocked(true)}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-card/60 py-4 text-[10.5px] uppercase tracking-[0.28em] text-gold transition-colors hover:border-gold/40"
        >
          <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.7} />
          Lock screen phrases
        </button>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
          Four screens — hello, stuck, shop & eat, Pokémon. The top stays clear so your clock sits above the phrases.
        </p>
      </div>

      <div className="sticky top-0 z-30 mt-5 border-b border-white/[0.06] bg-background/85 px-5 py-3 backdrop-blur-xl md:px-8">
        <div className="flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.14em] transition-colors",
                active === category.id
                  ? "border-vermilion/60 bg-vermilion/15 text-foreground"
                  : "border-white/10 text-muted-foreground hover:text-foreground/80",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pt-6 md:px-8 md:pt-5">
        {active === "konbini" ? (
          <div className="grid gap-4 md:grid-cols-2">
            {konbiniScenarios.map((scenario) => (
              <KonbiniCard key={scenario.n} scenario={scenario} />
            ))}
          </div>
        ) : null}

        {active === "everyday" ? (
          <Panel className={TWO_COL}>
            {everydayPhrases.map((phrase) => (
              <PhraseRow key={phrase.jp} en={phrase.en} jp={phrase.jp} romaji={phrase.romaji} say={phrase.say} />
            ))}
          </Panel>
        ) : null}

        {active === "help" ? (
          <Panel className={TWO_COL}>
            {helpPhrases.map((phrase) => (
              <PhraseRow
                key={phrase.romaji}
                en={phrase.en}
                jp={phrase.jp}
                romaji={phrase.romaji}
                say={phrase.say}
                meaning={phrase.meaning}
              />
            ))}
          </Panel>
        ) : null}

        {active === "dining" ? (
          <div className="space-y-4">
            <Panel className={TWO_COL}>
              {diningPhrases.map((phrase) => (
                <PhraseRow
                  key={phrase.romaji}
                  en={phrase.en}
                  jp={phrase.jp}
                  romaji={phrase.romaji}
                  meaning={phrase.meaning}
                />
              ))}
            </Panel>
            <div className="grid gap-4 md:grid-cols-2">
              <Panel>
                <h3 className="pt-5 text-[10.5px] uppercase tracking-[0.22em] text-gold">Customs</h3>
                <ul className="space-y-3 py-5">
                  {diningCustoms.map((custom) => (
                    <li key={custom} className="flex gap-3 text-[12.5px] leading-relaxed text-muted-foreground md:text-[11.5px]">
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-vermilion/70" />
                      <span>{custom}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
              <Panel>
                {diningWords.map((word) => (
                  <PhraseRow key={word.romaji} en={word.en} jp={word.jp} romaji={word.romaji} meaning={word.meaning} />
                ))}
              </Panel>
            </div>
          </div>
        ) : null}

        {active === "food" ? (
          <Panel className={THREE_COL}>
            {foodVocab.map((item) => (
              <PhraseRow key={item.en} en={item.en} jp={item.jp} romaji={item.romaji} />
            ))}
          </Panel>
        ) : null}

        {active === "tcg" ? (
          <div className="space-y-4">
            <Panel className={TWO_COL}>
              {tcgPhrases.map((phrase) => (
                <PhraseRow key={phrase.romaji} en={phrase.en} jp={phrase.jp} romaji={phrase.romaji} />
              ))}
            </Panel>
            <Panel>
              <h3 className="pt-5 text-[10.5px] uppercase tracking-[0.22em] text-gold">Pokémon names</h3>
              <div className="pb-2 md:grid md:grid-cols-3 md:gap-x-6">
                {pokemonNames.map((mon) => (
                  <PhraseRow key={mon.en} en={mon.en} jp={mon.jp} romaji={mon.romaji} />
                ))}
              </div>
            </Panel>
          </div>
        ) : null}

        {active === "money" ? (
          <Panel>
            <h3 className="pt-5 text-[10.5px] uppercase tracking-[0.22em] text-gold">USD to JPY</h3>
            <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-6">
              {currency.rows.map((row) => (
                <div
                  key={row.usd}
                  className="flex items-baseline justify-between border-b border-white/[0.06] py-3.5 last:border-b-0 md:py-2.5"
                >
                  <span className="text-[13px] text-muted-foreground">{row.usd}</span>
                  <span className="text-[17px] text-foreground tabular-nums md:text-[15px]">{row.jpy}</span>
                </div>
              ))}
            </div>
            <p className="pb-5 text-[11.5px] leading-relaxed text-muted-foreground">{currency.note}</p>
          </Panel>
        ) : null}
      </div>

      <AnimatePresence>
        {locked ? (
          <PhraseLockScreen
            screen={screen}
            index={lockIndex}
            total={phraseLockScreens.length}
            onClose={() => setLocked(false)}
            onPrev={() => stepLock(-1)}
            onNext={() => stepLock(1)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}