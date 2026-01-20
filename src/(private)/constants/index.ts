import { LuHouse, LuBot } from "react-icons/lu";
import { IconType } from "react-icons";

export type SidebarProps = {
  id: number;
  icon: IconType;
  label: string;
  href: string;
};

export const SidebarMenu: SidebarProps[] = [
  { id: 1, icon: LuHouse, label: "Visao geral", href: "/" },
  { id: 2, icon: LuBot, label: "Meu ChatBot", href: "/" },
];
