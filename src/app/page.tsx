"use client";
import { Faq } from "@/(public)/(landing-page)/components/faq";
import { Hero } from "@/(public)/(landing-page)/components/hero";
import { Works } from "@/(public)/(landing-page)/components/works";
import { Header } from "@/(public)/(landing-page)/components/header";
import { Footer } from "@/(public)/(landing-page)/components/footer";
import { Improve } from "@/(public)/(landing-page)/components/improve";
import { CallPlans } from "@/(public)/(landing-page)/components/call-plans";
import { Avaliation } from "@/(public)/(landing-page)/components/avaliations";
import { Differential } from "@/(public)/(landing-page)/components/differential";
import { useLandingPage } from "@/(public)/(landing-page)/hooks/useLandingPage";
import { Dropdown } from "@/(public)/(landing-page)/components/dropdown";

export default function Home() {
  const { toggleShowDropdown, isShowDropdown } = useLandingPage();

  return (
    <main className="w-full h-full bg-primary flex flex-col">
      {!isShowDropdown ? (
        <>
          <Header toggleShowDropdown={toggleShowDropdown} />
          <Hero />
          <Works />
          <Improve />
          <Differential />
          <Avaliation />
          <Faq />
          <CallPlans />
          <Footer />
        </>
      ) : (
        <Dropdown toggleShowDropdown={toggleShowDropdown} />
      )}
    </main>
  );
}
