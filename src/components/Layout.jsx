import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

export default function Layout() {
  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[320px]"
        style={{ background: "radial-gradient(120% 90% at 12% -20%, rgba(228,87,61,0.13) 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto w-full max-w-[560px] pb-32 md:max-w-[940px] md:pb-24 lg:max-w-[1180px]">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}