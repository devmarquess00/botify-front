import z from "zod";

export const formRegister = z.object({
  name: z
    .string({
      error: "O nome é obrigatório",
    })
    .nonempty({
      error: "O nome não pode ser vazio",
    })
    .min(3, {
      error: "O nome deve ter no mínimo 3 caracteres",
    }),
  email: z
    .string({
      error: "E-mail é obrigatório",
    })
    .email({
      error: "E-mail inválido",
    }),
  password: z
    .string({
      error: "Senha é obrigatória",
    })
    .nonempty({
      error: "A senha nao pode ser vazia",
    })
    .min(6, {
      error: "A senha deve ter no mínimo 6 caracteres",
    }),
});

export type FormRegisterSchema = z.infer<typeof formRegister>;
