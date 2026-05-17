import { Router } from "express";

import { AuthController } from "../../auth/controllers/AuthController";
import { validateSchema } from "../../../shared/middlewares/validate-schema";
import { signInAuthSchema } from "../validators/signin-auth.schema";

const authController = new AuthController();

export const authRoutes = Router();

authRoutes.post("/signin", validateSchema(signInAuthSchema), (request, response) =>
  authController.SignIn(request, response),
);
