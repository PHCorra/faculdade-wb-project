import Entry from "../io/entry";
import Register from "./register";
import Product from "../model/product";

export default class ProductRegistry extends Register {
  private product: Product[];
  private entry: Entry;

  constructor(product: Product[]) {
    super();
    this.product = product;
    this.entry = new Entry();
  }

  public registry(): void {
    console.log('\nInicio de registros de produtos');
    const name = this.entry.textInput('Insira o nome do produto: ');
    const product = new Product(name);
    this.product.push(product);
    console.log('\n Cadastro concluido \n');
  }
}