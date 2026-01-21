"use client";
import { LuUser } from "react-icons/lu";
import { Button } from "@/(private)/ui/button";
import { Subtitle } from "@/(private)/ui/subtitle";
import { useLayout } from "@/(private)/hooks/useLayout";
import { PopUp } from "@/(private)/components/pop-up";

const Header = () => {
  const { popUp, togglePopUp } = useLayout();

  return (
    <header className="py-6 px-12 bg-white border-b border-zinc-200">
      <div className="flex items-end justify-end">
        <div className="relative">
          <Button
            className="absolute-0 right-0 bg-zinc-200/70 w-10 h-10 rounded-full"
            onClick={togglePopUp}
          >
            <Subtitle
              subtitle="J"
              variantSubtitle="subtitle-big"
              className="font-semibold"
            />
          </Button>

          <PopUp popUpShow={popUp} />
        </div>
      </div>
    </header>
  );
};

export { Header };
