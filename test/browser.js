var test         = require('tape'),
    EventEmitter = require('events').EventEmitter,
    on           = require('../on'),
    off          = require('../off'),
    $            = require('jquery')

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

test('on should bind and unbind jquery emitter', function (t) {
    t.plan(2)

    var element = $('<div></div>')
    var count = 0
    var cb = function (event) {
        t.equal(event.type, 'request', 'should handle request event')
        count++
    }

    on(element, 'request', cb)

    element.trigger('request')

    off(element, 'request', cb)

    element.trigger('request')

    t.equal(count, 1, 'should no longer be accepting events')

})

test('on should bind and unbind addEventListener', function (t) {
    t.plan(2)

    var element = document.createElement('DIV')
    var count = 0

    var clickEvent = document.createEvent('MouseEvents')
    clickEvent.initMouseEvent('click', true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null)

    var cb = function (event) {
        t.equal(event.type, 'click', 'should handle click event')
        count++
    }

    on(element, 'click', cb)

    element.dispatchEvent(clickEvent)

    off(element, 'click', cb)

    element.dispatchEvent(clickEvent)

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
