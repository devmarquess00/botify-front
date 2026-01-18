import { menuRecourses } from "@/(public)/menu";
import { CardPlan } from "@/(public)/(plans)/components/card-plan";
import { Title } from "@/(public)/ui/title";
import { Subtitle } from "@/(public)/ui/subtitle";

const PlansContent = () => {
  return (
    <main className="w-full flex-1 flex flex-col items-center justify-center space-x-8">
      <Title
        as="h1"
        title="Conheça todos os nossos planos e ofertas!"
        className="font-hedvig text-5xl max-w-2xl text-center"
      />
      <Subtitle
        subtitle="Veja qual o plano que faz mais sentido para voce e seu negócio."
        className="mt-4 font-poppins"
      />

      <section className="flex items-center space-x-4 mt-10">
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
