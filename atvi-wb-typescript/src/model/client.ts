import Cpf from "./cpf";
import Rg from "./rg";
import Telephone from "./telephone";
import Product from "./product";
import Service from "./service";

export default class Client {
  public name: string;
  public socialName: string;
  private readonly cpf: Cpf;
  private readonly rgs: Rg[];
  private readonly registrationDate: Date;
  private readonly telephones: Telephone[];
  private readonly consumedServices: Service[];
  private readonly consumedProducts: Product[];

  constructor(name: string, socialName: string, cpf: Cpf) {
    this.name = name;
    this.socialName = socialName;
    this.cpf = cpf;
    this.registrationDate = new Date();
    this.rgs = [];
    this.telephones = [];
    this.consumedProducts = [];
    this.consumedServices = [];
  }

  public get getCpf(): Cpf {
    return this.cpf;
  }

  public get getRgs(): Rg[] {
    return this.rgs;
  }

  public get getRegistrationDate(): Date {
    return this.registrationDate;
  }

  public get getTelepehones(): Telephone[] {
    return this.telephones;
  }

  public get getConsumedProducts(): Product[] {
    return this.consumedProducts;
  }

  public get getConsumedServices(): Service[] {
    return this.consumedServices;
  }
}