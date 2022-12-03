import { Request, Response } from "express";
import { ServiceUseCase } from '../domain/usecases/ServiceUseCase'
import { ServiceRepository } from "../infra/database/repositories/ServiceRepository";

interface IServiceController {
  // CRUD Methods
  create: (req: Request, res: Response) => Promise<Response>
  listAll: (req: Request, res: Response) => Promise<Response>
  listOne: (req: Request, res: Response) => Promise<Response>
  update: (req: Request, res: Response) => Promise<Response>
  delete: (req: Request, res: Response) => Promise<Response>
}

export class ServiceController implements IServiceController {
  constructor(
    private readonly serviceUseCase: ServiceUseCase
  ) { }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, value } = req.body;
      const serviceData = req.body;
      if (!name || !value) {
        return res.sendStatus(400).json({ message: 'Invalid body' })
      }
      const serviceCreated = await this.serviceUseCase.create(serviceData);

      return res.status(200).json(serviceCreated);
    } catch (error) {
      throw (error);
    }

  }

  async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const services = await this.serviceUseCase.listAll();

      return res.status(200).json(services);
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
      const service = await this.serviceUseCase.listOne(Number(id));
      return res.status(200).json(service);

    } catch (error) {
      throw (error);
    }

  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      if (!id || Number.isNaN(id)) {
        return res.sendStatus(404).json({ message: 'invalid body' })
      }
      const serviceData = req.body
      const serviceUpdated = await this.serviceUseCase.update(Number(id), serviceData)

      return res.status(200).json(serviceUpdated)
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

      const serviceDeleted = await this.serviceUseCase.delete(Number(id));

      return res.status(200).json(serviceDeleted)
    } catch (error) {
      throw (error)
    }
  }
}

export const serviceController = new ServiceController(new ServiceUseCase(new ServiceRepository()));