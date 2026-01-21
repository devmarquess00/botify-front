import { classNamesSubtitle } from "@/(private)/ui/subtitle/constants";

type VariantSubtitleProps =
  | "subtitle-big"
  | "subtitle-medium"
  | "subtitle-small";
type Props = {
  subtitle: string;
  className?: string;
  variantSubtitle: VariantSubtitleProps;
};

const Subtitle = ({ subtitle, className, variantSubtitle }: Props) => {
  return (
    <p className={`${classNamesSubtitle[variantSubtitle]} ${className}`}>
      {subtitle}
    </p>
  );
};

export { Subtitle };
