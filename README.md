# Address Jig

Generate a random address suffix for a specified address suffix.

---

### Currently supports:

- Street
- Road
- Avenue
- Drive
- Place
- Court
- Drive
- Lane
- Way

### Installation

```sh
$ npm install address-jig
```

### Usage

```js
import AddressJig from 'address-jig';

console.log(AddressJig.drive());
console.log(AddressJig.road());

const place = AddressJig.place();
console.log(place);

console.log(AddressJig.get('1 Beach Street'))

>> "Driv"
>> "Rd"
>> "Plae"
>> "1 Beach Strt"
```

[NPM package](https://www.npmjs.com/package/address-jig)
