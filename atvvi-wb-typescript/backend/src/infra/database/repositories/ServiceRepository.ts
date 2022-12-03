import { IService } from "../../../domain/models/serviceModel";
import { prisma } from "../configuration/prisma";

interface IServiceRepository {
  // CRUD Methods
  create: (serviceData: IService) => Promise<IService>
  listAll: () => Promise<IService[]>
  listOne: (id: number) => Promise<IService | null>
  listByName: (name: string) => Promise<IService | null>
  update: (id: number, serviceData: Partial<IService>) => Promise<void>
  delete: (id: number) => Promise<void>
}

export class ServiceRepository implements IServiceRepository {
  async create(serviceData: IService): Promise<IService> {
    const { name, value } = serviceData
    const createdService = await prisma.service.create(({
      data: {
        name,
        value,
        quantity_solded: 0
      }
    }))

    return createdService;
  }

  async listAll(): Promise<IService[]> {
    const services = await prisma.service.findMany()

    return services
  }

  async listOne(id: number): Promise<IService | null> {
    const service = await prisma.service.findUnique({ where: { id } })

    return service
  }

  async listByName(name: string): Promise<IService | null> {
    const service = await prisma.service.findFirst({ where: { name } })

    return service
  }

  async update(id: number, serviceData: Partial<IService>): Promise<void> {
    const { name, value, quantity_solded } = serviceData

    await prisma.service.update({
      where: { id },
      data: {
        name,
        value,
        quantity_solded
      }
    })
  }


  async delete(id: number): Promise<void> {
    await prisma.service.delete({ where: { id } })
  }
}