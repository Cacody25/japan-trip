import React from "react";
import { QrCode } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const qrSrc = `${import.meta.env.BASE_URL}visit-japan-web-qr.png`;

export default function Entry() {
  return (
    <>
      <SectionHeading
        eyebrow="Arrival"
        title="Visit Japan Web"
        subtitle="Show this QR at immigration and customs when you land — turn brightness up."
      />

      <div className="px-5 pt-8 md:px-8">
        <section className="mx-auto max-w-[420px] rounded-[28px] border border-white/[0.07] bg-card/60 p-6">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <QrCode className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
            </span>
            <div className="min-w-0">
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold/85">Day 1 · Airport</p>
              <h2 className="mt-1.5 font-display text-[22px] leading-snug text-foreground">Entry QR</h2>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                Visit Japan Web registration for immigration and customs. Hold the phone steady at the scanner.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-5">
            <img
              src={qrSrc}
              alt="Visit Japan Web entry QR code"
              width={300}
              height={300}
              className="mx-auto h-auto w-full max-w-[280px]"
              decoding="async"
            />
          </div>

          <ol className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5 text-[12.5px] leading-relaxed text-muted-foreground">
            <li className="flex gap-2.5">
              <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-vermilion/70" />
              <span>Open this screen before you reach the immigration queue.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-vermilion/70" />
              <span>Max brightness helps the reader pick it up cleanly.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-vermilion/70" />
              <span>Same code works for the customs declaration step after baggage.</span>
            </li>
          </ol>
        </section>
      </div>
    </>
  );
}
