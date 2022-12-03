export default class Cpf {
  private readonly value!: string;
  private readonly emissionDate!: Date;

  constructor(value: string, emissionDate: Date) {
    this.value = value;
    this.emissionDate = emissionDate;
  }

  public get getValue(): string {
    return this.value;
  }

  public get getEmissionDate(): Date {
    return this.emissionDate;
  }
}