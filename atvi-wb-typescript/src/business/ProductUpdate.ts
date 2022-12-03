import Entry from "../io/entry";
import Update from "./update";
import Product from "../model/product";

export default class ProductUpdate extends Update {
  private product: Product[];
  private entry: Entry;

  constructor(product: Product[]) {
    super();
    this.product = product;
    this.entry = new Entry();
  }

  public update(): void {
    console.log('\nInicio de atualização de produtos');
    const productName = this.entry.textInput('Insira o nome do produto que deseja alterar: ');
    const productNewName = this.entry.textInput('Insira o novo nome do produto: ');
    this.product.forEach((product) => {
      if (product.getName === productName) {
        return product.name = productNewName;
      }
      else {
        return console.log('produto não encontrado');
      }
    })
    console.log('\n Atualização concluida \n');
  }
}