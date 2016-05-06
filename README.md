# [value2stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Transform any value to stream. Create a stream from any value - string, array, buffer, number, promise or even Error object.

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

### [value2stream](index.js#L68)
> Create a stream from any value.

**Params**

* `val` **{Mixed}**: Any type of value except function. Use [callback2stream][] for functions.    
* `[opts]` **{Object|Function=}**: Directly passed to [promise2stream][] and [through2][], otherwise Promise contstructor.    
* `[Promize]` **{Function}**: Promise constructor to be used when no support for native Promise.    
* `returns` **{Stream}**  

**Example**

```js
var toStream = require('value2promise')

toStream(123).on('data', function (val) {
  console.log(val) // => 123
})
toStream('str foo').on('data', function (val) {
  console.log(val) // => 'str foo'
})

// not throws if `opts.objectMode: true` (default)
toStream({ foo: 'bar' }).on('data', function (val) {
  console.log(val) // => { foo: 'bar' }
})

// throws when non-object mode
toStream({ foo: 'bar' }, { objectMode: false })
  .once('error', function (err) {
    console.log(err instanceof Error) // => true
    console.log(err) // => [Error: Invalid non-string/buffer chunk]
  })

// same applies if non-object and promise resolves object
var fails = Promise.resolve({ a: 'b' })
toStream(fails, { objectMode: false })
  .once('error', function (err) {
    console.log(err instanceof Error) // => true
    console.log(err) // => [Error: Invalid non-string/buffer chunk]
  })

var promise = Promise.resolve('foo bar')
toStream(promise).on('data', function (val) {
  console.log(val) // => 'foo bar'
})

var rejected = Promise.reject(new Error('err msg'))
toStream(rejected).once('error', function (err) {
  console.log(err instanceof Error) // => true
  console.log(err.message) // => 'err msg'
})
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/value2stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[callback2stream]: https://github.com/hybridables/callback2stream
[promise2stream]: https://github.com/hybridables/promise2stream
[through2]: https://github.com/rvagg/through2

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