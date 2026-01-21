import { classNamesTitle } from "@/(private)/ui/title/constants";

type VariantTitleProps = "h1" | "h2" | "h3";
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
