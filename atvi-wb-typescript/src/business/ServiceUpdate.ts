import Entry from "../io/entry";
import Update from "./update";
import Service from "../model/service";

export default class ProductUpdate extends Update {
  private service: Service[];
  private entry: Entry;

  constructor(service: Service[]) {
    super();
    this.service = service;
    this.entry = new Entry();
  }

  public update(): void {
    console.log('\nInicio de registros de produtos');
    const serviceName = this.entry.textInput('Insira o nome do produto que deseja alterar: ');
    const serviceNewName = this.entry.textInput('Insira o novo nome do produto: ');
    this.service.forEach((service) => {
      if (service.getService === serviceName) {
        return service.service = serviceNewName;
      }
      else {
        return console.log('produto não encontrado');
      }
    })
    console.log('\n Atualização concluida \n');
  }
}