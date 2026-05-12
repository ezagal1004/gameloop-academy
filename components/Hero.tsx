"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [form, setForm] = useState({
    parentName: '',
    parentEmail: '',
    studentName: '',
    studentAge: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        const lines = textRef.current?.querySelectorAll('.hero-line');
        if (!lines) return;

        lines.forEach((line) => {
          gsap.set(line, { opacity: 1 });
          SplitText.create(line, {
            type: 'words,lines',
            mask: 'lines',
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 110,
                opacity: 0,
                duration: 0.7,
                ease: 'expo.out',
                stagger: 0.08,
              });
            },
          });
        });

        gsap.from(formRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.9,
          ease: 'expo.out',
          delay: 0.25,
        });

        gsap.from(robotRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'back.out(1.4)',
          delay: 0.6,
        });

      });
    });

    return () => ctx.revert();
  }, []);

  return (

    <section className="relative min-h-screen flex items-center justify-center bg-[#3B9FD8] overflow-hidden py-16 lg:py-12">

      {/* Polka-dot halftone */}
      <div
        className="absolute inset-0 z-0 opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Sticky navbar */}
      <div className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${scrolled ? 'bg-gradient-to-b from-black/50 to-transparent pb-10' : ''}`}>
        <div className={`container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'pt-5'}`}>
          <Image
            src="https://i.imgur.com/DonXq7X.png"
            alt="Gameloop Academy"
            width={280}
            height={90}
            className="h-12 w-auto pointer-events-auto"
            priority
          />
          <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
            {[
              { label: 'Curriculum', href: '#curriculum' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'About', href: '#about' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white font-bold font-sans text-xl hover:text-[#FDB927] transition-colors duration-150"
                style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.2)' }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

          {/* Left: split text */}
          <div ref={textRef} className="text-center lg:text-left leading-none">

            {/* Robot 1 — peeks up from behind the title */}
            <div
              ref={robotRef}
              className="hidden lg:block pointer-events-none"
              style={{ width: '210px', height: '132px', overflow: 'hidden', position: 'relative', zIndex: 0 }}
            >
              <Image
                src="https://i.imgur.com/ULNz00V.png"
                alt="Robot mascot"
                width={990}
                height={1168}
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(4px 6px 0px rgba(0,0,0,0.3))' }}
              />
            </div>

            {/* Text sits in front of robot */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p
                className="hero-line opacity-0 text-white font-bold font-sans uppercase text-4xl sm:text-5xl lg:text-6xl"
                style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.22)' }}
              >
                From Game
              </p>
              <p
                className="hero-line opacity-0 text-[#FDB927] font-bold font-sans uppercase text-7xl sm:text-8xl lg:text-9xl"
                style={{ textShadow: '5px 5px 0px rgba(0,0,0,0.28)', lineHeight: '0.88' }}
              >
                Player
              </p>
              <p
                className="hero-line opacity-0 text-white font-bold font-sans uppercase text-4xl sm:text-5xl lg:text-6xl"
                style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.22)', paddingTop: '6px' }}
              >
                to Game
              </p>
              <p
                className="hero-line opacity-0 text-[#FDB927] font-bold font-sans uppercase text-7xl sm:text-8xl lg:text-9xl"
                style={{ textShadow: '5px 5px 0px rgba(0,0,0,0.28)', lineHeight: '0.88' }}
              >
                Creator
              </p>

              <p className="text-white/90 font-sans font-semibold text-lg sm:text-xl lg:text-2xl mt-5 max-w-sm mx-auto lg:mx-0 leading-snug">
                Private 1-on-1 coding lessons designed to keep kids engaged, learning, and coming back.
              </p>
            </div>
          </div>

          {/* Right: form + robots */}
          <div className="flex items-center justify-center">
            <div ref={formRef} className="relative w-full max-w-lg lg:ml-12">

              {/* Form card */}
              <div
                id="trial-form"
                className="bg-white w-full relative z-20"
                style={{
                  border: '4px solid #000',
                  borderRadius: '16px',
                  boxShadow: '8px 8px 0px #000',
                  padding: 'clamp(16px, 4vw, 28px) clamp(16px, 4vw, 28px) clamp(24px, 5vw, 36px)',
                }}
              >
                {/* Card header */}
                <div className="mb-5">
                  <span
                    className="inline-block bg-[#FDB927] text-black font-bold font-sans text-xs uppercase px-3 py-1 border-2 border-black mb-3"
                    style={{ borderRadius: '6px', boxShadow: '2px 2px 0px #000' }}
                  >
                    🎮 Free 30-Min Discovery Trial
                  </span>
                  <h2 className="font-bold font-sans text-black text-2xl leading-tight">
                    Book your child's first session
                  </h2>
                  <p className="text-gray-500 text-sm font-sans mt-1">
                    See if it's the right fit — no commitment needed.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <p className="text-4xl mb-3">🎮</p>
                    <h3 className="font-bold font-sans text-black text-xl mb-2">We got your info!</h3>
                    <p className="text-gray-500 font-sans text-sm max-w-xs">
                      Thanks for reaching out! We'll be in contact with you soon at <strong>{form.parentEmail}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold font-sans text-sm text-black mb-1">
                          Parent Full Name
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          required
                          className="w-full font-sans text-sm bg-white text-black placeholder-gray-400 outline-none px-3 py-2.5"
                          style={{ border: '3px solid #000', borderRadius: '8px' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#3B9FD8')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#000')}
                        />
                      </div>
                      <div>
                        <label className="block font-bold font-sans text-sm text-black mb-1">
                          Parent Email
                        </label>
                        <input
                          type="email"
                          name="parentEmail"
                          value={form.parentEmail}
                          onChange={handleChange}
                          placeholder="jane@email.com"
                          required
                          className="w-full font-sans text-sm bg-white text-black placeholder-gray-400 outline-none px-3 py-2.5"
                          style={{ border: '3px solid #000', borderRadius: '8px' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#3B9FD8')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#000')}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold font-sans text-sm text-black mb-1">
                          Student Full Name
                        </label>
                        <input
                          type="text"
                          name="studentName"
                          value={form.studentName}
                          onChange={handleChange}
                          placeholder="Alex Smith"
                          required
                          className="w-full font-sans text-sm bg-white text-black placeholder-gray-400 outline-none px-3 py-2.5"
                          style={{ border: '3px solid #000', borderRadius: '8px' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#3B9FD8')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#000')}
                        />
                      </div>
                      <div>
                        <label className="block font-bold font-sans text-sm text-black mb-1">
                          Student Age
                        </label>
                        <select
                          name="studentAge"
                          value={form.studentAge}
                          onChange={handleChange}
                          required
                          className="w-full font-sans text-sm bg-white text-black outline-none px-3 py-2.5 cursor-pointer"
                          style={{ border: '3px solid #000', borderRadius: '8px' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#3B9FD8')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#000')}
                        >
                          <option value="" disabled>Select age</option>
                          {Array.from({ length: 11 }, (_, i) => i + 7).map(age => (
                            <option key={age} value={age}>{age} years old</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold font-sans text-sm text-black mb-1">
                        Anything else I should know?{' '}
                        <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Prior coding experience, schedule preferences, questions..."
                        className="w-full font-sans text-sm bg-white text-black placeholder-gray-400 outline-none px-3 py-2.5 resize-none"
                        style={{ border: '3px solid #000', borderRadius: '8px' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#3B9FD8')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#000')}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 font-sans text-sm text-center">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full font-bold font-sans text-base uppercase text-black bg-[#FDB927] py-3 transition-all duration-150 hover:translate-y-0.5 active:translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        border: '3px solid #000',
                        borderRadius: '10px',
                        boxShadow: '4px 4px 0px #000',
                      }}
                      onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.boxShadow = '2px 2px 0px #000'; }}
                      onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}
                    >
                      {status === 'loading' ? 'Sending...' : 'Book My Free Trial →'}
                    </button>

                  </form>
                )}
              </div>


            </div>
          </div>

        </div>
      </div>

    </section>
  );

}