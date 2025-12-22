"use client";
import Image from 'next/image';
import { motion } from 'motion/react';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#3B9FD8] overflow-hidden pt-20 pb-12">
      {/* Comic book dots texture */}
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,1) 1.5px, transparent 1.5px)`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      {/* Animated background elements - subtle dots/sparkles */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">

          {/* Left Column - Text Content */}
          <div className="text-white space-y-4 text-center lg:text-left">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[0.85] font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight"
              style={{
                WebkitTextStroke: '3px black',
                paintOrder: 'stroke fill',
              }}
            >
              From Game{' '}
              <span className="text-[#FDB927] block">
                Player
              </span>
              {' '}to Game{' '}
              <span className="text-[#FDB927] block">
                Creator
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold max-w-md mx-auto lg:mx-0 font-sans leading-tight pt-2">
              Your child builds their own video games in personalized 1-on-1 tutoring sessions
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-md mx-auto lg:mx-0 font-sans">
              MakeCode Arcade • Ages 7-14 • In-Person & Online
            </p>

            <div className="pt-3">
              <CTAButton />
            </div>

            <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto lg:mx-0 font-sans italic pt-2">
              Taught by an experienced instructor whose curriculum is used in 500+ coding centers nationwide
            </p>
          </div>

          {/* Right Column - Image with Robot Overlays */}
          <div className="relative flex justify-center items-center">
            {/* Main Image with Wonky Border */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white border-[3px] border-black rotate-2 shadow-2xl z-10"
              style={{
                borderWidth: '3px 4px 3px 5px',
                borderRadius: '95% 4% 92% 5%/4% 95% 6% 95%',
              }}
            >
              {/* Image container */}
              <div
                className="relative aspect-[4/3] bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden -rotate-1"
                style={{ margin: '12px' }}
              >
                <Image
                  src="/images/kids-coding.jpg"
                  alt="Kids learning to code and create games"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Robot 1 - Left side, overlapping the image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="absolute -left-12 sm:-left-16 md:-left-20 lg:-left-24 -bottom-6 sm:-bottom-8 md:-bottom-12 lg:-bottom-14 z-20 w-32 sm:w-40 md:w-48 lg:w-56"
            >
              <Image
                src="/images/robot.png"
                alt="Coding robot mascot"
                width={990}
                height={1168}
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
                }}
              />
            </motion.div>

            {/* Robot 2 - Right side, overlapping the image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="absolute -right-12 sm:-right-16 md:-right-20 lg:-right-24 -bottom-6 sm:-bottom-8 md:-bottom-12 lg:-bottom-14 z-20 w-32 sm:w-40 md:w-48 lg:w-56"
            >
              <Image
                src="/images/robot2.png"
                alt="Coding robot mascot 2"
                width={990}
                height={1168}
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Animated Wave Divider */}
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
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax1">
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#FDB927" />
          </g>
          <g className="parallax2">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#2B7FB8" />
          </g>
          <g className="parallax3">
            <use xlinkHref="#gentle-wave" x="50" y="9" fill="#1E5A8E" />
          </g>
          <g className="parallax4">
            <use xlinkHref="#gentle-wave" x="50" y="6" fill="#fff" />
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