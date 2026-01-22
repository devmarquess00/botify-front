"use client";
import Link from "next/link";
import { SidebarMenu, SidebarProps } from "@/core/constants/(private)";
import { LuPanelRight } from "react-icons/lu";
import { Button } from "@/core/components/(private)/atoms/button";
import { useLayout } from "@/core/hooks/(private)/useLayout";
import { Title } from "@/core/components/(private)/atoms/title";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useLayout();

  return (
    <aside
      className={`duration-200 border-r border-zinc-200 bg-white h-screen px-6 py-6 flex flex-col ${isOpen ? "w-72 items-start relative" : "w-28 items-center"}`}
    >
      <div
        className={`w-full flex items-center mb-2 ${isOpen ? "justify-between" : "justify-center"}`}
      >
        {isOpen && <Title title="Botify" variantTitle="title-medium" />}
        <Button
          className="p-3 rounded-md hover:bg-green-primary/20"
          onClick={toggleSidebar}
        >
          <LuPanelRight size={20} />
        </Button>
      </div>
      <ul className="flex flex-col space-y-1.5 pt-8 w-full">
        {SidebarMenu &&
          SidebarMenu.map((menu: SidebarProps) => {
            const Icon = menu?.icon;

            return (
              <Link
                key={menu.id}
                href={menu.href}
                className={`font-normal duration-200 flex w-full text-sm hover:bg-green-primary/20 rounded-md px-2 ${isOpen ? "space-x-4 items-center" : "justify-center items-center space-x-0"}`}
              >
                <Icon size={20} />
                <li
                  className={`${isOpen ? "flex items-center opacity-100 w-auto h-12" : "opacity-0 w-0 h-12"}`}
                >
                  {menu.label}
                </li>
              </Link>
            );
          })}
      </ul>
    </aside>
  );
};

export { Sidebar };
