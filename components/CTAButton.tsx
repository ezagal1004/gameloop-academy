'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/schedule');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative px-6 sm:px-8 md:px-10 py-4 md:py-5 bg-[#FDB927] text-black font-bold text-lg sm:text-xl md:text-2xl rounded-full shadow-[0_6px_0_0_#000] hover:shadow-[0_3px_0_0_#000] active:shadow-[0_2px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-3 md:border-4 border-black uppercase tracking-wide"
      style={{
        transform: isHovered ? 'translateY(4px) rotate(-1deg)' : 'rotate(-1deg)',
      }}
    >
      <span className="relative z-10 flex items-center gap-2 sm:gap-3 font-[family-name:var(--font-bm-hanna)]">
        See Schedule
        <svg 
          className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 ${isHovered ? 'translate-x-2 scale-110' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </span>
      
      {/* Shine effect */}
      <div 
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
        style={{
          transform: 'translateX(-100%)',
          animation: isHovered ? 'shine 0.6s ease-in-out' : 'none',
        }}
      ></div>
      
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
}