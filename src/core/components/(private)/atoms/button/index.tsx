import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`duration-200 hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
