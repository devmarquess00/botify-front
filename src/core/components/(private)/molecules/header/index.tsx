"use client";
import { Button } from "@/core/components/(private)/atoms/button";
import { Subtitle } from "@/core/components/(private)/atoms/subtitle";
import { useLayout } from "@/core/hooks/(private)/useLayout";
import { PopUp } from "@/core/components/(private)/atoms/popup";

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
