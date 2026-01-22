import Image from "next/image";
import { Title } from "@/core/components/(public)/atoms/title";
import { Button } from "@/core/components/(public)/atoms/button";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";
import { menuDifferential } from "@/menu";

const Differential = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col w-full px-10 py-12 sm:px-14 sm:py-16 lg:px-30 2xl:px-110 lg:py-14">
        <Title
          title="Por que escolher a Botify para criar o seu ChatBot?"
          as="h1"
          className="font-poppins sm:max-w-lg lg:max-w-full"
        />
        <div className="flex flex-col lg:flex-row space-x-16 lg:space-x-18 mt-6">
          <Image
            src="/chat-differential.svg"
            height={400}
            width={400}
            alt="mobile-image"
            className="mt-12"
          />
          <div className="mt-12 flex flex-col space-y-10">
            {menuDifferential.map((menu) => (
              <div key={menu.id} className="">
                <Title
                  title={menu.title}
                  as="h2"
                  className="text-green-primary leading-6 font-bold! font-poppins"
                />
                <Subtitle
                  subtitle={menu.subtitle}
                  className="text-zinc-500 font-medium leading-4 mt-4 font-hedvig"
                />
              </div>
            ))}
            <Button
              text="Criar o meu ChatBot agora"
              variant="green"
              className="w-72 py-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Differential };
