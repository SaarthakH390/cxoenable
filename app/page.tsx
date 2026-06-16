import { Hero } from '@/components/Hero';
import { WhoWeHelp } from '@/components/WhoWeHelp';
import { WhatWeDo } from '@/components/ServicesGrid';
import { FounderSection } from '@/components/FounderSection';
import { ApproachSection } from '@/components/ApproachSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <WhatWeDo />
      <FounderSection />
      <ApproachSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
