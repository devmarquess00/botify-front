import { Header } from "@/core/components/(private)/molecules/header";
import { Sidebar } from "@/core/components/(private)/molecules/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutDashboard({ children }: Props) {
  return (
    <div className="flex w-full h-screen bg-primary font-poppins">
      <Sidebar />
      <main className="w-full">
        <Header />
        {children}
      </main>
    </div>
  );
}
