import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';
import { WHY_FEATURES } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function WhyBurgerHavenSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="why"
      ref={ref}
      className="relative w-full bg-[#101A2E] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white scroll-mt-24 overflow-hidden"
    >
      {/* Soft orange radial background glow */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[#F28C28]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader
          pill="WHY US"
          heading="Made Different, Tastes Better"
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        />

        {/* 4 Feature cards in a row (2 by 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${index * 120}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
