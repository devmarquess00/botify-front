import { ReactNode } from "react";

type Props = {
  text?: ReactNode;
  onClick?: () => void;
  className?: string;
  variant: "black" | "blackWithBorder" | "green";
  type?: "submit" | "reset" | "button"
};

const Button = ({ text, onClick, className, variant, type }: Props) => {
  const classButton = {
    black: "bg-black/90 hover:bg-black",
    blackWithBorder: "border border-black/90 text-black!",
    green: "bg-green-primary text-black!",
  };

  return (
    <button
      className={`font-poppins duration-200 ease-in hover:cursor-pointer text-white py-3 px-6 rounded-lg text-sm font-semibold ${classButton[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export { Button };
