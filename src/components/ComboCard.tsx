import { ComboItem } from '../data/content';

interface ComboCardProps {
  combo: ComboItem;
  onOrderCombo: (combo: ComboItem) => void;
}

export function ComboCard({ combo, onOrderCombo }: ComboCardProps) {
  return (
    <div
      className={`relative rounded-[24px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
        combo.isPopular
          ? 'bg-gradient-to-b from-[#192744] to-[#141F36] border-2 border-[#F28C28] shadow-[0_0_35px_rgba(242,140,40,0.35)] lg:-translate-y-2 lg:hover:-translate-y-3 z-10'
          : 'bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/50 hover:shadow-[0_0_25px_rgba(242,140,40,0.2)]'
      }`}
    >
      {/* Most Popular Floating Badge for Middle Card */}
      {combo.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="px-4 py-1 rounded-full bg-[#F28C28] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(242,140,40,0.6)] flex items-center gap-1.5 whitespace-nowrap">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Most Popular
          </span>
        </div>
      )}

      <div>
        {/* Top: Name & Savings badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-white tracking-wide">
            {combo.name}
          </h3>
          <span className="px-2.5 py-1 rounded-full bg-[#FFC83D]/15 text-[#FFC83D] border border-[#FFC83D]/30 text-xs font-semibold whitespace-nowrap">
            {combo.saveBadge}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#F28C28] tabular-nums">
            {combo.price}
          </span>
          <span className="text-xs text-[#B8C0CC]/70 ml-2">bundle value</span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#B8C0CC] leading-relaxed mb-8">
          {combo.description}
        </p>
      </div>

      {/* Button: Order Combo */}
      <button
        type="button"
        onClick={() => onOrderCombo(combo)}
        className={`w-full min-h-[48px] rounded-full text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] ${
          combo.isPopular
            ? 'bg-[#F28C28] hover:bg-[#FFA64D] text-white shadow-[0_0_25px_rgba(242,140,40,0.4)] hover:shadow-[0_0_35px_rgba(255,166,77,0.6)]'
            : 'bg-[#141F36] hover:bg-[#1E2E4E] text-white border border-[#F28C28]/40 hover:border-[#F28C28]'
        }`}
        aria-label={`Order ${combo.name} for ${combo.price}`}
      >
        <span>Order Combo</span>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
