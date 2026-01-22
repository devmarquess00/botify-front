import Link from "next/link";
import { Title } from "@/core/components/(public)/atoms/title";
import { Button } from "@/core/components/(public)/atoms/button";

type Props = {
  toggleShowComponent: (textButton: string) => void;
};

const HeaderAuth = ({ toggleShowComponent }: Props) => {
  return (
    <header className="flex items-center justify-between w-full bg-white font-poppins px-10 py-6 lg:px-30 2xl:px-100">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <Title title="Botify" as="h1" />
        </Link>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <Button
          text="Criar conta"
          variant="blackWithBorder"
          onClick={() => toggleShowComponent("createCount")}
          className="px-2!"
        />
        <Button
          text="Fazer login"
          variant="black"
          onClick={() => toggleShowComponent("loginCount")}
        />
      </div>
    </header>
  );
};

export { HeaderAuth };
