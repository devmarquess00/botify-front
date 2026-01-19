import Link from "next/link";
import { LuChevronRight, LuX } from "react-icons/lu";
import { Button } from "@/(public)/ui/button";
import { Title } from "@/(public)/ui/title";
import { menuHeader } from "@/(public)/menu";

type Props = {
  toggleShowDropdown: () => void;
};

const Dropdown = ({ toggleShowDropdown }: Props) => {
  return (
    <section className="w-full h-screen bg-white py-6">
      <div className="flex items-center justify-between font-poppins px-10">
        <Link href="/">
          <Title title="Botify" as="h1" />
        </Link>
        <Button
          text={<LuX size={24} />}
          variant="blackWithBorder"
          className="bg-transparent! border-none! p-0!"
          onClick={toggleShowDropdown}
        />
      </div>

      <main className="bg-primary w-full h-full px-14 mt-6 font-poppins">
        <ul className="flex flex-col space-y-4 pt-12">
          {menuHeader.map((menu) => (
            <Link href={menu.href} key={menu.id}>
              <li className="flex items-center justify-between border-b border-zinc-200/40 pb-4">
                <span className="font-medium text-lg">{menu.label}</span>
                <LuChevronRight size={26} />
              </li>
            </Link>
          ))}
        </ul>
        <Link href="/auth">
          <Button text="Começar" variant="black" className="w-full mt-8" />
        </Link>
      </main>
    </section>
  );
};

export { Dropdown };
