import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import { appIcons } from "@/data/apps";

export default function AppDock() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const current = appIcons.find((app) => app.to === pathname);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
      <div className="mx-auto flex w-full max-w-[420px] items-center gap-3 rounded-full border border-white/10 bg-[#0b0c10]/88 px-2 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <Link
          to="/"
          aria-label="Home"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vermilion/20 text-foreground transition-colors hover:bg-vermilion/30"
        >
          <HomeIcon className="h-5 w-5" strokeWidth={1.7} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium text-foreground">{current?.label ?? "Japan 2026"}</p>
          <p className="truncate text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Tap home for all apps</p>
        </div>
        {current ? (
          <span
            className="relative mr-1 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[11px]"
            style={{ backgroundColor: current.color }}
          >
            <span className="absolute inset-0 bg-gradient-to-b from-white/25 to-black/35" />
            <current.Icon className="relative h-4 w-4 text-white" strokeWidth={1.7} />
          </span>
        ) : null}
      </div>
    </nav>
  );
}
