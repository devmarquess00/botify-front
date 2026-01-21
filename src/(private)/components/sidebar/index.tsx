"use client";
import Link from "next/link";
import { SidebarMenu } from "@/(private)/constants";
import { SidebarProps } from "@/(private)/constants";
import { LuPanelRight } from "react-icons/lu";
import { Button } from "@/(private)/ui/button";
import { useSidebar } from "@/(private)/hooks/useSidebar";
import { Title } from "@/(private)/ui/title";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`bg-white h-screen px-6 py-10 flex flex-col ${isOpen ? "w-64 items-start relative" : "w-28 items-center"}`}
    >
      <div
        className={`w-full flex items-center mb-2 ${isOpen ? "justify-between" : "justify-center"}`}
      >
        {isOpen && <Title title="Botify" variantTag="h2" />}
        <Button
          className="p-3 rounded-md hover:bg-green-primary/20"
          onClick={toggleSidebar}
        >
          <LuPanelRight size={20} />
        </Button>
      </div>
      <ul className="flex flex-col space-y-1.5 border-t border-zinc-200 pt-8 w-full">
        {SidebarMenu &&
          SidebarMenu.map((menu: SidebarProps) => {
            const Icon = menu?.icon;

            return (
              <Link
                key={menu.id}
                href={menu.href}
                className={`font-normal duration-200 flex w-full text-sm hover:bg-green-primary/20 p-3 rounded-md ${isOpen ? "justify-start items-start space-x-4" : "justify-center items-center"}`}
              >
                <Icon size={20} />
                {isOpen && <li>{menu.label}</li>}
              </Link>
            );
          })}
      </ul>
    </aside>
  );
};

export { Sidebar };
