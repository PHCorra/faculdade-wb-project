import Entry from "../io/entry";
import Register from "./register";
import Service from "../model/service";

export default class ServuceRegistry extends Register {
  private service: Service[];
  private entry: Entry;

  constructor(service: Service[]) {
    super();
    this.service = service;
    this.entry = new Entry();
  }

  public registry(): void {
    console.log('\nInicio de registros de serviços');
    const serviceName = this.entry.textInput('Insira o nome do serviço: ');
    const service = new Service(serviceName);
    this.service.push(service);
    console.log('\n Cadastro concluido \n');
  }
}