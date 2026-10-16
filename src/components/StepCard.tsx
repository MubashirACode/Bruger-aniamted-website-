import { StepItem } from '../data/content';

interface StepCardProps {
  step: StepItem;
}

export function StepCard({ step }: StepCardProps) {
  const renderIcon = () => {
    switch (step.iconType) {
      case 'burger':
        return (
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 10a8 8 0 0 1 16 0H4z" />
            <circle cx="9" cy="7" r="0.8" fill="#FFC83D" />
            <circle cx="12" cy="5.5" r="0.8" fill="#FFC83D" />
            <circle cx="15" cy="7" r="0.8" fill="#FFC83D" />
            <rect x="3" y="12" width="18" height="2.5" rx="1.25" fill="#FFA64D" />
            <rect x="4" y="16.5" width="16" height="2" rx="1" />
          </svg>
        );
      case 'grill':
        return (
          <svg className="w-8 h-8 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
            {/* Searing grill */}
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="7.5" y1="4.5" x2="7.5" y2="19.5" />
            <line x1="16.5" y1="4.5" x2="16.5" y2="19.5" />
            <line x1="3" y1="12" x2="21" y2="12" />
          </svg>
        );
      case 'enjoy':
        return (
          <svg className="w-8 h-8 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
            {/* Delivery box / smile / bag */}
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        );
    }
  };

  return (
    <div className="relative flex flex-col items-center text-center z-10 px-4 group">
      {/* Icon and Number Lockup */}
      <div className="relative mb-6">
        {/* Glow Ring */}
        <div className="w-20 h-20 rounded-full bg-[#141F36] border-2 border-[#F28C28]/40 group-hover:border-[#F28C28] flex items-center justify-center text-[#F28C28] group-hover:text-[#FFA64D] shadow-[0_0_25px_rgba(242,140,40,0.2)] group-hover:shadow-[0_0_35px_rgba(242,140,40,0.4)] transition-all duration-300 group-hover:scale-105">
          {renderIcon()}
        </div>

        {/* Step Number Tag */}
        <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#F28C28] text-white text-xs font-bold flex items-center justify-center shadow-[0_0_10px_rgba(242,140,40,0.5)]">
          {step.step}
        </div>
      </div>

      <h3 className="font-display text-2xl uppercase font-bold text-white mb-2.5 tracking-wide group-hover:text-[#FFA64D] transition-colors">
        {step.title}
      </h3>

      <p className="text-sm text-[#B8C0CC] leading-relaxed max-w-xs">
        {step.description}
      </p>
    </div>
  );
}
