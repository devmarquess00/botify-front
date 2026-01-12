import { Faq } from "@/(public)/(landing-page)/components/faq";
import { Hero } from "@/(public)/(landing-page)/components/hero";
import { Works } from "@/(public)/(landing-page)/components/works";
import { Header } from "@/(public)/(landing-page)/components/header";
import { Improve } from "@/(public)/(landing-page)/components/improve";
import { Avaliation } from "@/(public)/(landing-page)/components/avaliations";
import { Differential } from "@/(public)/(landing-page)/components/differential";

export default function Home() {
  return (
    <main className="w-full h-full bg-primary flex flex-col">
      <Header />
      <Hero />
      <Works />
      <Improve />
      <Differential />
      <Avaliation />
      <Faq />
    </main>
  );
}
