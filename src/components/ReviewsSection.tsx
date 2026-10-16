import { SectionHeader } from './SectionHeader';
import { ReviewCard } from './ReviewCard';
import { REVIEWS_LIST, STATS_LIST } from '../data/content';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

function StatCounterItem({
  targetValue,
  displaySuffix,
  decimals,
  label,
  isVisible,
}: {
  targetValue: number;
  displaySuffix: string;
  decimals?: number;
  label: string;
  isVisible: boolean;
}) {
  const animatedValue = useCountUp(targetValue, isVisible, 1800, decimals);

  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F28C28] tabular-nums tracking-wide mb-1 drop-shadow-[0_2px_12px_rgba(242,140,40,0.3)]">
        {animatedValue}
        <span>{displaySuffix}</span>
      </div>
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#B8C0CC]">
        {label}
      </span>
    </div>
  );
}

export function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#101A2E] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F28C28]/7 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader
          pill="REVIEWS"
          heading="Loved by Burger Fans"
          subtext="Hear directly from grill enthusiasts who keep coming back for the crunch and smoke."
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        />

        {/* 
          3 Testimonial cards:
          - Desktop: Grid 3 columns
          - Mobile: Swipeable scroll snap slider with scrollbar hidden
        */}
        <div className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible scrollbar-none snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {REVIEWS_LIST.map((review, index) => (
            <div
              key={review.id}
              className="min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center transition-all duration-700 ease-out flex"
              style={{
                transitionDelay: `${index * 120}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* 
          Below: Stats row with count up numbers on scroll:
          - 4.9 average rating
          - 10,000+ happy customers
          - 50,000+ burgers served
        */}
        <div
          className={`mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {STATS_LIST.map((stat) => (
            <div key={stat.id} className="pt-6 sm:pt-0">
              <StatCounterItem
                targetValue={stat.targetValue}
                displaySuffix={stat.displaySuffix}
                decimals={stat.decimals}
                label={stat.label}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
