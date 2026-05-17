import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../../shared/http/responses";
import { HttpStatusCode } from "../../../shared/http/HttpStatusCode";

import { AuthService } from "../services/AuthService";
import { UsersRepository } from "../../users/repositories/UsersRepository";
import { BcryptHash } from "../../../utils/BcryptHash";
import { JwtToken } from "../../../utils/JwtToken";

export class AuthController {
  public async SignIn(request: Request, response: Response) {
    try {
      const userRepository = new UsersRepository();
      const bcryptHash = new BcryptHash();
      const jwtToken = new JwtToken();

      const authService = new AuthService(
        userRepository,
        bcryptHash,
        jwtToken,
      );

      const dataUser = await authService.SignIn(
        request.body?.email,
        request.body?.password,
      );

      return successResponse({
        statusCode: HttpStatusCode.OK,
        message: "Login efetuado com sucesso.",
        response,
        data: dataUser,
      });
    } catch (error: any) {
      return errorResponse({
        statusCode: error.statusCode,
        message: error.message,
        response,
      });
    }
  }
}
