import { IUser } from '../../../domain/models/userModel';
import { prisma } from '../configuration/prisma'


interface IUserRepository {
  // CRUD methods
  create: (userData: IUser) => Promise<IUser> // Message;
  listAll: () => Promise<IUser[]>
  listOne: (id: number) => Promise<IUser | null>
  listByCpf: (cpf: string) => Promise<IUser | null>
  listByGender: (genderType: string) => Promise<IUser[]>
  update: (id: number, userData: Partial<IUser>) => Promise<void> // Message
  delete: (id: number) => Promise<void> // Message
}

export class UserRepository implements IUserRepository {

  async create(userData: IUser): Promise<IUser> {
    const { name, gender, cpf, rg } = userData;
    const createdUser = await prisma.user.create({
      data: {
        name,
        gender,
        cpf,
        rg,
      }
    })
    return createdUser;
  }

  async listAll(): Promise<IUser[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async listOne(id: number): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { id } })
    return user
  }

  async listByCpf(cpf: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({ where: { cpf } })

    return user
  }

  async listByGender(genderType: string): Promise<IUser[]> {
    const userByGender = await prisma.user.findMany({ where: { gender: genderType } })
    return userByGender
  }


  async update(id: number, userData: Partial<IUser>): Promise<void> {
    const { name, gender, rg } = userData;
    await prisma.user.update({
      where: { id }, data: {
        name,
        gender,
        rg,
      }
    })
  }

  async delete(id: number) {
    await prisma.user.delete({ where: { id } });
  }
}