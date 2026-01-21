import { Form } from "@/core/components/(public)/atoms/form";
import { Title } from '@/core/components/(public)/atoms/title'
import { Button } from "@/core/components/(public)/atoms/button";
import { Subtitle } from '@/core/components/(public)/atoms/subtitle'
import { InputController } from "@/core/components/(public)/atoms/inputController";
import { FormProvider, useForm } from "react-hook-form";
import { LuKey, LuMail, LuUser } from "react-icons/lu";

const FormRegister = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Title title="Crie sua conta" as="h1" className="font-hedvig text-5xl" />
      <Subtitle subtitle="É gratuito e rápido." className="font-poppins opacity-60 mb-6" />
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2">
          <InputController name="name" icon={LuUser} />
          <InputController name="email" icon={LuMail} />
          <InputController name="password" icon={LuKey} />
        </div>
        <Button
          text="Crie sua conta"
          variant="green"
          type="submit"
          className="w-full mt-4 rounded-sm!"
        />
      </Form>
    </FormProvider>
  );
};

export { FormRegister };
