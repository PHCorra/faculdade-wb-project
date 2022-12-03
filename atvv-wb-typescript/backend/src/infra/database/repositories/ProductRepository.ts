import { IProduct } from "../../../domain/models/productModel";
import { prisma } from "../configuration/prisma";

interface IProductRepository {
  // CRUD Methods
  create: (productData: IProduct) => Promise<IProduct>
  listAll: () => Promise<IProduct[]>
  listOne: (id: number) => Promise<IProduct | null>
  listByName: (name: string) => Promise<IProduct | null>
  update: (id: number, serviceData: Partial<IProduct>) => Promise<void>
  delete: (id: number) => Promise<void>
}

export class ProductRepository implements IProductRepository {

  async create(productData: IProduct): Promise<IProduct> {
    const { name, value } = productData
    const productCreated = await prisma.product.create(({
      data: {
        name,
        value,
        quantity_solded: 0
      }
    }))

    return productCreated
  }

  async listAll(): Promise<IProduct[]> {
    const products = await prisma.product.findMany()

    return products
  }

  async listOne(id: number): Promise<IProduct | null> {
    const product = await prisma.product.findUnique({ where: { id } })

    return product
  }

  async listByName(name: string): Promise<IProduct | null> {
    const product = await prisma.product.findFirst({ where: { name } })

    return product
  }

  async update(id: number, productData: Partial<IProduct>): Promise<void> {
    const { name, value, quantity_solded } = productData

    await prisma.product.update({
      where: { id },
      data: {
        name,
        value,
        quantity_solded
      }
    })
  }


  async delete(id: number): Promise<void> {
    await prisma.product.delete({ where: { id } })
  }
}