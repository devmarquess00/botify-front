import { LuHouse, LuBot, LuSettings, LuCreditCard } from "react-icons/lu";
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
  { id: 3, icon: LuSettings, label: "Configurações", href: "/" },
  { id: 4, icon: LuCreditCard, label: "Planos", href: "/" },
];
