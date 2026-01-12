import { menuAvaliations } from "@/(public)/menu";
import { Subtitle } from "@/(public)/ui/subtitle";
import { Title } from "@/(public)/ui/title";

const Avaliation = () => {
  return (
    <section className="w-full lg:px-100 lg:py-16">
      <Title
        title="Veja o que os nossos clientes dizem"
        as="h1"
        className="font-normal! font-poppins text-center"
      />
      <div className="flex items-center space-x-8 mt-12">
        {menuAvaliations.map((menu) => (
          <div
            key={menu.id}
            className="bg-black/90 rounded-xl h-62 w-82 lg:px-8 lg:py-4 relative"
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
