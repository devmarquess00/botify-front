import z from "zod";

export const formLogin = z.object({
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
    .min(6, {
      error: "A senha deve ter no mínimo 6 caracteres",
    }),
});

export type FormLoginSchema = z.infer<typeof formLogin>;
