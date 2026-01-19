import { Button } from "@/(public)/ui/button";
import { Subtitle } from "@/(public)/ui/subtitle";
import { Title } from "@/(public)/ui/title";
import { Form } from "@/(public)/(auth)/ui/form";
import { Input } from "@/(public)/(auth)/ui/input";
import { LuKey, LuMail, LuUser } from "react-icons/lu";

const Register = () => {
  return (
    <main>
      <section className="flex flex-col">
        <Title
          as="h1"
          title="Crie a sua conta"
          className="font-hedvig text-5xl"
        />

        <Subtitle subtitle="É gratuito e rápido." className="font-poppins" />

        <Form>
          <div className="flex flex-col space-y-2 mt-4">
            <Input icon={LuUser} />
            <Input icon={LuMail} />
            <Input icon={LuKey} />
            <Button variant="green" text="Criar conta" />
          </div>
        </Form>
      </section>
    </main>
  );
};

export { Register };
