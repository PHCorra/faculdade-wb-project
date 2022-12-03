import Entry from "../io/entry";
import Client from "../model/client";
import Cpf from "../model/cpf";
import Delete from "./delete";

export default class ClientDelete extends Delete {
  private clients: Client[];
  private entry: Entry;

  constructor(clients: Client[]) {
    super();
    this.clients = clients;
    this.entry = new Entry();
  }

  public delete(): void {
    console.log('\nInicio da exclusão');
    const value = this.entry.textInput('Insira o número do cpf do cliente que deseja excluir: ');
    this.clients.forEach((client, index) => {
      if (client.getCpf.getValue === value) {
        return this.clients.splice(index, 1);
      };
      return console.log('cliente não encontrado');
    })
    console.log('\n Exclusão concluida \n');
  }
}