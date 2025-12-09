'use client';

import { useState } from 'react';
import { Rocket, Gamepad2, Zap, Clock, Sparkles } from 'lucide-react';
import SignupModal from '@/components/layout/SignupModal';

export default function SchedulePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3B9FD8] via-[#2B7FB8] to-[#1E5A8E] pt-24 pb-16 relative overflow-hidden">
      {/* Animated background dots */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 2px, transparent 2px)`,
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Header Section */}
      <section className="container mx-auto px-6 relative z-10 mb-12">
        <div className="text-center">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight mb-4 text-white"
            style={{
              WebkitTextStroke: '3px black',
              paintOrder: 'stroke fill',
            }}
          >
            Upcoming Classes
          </h1>
          <p className="text-xl md:text-2xl text-white font-sans max-w-2xl mx-auto font-bold drop-shadow-lg">
            Live online coding classes • Build real games • Ages 10-14
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Active Class - Space Invaders */}
          <div
            className="relative bg-white border-4 border-black rounded-2xl p-6 shadow-[12px_12px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 animate-[wiggle_3s_ease-in-out_infinite]"
            style={{
              borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
            }}
          >
            {/* Available Badge */}
            <div className="absolute -top-4 -right-4 bg-[#FDB927] text-black px-5 py-2 rounded-full border-4 border-black font-[family-name:var(--font-bm-hanna)] uppercase text-sm font-bold shadow-[4px_4px_0_0_#000] animate-bounce">
              7 Spots Left! 🔥
            </div>

            {/* Icon */}
            <div className="bg-gradient-to-br from-[#3B9FD8] to-[#2B7FB8] p-5 rounded-full border-4 border-black w-fit mx-auto mb-4 shadow-lg animate-pulse">
              <Rocket className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-3 leading-tight">
              Space Invaders
            </h3>

            {/* Description */}
            <p className="text-gray-700 font-sans text-sm leading-relaxed text-center mb-4 font-medium">
              Build a classic arcade shooter! Learn alien movement, shooting mechanics, and scoring systems.
            </p>

            {/* Details Grid */}
            <div className="bg-gradient-to-br from-[#FDB927] to-[#FCA311] border-4 border-black rounded-xl p-4 mb-4 space-y-2 text-sm shadow-[4px_4px_0_0_#000]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-black font-sans">📅 Date:</span>
                <span className="text-black font-sans font-bold">Sat, Dec 20th</span>
              </div>
              <div className="flex justify-between items-center border-t-2 border-black/20 pt-2">
                <span className="font-bold text-black font-sans">⏰ Time:</span>
                <span className="text-black font-sans font-bold">10-11 AM</span>
              </div>
              <div className="flex justify-between items-center border-t-2 border-black/20 pt-2">
                <span className="font-bold text-black font-sans">👥 Ages:</span>
                <span className="text-black font-sans font-bold">10-14</span>
              </div>
              <div className="flex justify-between items-center border-t-2 border-black/20 pt-2">
                <span className="font-bold text-black font-sans">💻 Platform:</span>
                <span className="text-black font-sans font-bold">MakeCode</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="space-y-3">
              <div className="text-center py-2 bg-[#FDB927]/20 rounded-lg">
                <span className="text-5xl font-bold text-black font-[family-name:var(--font-bm-hanna)]">$25</span>
                <span className="text-gray-700 text-base font-sans ml-2 font-bold">per student</span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#3B9FD8] to-[#2B7FB8] text-white font-bold text-xl rounded-full shadow-[0_6px_0_0_#000] hover:shadow-[0_3px_0_0_#000] active:shadow-[0_2px_0_0_#000] transition-all duration-150 hover:translate-y-1 active:translate-y-2 border-4 border-black uppercase font-[family-name:var(--font-bm-hanna)]"
              >
                Register Now! →
              </button>
            </div>
          </div>

          {/* Coming Soon Card 1 - Platformer */}
          <div
            className="relative bg-gradient-to-br from-purple-300 to-purple-400 border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
            style={{
              borderRadius: '4% 95% 6% 95%/95% 4% 92% 5%',
            }}
          >
            {/* Coming Soon Badge */}
            <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-5 py-2 rounded-full border-4 border-black font-[family-name:var(--font-bm-hanna)] uppercase text-sm font-bold shadow-[4px_4px_0_0_#000]">
              Coming Soon! ⭐
            </div>

            {/* Icon */}
            <div className="bg-white p-5 rounded-full border-4 border-black w-fit mx-auto mb-4 shadow-lg">
              <Gamepad2 className="w-14 h-14 text-purple-600" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-3 leading-tight">
              Platformer Adventure
            </h3>

            {/* Description */}
            <p className="text-purple-900 font-sans text-sm leading-relaxed text-center mb-4 font-medium">
              Jump, run, and collect! Build your own platform game with physics and level design.
            </p>

            {/* Coming Soon Message */}
            <div className="bg-white border-4 border-black rounded-xl p-6 text-center shadow-[4px_4px_0_0_#000]">
              <Clock className="w-10 h-10 text-purple-600 mx-auto mb-3 animate-spin" style={{ animationDuration: '3s' }} strokeWidth={2.5} />
              <p className="text-black font-sans text-base font-bold mb-1">
                New classes added regularly!
              </p>
              <p className="text-gray-700 font-sans text-sm">
                Check back soon for dates
              </p>
            </div>
          </div>

          {/* Coming Soon Card 2 - Battle Game */}
          <div
            className="relative bg-gradient-to-br from-orange-300 to-orange-400 border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
            style={{
              borderRadius: '95% 4% 97% 5%/4% 94% 3% 95%',
            }}
          >
            {/* Coming Soon Badge */}
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-5 py-2 rounded-full border-4 border-black font-[family-name:var(--font-bm-hanna)] uppercase text-sm font-bold shadow-[4px_4px_0_0_#000]">
              Coming Soon! ⚡
            </div>

            {/* Icon */}
            <div className="bg-white p-5 rounded-full border-4 border-black w-fit mx-auto mb-4 shadow-lg">
              <Zap className="w-14 h-14 text-orange-600" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black text-center mb-3 leading-tight">
              Battle Arena
            </h3>

            {/* Description */}
            <p className="text-orange-900 font-sans text-sm leading-relaxed text-center mb-4 font-medium">
              Create an epic battle game with power-ups, enemies, and multiplayer mechanics!
            </p>

            {/* Coming Soon Message */}
            <div className="bg-white border-4 border-black rounded-xl p-6 text-center shadow-[4px_4px_0_0_#000]">
              <Clock className="w-10 h-10 text-orange-600 mx-auto mb-3 animate-spin" style={{ animationDuration: '3s' }} strokeWidth={2.5} />
              <p className="text-black font-sans text-base font-bold mb-1">
                New classes added regularly!
              </p>
              <p className="text-gray-700 font-sans text-sm">
                Check back soon for dates
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div
            className="inline-block bg-white border-4 border-black rounded-2xl p-8 shadow-[12px_12px_0_0_#000] max-w-2xl"
            style={{
              borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
            }}
          >
            <div className="bg-[#FDB927] p-3 rounded-full border-3 border-black w-fit mx-auto mb-4">
              <Sparkles className="w-10 h-10 text-black" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black mb-3">
              Want to Stay Updated?
            </h3>
            <p className="text-gray-700 font-sans text-base md:text-lg mb-2 font-bold">
              New game-building classes added every month!
            </p>
            <p className="text-gray-600 font-sans text-sm">
              Follow us on social media or check back here for the latest schedule
            </p>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-1deg); }
          75% { transform: rotate(1deg); }
        }
      `}</style>
    </main>
  );
}