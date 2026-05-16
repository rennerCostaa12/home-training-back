import * as yup from 'yup';

export const createUserSchema = yup.object({
  name: yup.string().required().min(3).max(120),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(255),
  categories_id: yup.number().required().integer().positive()
});
