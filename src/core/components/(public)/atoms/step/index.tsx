import { Title } from "@/core/components/(public)/atoms/title";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";

type Props = {
  step: string;
  title: string;
  subtitle: string;
};

const Step = ({ step, title, subtitle }: Props) => {
  return (
    <div>
      <div className="flex flex-col">
        <Title
          title={step}
          as="h1"
          className="text-green-primary font-hedvig text-center"
        />
        <Title
          title={title}
          as="h2"
          className="text-center font-poppins font-bold!"
        />
        <Subtitle
          subtitle={subtitle}
          className="text-center mt-2 font-hedvig text-zinc-500 sm:max-w-md lg:max-w-full"
        />
      </div>
    </div>
  );
};

export { Step };
