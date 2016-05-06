# [value2stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Transform any value to stream. Create stream from any value - string, array, buffer, number, promise or even Error object.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

**Note:** Be aware of that if you pass `Error` object you will still recieve it as value. It won't fire the `error` event on created stream. That will only happen if you pass rejected promise. And all this is intentional - you just pass a value and recieve a stream with that value.

## Install
```
npm i value2stream --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const value2stream = require('value2stream')
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/value2stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[npmjs-url]: https://www.npmjs.com/package/value2stream
[npmjs-img]: https://img.shields.io/npm/v/value2stream.svg?label=value2stream

[license-url]: https://github.com/hybridables/value2stream/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/value2stream.svg

[downloads-url]: https://www.npmjs.com/package/value2stream
[downloads-img]: https://img.shields.io/npm/dm/value2stream.svg

[codeclimate-url]: https://codeclimate.com/github/hybridables/value2stream
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/value2stream.svg

[travis-url]: https://travis-ci.org/hybridables/value2stream
[travis-img]: https://img.shields.io/travis/hybridables/value2stream/master.svg

[coveralls-url]: https://coveralls.io/r/hybridables/value2stream
[coveralls-img]: https://img.shields.io/coveralls/hybridables/value2stream.svg

[david-url]: https://david-dm.org/hybridables/value2stream
[david-img]: https://img.shields.io/david/hybridables/value2stream.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg