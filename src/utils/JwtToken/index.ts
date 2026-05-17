import jwt, { SignOptions } from "jsonwebtoken";
import { IJwtPayload, IJwtToken } from "./types";
import { env } from "../../../config/env";

export class JwtToken implements IJwtToken {
  public async generateToken(payload: IJwtPayload): Promise<string> {
    const options: SignOptions = {
      expiresIn: env.jwt.expiresIn as SignOptions["expiresIn"],
    };

    return jwt.sign(payload, env.jwt.secret, {
      ...options,
    });
  }
}
