import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserModel } from '../models/UserModel';

export interface IUsersRepository {
  findByEmail(email: string): Promise<UserModel | null>;
  create(data: CreateUserDTO): Promise<UserModel>;
}
