type Props = {
  subtitle: string;
  className?: string;
};

const Subtitle = ({ subtitle, className }: Props) => {
  return <p className={className}>{subtitle}</p>;
};

export { Subtitle };
