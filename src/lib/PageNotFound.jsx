import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.replace(/^\//, "") || "this page";

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.36em] text-gold/85">Japan 2026</p>
        <h1 className="mt-4 font-display text-7xl text-white/25">404</h1>
        <h2 className="mt-4 font-display text-[28px]">Page not found</h2>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
          “{pageName}” is not part of this trip.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-vermilion/70"
        >
          Back to the days
        </Link>
      </div>
    </div>
  );
}
