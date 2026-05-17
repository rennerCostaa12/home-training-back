import { AppError } from "../../../shared/errors/AppError";
import { HttpStatusCode } from "../../../shared/http/HttpStatusCode";
import { BcryptHash } from "../../../utils/BcryptHash";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";

export class AuthService {
  constructor(
    private readonly userRepository: IUsersRepository,
    private readonly bcryptHash: BcryptHash,
  ) {}

  public async SignIn(email: string, password: string) {
    const userFinded = await this.userRepository.findByEmail(email);

    if (!userFinded) {
      throw new AppError(
        "Credenciais incorretas.",
        HttpStatusCode.UNAUTHORIZED,
      );
    }

    const checkPassword = await this.bcryptHash.comparePassword(
      password,
      userFinded?.password,
    );

    if (!checkPassword) {
      throw new AppError(
        "Credenciais incorretas.",
        HttpStatusCode.UNAUTHORIZED,
      );
    }

    return {
      id: userFinded.id,
      name: userFinded.name,
      categories_id: userFinded.categories_id,
      email: userFinded.email,
    };
  }
}
