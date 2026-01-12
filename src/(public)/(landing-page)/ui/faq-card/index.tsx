import { Subtitle } from "@/(public)/ui/subtitle";
import { Title } from "@/(public)/ui/title";
import { LuMinus, LuPlus } from "react-icons/lu";

type Props = {
  onClick: () => void;
  showButton: boolean;
  title: string;
  subtitle: string;
};

const FaqCard = ({ onClick, showButton, title, subtitle }: Props) => {
  return (
    <div className="bg-black/90 w-full flex flex-col space-x-4 py-6 px-8 rounded-xl">
      <div className="flex items-center space-x-4">
        <button onClick={onClick} className="hover:cursor-pointer">
          {showButton ? (
            <LuMinus color="#fff" size={22} />
          ) : (
            <LuPlus color="#fff" size={22} />
          )}
        </button>
        <Title
          as="h3"
          title={title}
          className="text-white text-base!"
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showButton ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <Subtitle
          subtitle={subtitle}
          className="text-zinc-500"
        />
      </div>
    </div>
  );
};

export { FaqCard };
