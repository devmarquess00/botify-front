"use client";
import { Header } from "@/(public)/(auth)/components/header";
import { Content } from "@/(public)/(auth)/components/content";
import { useHeader } from "@/(public)/(auth)/hooks/useHeader";

export default function Auth() {
  const { steps, toggleShowComponent } = useHeader();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-primary">
      <Header toggleShowComponent={toggleShowComponent} />
      <Content steps={steps} />
    </main>
  );
}
