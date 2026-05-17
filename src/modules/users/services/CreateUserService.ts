import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserModel } from "../models/UserModel";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { AppError } from "../../../shared/errors/AppError";
import { HttpStatusCode } from "../../../shared/http/HttpStatusCode";
import { IBcryptHash } from "../../../utils/BcryptHash/types";

export class CreateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly bcryptHash: IBcryptHash,
  ) {}

  public async execute(data: CreateUserDTO): Promise<UserModel> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExists) {
      throw new AppError(
        "Já existe um usuário com este email.",
        HttpStatusCode.CONFLICT,
      );
    }

    let payloadUser = data;
    const passwordEncrypted = await this.bcryptHash.hashPassword(data.password);

    payloadUser.password = passwordEncrypted;

    return this.usersRepository.create(payloadUser);
  }
}
