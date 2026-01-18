import { Title } from "@/(public)/ui/title";
import Link from "next/link";
import { Button } from "@/(public)/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white font-poppins lg:py-6 lg:px-100">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <Title title="Botify" as="h1" />
        </Link>
      </div>

      <div>
        <Button text="Começar" variant="black" />
      </div>
    </header>
  );
};

export { Header };
