import { ReactNode } from "react";
import { Title } from "@/core/components/(public)/atoms/title";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

const Card = ({ icon, title, subtitle }: Props) => {
  return (
    <div className="bg-white rounded-md px-10 py-6 w-full h-full 2xl:w-86 lg:h-92">
      <div className="flex flex-col justify-center items-center">
        <span className="text-green-primary text-5xl">{icon}</span>
        <Title
          title={title}
          as="h2"
          className="font-poppins mt-4 text-center leading-6 mb-4"
        />
        <Subtitle
          subtitle={subtitle}
          className="font-hedvig text-zinc-500 text-center"
        />
      </div>
    </div>
  );
};

export { Card };
