import Entry from "../io/entry";
import Service from "../model/service";
import List from "./list";

export default class ServiceList extends List {
  private readonly service: Service[];

  constructor(service: Service[]) {
    super();
    this.service = service;
  };

  public list(): void {
    console.log('\nLista com todos os serviços: ');
    this.service.forEach(serv => {
      console.log('Nome: ' + serv.service);
      console.log('--------------------- ^_^ ---------------------')
    });
  }
}