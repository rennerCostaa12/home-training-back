import { AppError } from "../../../shared/errors/AppError";
import { HttpStatusCode } from "../../../shared/http/HttpStatusCode";
import { IBcryptHash } from "../../../utils/BcryptHash/types";
import { IJwtToken } from "../../../utils/JwtToken/types";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";

export class AuthService {
  constructor(
    private readonly userRepository: IUsersRepository,
    private readonly bcryptHash: IBcryptHash,
    private readonly jwtToken: IJwtToken,
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

    const response = await this.jwtToken.generateToken({
      sub: String(userFinded.id),
      email: userFinded.email,
      categories_id: userFinded.categories_id,
    });

    return {
      id: userFinded.id,
      name: userFinded.name,
      categories_id: userFinded.categories_id,
      email: userFinded.email,
      token: response,
    };
  }
}
