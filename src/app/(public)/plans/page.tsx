"use client";
import { Dropdown } from "@/(public)/(landing-page)/components/dropdown";
import { Header } from "@/(public)/(landing-page)/components/header";
import { useLandingPage } from "@/(public)/(landing-page)/hooks/useLandingPage";
import { PlansContent } from "@/(public)/(plans)/components/plans";

export default function Plans() {
  const { toggleShowDropdown, isShowDropdown } = useLandingPage();

  return (
    <main className="min-h-screen w-full bg-primary flex flex-col">
      {!isShowDropdown ? (
        <>
          <Header toggleShowDropdown={toggleShowDropdown} />
          <PlansContent />
        </>
      ) : (
        <Dropdown toggleShowDropdown={toggleShowDropdown} />
      )}
    </main>
  );
}
