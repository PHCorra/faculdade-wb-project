import { Request, Response } from "express";
import { UserUseCase } from '../domain/usecases/UserUseCase'
import { UserRepository } from "../infra/database/repositories/UserRepository";

interface IUserController {
  // CRUD Methods
  create: (req: Request, res: Response) => Promise<Response>
  listAll: (req: Request, res: Response) => Promise<Response>
  listOne: (req: Request, res: Response) => Promise<Response>
  listByGender: (req: Request, res: Response) => Promise<Response>
  update: (req: Request, res: Response) => Promise<Response>
  delete: (req: Request, res: Response) => Promise<Response>
}

class UserController {
  constructor(
    private readonly userUseCase: UserUseCase
  ) { }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, gender, cpf, rg } = req.body;
      const userData = req.body;
      const isGenderInvalid = gender !== 'masculino' || gender !== 'feminino'
      if (!name || isGenderInvalid || !cpf || !rg) {
        return res.sendStatus(400).json({ message: 'Invalid body' })
      }
      const userCreated = await this.userUseCase.create(userData);

      return res.status(200).json(userCreated);
    } catch (error) {
      throw (error);
    }

  }

  async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userUseCase.listAll();

      return res.status(200).json(users);
    } catch (error) {
      throw (error);
    }

  }

  async listOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ message: 'invalid body' })
      }
      const user = await this.userUseCase.listOne(Number(id));
      return res.status(200).json(user);

    } catch (error) {
      throw (error);
    }

  }

  async listByGender(req: Request, res: Response): Promise<Response> {
    try {
      const { gender } = req.body;
      const isGenderInvalid = gender !== 'masculino' || gender !== 'feminino'
      if (!gender || isGenderInvalid) {
        return res.sendStatus(400).json({ message: 'invalid body' })
      }

      const usersByGender = await this.userUseCase.listByGender(gender)

      return res.status(200).json(usersByGender)


    } catch (error) {
      throw (error)
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      if (!id || Number.isNaN(id)) {
        return res.sendStatus(404).json({ message: 'invalid body' })
      }
      const userData = req.body
      const userUpdated = await this.userUseCase.update(Number(id), userData)

      return res.status(200).json(userUpdated)
    } catch (error) {
      throw (error)
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      if (!id || Number.isNaN(id)) {
        return res.sendStatus(404).json({ message: 'invalid body' })
      }

      const userDelete = await this.userUseCase.delete(Number(id));

      return res.status(200).json(userDelete)
    } catch (error) {
      throw (error)
    }
  }

}

export const userController = new UserController(new UserUseCase(new UserRepository()));