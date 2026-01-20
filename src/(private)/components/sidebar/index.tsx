import Link from "next/link";
import { SidebarMenu } from "@/(private)/constants";
import { SidebarProps } from "@/(private)/constants";

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen px-4 py-10 w-62">
      <ul className="flex flex-col items-center justify-center space-y-1.5">
        {SidebarMenu &&
          SidebarMenu.map((menu: SidebarProps) => {
            const Icon = menu?.icon;

            return (
              <Link
                key={menu.id}
                href={menu.href}
                className="duration-200 flex items-center space-x-2 w-full text-sm hover:bg-green-primary/20 py-2 px-6 rounded-md"
              >
                <Icon size={22} />
                <li>{menu.label}</li>
              </Link>
            );
          })}
      </ul>
    </aside>
  );
};

export { Sidebar };
