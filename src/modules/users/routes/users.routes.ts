import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';
import { validateSchema } from '../../../shared/middlewares/validate-schema';
import { createUserSchema } from '../validators/create-user.schema';

const createUserController = new CreateUserController();

export const usersRoutes = Router();

usersRoutes.post('/', validateSchema(createUserSchema), (request, response) =>
  createUserController.handle(request, response)
);
