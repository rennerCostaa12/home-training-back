import * as yup from "yup";

export const signInAuthSchema = yup.object({
  email: yup
    .string()
    .email("Precisa ser um email válido")
    .required("Campo email obrigatório"),
  password: yup
    .string()
    .min(6, "Insira no mínimo 6 caracteres no campo senha")
    .required("Campo senha obrigatório"),
});
