import { ServiceRepository } from "../../infra/database/repositories/ServiceRepository";
import { IMessage } from "../models/messageModel";
import { IService } from "../models/serviceModel";


interface IServiceUseCase {
  create: (serviceData: IService) => Promise<IService | IMessage> // Message;
  listAll: () => Promise<IService[] | IMessage>;
  listOne: (id: number) => Promise<IService | IMessage>;
  update: (id: number, serviceData: Partial<IService>) => Promise<IMessage> // Message
  delete: (id: number) => Promise<IMessage> // Message
}

export class ServiceUseCase implements IServiceUseCase {
  constructor(
    private readonly serviceRepository: ServiceRepository
  ) { }

  async create(serviceData: IService): Promise<IService | IMessage> {
    const serviceExists = await this.serviceRepository.listByName(serviceData.name);

    if (serviceExists) {
      const message = {
        body: 'Serviço já existente'
      }
      return message as IMessage
    }

    const service = await this.serviceRepository.create(serviceData);

    return service
  }

  async listAll(): Promise<IService[] | IMessage> {
    const services = await this.serviceRepository.listAll();

    if (services.length <= 0) {
      const message = {
        body: 'Nenhum serviço encontrado'
      }
      return message as IMessage
    }

    return services;
  }

  async listOne(id: number): Promise<IService | IMessage> {
    const service = await this.serviceRepository.listOne(id);

    if (!service) {
      const message = {
        body: 'Nenhum serviço encontrado'
      }
      return message as IMessage
    }

    return service;
  }


  async update(id: number, serviceData: Partial<IService>): Promise<IMessage> {
    const isValidService = await this.serviceRepository.listOne(id);

    if (!isValidService) {
      const message = {
        body: 'Nenhum serviço encontrado'
      }
      return message as IMessage;
    }

    await this.serviceRepository.update(id, serviceData);

    const message = {
      body: 'Serviço atualizado com sucesso'
    }

    return message as IMessage;
  }

  async delete(id: number): Promise<IMessage> {
    const isValidService = await this.serviceRepository.listOne(id);

    if (!isValidService) {
      const message = {
        body: 'Nenhum serviço encontrado'
      }
      return message as IMessage;
    }

    await this.serviceRepository.delete(id)

    const message = {
      body: 'Serviço deletado com sucesso'
    }

    return message as IMessage
  }


}