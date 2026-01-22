import Link from "next/link";
import { Title } from "@/core/components/(public)/atoms/title";
import { Button } from "@/core/components/(public)/atoms/button";
import { menuHeader } from "@/menu";
import { LuMenu } from "react-icons/lu";

type Props = {
  toggleShowDropdown: () => void;
};

const Header = ({ toggleShowDropdown }: Props) => {
  return (
    <header className="flex items-center justify-between w-full bg-white font-poppins px-10 py-6 lg:py-6 sm:px-20 lg:px-30 2xl:px-100">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <Title title="Botify" as="h1" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          {menuHeader.map((menu) => (
            <Link href={menu.href} key={menu.id}>
              <li className="text-sm text-black/70 duration-200 ease-in hover:cursor-pointer hover:text-black">
                {menu.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <Button
        text={<LuMenu size={22} color="#000" />}
        variant="black"
        className="bg-transparent! p-0! md:hidden"
        onClick={toggleShowDropdown}
      />

      <Link href="/auth" className="hidden md:block">
        <Button text="Começar" variant="black" />
      </Link>
    </header>
  );
};

export { Header };
