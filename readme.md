# is-rpm

[![NPM version](https://img.shields.io/npm/v/is-rpm.svg)](https://www.npmjs.com/package/is-rpm)
[![Build Status](https://travis-ci.org/t1st3/is-rpm.svg?branch=master)](https://travis-ci.org/t1st3/is-rpm)

> Check if a Buffer/Uint8Array is a [RPM](https://en.wikipedia.org/wiki/RPM_Package_Manager) package.


## Install

```sh
$ npm install --save is-rpm
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isRpm = require('is-rpm');
var buffer = readChunk.sync('unicorn.rpm', 0, 4);

isRpm(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.rpm');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isRpm(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isRpm(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 4 bytes.


## License

MIT © [t1st3](http://www.tiste.org)
