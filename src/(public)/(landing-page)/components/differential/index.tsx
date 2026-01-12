import Image from "next/image";
import { Title } from "@/(public)/ui/title";
import { Button } from "@/(public)/ui/button";
import { Subtitle } from "@/(public)/ui/subtitle";
import { menuDifferential } from "@/(public)/menu";

const Differential = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col w-full lg:px-110 lg:py-14">
        <Title
          title="Por que escolher a Botify para criar o seu ChatBot?"
          as="h1"
          className="font-poppins"
        />
        <div className="flex space-x-16 mt-6">
          <Image
            src="/mobile-image.svg"
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
