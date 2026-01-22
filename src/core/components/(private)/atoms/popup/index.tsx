import { LuLogOut } from "react-icons/lu";
import { Button } from "@/core/components/(private)/atoms/button";
import { Subtitle } from "@/core/components/(private)/atoms/subtitle";

type Props = {
  popUpShow: boolean;
};

const PopUp = ({ popUpShow }: Props) => {
  return (
    <div
      className={`rounded-md p-4 shadow-md duration-200 bg-white border border-zinc-100 absolute right-0 top-0 mt-12 w-64 ${
        popUpShow ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center space-x-2 border-b border-zinc-200 pb-2">
        <span className="bg-zinc-200/70 w-10 h-10 rounded-full flex items-center justify-center">
          <Subtitle
            subtitle="J"
            variantSubtitle="subtitle-big"
            className="font-semibold"
          />
        </span>
        <div className="flex flex-col">
          <span className="text-base font-semibold">João Lucas Marques</span>
          <Subtitle
            subtitle="joaomarques@gmail.com"
            variantSubtitle="subtitle-small"
            className="leading-2 opacity-70"
          />
        </div>
      </div>
      <Button className="flex items-center space-x-2 mt-4">
        <LuLogOut />
        <Subtitle subtitle="Sair" variantSubtitle="subtitle-medium" />
      </Button>
    </div>
  );
};

export { PopUp };
