import { SectionHeader } from './SectionHeader';
import { ComboCard } from './ComboCard';
import { COMBO_DEALS, ComboItem } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ComboDealsSectionProps {
  onOrderCombo: (combo: ComboItem) => void;
}

export function ComboDealsSection({ onOrderCombo }: ComboDealsSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="combos"
      ref={ref}
      className="relative w-full bg-[#101A2E] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white scroll-mt-24 overflow-hidden"
    >
      {/* Background glow centered on the middle popular card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#F28C28]/9 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader
          pill="HOT DEALS"
          heading="Combos That Save You More"
          subtext="Bundled perfection with hand-cut fries and icy cold craft beverages."
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        />

        {/* 3 Combo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-4">
          {COMBO_DEALS.map((combo, index) => (
            <div
              key={combo.id}
              className="transition-all duration-700 ease-out flex"
              style={{
                transitionDelay: `${index * 140}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <ComboCard combo={combo} onOrderCombo={onOrderCombo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
