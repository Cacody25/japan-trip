import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appIcons, dockApps } from "@/data/apps";
import { trip } from "@/data/itinerary";

function AppTile({ app, showLabel = true }) {
  const { to, label, Icon, color } = app;
  return (
    <Link to={to} className="group flex flex-col items-center gap-2">
      <span
        className="relative flex h-[62px] w-[62px] items-center justify-center overflow-hidden rounded-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 group-active:scale-90"
        style={{ backgroundColor: color }}
      >
        <span className="absolute inset-0 bg-gradient-to-b from-white/25 to-black/35" />
        <Icon className="relative h-7 w-7 text-white drop-shadow" strokeWidth={1.7} />
      </span>
      {showLabel ? (
        <span className="max-w-[72px] truncate text-center text-[11px] font-medium leading-tight text-foreground/95">
          {label}
        </span>
      ) : null}
    </Link>
  );
}

const CLOCKS = [
  { id: "local", label: "California", zone: "America/Los_Angeles" },
  { id: "tokyo", label: "Tokyo", zone: "Asia/Tokyo" },
];

function formatClock(now, timeZone) {
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
  }).format(now);

  const date = new Intl.DateTimeFormat("en-US", {
    timeZone,
    month: "long",
    day: "numeric",
  }).format(now);

  return { time, weekday, date };
}

export default function Home() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-[100dvh] overflow-hidden px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(228,87,61,0.28) 0%, transparent 55%), radial-gradient(90% 60% at 100% 40%, rgba(76,127,209,0.18) 0%, transparent 50%), radial-gradient(80% 50% at 0% 80%, rgba(224,176,74,0.12) 0%, transparent 45%), linear-gradient(180deg, #0b0c10 0%, #141821 55%, #0b0c10 100%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[420px] flex-col">
        <header className="pt-6 text-center">
          <div className="grid grid-cols-2 gap-4">
            {CLOCKS.map((clock) => {
              const { time, weekday, date } = formatClock(now, clock.zone);
              return (
                <div key={clock.id} className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{clock.label}</p>
                  <p className="mt-2 text-[34px] font-light leading-none tracking-tight text-foreground tabular-nums sm:text-[38px]">
                    {time}
                  </p>
                  <p className="mt-2.5 text-[12px] font-medium leading-tight text-foreground/90">{weekday}</p>
                  <p className="mt-0.5 text-[12px] leading-tight text-muted-foreground">{date}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.28em] text-gold/85">{trip.name}</p>
          <p className="mt-1 text-[12px] text-muted-foreground">{trip.range}</p>
        </header>

        <div className="mt-10 grid grid-cols-4 gap-x-3 gap-y-6 px-1">
          {appIcons.map((app) => (
            <AppTile key={app.to} app={app} />
          ))}
        </div>

        <div className="mt-auto pt-12">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.08] px-4 py-3.5 backdrop-blur-2xl">
            <div className="grid grid-cols-4 gap-2">
              {dockApps.map((app) => (
                <AppTile key={`dock-${app.to}`} app={app} showLabel={false} />
              ))}
            </div>
          </div>
          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}
