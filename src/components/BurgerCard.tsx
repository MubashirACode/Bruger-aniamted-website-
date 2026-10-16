import { useState } from 'react';
import { BurgerItem } from '../data/content';

interface BurgerCardProps {
  burger: BurgerItem;
  onAddToCart: (burger: BurgerItem) => void;
}

export function BurgerCard({ burger, onAddToCart }: BurgerCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart(burger);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <article className="group relative bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/60 rounded-[24px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(242,140,40,0.22)] flex flex-col justify-between">
      <div>
        {/* Burger Image Container (1:1 square, dark navy background, no light background) */}
        <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-[#0B1220] mb-5 border border-white/[0.04]">
          {!imageError ? (
            <img
              src={burger.image}
              alt={burger.name}
              width={500}
              height={500}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            /* Dark fallback placeholder with burger icon */
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B1220] p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#141F36] flex items-center justify-center text-[#F28C28] mb-3 border border-[#F28C28]/20">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 10a8 8 0 0 1 16 0H4z" />
                  <rect x="3" y="12" width="18" height="2.5" rx="1.25" fill="#FFA64D" />
                  <rect x="4" y="16.5" width="16" height="2" rx="1" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-white">{burger.name}</span>
            </div>
          )}

          {/* Tag Badge */}
          <div className="absolute top-3 left-3 z-10">
            {burger.isBestseller ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F28C28] text-white text-[11px] font-bold tracking-wide shadow-[0_2px_10px_rgba(242,140,40,0.4)]">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {burger.tag}
              </span>
            ) : burger.hasFlame ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EF4444]/20 border border-[#EF4444]/40 text-[#EF4444] text-[11px] font-bold tracking-wide backdrop-blur-md">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.527.82-1.137 2.015-1.564 3.235-.436 1.245-.733 2.54-.733 3.717 0 .584.09 1.15.26 1.684-1.18-.847-2.086-2.128-2.482-3.612a1 1 0 00-1.928.384c-.218 1.096-.282 2.215-.17 3.328.257 2.57 1.543 4.908 3.518 6.368C9.57 19.58 11.758 20 14 20c2.485 0 4.887-.993 6.643-2.75A9.972 9.972 0 0023 10.5c0-2.348-.813-4.508-2.176-6.223a1 1 0 00-1.488-.135c-.413.376-.814.773-1.196 1.192-.619.68-1.282 1.554-1.849 2.456-.475-.765-.95-1.638-1.4-2.518-.767-1.498-1.496-2.719-2.496-2.719z" clipRule="evenodd" />
                </svg>
                {burger.tag}
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#0B1220]/80 border border-white/[0.1] text-[#B8C0CC] text-[11px] font-semibold tracking-wide backdrop-blur-md">
                {burger.tag}
              </span>
            )}
          </div>
        </div>

        {/* Name and Price */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="font-display text-2xl uppercase font-bold text-white tracking-wide group-hover:text-[#FFA64D] transition-colors">
            {burger.name}
          </h3>
          <span className="font-mono text-xl font-bold text-[#F28C28] tabular-nums shrink-0">
            {burger.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#B8C0CC] leading-relaxed mb-6 line-clamp-3">
          {burger.description}
        </p>
      </div>

      {/* Button: Add to Cart with 1.5s 'Added' check state */}
      <button
        type="button"
        onClick={handleAdd}
        disabled={isAdded}
        className={`w-full min-h-[46px] rounded-full text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] ${
          isAdded
            ? 'bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
            : 'bg-[#F28C28] hover:bg-[#FFA64D] text-white shadow-[0_0_20px_rgba(242,140,40,0.3)] hover:shadow-[0_0_28px_rgba(255,166,77,0.5)] active:scale-[0.98]'
        }`}
        aria-label={`Add ${burger.name} to cart for ${burger.price}`}
      >
        {isAdded ? (
          <>
            <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Added!</span>
          </>
        ) : (
          <>
            <span>Add to Cart</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
      </button>
    </article>
  );
}
