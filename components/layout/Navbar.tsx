'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight hover:scale-105 transition-transform"
            style={{
              WebkitTextStroke: '2px black',
              paintOrder: 'stroke fill',
            }}
          >
            <span className="text-[#3B9FD8]">Gameloop</span>
            <span className="text-[#FDB927]"> Academy</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/" 
              className="text-lg font-bold font-sans text-gray-800 hover:text-[#3B9FD8] transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#FDB927] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="https://instagram.com/gameloop_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#3B9FD8] text-white font-bold text-base rounded-full shadow-[0_4px_0_0_#000] hover:shadow-[0_2px_0_0_#000] active:shadow-[0_1px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)] flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" strokeWidth={2.5} />
              Follow
            </a>
            <Link 
              href="/schedule" 
              className="px-6 py-3 bg-[#FDB927] text-black font-bold text-base rounded-full shadow-[0_4px_0_0_#000] hover:shadow-[0_2px_0_0_#000] active:shadow-[0_1px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)]"
            >
              View Classes
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-7 h-1 bg-black rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-7 h-1 bg-black rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-7 h-1 bg-black rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <Link 
              href="/" 
              className="text-lg font-bold font-sans text-gray-800 hover:text-[#3B9FD8] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="https://instagram.com/gameloop_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#3B9FD8] text-white font-bold text-base rounded-full shadow-[0_4px_0_0_#000] border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)] text-center flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="w-5 h-5" strokeWidth={2.5} />
              Follow on Instagram
            </a>
            <Link
              href="/schedule"
              className="px-6 py-3 bg-[#FDB927] text-black font-bold text-base rounded-full shadow-[0_4px_0_0_#000] border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)] text-center"
              onClick={() => setIsOpen(false)}
            >
              View Classes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}