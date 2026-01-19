import { Subtitle } from "@/(public)/ui/subtitle";
import { Title } from "@/(public)/ui/title";
import { Button } from "@/(public)/ui/button";
import { LuCheck, LuX } from "react-icons/lu";

type Props = {
  title?: string;
  subtitle?: string;
  price?: number;
  recourses?: any[];
};

const CardPlan = ({ title, subtitle, price, recourses }: Props) => {
  return (
    <div className="bg-white py-12 px-10 rounded-lg shadow-md w-full lg:w-96 font-poppins">
      <section>
        <Title as="h1" title={title as string} className="font-hedvig!" />
        <Subtitle subtitle={subtitle as string} className="text-sm mb-6" />

        <div className="my-4 text-3xl font-semibold">
          {price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          <span>/mes</span>
        </div>

        <Button text="Assinar agora" variant="green" className="w-full mb-4" />

        <ul className="flex flex-col space-y-1">
          <Title as="h3" title="Recursos do plano:" className="text-sm! my-4" />
          {recourses?.map((recourse) => (
            <li
              key={recourse.id}
              className={`my-1 flex items-center space-x-2 text-sm ${recourse.active === true ? "opacity-100" : "opacity-40"}`}
            >
              {recourse.active === true ? (
                <LuCheck size={20} />
              ) : (
                <LuX size={20} />
              )}
              <span>{recourse.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export { CardPlan };
