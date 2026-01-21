"use client";
import { menuAvaliations } from "@/(public)/menu";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";
import { Title } from "@/core/components/(public)/atoms/title";
import { useMediaQuery } from "@/(public)/(landing-page)/hooks/useMediaQuery";

const Avaliation = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section className="w-full flex flex-col items-center justify-center px-10 py-12 lg:px-30 2xl:px-100 lg:py-16">
      <Title
        title="Veja o que os nossos clientes dizem"
        as={isMobile ? "h2" : "h1"}
        className="font-normal! font-poppins text-center"
      />
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mt-6 lg:mt-12">
        {menuAvaliations.map((menu) => (
          <div
            key={menu.id}
            className="bg-black/90 rounded-xl w-full h-52 lg:h-62 lg:w-82 px-8 py-2 lg:py-4 relative"
          >
            <Subtitle
              subtitle={menu.testimonial}
              className="text-white font-poppins text-sm mt-4"
            />
            <div className="flex flex-col absolute bottom-0 mb-6">
              <Subtitle
                subtitle={menu.name}
                className="text-white font-poppins text-sm font-semibold"
              />
              <Subtitle
                subtitle={menu.role}
                className="text-zinc-500 font-poppins text-sm font-semibold"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Avaliation };
