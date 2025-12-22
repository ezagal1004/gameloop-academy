'use client';

import Link from 'next/link';
import { Award, Monitor, Users, DollarSign, Zap, Calendar } from 'lucide-react';

export default function WhatWeOffer() {
  const handleMessageClick = () => {
    window.open('https://m.me/61585606432549', '_blank');
  };

  return (
    <section id="what-we-offer" className="relative bg-[#3B9FD8] py-8 md:py-12 overflow-hidden min-h-screen flex items-center">
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,1) 1.5px, transparent 1.5px)`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight mb-3 text-white"
              style={{
                WebkitTextStroke: '3px black',
                paintOrder: 'stroke fill',
              }}
            >
              Why Choose
              <br />
              1-on-1 Tutoring?
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white font-sans max-w-3xl mx-auto font-bold">
              Personalized attention • Flexible scheduling • In-person & online options • Learn at your pace
            </p>
          </div>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            {/* Card 1 - Expert Instruction */}
            <div 
              className="relative bg-[#FDB927] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col"
              style={{
                borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
              }}
            >
              <div className="bg-white p-3 rounded-full border-3 border-black w-fit mx-auto mb-3">
                <Award className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-2 leading-tight">
                Expert Instruction
              </h3>
              <p className="text-black font-sans text-xs md:text-sm leading-relaxed text-center">
                Created curriculum for 500+ coding centers nationwide
              </p>
            </div>

            {/* Card 2 - Personalized Attention */}
            <div 
              className="relative bg-[#FDB927] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col"
              style={{
                borderRadius: '4% 95% 6% 95%/95% 4% 92% 5%',
              }}
            >
              <div className="bg-white p-3 rounded-full border-3 border-black w-fit mx-auto mb-3">
                <Users className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-2 leading-tight">
                1-on-1 Focus
              </h3>
              <p className="text-black font-sans text-xs md:text-sm leading-relaxed text-center">
                Your child gets 100% of the instructor's attention every session
              </p>
            </div>

            {/* Card 3 - Flexible Options */}
            <div 
              className="relative bg-[#FDB927] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col"
              style={{
                borderRadius: '95% 4% 97% 5%/4% 94% 3% 95%',
              }}
            >
              <div className="bg-white p-3 rounded-full border-3 border-black w-fit mx-auto mb-3">
                <Monitor className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-2 leading-tight">
                Your Choice
              </h3>
              <p className="text-black font-sans text-xs md:text-sm leading-relaxed text-center">
                Meet in-person or online - whatever works best for you
              </p>
            </div>

            {/* Card 4 - Custom Pace */}
            <div 
              className="relative bg-[#FDB927] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col"
              style={{
                borderRadius: '4% 95% 3% 96%/95% 4% 92% 6%',
              }}
            >
              <div className="bg-white p-3 rounded-full border-3 border-black w-fit mx-auto mb-3">
                <Zap className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-2 leading-tight">
                Your Pace
              </h3>
              <p className="text-black font-sans text-xs md:text-sm leading-relaxed text-center">
                Move faster or slower - lessons adapt to your child's needs
              </p>
            </div>

          </div>

          {/* Call to Action Section */}
          <div className="mt-6 md:mt-8">
            <div className="text-center mb-4">
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight text-white"
                style={{
                  WebkitTextStroke: '2px black',
                  paintOrder: 'stroke fill',
                }}
              >
                Ready to Get Started?
              </h3>
            </div>

            <div 
              className="relative bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[12px_12px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 max-w-3xl mx-auto"
              style={{
                borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Left side - Icon and Title */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="bg-[#3B9FD8] p-6 rounded-full border-4 border-black w-fit mx-auto md:mx-0 mb-4">
                    <Calendar className="w-16 h-16 text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black mb-2">
                    Book Your Session
                  </h4>
                  <p className="text-gray-700 font-sans text-base md:text-lg font-bold">
                    Let's Find a Time That Works
                  </p>
                </div>

                {/* Right side - Details */}
                <div className="flex-grow">
                  <p className="text-gray-700 font-sans text-sm md:text-base mb-6 leading-relaxed">
                    Message me to discuss your child's interests, schedule a session, and answer any questions you have. We'll find a time that works for you - whether in-person or online.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button 
                      onClick={handleMessageClick}
                      className="w-full sm:w-auto px-8 py-4 bg-[#3B9FD8] text-white font-bold text-lg md:text-xl rounded-full shadow-[0_6px_0_0_#000] hover:shadow-[0_3px_0_0_#000] active:shadow-[0_2px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)] flex items-center justify-center gap-2"
                    >
                      Message Me Now
                      <svg 
                        className="w-6 h-6" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.898 1.45 5.487 3.717 7.186v4.571l4.393-2.41c1.17.32 2.413.496 3.89.496 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.003 12.442l-2.564-2.736-5.008 2.736 5.515-5.853 2.627 2.736 4.945-2.736-5.515 5.853z"/>
                      </svg>
                    </button>
                    <a 
                      href="https://ig.me/m/gameloop_academy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 text-sm font-sans transition-colors duration-200 flex items-center gap-2"
                    >
                      <span>Or DM on Instagram</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Link */}
          <div className="mt-8 text-center">
            <Link 
              href="/privacy-policy"
              className="text-white/80 hover:text-white font-sans text-sm underline transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}