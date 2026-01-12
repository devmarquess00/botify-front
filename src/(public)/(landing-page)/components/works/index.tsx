import { menuSteps } from "@/(public)/menu";
import { Title } from "@/(public)/ui/title";
import { Step } from "@/(public)/(landing-page)/ui/step";
import { Button } from "@/(public)/ui/button";

const Works = () => {
  return (
    <section className="w-full lg:px-100 lg:pb-20">
      <div className="bg-white w-full lg:px-20 lg:py-12">
        <Title
          title="Como funciona a criaçao do ChatBot?"
          as="h1"
          className="text-center font-poppins"
        />

        <div className="flex items-center justify-center space-x-14 my-14">
          {menuSteps.map((menu) => (
            <Step
              key={menu.id}
              step={menu.step}
              title={menu.title}
              subtitle={menu.subtitle}
            />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Button
            text="Quero criar meu ChatBot personalizado agora"
            variant="green"
            className="py-4 font-bold!"
          />
        </div>
      </div>
    </section>
  );
};

export { Works };
