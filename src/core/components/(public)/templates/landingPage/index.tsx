"use client";

import { Faq } from '@/core/components/(public)/molecules/faq'
import { Hero } from "@/core/components/(public)/molecules/hero";
import { Works } from "@/core/components/(public)/molecules/works";
import { Header } from "@/core/components/(public)/molecules/header";
import { Footer } from '@/core/components/(public)/molecules/footer'
import { Improve } from "@/core/components/(public)/molecules/improve";
import { PlansCall } from '@/core/components/(public)/molecules/plansCall'
import { Avaliation } from '@/core/components/(public)/molecules/avaliations'
import { Differential } from "@/core/components/(public)/molecules/differential";
import { useLandingPage } from "@/(public)/(landing-page)/hooks/useLandingPage";

const TemplateLandingPage = () => {
  const { toggleShowDropdown, isShowDropdown } = useLandingPage();

  return (
    <>
      <Header toggleShowDropdown={toggleShowDropdown} />
      <Hero />
      <Works />
      <Improve />
      <Differential />
      <Avaliation />
      <Faq />
      <PlansCall />
      {/* <Footer /> */}
    </>
  );
};

export { TemplateLandingPage };
