'use client';

import { useState } from 'react';
import { Award, Monitor, Users, DollarSign, Rocket } from 'lucide-react';
import SignupModal from '@/components/layout/SignupModal';

export default function WhatWeOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="upcoming-class" className="relative bg-[#3B9FD8] py-8 md:py-12 overflow-hidden min-h-screen flex items-center">
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
                These Classes?
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-white font-sans max-w-3xl mx-auto font-bold">
                Expert instruction • Live interaction • Small groups • Low commitment
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

              {/* Card 2 - Live & Interactive */}
              <div 
                className="relative bg-[#FDB927] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col"
                style={{
                  borderRadius: '4% 95% 6% 95%/95% 4% 92% 5%',
                }}
              >
                <div className="bg-white p-3 rounded-full border-3 border-black w-fit mx-auto mb-3">
                  <Monitor className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-2 leading-tight">
                  Live & Interactive
                </h3>
                <p className="text-black font-sans text-xs md:text-sm leading-relaxed text-center">
                  Real-time help via Google Meet, not pre-recorded videos
                </p>
              </div>

              {/* Card 3 - Small Groups */}
              <div 
                className="relative bg-[#FDB927] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col"
                style={{
                  borderRadius: '95% 4% 97% 5%/4% 94% 3% 95%',
                }}
              >
                <div className="bg-white p-3 rounded-full border-3 border-black w-fit mx-auto mb-3">
                  <Users className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-2 leading-tight">
                  Small Groups
                </h3>
                <p className="text-black font-sans text-xs md:text-sm leading-relaxed text-center">
                  Maximum 7 students for personalized attention
                </p>
              </div>

              {/* Card 4 - Try One Class */}
              <div 
                className="relative bg-[#FDB927] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col"
                style={{
                  borderRadius: '4% 95% 3% 96%/95% 4% 92% 6%',
                }}
              >
                <div className="bg-white p-3 rounded-full border-3 border-black w-fit mx-auto mb-3">
                  <DollarSign className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-2 leading-tight">
                  Try One Class
                </h3>
                <p className="text-black font-sans text-xs md:text-sm leading-relaxed text-center">
                  $25 per session, no long-term commitment needed
                </p>
              </div>

            </div>

            {/* Featured Class - Space Invaders */}
            <div className="mt-6 md:mt-8">
              <div className="text-center mb-4">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight text-white"
                  style={{
                    WebkitTextStroke: '2px black',
                    paintOrder: 'stroke fill',
                  }}
                >
                  Upcoming Class
                </h3>
              </div>

              <div 
                className="relative bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[12px_12px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 max-w-3xl mx-auto"
                style={{
                  borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
                }}
              >
                {/* Limited Spots Badge */}
                <div className="absolute -top-4 -right-4 bg-[#FDB927] text-black px-4 py-2 rounded-full border-4 border-black font-[family-name:var(--font-bm-hanna)] uppercase text-sm font-bold shadow-lg rotate-12">
                  Only 7 Spots!
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* Left side - Icon and Title */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="bg-[#3B9FD8] p-6 rounded-full border-4 border-black w-fit mx-auto md:mx-0 mb-4">
                      <Rocket className="w-16 h-16 text-white" strokeWidth={2.5} />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black mb-2">
                      Space Invaders
                    </h4>
                    <p className="text-gray-700 font-sans text-base md:text-lg font-bold">
                      Build Your Own Arcade Game
                    </p>
                  </div>

                  {/* Right side - Details */}
                  <div className="flex-grow">
                    <div className="bg-[#FDB927] border-3 border-black rounded-xl p-4 mb-4">
                      <div className="grid grid-cols-2 gap-3 text-sm md:text-base">
                        <div>
                          <div className="font-bold text-black font-sans">📅 Date</div>
                          <div className="text-black font-sans">Saturday, Dec 20th</div>
                        </div>
                        <div>
                          <div className="font-bold text-black font-sans">⏰ Time</div>
                          <div className="text-black font-sans">10:00 - 11:00 AM</div>
                        </div>
                        <div>
                          <div className="font-bold text-black font-sans">👥 Ages</div>
                          <div className="text-black font-sans">10-14 years old</div>
                        </div>
                        <div>
                          <div className="font-bold text-black font-sans">💻 Platform</div>
                          <div className="text-black font-sans">MakeCode Arcade</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 font-sans text-sm md:text-base mb-4 leading-relaxed">
                      Learn to code by creating a classic space shooter! Students will program alien movement, shooting mechanics, and scoring systems in this action-packed introduction to game development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="text-center sm:text-left">
                        <div className="text-4xl md:text-5xl font-bold text-black font-[family-name:var(--font-bm-hanna)]">
                          $25
                        </div>
                        <div className="text-gray-600 text-sm font-sans">per student</div>
                      </div>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="flex-grow sm:flex-grow-0 px-6 py-3 bg-[#3B9FD8] text-white font-bold text-lg rounded-full shadow-[0_4px_0_0_#000] hover:shadow-[0_2px_0_0_#000] active:shadow-[0_1px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-3 border-black uppercase font-[family-name:var(--font-bm-hanna)] whitespace-nowrap"
                      >
                        Reserve Your Spot
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signup Modal */}
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}