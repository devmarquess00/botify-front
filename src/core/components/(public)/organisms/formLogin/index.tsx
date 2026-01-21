import { Form } from "@/core/components/(public)/atoms/form";
import { Title } from "@/core/components/(public)/atoms/title";
import { Button } from "@/core/components/(public)/atoms/button";
import { useForm } from "react-hook-form";
import { Subtitle } from "@/core/components/(public)/atoms/subtitle";
import { FormProvider } from "react-hook-form";
import { LuKey, LuMail } from "react-icons/lu";
import { InputController } from "@/core/components/(public)/atoms/inputController";
import { FormLoginSchema, formLogin } from "@/core/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";

const FormLogin = () => {
  const methods = useForm<FormLoginSchema>({
    resolver: zodResolver(formLogin),
  });

  const onSubmit = (data: any) => {
    console.log("teste");
  };

  return (
    <FormProvider {...methods}>
      <Title title="Faça login" as="h1" className="font-hedvig text-5xl" />
      <Subtitle
        subtitle="É gratuito e rápido."
        className="font-poppins opacity-60 mb-6"
      />
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2">
          <InputController
            name="email"
            icon={LuMail}
            textError={methods.formState.errors}
          />
          <InputController
            name="password"
            icon={LuKey}
            textError={methods.formState.errors}
          />
        </div>
        <Button
          text="Fazer login"
          variant="green"
          type="submit"
          className="w-full mt-4 rounded-sm!"
        />
      </Form>
    </FormProvider>
  );
};

export { FormLogin };
