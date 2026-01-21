'use client';

import { useLandingPage } from "@/(public)/(landing-page)/hooks/useLandingPage";
import { Dropdown } from "@/core/components/(public)/molecules/dropdown"
import { TemplateLandingPage } from "@/core/components/(public)/templates/landingPage";

export default function Home() {
  const { toggleShowDropdown, isShowDropdown } = useLandingPage();
  return (
    <main className="w-full h-full bg-primary flex flex-col">
      {!isShowDropdown ? (
        <TemplateLandingPage
        toggleShowDropdown={toggleShowDropdown}
        />
      ) : (
        <Dropdown toggleShowDropdown={toggleShowDropdown} />
      )}
    </main>
  );
}
