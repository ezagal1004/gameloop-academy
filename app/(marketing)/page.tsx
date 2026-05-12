// app/(marketing)/page.tsx
import Hero from '@/components/Hero';
import Curriculum from '@/components/Curriculum';
import WhatYouGet from '@/components/WhatYouGet';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import WaveDivider from '@/components/layout/WaveDivider';

const page = () => {
  return (
    <>
      <Hero />
      <WaveDivider from="#3B9FD8" to="#ffffff" />
      <Curriculum />
      <WaveDivider from="#ffffff" to="#3B9FD8" />
      <WhatYouGet />
      <WaveDivider from="#3B9FD8" to="#ffffff" />
      <Pricing />
      <WaveDivider from="#ffffff" to="#3B9FD8" />
      <About />
    </>
  );
}

export default page
