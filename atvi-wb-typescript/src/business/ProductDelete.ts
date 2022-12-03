import Entry from "../io/entry";
import Product from "../model/product";
import Delete from "./delete";

export default class ProductDelete extends Delete {
  private product: Product[];
  private entry: Entry;

  constructor(product: Product[]) {
    super();
    this.product = product;
    this.entry = new Entry();
  }

  public delete(): void {
    console.log('\nInicio da exclusão');
    const productName = this.entry.textInput('Digite o nome do produto a ser excluido:  ');
    this.product.forEach((product, index) => {
      if (product.getName === productName) {
        return this.product.splice(index, 1);
      };
      return console.log('Produto não encontrado');
    })
    console.log('\n Exclusão concluida \n');
  }
}