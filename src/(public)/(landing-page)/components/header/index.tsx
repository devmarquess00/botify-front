import { Title } from "@/(public)/ui/title";
import { Button } from "@/(public)/ui/button";
import { menuHeader } from "@/(public)/menu";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white font-poppins lg:py-6 lg:px-100">
      <div className="flex items-center space-x-10">
        <Title title="Botify" as="h1" />

        <ul className="flex items-center space-x-6">
          {menuHeader.map((menu) => (
            <li
              key={menu.id}
              className="text-sm text-black/70 duration-200 ease-in hover:cursor-pointer hover:text-black"
            >
              <a href={menu.href}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button text="Começar" variant="black" />
      </div>
    </header>
  );
};

export { Header };
