"use client";
import { Header } from "@/(public)/(auth)/components/header";
import { useHeader } from "@/(public)/(auth)/hooks/useHeader";
import { TemplateLogin } from '@/core/components/(public)/templates/login'

export default function Auth() {
  const { steps, toggleShowComponent } = useHeader();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-primary">
      <Header toggleShowComponent={toggleShowComponent} />
      <TemplateLogin steps={steps} />
    </main>
  );
}
