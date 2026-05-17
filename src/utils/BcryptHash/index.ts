import bcrypt from "bcrypt";
import { IBcryptHash } from "./types";

export class BcryptHash implements IBcryptHash {
  public async hashPassword(
    password: string,
    saltRounds: number = 10,
  ): Promise<string> {
    return bcrypt.hash(password, saltRounds);
  }

  public async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
