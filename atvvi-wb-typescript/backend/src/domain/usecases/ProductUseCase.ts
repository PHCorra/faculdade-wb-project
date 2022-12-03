import { ProductRepository } from "../../infra/database/repositories/ProductRepository";
import { IMessage } from "../models/messageModel";
import { IProduct } from "../models/productModel";

interface IProductUseCase {
  create: (productData: IProduct) => Promise<IProduct | IMessage> // Message;
  listAll: () => Promise<IProduct[] | IMessage>;
  listOne: (id: number) => Promise<IProduct | IMessage>;
  update: (id: number, productData: Partial<IProduct>) => Promise<IMessage> // Message
  delete: (id: number) => Promise<IMessage> // Message
}

export class ProductUseCase implements IProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository
  ) { }

  async create(productData: IProduct): Promise<IProduct | IMessage> {
    const productExists = await this.productRepository.listByName(productData.name);

    if (productExists) {
      const message = {
        body: 'Produto já existente'
      }
      return message as IMessage
    }

    const product = await this.productRepository.create(productData);

    return product
  }

  async listAll(): Promise<IProduct[] | IMessage> {
    const products = await this.productRepository.listAll();

    if (products.length <= 0) {
      const message = {
        body: 'Nenhum produto encontrado'
      }
      return message as IMessage
    }

    return products;
  }

  async listOne(id: number): Promise<IProduct | IMessage> {
    const product = await this.productRepository.listOne(id);

    if (!product) {
      const message = {
        body: 'Nenhum produto encontrado'
      }
      return message as IMessage
    }

    return product;
  }


  async update(id: number, productData: Partial<IProduct>): Promise<IMessage> {
    const isValidProduct = await this.productRepository.listOne(id);

    if (!isValidProduct) {
      const message = {
        body: 'Nenhum produto encontrado'
      }
      return message as IMessage;
    }

    await this.productRepository.update(id, productData);

    const message = {
      body: 'Produto atualizado com sucesso'
    }

    return message as IMessage;
  }

  async delete(id: number): Promise<IMessage> {
    const isValidProduct = await this.productRepository.listOne(id);

    if (!isValidProduct) {
      const message = {
        body: 'Nenhum produto encontrado'
      }
      return message as IMessage;
    }

    await this.productRepository.delete(id)

    const message = {
      body: 'Produto deletado com sucesso'
    }

    return message as IMessage
  }


}