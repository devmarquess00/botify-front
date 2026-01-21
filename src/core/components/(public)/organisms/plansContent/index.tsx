import { menuRecourses } from "@/(public)/menu";
import { CardPlan } from '@/core/components/(public)/molecules/cardPlan'
import { Title } from "@/core/components/(public)/atoms/title";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";

const PlansContent = () => {
  return (
    <main className="w-full flex-1 flex flex-col items-center justify-center lg:space-x-8 px-10 py-14">
      <Title
        as="h1"
        title="Conheça todos os nossos planos e ofertas!"
        className="font-hedvig text-2xl lg:text-4xl 2xl:text-5xl w-full lg:max-w-lg 2xl:max-w-2xl text-center"
      />
      <Subtitle
        subtitle="Veja qual o plano que faz mais sentido para voce e seu negócio."
        className="mt-4 font-poppins text-center"
      />

      <section className="flex flex-col lg:flex-row items-center space-x-0 space-y-6 lg:space-y-0 lg:space-x-4 mt-10">
        <CardPlan
          title="Plano Básico"
          subtitle="Para pequenos negócios que querem aumentar suas vendas e contatos."
          price={29}
          recourses={menuRecourses[0].planBasic}
        />
        <CardPlan
          title="Plano Pro"
          subtitle="Para grandes empresas que visam manter sua grande gama de contatos."
          price={39}
          recourses={menuRecourses[0].planPro}
        />
      </section>
    </main>
  );
};

export { PlansContent };
