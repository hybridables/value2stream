/*!
 * value2stream <https://github.com/hybridables/value2stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('mukla')
var isBuffer = require('is-buffer')
var value2stream = require('./index')
var Promize = require('pinkie-promise')

function toStream (input, ondata, done) {
  return value2stream(input)
    .on('data', function (val) {
      try {
        ondata(val)
      } catch (err) {
        /* istanbul ignore next */
        done(err)
      }
    })
    .once('error', done)
    .once('end', done)
}

test('should create stream from number value', function (done) {
  toStream(123, function (val) {
    test.strictEqual(typeof val, 'number')
    test.strictEqual(val, 123)
  }, done)
})

test('should create stream from string value', function (done) {
  toStream('foo bar', function (val) {
    test.strictEqual(typeof val, 'string')
    test.strictEqual(val, 'foo bar')
  }, done)
})

test('should create stream from buffer value', function (done) {
  toStream(new Buffer('buf str'), function (val) {
    test.strictEqual(isBuffer(val), true)
    test.strictEqual(val.toString(), 'buf str')
  }, done)
})

test('should create stream from array value', function (done) {
  toStream([1, 'foo', 2], function (val) {
    test.deepEqual(val, [1, 'foo', 2])
  }, done)
})

test('should create stream from resolved promise', function (done) {
  var promise = Promize.resolve('abc')
  toStream(promise, function (val) {
    test.strictEqual(typeof val, 'string')
    test.strictEqual(val, 'abc')
  }, done)
})

test('should fire `error` event on rejected promise', function (done) {
  var rejected = Promize.reject(new Error('foo msg'))
  value2stream(rejected).once('error', function (err) {
    test.ifError(!err)
    test.strictEqual(err instanceof Error, true)
    test.strictEqual(err.message, 'foo msg')
    done()
  })
})

test('should fire `data` event even if value is Error object', function (done) {
  var error = new Error('some err here')
  toStream(error, function (val) {
    test.strictEqual(val instanceof Error, true)
    test.strictEqual(val.message, 'some err here')
  }, done)
})

test('should allow custom promise constructor to be used when no native promise', function (done) {
  value2stream(123, Promize)
    .on('data', function (val) {
      test.strictEqual(val, 123)
    })
    .once('error', done)
    .once('end', done)
})

test('should fire `data` event on `opts.objectMode: true` (default) and object value', function (done) {
  var stream = value2stream({ a: 'b' })
  stream
    .on('data', function (val) {
      test.deepEqual(val, { a: 'b' })
    })
    .once('error', done)
    .once('end', done)
})

test('should fire `error` event on `opts.objectMode: false` and object value', function (done) {
  var stream = value2stream({ a: 'b' }, { objectMode: false })
  stream.once('error', function (err) {
    test.ifError(!err)
    test.strictEqual(err instanceof Error, true)
    test.strictEqual(/Invalid non-string\/buffer chunk/.test(err.message), true)
    done()
  })
})
