"use client";

const cards = [
  {
    num: '01',
    title: 'Everyone Deserves to Create',
    body: "I've worked at two major kids coding companies and noticed the gap immediately. Premium education shouldn't cost an arm and a leg. The future will require these skills — and every kid deserves access to them, not just the ones whose parents can afford a big brand name.",
  },
  {
    num: '02',
    title: 'Smaller Means Better',
    body: "The bigger the company, the more inconsistent the experience. I've seen it firsthand. When it's just me and your child on a Zoom call, there's no bloated overhead, no rotating instructors, no watered down curriculum. Just focused, personalized attention every single session.",
  },
  {
    num: '03',
    title: 'Most Kids Dream of Making Games',
    body: "They just don't know how close they already are. The bar to start building real games is lower than it's ever been. Getting kids started now doesn't just teach them to code — it opens doors they didn't even know existed.",
  },
];

export default function About() {
  const scrollToForm = () =>
    document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <section id="about" className="relative bg-[#3B9FD8] min-h-screen flex flex-col justify-center py-8">

      <div
        className="absolute inset-0 z-0 opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-6">
          <span
            className="inline-block bg-white text-black font-bold font-sans text-xs uppercase px-3 py-1 border-2 border-black mb-4"
            style={{ borderRadius: '6px', boxShadow: '2px 2px 0px #000' }}
          >
            🧑‍💻 About
          </span>
          <h2
            className="font-bold font-sans uppercase text-[#FDB927] text-6xl sm:text-7xl lg:text-8xl leading-none"
            style={{ textShadow: '5px 5px 0px rgba(0,0,0,0.18)' }}
          >
            Why I Built This
          </h2>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {cards.map((card) => (
            <div
              key={card.num}
              className="bg-white flex flex-col p-4"
              style={{
                border: '3px solid #000',
                borderRadius: '12px',
                boxShadow: '5px 5px 0px #000',
              }}
            >
              <span
                className="inline-block self-start font-bold font-sans text-black text-xs mb-3"
                style={{
                  background: '#FDB927',
                  border: '2px solid #000',
                  borderRadius: '6px',
                  boxShadow: '2px 2px 0px #000',
                  padding: '2px 8px',
                }}
              >
                {card.num}
              </span>
              <h3 className="font-bold font-sans text-black text-xl leading-tight mb-2">
                {card.title}
              </h3>
              <p className="font-sans text-black/60 text-base leading-snug">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bio block */}
        <div
          className="w-full bg-white"
          style={{
            border: '3px solid #000',
            borderLeft: '6px solid #FDB927',
            borderRadius: '12px',
            boxShadow: '5px 5px 0px #000',
            padding: 'clamp(16px, 3vw, 24px)',
            marginBottom: '20px',
          }}
        >
          <p className="font-bold font-sans text-black text-xl mb-3">
            Hi, I&apos;m Erick!
          </p>
          <p className="font-sans text-black/70 text-base leading-snug">
            I&apos;m not here to make a big company richer. I left the big coding companies because I wanted to build something meaningful — real connections with real families. I developed curriculum at one of the largest kids coding companies in the country and loved every second of it. But I knew most kids would never see it. This is my chance to deliver on a promise I made to myself: make coding accessible, affordable, and personal.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="font-bold font-sans text-base uppercase text-black bg-[#FDB927] px-8 py-3 transition-all duration-150 hover:translate-y-0.5 active:translate-y-1"
            style={{
              border: '3px solid #000',
              borderRadius: '10px',
              boxShadow: '4px 4px 0px #000',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '2px 2px 0px #000')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0px #000')}
            onClick={scrollToForm}
          >
            Meet Me in a Free Trial →
          </button>
        </div>

      </div>
    </section>
  );
}
