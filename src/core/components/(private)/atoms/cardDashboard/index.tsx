import { IconType } from "react-icons";
import { Title } from "@/core/components/(private)/atoms/title";
import { Subtitle } from "@/core/components/(private)/atoms/subtitle";

type Props = {
  title?: string;
  icon?: IconType;
  subtitle?: string;
  bgColorIcon?: string;
  colorIcon?: string;
};

const CardDashboard = ({
  title,
  icon: Icon,
  subtitle,
  bgColorIcon,
  colorIcon,
}: Props) => {
  return (
    <div className="bg-white border border-zinc-200/60 w-102 shadow-sm py-6 px-8 rounded-md">
      <section className="flex items-center justify-between">
        <div>
          <Title title={title as string} variantTitle="title-small" />
          <Subtitle
            subtitle={subtitle as string}
            variantSubtitle="subtitle-small"
          />
        </div>
        <div
          className={`flex items-center justify-center p-2 w-14 h-14 rounded-md ${bgColorIcon}`}
        >
          {Icon && <Icon size={28} className={colorIcon} />}
        </div>
      </section>
    </div>
  );
};

export { CardDashboard };
