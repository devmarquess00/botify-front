"use client";
import { Dropdown } from "@/core/components/(public)/molecules/dropdown";
import { useLandingPage } from "@/(public)/(landing-page)/hooks/useLandingPage";
import { PlansTemplate } from "@/core/components/(public)/templates/plans";
import { Header } from "@/core/components/(public)/molecules/header";

export default function Plans() {
  const { toggleShowDropdown, isShowDropdown } = useLandingPage();

  return (
    <main className="min-h-screen w-full bg-primary flex flex-col">
      {!isShowDropdown ? (
        <>
          <Header toggleShowDropdown={toggleShowDropdown} />
          <PlansTemplate />
        </>
      ) : (
        <Dropdown toggleShowDropdown={toggleShowDropdown} />
      )}
    </main>
  );
}
