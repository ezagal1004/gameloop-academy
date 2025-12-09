"use client";
import { Gamepad2, Wrench, Monitor, Palette, Brain, Lightbulb } from 'lucide-react';

export default function ProblemOpportunity() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden pb-[60px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight mb-4"
              style={{
                WebkitTextStroke: '3px black',
                paintOrder: 'stroke fill',
              }}
            >
              <span className="text-[#3B9FD8]">Every Game They Play</span>
              <br />
              <span className="text-[#FDB927]">Could Be a Game They Make</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-sans max-w-3xl mx-auto font-medium">
              Turn their passion for gaming into real-world skills that build creativity, logic, and problem-solving
            </p>
          </div>

          {/* Transformation Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="relative bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              style={{
                borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#3B9FD8] p-3 rounded-full border-3 border-black">
                    <Gamepad2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-2xl font-bold text-black">→</div>
                  <div className="bg-[#FDB927] p-3 rounded-full border-3 border-black">
                    <Wrench className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black">
                  Plays Games<br />Creates Games
                </h3>
                <p className="text-gray-700 font-sans text-base leading-relaxed">
                  They already love games—now they'll learn to build their own from scratch
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              style={{
                borderRadius: '4% 95% 6% 95%/95% 4% 92% 5%',
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#3B9FD8] p-3 rounded-full border-3 border-black">
                    <Monitor className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-2xl font-bold text-black">→</div>
                  <div className="bg-[#FDB927] p-3 rounded-full border-3 border-black">
                    <Palette className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black">
                  Passive Watching<br />Active Building
                </h3>
                <p className="text-gray-700 font-sans text-base leading-relaxed">
                  Transform screen time from consuming to creating something amazing
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              style={{
                borderRadius: '95% 4% 97% 5%/4% 94% 3% 95%',
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#3B9FD8] p-3 rounded-full border-3 border-black">
                    <Brain className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-2xl font-bold text-black">→</div>
                  <div className="bg-[#FDB927] p-3 rounded-full border-3 border-black">
                    <Lightbulb className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-black">
                  Curiosity<br />Problem Solving
                </h3>
                <p className="text-gray-700 font-sans text-base leading-relaxed">
                  Learn critical thinking and logic skills that prepare them for the future
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animated Wave Divider - Same as Hero */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] z-30">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave-2"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax1">
            <use xlinkHref="#gentle-wave-2" x="50" y="3" fill="#FDB927" />
          </g>
          <g className="parallax2">
            <use xlinkHref="#gentle-wave-2" x="50" y="0" fill="#2B7FB8" />
          </g>
          <g className="parallax3">
            <use xlinkHref="#gentle-wave-2" x="50" y="9" fill="#1E5A8E" />
          </g>
          <g className="parallax4">
            <use xlinkHref="#gentle-wave-2" x="50" y="6" fill="#3B9FD8" />
          </g>
        </svg>
      </div>

      {/* Wave Animation Styles */}
      <style jsx>{`
        .parallax1 > use {
          animation: move-forever1 10s linear infinite;
          animation-delay: -2s;
        }
        .parallax2 > use {
          animation: move-forever2 8s linear infinite;
          animation-delay: -2s;
        }
        .parallax3 > use {
          animation: move-forever3 6s linear infinite;
          animation-delay: -2s;
        }
        .parallax4 > use {
          animation: move-forever4 4s linear infinite;
          animation-delay: -2s;
        }
        @keyframes move-forever1 {
          0% { transform: translate(85px, 0%); }
          100% { transform: translate(-90px, 0%); }
        }
        @keyframes move-forever2 {
          0% { transform: translate(-90px, 0%); }
          100% { transform: translate(85px, 0%); }
        }
        @keyframes move-forever3 {
          0% { transform: translate(85px, 0%); }
          100% { transform: translate(-90px, 0%); }
        }
        @keyframes move-forever4 {
          0% { transform: translate(-90px, 0%); }
          100% { transform: translate(85px, 0%); }
        }
      `}</style>
    </section>
  );
}