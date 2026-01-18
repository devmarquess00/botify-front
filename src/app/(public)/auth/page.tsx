import { Header } from "@/(public)/(auth)/components/header";
import { Content } from "@/(public)/(auth)/components/content";

export default function Auth() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-primary">
      <Header />
      <Content />
    </main>
  );
}
