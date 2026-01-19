import Image from "next/image";
import { Login } from "@/(public)/(auth)/components/login";
import { Register } from "@/(public)/(auth)/components/register";

type Props = {
  steps: number;
};

const Content = ({ steps }: Props) => {
  const componentsSteps = [<Login />, <Register />];

  return (
    <main className="w-full flex-1 flex flex-col lg:flex-row items-center justify-center py-12 lg:space-x-10 lg:max-w-6xl">
      <section className="w-full lg:border-r lg:border-zinc-200 lg:pr-20 px-10 md:px-20">
        {componentsSteps[steps]}
      </section>

      <Image
        alt="chat-auth"
        src="/chat-auth.svg"
        width={300}
        height={300}
        quality={100}
        loading="lazy"
        className="w-142"
      />
    </main>
  );
};

export { Content };
