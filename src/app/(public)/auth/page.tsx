"use client";
import { HeaderAuth } from "@/core/components/(public)/molecules/headerAuth";
import { useLandingPage } from "@/core/hooks/(public)/landingPage";
import { TemplateLogin } from "@/core/components/(public)/templates/login";

export default function Auth() {
  const { steps, toggleShowComponent } = useLandingPage();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-primary">
      <HeaderAuth toggleShowComponent={toggleShowComponent} />
      <TemplateLogin steps={steps} />
    </main>
  );
}
