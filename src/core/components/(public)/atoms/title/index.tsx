type Props = {
  title: string;
  className?: string;
  as: "h1" | "h2" | "h3";
};

const Title = ({ title, as, className }: Props) => {
  const classTitle = {
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
  };

  return (
    <h1 className={`font-semibold ${classTitle[as]} ${className}`}>{title}</h1>
  );
};

export { Title };
