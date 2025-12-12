// app/(marketing)/page.tsx
import Hero from '@/components/Hero';
import ProblemOpportunity from '@/components/ProblemOpportunity';
import WhatWeOffer from '@/components/WhatWeOffer';

const page = () => {
  return (
      <>
        <Hero/>
        <ProblemOpportunity/>
        <WhatWeOffer/>
      </>

  )
}

export default page