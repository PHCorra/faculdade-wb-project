export default class Service {
  public service!: string;

  constructor(service: string) {
    this.service = service;
  }

  public get getService(): string {
    return this.service;
  }

  public setServiceName(service: string) {
    this.service = service;
  }
}