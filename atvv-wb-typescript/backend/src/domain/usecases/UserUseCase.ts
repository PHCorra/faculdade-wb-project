import { UserRepository } from "../../infra/database/repositories/UserRepository";
import { IMessage } from "../models/messageModel";
import { IUser } from "../models/userModel";

interface IUserUseCase {
  create: (userData: IUser) => Promise<IUser | IMessage> // Message;
  listAll: () => Promise<IUser[] | IMessage>;
  listOne: (id: number) => Promise<IUser | IMessage>;
  listByGender: (genderType: string) => Promise<IUser[] | IMessage>
  update: (id: number, userData: Partial<IUser>) => Promise<IMessage> // Message
  delete: (id: number) => Promise<IMessage> // Message
}

export class UserUseCase implements IUserUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ) { }

  async create(userData: IUser): Promise<IUser | IMessage> {
    const userExists = await this.userRepository.listByCpf(userData.cpf);

    if (userExists) {
      const message = {
        body: 'Usuario já existente'
      }
      return message as IMessage
    }

    const user = await this.userRepository.create(userData);

    return user
  }

  async listAll(): Promise<IUser[] | IMessage> {
    const users = await this.userRepository.listAll();

    if (users.length <= 0) {
      const message = {
        body: 'Nenhum usuario encontrado'
      }
      return message as IMessage
    }

    return users;
  }

  async listOne(id: number): Promise<IUser | IMessage> {
    const user = await this.userRepository.listOne(id);

    if (!user) {
      const message = {
        body: 'Nenhum usuario encontrado'
      }
      return message as IMessage
    }

    return user;
  }

  async listByGender(gender: string): Promise<IUser[] | IMessage> {
    const userByGender = await this.userRepository.listByGender(gender)
    if (!userByGender) {
      const message = {
        body: 'Nenhum usuario encontrado'
      }
      return message as IMessage;
    }

    return userByGender;

  }

  async update(id: number, userData: Partial<IUser>): Promise<IMessage> {
    const isValidUser = await this.userRepository.listOne(id);

    if (!isValidUser) {
      const message = {
        body: 'Nenhum usuario encontrado'
      }
      return message as IMessage;
    }

    await this.userRepository.update(id, userData);

    const message = {
      body: 'Usuario atualizado com sucesso'
    }

    return message as IMessage;
  }

  async delete(id: number): Promise<IMessage> {
    const isValidUser = await this.userRepository.listOne(id);

    if (!isValidUser) {
      const message = {
        body: 'Nenhum usuario encontrado'
      }
      return message as IMessage;
    }

    await this.userRepository.delete(id)

    const message = {
      body: 'Usuario deletado com sucesso'
    }

    return message as IMessage
  }
}