import * as data from './data.json';

type TKeyword =
  | 'street'
  | 'road'
  | 'place'
  | 'avenue'
  | 'drive'
  | 'court'
  | 'lane'
  | 'way'
  | undefined;

class AddressJig {
  private static randomArrElement(array: string[]): string {
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

  static get(address: string): string {
    const keywords = [
      'street',
      'road',
      'place',
      'avenue',
      'drive',
      'court',
      'lane',
      'way',
    ];

    const validKeyword = keywords.find((keyword: string) =>
      new RegExp(` ${keyword}`).test(address.toLowerCase())
    ) as TKeyword;

    if (!validKeyword) return address;

    const jig = this[validKeyword]();

    return address.replace(
      ` ${validKeyword.charAt(0).toUpperCase() + validKeyword.slice(1)}`,
      ` ${jig}`
    );
  }

  static data() {
    return data;
  }
}

export default AddressJig;
