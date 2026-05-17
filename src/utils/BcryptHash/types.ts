export interface IBcryptHash {
  hashPassword(password: string, saltRounds?: number): Promise<string>;
  comparePassword(password: string, hash: string): Promise<boolean>;
}