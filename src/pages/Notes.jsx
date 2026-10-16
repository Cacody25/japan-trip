import React from "react";
import { noteSections } from "@/data/notes";
import SectionHeading from "@/components/SectionHeading";

export default function Notes() {
  return (
    <>
      <SectionHeading
        eyebrow="Reference"
        title="Notes"
        subtitle="Etiquette, city hacks, the retail chains worth a stop, and the konbini checklist."
      />

      <div className="grid gap-4 px-5 pt-7 md:grid-cols-2 md:px-8">
        {noteSections.map((section) => (
          <section key={section.id} className="rounded-3xl border border-white/[0.07] bg-card/60 p-6">
            <h2 className="font-display text-[20px] leading-snug text-foreground">{section.title}</h2>
            {section.subtitle ? <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{section.subtitle}</p> : null}

            <div className="mt-5 space-y-6">
              {section.groups.map((group, gi) => (
                <div key={`${section.id}-${gi}`}>
                  {group.heading ? (
                    <h3 className="text-[10.5px] uppercase tracking-[0.22em] text-gold">{group.heading}</h3>
                  ) : null}

                  {group.bullets?.length ? (
                    <ul className="mt-3 space-y-2.5">
                      {group.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-[12.5px] leading-relaxed text-muted-foreground">
                          <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-vermilion/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {group.items?.length ? (
                    <dl className="mt-3 space-y-3.5">
                      {group.items.map((item) => (
                        <div key={item.label}>
                          <dt className="text-[13.5px] font-medium text-foreground">{item.label}</dt>
                          <dd className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{item.text}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}