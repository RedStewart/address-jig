# Address Jig

Address Jig is a simple package created to easily generate a random address suffix for a specified address.

---

### Currently supports:
  - Street
  - Road
  - Avenue
  - Drive
  - Place

### Installation

```sh
$ npm install npm-address-jig
```
### Usage
```js
var npmAddressJig = require("npm-address-jig");
console.log(npmAddressJig.street());
console.log(npmAddressJig.road());
var x = npmAddressJig.place();
console.log(x);

>> "Strt"
>> "Rd"
>> "Plae"
```