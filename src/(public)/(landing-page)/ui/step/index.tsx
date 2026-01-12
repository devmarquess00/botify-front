import { Title } from "@/(public)/ui/title";
import { Subtitle } from "@/(public)/ui/subtitle";

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
          className="text-center mt-2 font-hedvig text-zinc-500"
        />
      </div>
    </div>
  );
};

export { Step };
