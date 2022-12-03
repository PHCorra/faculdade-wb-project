import promptSync from "prompt-sync";

export default class Entry {
  public numberInput(numberString: string): number {
    const prompt = promptSync();
    const value = prompt(numberString);
    const number = new Number(value);
    return number.valueOf();
  }

  public textInput(message: string): string {
    const prompt = promptSync();
    const text = prompt(message);
    return text;
  }
}
