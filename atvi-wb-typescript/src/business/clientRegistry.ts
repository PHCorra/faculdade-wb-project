import Entry from "../io/entry";
import Client from "../model/client";
import Cpf from "../model/cpf";
import Register from "./register";

export default class clientRegistry extends Register {
  private clients: Client[];
  private entry: Entry;

  constructor(clients: Client[]) {
    super();
    this.clients = clients;
    this.entry = new Entry();
  }

  public registry(): void {
    console.log('\nInicio de registros');
    const name = this.entry.textInput('Insira o nome do client: ');
    const socialName = this.entry.textInput('Insira o nome social do cliente: ');
    const value = this.entry.textInput('Insira o número do cpf do cliente: ');
    const date = this.entry.textInput('Insira a data de emissão de cpf, dd/mm/yy: ');
    const parseDate = date.split('/');
    const day = new Number(parseDate[0].valueOf()).valueOf();
    const month = new Number(parseDate[1].valueOf()).valueOf();
    const year = new Number(parseDate[2].valueOf()).valueOf();
    const emissionDate = new Date(year, month, day);
    const cpf = new Cpf(value, emissionDate);
    const client = new Client(name, socialName, cpf);
    this.clients.push(client);
    console.log('\n Cadastro concluido \n');
  }
}