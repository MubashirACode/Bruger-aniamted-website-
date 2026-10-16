interface SectionHeaderProps {
  pill: string;
  heading: string;
  subtext?: string;
  className?: string;
}

export function SectionHeader({
  pill,
  heading,
  subtext,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${className}`}>
      {/* Small orange pill label above heading */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F28C28]/15 border border-[#F28C28]/35 mb-4 shadow-[0_0_15px_rgba(242,140,40,0.15)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F28C28]">
          {pill}
        </span>
      </div>

      {/* Big uppercase heading */}
      <h2
        className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[0.96] uppercase font-bold tracking-wide text-white mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]"
        style={{ textWrap: 'balance' }}
      >
        {heading}
      </h2>

      {/* Optional subtext */}
      {subtext && (
        <p className="text-sm sm:text-base text-[#B8C0CC] leading-relaxed max-w-lg mx-auto">
          {subtext}
        </p>
      )}
    </div>
  );
}
