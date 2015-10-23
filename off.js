module.exports = function off (element, event, cb) {

    if (typeof element.removeEventListener === 'function') {
        element.removeEventListener(event, cb)
    }

    else if (typeof element.off === 'function') {
        element.off(event, cb)
    }

    else if (typeof element.removeListener === 'function') {
        element.removeListener(event, cb)
    }

    else {
        throw new Error('unknown emitter type')
    }

}
