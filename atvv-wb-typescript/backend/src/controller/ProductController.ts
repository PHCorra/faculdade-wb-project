import { Request, Response } from "express";
import { ProductUseCase } from '../domain/usecases/ProductUseCase'
import { ProductRepository } from "../infra/database/repositories/ProductRepository";

interface IProductController {
  // CRUD Methods
  create: (req: Request, res: Response) => Promise<Response>
  listAll: (req: Request, res: Response) => Promise<Response>
  listOne: (req: Request, res: Response) => Promise<Response>
  update: (req: Request, res: Response) => Promise<Response>
  delete: (req: Request, res: Response) => Promise<Response>
}

export class ProductController implements IProductController {
  constructor(
    private readonly productUseCase: ProductUseCase
  ) { }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, value } = req.body;
      const productData = req.body;
      if (!name || !value) {
        return res.sendStatus(400).json({ message: 'Invalid body' })
      }
      const serviceCreated = await this.productUseCase.create(productData);

      return res.status(200).json(serviceCreated);
    } catch (error) {
      throw (error);
    }

  }

  async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.productUseCase.listAll();

      return res.status(200).json(products);
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
      const product = await this.productUseCase.listOne(Number(id));
      return res.status(200).json(product);

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
      const productData = req.body
      const productUpdated = await this.productUseCase.update(Number(id), productData)

      return res.status(200).json(productUpdated)
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

      const productDeleted = await this.productUseCase.delete(Number(id));

      return res.status(200).json(productDeleted)
    } catch (error) {
      throw (error)
    }
  }
}

export const productController = new ProductController(new ProductUseCase(new ProductRepository()))
