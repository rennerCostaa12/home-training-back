import * as yup from 'yup';

export const createUserSchema = yup.object({
  name: yup.string().required("Campo nome obrigatório").min(3).max(120),
  email: yup.string().required("Campo email obrigatório").email("Precisa ser um email válido"),
  password: yup.string().required("Campo senha obrigatório").min(6, "Insira no mínimo 6 caracteres no campo senha").max(255),
  categories_id: yup.number().required("Campo categorias obrigatório").integer().positive()
});
