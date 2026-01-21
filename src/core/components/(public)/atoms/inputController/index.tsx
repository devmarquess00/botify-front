import { FC } from "react";
import { FieldErrors, useFormContext } from "react-hook-form";
import { IconType } from "react-icons";

type Props = {
  type?: string;
  value?: string;
  placeholder?: string;
  name: string;
  icon?: IconType;
  textError: any;
};

const InputController: FC<Props> = ({
  type,
  value,
  placeholder,
  name,
  icon: Icon,
  textError,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <div className="flex items-center space-x-2 bg-white rounded-md border border-zinc-200/80 p-3.5">
        {Icon && <Icon size={20} className="text-zinc-700" />}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className="w-full outline-none border-l border-zinc-200/60 pl-2.5"
          {...register(name)}
          {...props}
        />
      </div>
      <span className="text-red-500 font-poppins text-xs">
        {textError[name]?.message}
      </span>
    </div>
  );
};

export { InputController };
