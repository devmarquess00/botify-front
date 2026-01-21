"use client";
import { menuSteps } from "@/(public)/menu";
import { Title } from "@/core/components/(public)/atoms/title";
import { Step } from "@/(public)/(landing-page)/ui/step";
import { Button } from "@/core/components/(public)/atoms/button";
import { useMediaQuery } from "@/(public)/(landing-page)/hooks/useMediaQuery";

const Works = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section className="w-full lg:px-30 2xl:px-100 lg:pb-20">
      <div className="bg-white w-full lg:px-20 py-12 px-10 rounded-4xl sm:rounded-xl">
        <Title
          title="Como funciona a criaçao do ChatBot?"
          as={isMobile ? "h2" : "h1"}
          className="text-center font-poppins"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-14 my-14">
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
            text={
              isMobile
                ? "Quero criar meu ChatBot agora"
                : "Quero criar meu ChatBot personalizado agora"
            }
            variant="green"
            className="py-4 font-bold!"
          />
        </div>
      </div>
    </section>
  );
};

export { Works };
