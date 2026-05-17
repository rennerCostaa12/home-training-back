export interface IJwtPayload {
  sub: string;
  email: string;
  categories_id: number;
}

export interface IJwtToken {
  generateToken(payload: IJwtPayload): Promise<string>;
}
