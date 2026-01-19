import { ReactNode } from "react";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

const Form = ({ children }: Props) => {
  return <form>{children}</form>;
};

export { Form };
