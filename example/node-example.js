var EventEmitter = require('events').EventEmitter,
    on           = require('../on'),
    off          = require('../off')

var emitter = new EventEmitter()

var handleRequest = function (request) {
    console.log('node event handled')
}

on(emitter, 'request', handleRequest)

emitter.emit('request')

off(emitter, 'request', handleRequest)

console.log('node event has been unbound, thus another event should not have triggered')
