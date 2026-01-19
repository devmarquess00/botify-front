"use client";
import { menuCards } from "@/(public)/menu";
import { Title } from "@/(public)/ui/title";
import { Card } from "@/(public)/(landing-page)/ui/card";
import { useMediaQuery } from "@/(public)/(landing-page)/hooks/useMediaQuery";

const Improve = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section className="w-full py-12 px-10 lg:px-30 2xl:px-100 2xl:pb-20">
      <div>
        <Title
          as={isMobile ? "h2" : "h1"}
          title="Esteja um passo a frente com o ChatBot!"
          className="text-center font-poppins"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 my-8">
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
