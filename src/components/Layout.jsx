import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppDock from "@/components/AppDock";
import { cn } from "@/lib/utils";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground">
      {!isHome ? (
        <div
          className="pointer-events-none fixed inset-x-0 top-0 h-[320px]"
          style={{ background: "radial-gradient(120% 90% at 12% -20%, rgba(228,87,61,0.13) 0%, transparent 65%)" }}
        />
      ) : null}
      <div
        className={cn(
          "relative mx-auto w-full",
          isHome ? "max-w-none pb-0" : "max-w-[560px] pb-28 md:max-w-[940px] md:pb-24 lg:max-w-[1180px]",
        )}
      >
        <Outlet />
      </div>
      <AppDock />
    </div>
  );
}
