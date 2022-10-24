/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User()

    Object.assign(newUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.users.push(newUser)
    return newUser
  }

  findById(id: string): User | undefined {
    return null
  }

  findByEmail(email: string): User | undefined {
    return null
  }

  turnAdmin(receivedUser: User): User {
    return null
  }

  list(): User[] {
    return null
  }
}

export { UsersRepository };
