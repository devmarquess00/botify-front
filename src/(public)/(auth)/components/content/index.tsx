import Image from "next/image";
import { Login } from "@/(public)/(auth)/components/login";
import { Register } from "@/(public)/(auth)/components/register";

type Props = {
  steps: number;
};

const Content = ({ steps }: Props) => {
  const componentsSteps = [<Login />, <Register />];

  return (
    <main className="w-full flex-1 flex items-center justify-center space-x-10 max-w-6xl">
      <section className="w-full border-r border-zinc-200 pr-20">
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
