# whax

[![NPM version](https://badge.fury.io/js/whax.png)](http://badge.fury.io/js/whax)
[![Build Status](https://travis-ci.org/Georgette/whax.svg?branch=master)](https://travis-ci.org/Georgette/whax)
[![Coverage Status](https://coveralls.io/repos/Georgette/whax/badge.png?branch=master)](https://coveralls.io/r/Georgette/whax?branch=master)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/Georgette_github.svg)](https://saucelabs.com/u/Georgette_github)

bind handlers to any type of event emitter

# Why Whax

While working on another event-based project, it became clear how important it was to standardize events; node.js, jquery, and javascript in the browser each have their own way of setting up event handlers. Whax provides one way to bind handlers in all 3 places.

There might be other modules that do this, but this is all whax does


## example

### Node Emitter

```javascript
var whax         = require('../whax'),
    EventEmitter = require('events').EventEmitter

var emitter = new EventEmitter()

```
In order to shut off an event handler, store a reference to the handler

```javascript

var handleRequest = function (request) {
    //do something with request
}

on(emitter, 'request', handleRequest)

emitter.emit('request')

```

We no longer want to listen to the request event

```javascript

off(emitter, 'request', handleRequest)

```

### Browser

Query an element to register an element against, I'll use jquery

```javascript

var $button = $('#button')
var showPanel = function() {
    $('#panel').show()
}

on($button, 'click', showPanel)

$button.trigger('click')


```

We no longer want to listen to click events on the button

```javascript

off(button, 'click', showPanel)

```


## api

```
var on  = require('whax/on'), // or require('whax').on
    off = require('whax/off') // or require('whax').off

```

### on(object, event, cb)
Bind a listener to a node, jquery, or javascript dom object. The callback function passed must be a reference to the same callback used when binding the listener.


### off(object, event, cb)
Unbind a listener to a node, jquery, or javascript dom object.

## install

With [npm](https://npmjs.org) do:

```
npm install whax
```

## testing

`npm test [--dot | --spec] [--phantom] [--grep=pattern]`

Specifying `--dot` or `--spec` will change the output from the default TAP style.
Specifying `--phantom` will cause the tests to run in the headless phantom browser instead of node.
Specifying `--grep` will only run the test files that match the given pattern.

### browser test

`npm run browser-test`

This will run the tests in all browsers (specified in .zuul.yml). Be sure to [educate zuul](https://github.com/defunctzombie/zuul/wiki/cloud-testing#2-educate-zuul) first.


### coverage

`npm run coverage [--html]`

This will output a textual coverage report. Including `--html` will also open
an HTML coverage report in the default browser.


## TODO

Provide a way to unbind all listeners when no callback is provided for whax.off

Provide example usage in usage.js
