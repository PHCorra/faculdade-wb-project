export default class Rg {
  private readonly value!: string;
  private readonly emissionDate!: Date;

  constructor(value: string, emissionDate: Date) {
    this.value = value;
    this.emissionDate = emissionDate;
  }
}