import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';
import { UsersRepository } from '../repositories/UsersRepository';
import { HttpStatusCode } from '../../../shared/http/HttpStatusCode';
import { successResponse } from '../../../shared/http/responses';

export class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const createUserService = new CreateUserService(usersRepository);

    const user = await createUserService.execute(request.body);

    return successResponse({
      response,
      statusCode: HttpStatusCode.CREATED,
      message: 'User created successfully.',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  }
}
