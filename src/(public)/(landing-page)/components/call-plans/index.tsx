import Link from "next/link";
import { Title } from "@/core/components/(public)/atoms/title";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";
import { Button } from "@/core/components/(public)/atoms/button";

const CallPlans = () => {
  return (
    <section className="bg-[linear-gradient(97deg,rgba(10,10,9,1)_0%,rgba(0,0,0,1)_50%,rgba(33,30,30,1)_100%)] text-white w-full h-full px-10 py-14 sm:px-20 md:px-40 lg:py-24">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <Title
          title="Tudo o que você precisa, em um só lugar. Planos feitos para crescer com você"
          className="font-hedvig text-center text-2xl! lg:text-4xl!"
          as="h1"
        />
        <Subtitle
          subtitle="Compare as opções, veja os benefícios e escolha o plano certo para sua empresa. Visualize nossos planos e encontre a melhor solução para você."
          className="text-center font-poppins mt-4 max-w-2xl"
        />

        <Link href="/plans">
          <Button
            text="Visualizar planos"
            variant="green"
            className="w-86 mt-8"
          />
        </Link>
      </div>
    </section>
  );
};

export { CallPlans };
