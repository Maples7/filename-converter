# filename-converter

[![Build Status](https://travis-ci.org/Maples7/filename-converter.svg?branch=master)](https://travis-ci.org/Maples7/filename-converter)
[![Coverage Status](https://coveralls.io/repos/github/Maples7/filename-converter/badge.svg?branch=master)](https://coveralls.io/github/Maples7/filename-converter?branch=master)
[![npm version](https://badge.fury.io/js/filename-converter.svg)](https://badge.fury.io/js/filename-converter)           

[![NPM](https://nodei.co/npm/filename-converter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/filename-converter/)
[![NPM](https://nodei.co/npm-dl/filename-converter.png?months=6&height=3)](https://nodei.co/npm/filename-converter/)

Convert an invalid filename to a valid one with a self-defined mapping table. The key point is the mapping is reversible.

## Invalid Characters

`/<>:"\|?*` is the current set of invalid characters, see [mapping_table.js](mapping_table.js) to get the mapping table.

## Usage

### Installation

```sh
npm i filename-converter
```

### Example

```js
const filenameConverter = require('filename-converter');

const filename = 'abc:de<.json';
const ret = filenameConverter.serialize(filename);
console.log(ret); // => abc@004de@002.json
console.log(filenameConverter.deserialize(ret)); // => abc:de<.json
```

## LICENSE

[MIT](LICENSE)
