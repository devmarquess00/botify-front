import { menuCards } from "@/(public)/menu";
import { Title } from "@/(public)/ui/title";
import { Card } from "@/(public)/(landing-page)/ui/card";

const Improve = () => {
  return (
    <section className="w-full lg:px-100 lg:pb-20">
      <div>
        <Title
          as="h1"
          title="Esteja um passo a frente com o ChatBot!"
          className="text-center font-poppins"
        />

        <div className="flex items-center justify-center space-x-6 my-8">
          {menuCards.map((menu) => (
            <Card
              key={menu.id}
              icon={menu.icon}
              title={menu.title}
              subtitle={menu.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Improve };
