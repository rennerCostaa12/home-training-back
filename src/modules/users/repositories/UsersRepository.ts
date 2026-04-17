import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserModel } from '../models/UserModel';
import { IUsersRepository } from './IUsersRepository';

export class UsersRepository implements IUsersRepository {
  public async findByEmail(email: string): Promise<UserModel | null> {
    return UserModel.findOne({ where: { email } });
  }

  public async create(data: CreateUserDTO): Promise<UserModel> {
    return UserModel.create(data);
  }
}
