export default class Product {
  public name!: string;
  public value!: number;
  public quantity!: number;

  constructor(name: string) {
    this.name = name;
    this.quantity = 0;
  }


  public get getName(): string {
    return this.name;
  }

  public set setName(name: string) {
    this.name = name;
  }

  public get getValue(): number {
    return this.value;
  }

  public set setValue(value: number) {
    this.value = value;
  }

  public get getQuantity(): number {
    return this.quantity;
  }

  public set setQuantity(value: number) {


  }
}