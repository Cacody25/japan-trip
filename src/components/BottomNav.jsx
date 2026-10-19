import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarDays, Utensils, NotebookPen, Languages, Watch, Map as MapIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", label: "Days", Icon: CalendarDays },
  { to: "/food", label: "Food!", Icon: Utensils },
  { to: "/map", label: "Map", Icon: MapIcon },
  { to: "/notes", label: "Notes", Icon: NotebookPen },
  { to: "/translate", label: "Phrases", Icon: Languages },
  { to: "/watches", label: "Watches", Icon: Watch },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.07] bg-[#0b0c10]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[560px] items-stretch px-2 pb-[env(safe-area-inset-bottom)]">
        {TABS.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              cn(
                "relative flex flex-1 flex-col items-center gap-1.5 py-3.5 text-[9.5px] uppercase tracking-[0.12em] transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80",
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={cn(
                    "absolute top-0 h-[2px] w-8 rounded-full transition-all duration-300",
                    isActive ? "bg-vermilion opacity-100" : "opacity-0",
                  )}
                />
                <Icon className={cn("h-[18px] w-[18px] transition-transform", isActive && "scale-110")} strokeWidth={1.6} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}