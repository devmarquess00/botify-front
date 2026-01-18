import { Header } from "@/(public)/(landing-page)/components/header";
import { PlansContent } from "@/(public)/(plans)/components/plans";

export default function Plans() {
  return (
    <main className="min-h-screen w-full bg-primary flex flex-col">
      <Header />
      <PlansContent />
    </main>
  );
}
