
var test         = require('tape'),
    EventEmitter = require('events').EventEmitter,
    on           = require('../on'),
    off          = require('../off')

test('on should bind and unbind a handler on EventEmitters', function (t) {
    t.plan(2)

    var emitter = new EventEmitter()
    var count = 0
    var cb = function (request) {
        t.equal(request.url, 'http://localhost/hello', 'should handle request event')
        count++
    }

    on(emitter, 'request', cb)

    emitter.emit('request', { url: 'http://localhost/hello' })

    off(emitter, 'request', cb)

    emitter.emit('request', { url: 'http://localhost/hello' })

    t.equal(count, 1, 'should no longer be accepting events')

})

test('not a valid emitter -- should do nothing', function (t) {
    t.plan(2)

    var element = {}

    var cb = function () {}

    t.throws(function () {
        on(element, 'click', cb)
    }, ' should not bind -- should throw error ')

    t.throws(function () {
        off(element, 'click', cb)
    }, ' should not unbind -- should throw error ')

})
