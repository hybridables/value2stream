/*!
 * value2stream <https://github.com/hybridables/value2stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isPromise = require('is-promise')
var NativePromise = require('native-promise')
var promise2stream = require('promise2stream')

/**
 * > Create a stream from any value.
 *
 * **Example**
 *
 * ```js
 * var toStream = require('value2promise')
 *
 * toStream(123).on('data', function (val) {
 *   console.log(val) // => 123
 * })
 * toStream('str foo').on('data', function (val) {
 *   console.log(val) // => 'str foo'
 * })
 *
 * // not throws if `opts.objectMode: true` (default)
 * toStream({ foo: 'bar' }).on('data', function (val) {
 *   console.log(val) // => { foo: 'bar' }
 * })
 *
 * // throws when non-object mode
 * toStream({ foo: 'bar' }, { objectMode: false })
 *   .once('error', function (err) {
 *     console.log(err instanceof Error) // => true
 *     console.log(err) // => [Error: Invalid non-string/buffer chunk]
 *   })
 *
 * // same applies if non-object and promise resolves object
 * var fails = Promise.resolve({ a: 'b' })
 * toStream(fails, { objectMode: false })
 *   .once('error', function (err) {
 *     console.log(err instanceof Error) // => true
 *     console.log(err) // => [Error: Invalid non-string/buffer chunk]
 *   })
 *
 * var promise = Promise.resolve('foo bar')
 * toStream(promise).on('data', function (val) {
 *   console.log(val) // => 'foo bar'
 * })
 *
 * var rejected = Promise.reject(new Error('err msg'))
 * toStream(rejected).once('error', function (err) {
 *   console.log(err instanceof Error) // => true
 *   console.log(err.message) // => 'err msg'
 * })
 * ```
 *
 * @param  {Mixed} `val` Any type of value except function. Use [callback2stream][] for functions.
 * @param  {Object|Function=} `[opts]` Directly passed to [promise2stream][] and [through2][], otherwise Promise contstructor.
 * @param  {Function} `[Promize]` Promise constructor to be used when no support for native Promise.
 * @return {Stream}
 * @api public
 */

module.exports = function value2stream (val, opts, Promize) {
  if (typeof opts === 'function') {
    Promize = opts
    opts = {}
  }
  if (isPromise(val)) {
    return promise2stream(val, opts)
  }

  Promize = NativePromise || Promize
  var promise = new Promize(function (resolve) {
    resolve(val)
  })

  return promise2stream(promise, opts)
}
