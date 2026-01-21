"use client";
import { Title } from "@/core/components/(public)/atoms/title";
import { FaqCard } from "@/(public)/(landing-page)/ui/faq-card";
import { useLandingPage } from "@/(public)/(landing-page)/hooks/useLandingPage";
import { useMediaQuery } from "@/(public)/(landing-page)/hooks/useMediaQuery";

const Faq = () => {
  const { faq1, setFaq1, faq2, setFaq2, faq3, setFaq3, faq4, setFaq4 } =
    useLandingPage();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section className="w-full px-10 py-12 lg:px-30 2xl:px-100 lg:py-16 bg-white">
      <Title
        title="Perguntas frequentes"
        as={isMobile ? "h2" : "h1"}
        className="text-center font-poppins font-normal!"
      />
      <div className="flex flex-col space-y-2 mt-8 font-poppins lg:px-40">
        <FaqCard
          title="Como criar e personalizar meu ChatBot?"
          subtitle="Voce pode criar o seu ChatBot personalizando informaçoes como o nome, menu e o fluxo de resposta desse bot."
          showButton={faq1}
          onClick={() => setFaq1((prev) => !prev)}
        />
        <FaqCard
          title="Como eu posso começar a usar assim que estiver criado?"
          subtitle="Assim que o Bot for criado será gerado um QR Code para voce integrar no seu WhatsApp e assim o Bot já estará funcionando."
          showButton={faq2}
          onClick={() => setFaq2((prev) => !prev)}
        />
        <FaqCard
          title="Qual é o preço de um ChatBot?"
          subtitle="Voce paga apenas uma vez para a criaçao do seu Bot no valor de R$150.00"
          showButton={faq3}
          onClick={() => setFaq3((prev) => !prev)}
        />
        <FaqCard
          title="Eu posso mudar as configuraçoes do meu ChatBot?"
          subtitle="Sim, voce pode mudar quantas vezes quiser seu ChatBot. Isso permite que caso o seu negocio tenha regras novas voce pode altera-las nesse mesmo ChatBot"
          showButton={faq4}
          onClick={() => setFaq4((prev) => !prev)}
        />
      </div>
    </section>
  );
};

export { Faq };
