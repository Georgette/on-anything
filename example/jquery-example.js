var on           = require('../on'),
    off          = require('../off'),
    $            = require('jquery')

// must be run in the browser or through phantomjs
//phantom:   phantomjs example/jquery-example.js

var $button = $('<button></button>')
var cb = function() {
    console.log('jquery event handled')
}

on($button, 'click', cb)

$button.trigger('click')


off($button, 'click', cb)

$button.trigger('click')

console.log(' jquery event has been unbound, thus another event should not have triggered')
