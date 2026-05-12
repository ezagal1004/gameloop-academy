import Image from 'next/image';

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative bg-[#3B9FD8] overflow-hidden min-h-screen flex flex-col justify-center py-8">

      <div
        className="absolute inset-0 z-0 opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — text */}
          <div>
            <span
              className="inline-block bg-white text-black font-bold font-sans text-xs uppercase px-3 py-1 border-2 border-black mb-4"
              style={{ borderRadius: '6px', boxShadow: '2px 2px 0px #000' }}
            >
              📬 What You Get
            </span>

            <p
              className="font-bold font-sans uppercase text-white text-5xl sm:text-6xl lg:text-7xl leading-none"
              style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.22)' }}
            >
              You&apos;re Never
            </p>
            <p
              className="font-bold font-sans uppercase text-[#FDB927] text-6xl sm:text-7xl lg:text-8xl leading-none"
              style={{ textShadow: '5px 5px 0px rgba(0,0,0,0.28)' }}
            >
              Left Wondering
            </p>

            <p
              className="text-white/90 font-sans font-semibold text-lg sm:text-xl mt-5 leading-snug"
              style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.15)' }}
            >
              After every single session, I send a personalized recap email directly to you — so you always know exactly what your child built, what&apos;s coming next, and how to keep the momentum going.
            </p>
          </div>

          {/* RIGHT — images */}
          <div className="flex justify-center items-start gap-6">

            <div
              style={{
                transform: 'rotate(-2deg)',
                border: '4px solid #000',
                borderRadius: '16px',
                boxShadow: '8px 8px 0px #000',
                background: 'white',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src="https://i.imgur.com/BefdxqU.jpeg"
                alt="Session recap email"
                width={400}
                height={600}
                style={{ width: '210px', height: 'auto', display: 'block' }}
              />
            </div>

            <div
              style={{
                transform: 'rotate(2deg)',
                marginTop: '28px',
                border: '4px solid #000',
                borderRadius: '16px',
                boxShadow: '8px 8px 0px #000',
                background: 'white',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src="https://i.imgur.com/q2iRsWg.jpeg"
                alt="Session recap email"
                width={400}
                height={600}
                style={{ width: '210px', height: 'auto', display: 'block' }}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
