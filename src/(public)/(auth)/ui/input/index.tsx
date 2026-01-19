import { IconType } from "react-icons";

type Props = {
  icon: IconType;
};

const Input = ({ icon: Icon }: Props) => {
  return (
    <div className="flex items-center space-x-2 bg-white rounded-md border border-zinc-200/80 p-3.5">
      {Icon && <Icon size={20} className="text-zinc-700" />}
      <input
        type="text"
        className="w-full outline-none font-poppins border-l border-zinc-200 pl-2"
      />
    </div>
  );
};

export { Input };
