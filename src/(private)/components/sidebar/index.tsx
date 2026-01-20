import Link from "next/link";
import { SidebarMenu } from "@/(private)/constants";
import { SidebarProps } from "@/(private)/constants";
import { LuPanelRight } from "react-icons/lu";
import { Button } from "@/(private)/ui/button";

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen px-6 py-10 w-28 flex flex-col items-center">
      <Button className="p-4 rounded-md hover:bg-green-primary/20 mb-6">
        <LuPanelRight size={22} />
      </Button>
      <ul className="flex flex-col space-y-1.5 border-t border-zinc-200 pt-4">
        {SidebarMenu &&
          SidebarMenu.map((menu: SidebarProps) => {
            const Icon = menu?.icon;

            return (
              <Link
                key={menu.id}
                href={menu.href}
                className="duration-200 flex items-center justify-center space-x-2 w-full text-sm hover:bg-green-primary/20 p-4 rounded-md"
              >
                <Icon size={22} />
                {/* <li>{menu.label}</li> */}
              </Link>
            );
          })}
      </ul>
    </aside>
  );
};

export { Sidebar };
