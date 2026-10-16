import { ReviewItem } from '../data/content';

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="relative bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/50 rounded-[24px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(242,140,40,0.2)]">
      <div>
        {/* 5 Orange Stars */}
        <div className="flex items-center gap-1 mb-5" aria-label="5 out of 5 stars">
          {[...Array(review.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-[#F28C28] drop-shadow-[0_0_6px_rgba(242,140,40,0.4)]"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="text-base text-white/95 leading-relaxed italic mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Author and verified badge */}
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#0B1220] border border-[#F28C28]/30 flex items-center justify-center font-display text-sm font-bold text-[#F28C28]">
            {review.author[0]}
          </div>
          <span className="font-semibold text-white text-sm">
            {review.author}
          </span>
        </div>

        <span className="text-[11px] text-[#FFC83D] font-medium flex items-center gap-1">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Verified Eater
        </span>
      </div>
    </div>
  );
}
