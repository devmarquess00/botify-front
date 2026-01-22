import { classNamesTitle } from "@/core/components/(private)/atoms/title/constants";

type VariantTitleProps = "title-big" | "title-medium" | "title-small";
type Props = {
  title: string;
  className?: string;
  variantTitle: VariantTitleProps;
};

const Title = ({ title, className, variantTitle }: Props) => {
  return (
    <h1 className={`font-semibold ${classNamesTitle[variantTitle]}`}>
      {title}
    </h1>
  );
};

export { Title };
