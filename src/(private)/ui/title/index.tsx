import { tags } from "@/(private)/ui/title/constants";

type VariantTags = "h1" | "h2" | "h3";
type Props = {
  title: string;
  className?: string;
  variantTag: VariantTags;
};

const Title = ({ title, className, variantTag }: Props) => {
  return <h1 className={`font-semibold ${tags[variantTag]}`}>{title}</h1>;
};

export { Title };
