import * as data from './data.json';

class AddressJig {
  static randomArrElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)] as string;
  }

  static street(): string {
    return this.randomArrElement(data.street);
  }

  static road(): string {
    return this.randomArrElement(data.road);
  }

  static place(): string {
    return this.randomArrElement(data.place);
  }

  static avenue(): string {
    return this.randomArrElement(data.avenue);
  }

  static drive(): string {
    return this.randomArrElement(data.drive);
  }

  static court(): string {
    return this.randomArrElement(data.court);
  }

  static lane(): string {
    return this.randomArrElement(data.lane);
  }

  static way(): string {
    return this.randomArrElement(data.way);
  }
}

export default AddressJig;
