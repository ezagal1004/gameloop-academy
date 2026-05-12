'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { emoji: '🐦', name: 'Flappy Bird',     description: 'Control a character, add obstacles, track a high score.' },
  { emoji: '🚀', name: 'Space Shooter',   description: 'Shoot enemies, dodge attacks, survive as long as you can.' },
  { emoji: '🏃', name: 'Platformer',      description: 'Build levels, add enemies, collect coins and reach the finish.' },
  { emoji: '🌀', name: 'Maze Game',       description: 'Design the maze, add a timer, challenge a friend to beat it.' },
];

export default function Curriculum() {
  const sectionRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(robotRef.current, {
        y: 155,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 15%',
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="curriculum" className="relative bg-white min-h-screen flex flex-col justify-center py-8">

      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT — all copy */}
          <div>
            <span
              className="inline-block bg-[#3B9FD8] text-white font-bold font-sans text-xs uppercase px-3 py-1 border-2 border-black mb-4"
              style={{ borderRadius: '6px', boxShadow: '2px 2px 0px #000' }}
            >
              🎮 Curriculum
            </span>

            <h2
              className="font-bold font-sans uppercase text-[#FDB927] text-5xl sm:text-6xl lg:text-7xl leading-none mb-4"
              style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.18)' }}
            >
              What We Build
            </h2>

            <p className="font-sans font-semibold text-black/70 text-lg leading-snug mb-4">
              Every session we build a real game from scratch. No boring exercises, no copying code blindly — just your kid, a screen, and something coming to life in front of them. Each month we tackle a new game, each week a new challenge.
            </p>

            <div>
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  className="flex items-start gap-3 py-2"
                  style={{
                    borderTop: i === 0 ? '2px solid rgba(0,0,0,0.1)' : undefined,
                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{project.emoji}</span>
                  <p className="font-sans text-base leading-snug">
                    <strong className="text-black font-bold">{project.name}</strong>
                    <span className="text-black/60"> — {project.description}</span>
                  </p>
                </div>
              ))}
            </div>

            <p className="font-sans font-semibold text-black/50 text-base mt-3 leading-snug">
              Every kid moves at their own pace. No experience needed — just curiosity and a want to create.
            </p>
          </div>

          {/* RIGHT — simulator + robot */}
          <div className="flex flex-col items-center">

            {/* Robot — normal flow, negative margin pulls simulator up behind it */}
            <div
              ref={robotRef}
              className="hidden lg:block pointer-events-none"
              style={{ width: '220px', marginBottom: '-120px', position: 'relative', zIndex: 0 }}
            >
              <Image
                src="https://i.imgur.com/rC74g1B.png"
                alt="Robot mascot"
                width={400}
                height={500}
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(-2px 4px 0px rgba(0,0,0,0.22))' }}
              />
            </div>

            {/* Simulator — in front of robot */}
            <div
              style={{
                width: 320,
                height: 420,
                flexShrink: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <iframe
                src="https://arcade.makecode.com/---run?id=S09305-31827-99936-65575"
                title="MakeCode Arcade"
                allowFullScreen
                sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', border: 'none', willChange: 'transform' }}
              />
            </div>

            <span
              className="inline-block bg-[#FDB927] text-black font-bold font-sans text-sm uppercase px-4 py-1.5 border-2 border-black"
              style={{ borderRadius: '6px', boxShadow: '2px 2px 0px #000' }}
            >
              Give it a try!
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}
