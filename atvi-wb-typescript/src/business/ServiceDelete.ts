import Entry from "../io/entry";
import Service from "../model/service";
import Delete from "./delete";

export default class ProductDelete extends Delete {
  private service: Service[];
  private entry: Entry;

  constructor(service: Service[]) {
    super();
    this.service = service;
    this.entry = new Entry();
  }

  public delete(): void {
    console.log('\nInicio da exclusão');
    const serviceName = this.entry.textInput('Digite o nome do serviço a ser excluido:  ');
    this.service.forEach((service, index) => {
      if (service.getService === serviceName) {
        return this.service.splice(index, 1);
      };
      return console.log('Serviço não encontrado');
    })
    console.log('\n Exclusão concluida \n');
  }
}