interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountModal({ isOpen, onClose }: AccountModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Member Account"
    >
      <div className="bg-[#0B1220] border border-[#141F36] rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-2xl text-white">
        <div className="flex items-center justify-between pb-4 border-b border-[#141F36]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F28C28]/20 border border-[#F28C28]/40 flex items-center justify-center text-[#F28C28]">
              <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white">
                HAVEN CLUB REWARDS
              </h3>
              <p className="text-xs text-[#B8C0CC]">VIP Member · 840 Points</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#B8C0CC] hover:text-white hover:bg-[#141F36]"
          >
            <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="py-6 space-y-4">
          <div className="bg-[#141F36]/60 border border-[#141F36] rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#B8C0CC]">Available Perk</span>
              <p className="text-sm font-semibold text-white">Free Truffle Fries Reward</p>
            </div>
            <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FFC83D] text-[#0B1220] hover:bg-[#FFC83D]/90 transition-colors">
              Claim
            </button>
          </div>

          <div className="border border-[#141F36] rounded-xl p-4">
            <span className="text-xs font-semibold text-[#B8C0CC] uppercase tracking-wider block mb-2">
              Recent Haven Order
            </span>
            <div className="flex justify-between text-sm">
              <span className="text-white">Smoky BBQ + Truffle Fries</span>
              <span className="text-[#F28C28] font-mono font-bold">$19.48</span>
            </div>
            <span className="text-xs text-[#B8C0CC]/60 mt-1 block">Delivered yesterday · 5★ rated</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-[#141F36] hover:bg-[#1E2E4E] text-white text-sm font-medium transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
