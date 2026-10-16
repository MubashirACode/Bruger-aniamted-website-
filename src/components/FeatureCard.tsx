import { FeatureItem } from '../data/content';

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const renderIcon = () => {
    switch (feature.iconType) {
      case 'beef':
        return (
          <svg className="w-7 h-7 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
            {/* Steak/Beef cut shape */}
            <path d="M19 8c-1.5-2.5-4.5-4-7.5-4a8.5 8.5 0 0 0-8.5 8.5c0 4 3 7.5 7.5 7.5 4 0 7.5-2.5 8.5-6.5.5-2 .5-3.5 0-5.5z" />
            <circle cx="10" cy="12" r="2.5" />
          </svg>
        );
      case 'flame':
        return (
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2c-.5 2-2 4-3.5 5.5C6.5 9.5 5 12 5 15a7 7 0 0 0 14 0c0-3.5-2-6-4.5-8-1 2-2 3-3.5 4-1-1.5-1.5-3.5-1-6l2-3z" />
          </svg>
        );
      case 'bun':
        return (
          <svg className="w-7 h-7 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
            {/* Fresh bun / bakery icon */}
            <path d="M3 13a9 9 0 0 1 18 0H3z" />
            <path d="M4 17h16" />
            <path d="M5 20h14" />
            <circle cx="8" cy="9" r="0.8" fill="currentColor" />
            <circle cx="12" cy="7" r="0.8" fill="currentColor" />
            <circle cx="16" cy="9" r="0.8" fill="currentColor" />
          </svg>
        );
      case 'delivery':
        return (
          <svg className="w-7 h-7 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
            {/* Fast delivery stopwatch / scooter */}
            <circle cx="12" cy="13" r="8" />
            <polyline points="12 9 12 13 15 15" />
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="4" y1="5" x2="6" y2="7" />
          </svg>
        );
    }
  };

  return (
    <div className="group relative bg-[#141F36]/75 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/60 rounded-[24px] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(242,140,40,0.2)] flex flex-col items-start">
      {/* Glowing icon badge */}
      <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28] mb-6 shadow-[0_0_20px_rgba(242,140,40,0.25)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(242,140,40,0.45)] group-hover:text-[#FFA64D] transition-all duration-300">
        {renderIcon()}
      </div>

      <h3 className="font-display text-2xl uppercase font-bold text-white mb-2.5 tracking-wide group-hover:text-[#FFA64D] transition-colors">
        {feature.title}
      </h3>

      <p className="text-sm text-[#B8C0CC] leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
