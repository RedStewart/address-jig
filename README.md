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

>> "Driv"
>> "Rd"
>> "Plae"
```

[NPM package](https://www.npmjs.com/package/address-jig)
