'use client';

import { useState } from 'react';

export default function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://m.me/61585606432549', '_blank');
  };

  return (
    <div className="flex flex-col items-center lg:items-start gap-3">
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
          Message Me
          <svg 
            className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 ${isHovered ? 'translate-x-2 scale-110' : ''}`}
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.898 1.45 5.487 3.717 7.186v4.571l4.393-2.41c1.17.32 2.413.496 3.89.496 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.003 12.442l-2.564-2.736-5.008 2.736 5.515-5.853 2.627 2.736 4.945-2.736-5.515 5.853z"/>
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
      
      <a 
        href="https://ig.me/m/gameloop_academy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/90 hover:text-white text-sm sm:text-base font-sans transition-colors duration-200 flex items-center gap-2 group"
      >
        <span>Or DM on Instagram</span>
        <svg 
          className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
    </div>
  );
}