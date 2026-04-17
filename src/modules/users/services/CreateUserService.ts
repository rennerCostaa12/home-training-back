import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserModel } from "../models/UserModel";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { AppError } from "../../../shared/errors/AppError";
import { HttpStatusCode } from "../../../shared/http/HttpStatusCode";

export class CreateUserService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  public async execute(data: CreateUserDTO): Promise<UserModel> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExists) {
      throw new AppError(
        "User already exists with this email.",
        HttpStatusCode.CONFLICT,
      );
    }

    return this.usersRepository.create(data);
  }
}
