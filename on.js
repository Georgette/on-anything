module.exports = function on (element, event, cb) {

    if (typeof element.addEventListener === 'function') {
        element.addEventListener(event, cb)
    }

    else if (typeof element.on === 'function') {
        element.on(event, cb)
    }

}
