import { Sidebar } from "@/(private)/components/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutDashboard({ children }: Props) {
  return (
    <div className="flex w-full h-screen bg-primary font-poppins">
      <Sidebar />
      <main className="ml-10">{children}</main>
    </div>
  );
}
