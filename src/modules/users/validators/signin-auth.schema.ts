import * as yup from "yup";

export const signInAuthSchema = yup.object({
  email: yup
    .string()
    .email("Precisa ser um email válido")
    .required("Email é campo obrigatório"),
  password: yup.string().min(6).required("Senha é campo obrigatório"),
});
