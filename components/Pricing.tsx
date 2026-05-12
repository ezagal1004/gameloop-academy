"use client";
import Image from 'next/image';

const features = [
  'Flexible scheduling — we work around your family',
  'First come, first served availability',
  'No contracts or commitment',
  'No onboarding fees',
  'Cancel anytime with 30 days notice',
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-center py-8">

      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-6">
          <p
            className="font-bold font-sans uppercase text-black text-4xl sm:text-5xl lg:text-6xl leading-none"
            style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.12)' }}
          >
            Simple, Transparent
          </p>
          <p
            className="font-bold font-sans uppercase text-[#FDB927] text-6xl sm:text-7xl lg:text-8xl leading-none"
            style={{ textShadow: '5px 5px 0px rgba(0,0,0,0.18)' }}
          >
            Pricing
          </p>
          <p
            className="text-black/70 font-sans font-semibold text-lg sm:text-xl mt-4 max-w-xl mx-auto leading-snug"
          >
            No contracts. No hidden fees. Just one hour a week that your kid will actually look forward to.
          </p>
        </div>

        {/* Card + robots */}
        <div className="relative mx-auto max-w-md" style={{ paddingBottom: '48px' }}>

          <div
            className="bg-white w-full relative z-20"
            style={{
              border: '4px solid #000',
              borderRadius: '16px',
              boxShadow: '8px 8px 0px #000',
              padding: 'clamp(16px, 3vw, 24px)',
            }}
          >
            {/* Price */}
            <div className="text-center mb-1">
              <div className="flex items-end justify-center gap-2">
                <span
                  className="font-bold font-sans text-[#FDB927] leading-none"
                  style={{ fontSize: 'clamp(72px, 12vw, 96px)', textShadow: '4px 4px 0px rgba(0,0,0,0.12)' }}
                >
                  $299
                </span>
                <span className="font-bold font-sans text-black/40 text-2xl mb-3">/month</span>
              </div>
              <p className="font-sans font-semibold text-black/50 text-base mt-1">
                4 private sessions a month — 1 hour each
              </p>
            </div>

            <div className="border-t-2 border-black/10 my-3" />

            {/* Checklist */}
            <ul className="space-y-2 mb-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="shrink-0 font-bold font-sans text-black text-xs flex items-center justify-center mt-0.5"
                    style={{
                      width: '20px',
                      height: '20px',
                      background: '#FDB927',
                      border: '2px solid #000',
                      borderRadius: '4px',
                      boxShadow: '1px 1px 0px #000',
                    }}
                  >
                    ✓
                  </span>
                  <span className="font-sans text-black/70 text-base leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className="w-full font-bold font-sans text-base uppercase text-black bg-[#FDB927] py-3 transition-all duration-150 hover:translate-y-0.5 active:translate-y-1"
              style={{
                border: '3px solid #000',
                borderRadius: '10px',
                boxShadow: '4px 4px 0px #000',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '2px 2px 0px #000')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0px #000')}
              onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              Book Your Free Trial →
            </button>
          </div>

          {/* Robot 1 — left, peeking halfway up */}
          <div className="hidden lg:block absolute -left-20 z-10 w-36 xl:w-44 pointer-events-none" style={{ top: '50%' }}>
            <div style={{ transform: 'translateY(-50%) rotate(-12deg)' }}>
              <Image
                src="https://i.imgur.com/ULNz00V.png"
                alt="Robot mascot"
                width={990}
                height={1168}
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(4px 6px 0px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>

          {/* Robot 2 — right, peeking halfway up */}
          <div className="hidden lg:block absolute -right-20 z-10 w-36 xl:w-44 pointer-events-none" style={{ top: '50%' }}>
            <div style={{ transform: 'translateY(-50%) rotate(12deg)' }}>
              <Image
                src="https://i.imgur.com/FrCURcD.png"
                alt="Robot mascot 2"
                width={990}
                height={1168}
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(-4px 6px 0px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>

        </div>

        {/* Below card */}
        <p
          className="text-center font-sans font-semibold text-black/50 text-sm"
        >
          Spots are limited. Once availability fills up, you&apos;ll be added to the waitlist.
        </p>

      </div>
    </section>
  );
}
