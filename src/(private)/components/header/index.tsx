import { LuUser } from "react-icons/lu";
import { Subtitle } from "@/(private)/ui/subtitle";

const Header = () => {
  return (
    <header className="py-6 px-12 bg-white border-b border-zinc-200">
      <div className="flex items-center justify-end space-x-4">
        <Subtitle
          subtitle="Olá, Joao Marques"
          variantSubtitle="subtitle-small"
        />
        <span className="bg-zinc-200/70 p-2.5 rounded-full">
          <LuUser />
        </span>
      </div>
    </header>
  );
};

export { Header };
