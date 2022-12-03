import Entry from "../io/entry";
import Client from "../model/client";
import List from "./list";

export default class clientList extends List {
  private readonly clients: Client[];

  constructor(clients: Client[]) {
    super();
    this.clients = clients;
  };

  public list(): void {
    console.log('\nLista com todos os clientes: ');
    this.clients.forEach(client => {
      console.log('Nome: ' + client.name);
      console.log('Nome Social: ' + client.socialName);
      console.log('CPF: ' + client.getCpf.getValue);
      console.log('--------------------- ^_^ ---------------------')
    });
  }

  public listOne() {
    const entryText = new Entry();
    const cpfInputToCompare = entryText.textInput('Digite o CPF do usuario que deseja achar: ');
    this.clients.forEach(client => {
      if (client.getCpf.getValue === cpfInputToCompare) {
        console.log('Nome: ' + client.name);
        console.log('Nome Social: ' + client.socialName);
        console.log('CPF: ' + client.getCpf.getValue);
        console.log('--------------------- ^_^ ---------------------')
      }
    })
  }
}