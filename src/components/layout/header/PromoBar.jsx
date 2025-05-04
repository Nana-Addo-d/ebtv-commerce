'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { promo } from '@/data/promoData';

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const closed = localStorage.getItem('promoClosed');
    if (closed === 'true') setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('promoClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#1a1a1a] text-white text-sm z-50">
    <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between gap-4">

      {/* Left: Event title */}
      <div className="flex items-center gap-2">
        <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 -rotate-3 shadow-sm rounded-sm">
          {promo.eventStart}
        </span>
        <span className="text-sm font-medium">{promo.eventEnd}</span>
      </div>

      {/* Center: Promo Text */}
      <div className="flex items-center gap-1 text-sm mx-auto">
        <span className="text-xs text-muted-foreground">Up to</span>
        <span className="text-yellow-400 text-lg font-bold">{promo.discount}</span>
        <span className="text-sm">OFF</span>
      </div>

      {/* CTA: Shop Now */}
      <Link
        href={promo.ctaHref}
        className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-semibold px-4 py-1 rounded shadow transition-all flex items-center justify-center"
      >
        {promo.ctaText} <span className="ml-2">→</span>
      </Link>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-sm transition-colors"
        aria-label="Close promo bar"
      >
        <X size={16} />
      </button>
    
    </div>
    
  </div>
);
}
