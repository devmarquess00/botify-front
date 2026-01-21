import Image from "next/image";
import { Title } from "@/core/components/(public)/atoms/title";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";
import { Button } from "@/core/components/(public)/atoms/button";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full py-10 px-10 sm:px-14 sm:py-16 lg:px-30 2xl:px-100">
      <div className="w-full sm:max-w-2xl">
        <Title
          title="Aumente suas vendas com um ChatBot totalmente personalizado!"
          as="h1"
          className="text-4xl sm:text-5xl font-hedvig"
        />
        <Subtitle
          subtitle="Pare de perder tempo respondendo as mesmas perguntas todos os dias — horário de funcionamento, preços, disponibilidade, endereço. Deixe um ChatBot totalmente personalizado cuidar do atendimento básico, responder seus clientes na hora certa e 24h por dia, enquanto você foca no que realmente importa: vender mais, organizar seu negócio e fazer ele crescer de verdade."
          className="text-zinc-500 mt-6 font-hedvig"
        />
        <Button
          text="Crie seu próprio ChatBot agora"
          variant="green"
          className="font-poppins mt-6 rounded-sm! py-4!"
        />
      </div>
      <div>
        <Image
          width={300}
          height={300}
          alt="chatbot-image"
          src="/chat-hero-2.svg"
          className="w-102"
        />
      </div>
    </section>
  );
};

export { Hero };
