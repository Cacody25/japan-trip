import React from "react";
import { cn } from "@/lib/utils";

export default function Panel({ className, children }) {
  return <div className={cn("rounded-3xl border border-white/[0.07] bg-card/60 px-5", className)}>{children}</div>;
}