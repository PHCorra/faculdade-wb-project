import Entry from "../io/entry";
import Product from "../model/product";
import List from "./list";

export default class ProductList extends List {
  private readonly product: Product[];

  constructor(product: Product[]) {
    super();
    this.product = product;
  };

  public list(): void {
    console.log('\nLista com todos os produtos: ');
    this.product.forEach(prod => {
      console.log('Nome: ' + prod.name);
      console.log('--------------------- ^_^ ---------------------')
    });
  }
}