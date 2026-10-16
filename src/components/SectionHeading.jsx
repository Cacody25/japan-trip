export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className="px-5 pt-10 md:px-8 md:pt-14">
      {eyebrow ? (
        <p className="text-[10px] uppercase tracking-[0.36em] text-gold/85">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 max-w-[18ch] font-display text-[34px] leading-[1.12] text-foreground md:text-[44px]">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 max-w-[48ch] text-[13px] leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </header>
  );
}
