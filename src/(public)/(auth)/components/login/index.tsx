import { Title } from "@/core/components/(public)/atoms/title";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";
import { Button } from "@/core/components/(public)/atoms/button";
import { Form } from "@/(public)/(auth)/ui/form";
import { Input } from "@/(public)/(auth)/ui/input";
import { LuKey, LuMail } from "react-icons/lu";

const Login = () => {
  return (
    <main>
      <section className="flex flex-col">
        <Title
          as="h1"
          title="Faça seu login"
          className="font-hedvig text-4xl sm:text-5xl"
        />
        <Subtitle subtitle="É gratuito e rápido." className="font-poppins" />

        <Form>
          <div className="flex flex-col space-y-2 mt-4">
            <Input icon={LuMail} />
            <Input icon={LuKey} />
            <Button variant="green" text="Fazer login" />
          </div>
        </Form>
      </section>
    </main>
  );
};

export { Login };
