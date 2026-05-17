import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateUserService";
import { UsersRepository } from "../repositories/UsersRepository";
import { HttpStatusCode } from "../../../shared/http/HttpStatusCode";
import { errorResponse, successResponse } from "../../../shared/http/responses";
import { BcryptHash } from "../../../utils/BcryptHash";

export class CreateUserController {
  public async createUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const usersRepository = new UsersRepository();
      const bcryptHash = new BcryptHash();
      const createUserService = new CreateUserService(
        usersRepository,
        bcryptHash,
      );

      const user = await createUserService.execute(request.body);

      return successResponse({
        response,
        statusCode: HttpStatusCode.CREATED,
        message: "Usuário criado com sucesso.",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
        },
      });
    } catch (error: any) {
      console.error(error);
      return errorResponse({
        statusCode: error?.statusCode,
        message: error?.message,
        response,
      });
    }
  }
}
