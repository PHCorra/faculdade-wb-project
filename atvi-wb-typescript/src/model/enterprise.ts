import Client from "./client";
import Product from "./product";
import Service from "./service";

export default class Enterprise {
  private readonly clients: Client[];
  private readonly products: Product[];
  private readonly services: Service[];

  constructor() {
    this.clients = [];
    this.products = [];
    this.services = [];
  }

  public get getClients() {
    return this.clients;
  }

  public get getProducts() {
    return this.products;
  }

  public get getServices() {
    return this.services;
  }
}
