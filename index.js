var protector = function(cb,timeout,timeoutResponse) {
    if (typeof timeout !== 'number') 
        throw new Error("timeout needs to be a number")
    var _cb = function(resp) {
        if (timeoutProtect) {
            // Clear the scheduled timeout handler
            clearTimeout(timeoutProtect);
            // Run the real callback.
            cb(resp);
        }
    }
    // Setup the timeout handler
    var timeoutProtect = setTimeout(function() {
        timeoutProtect = null;
        cb(timeoutResponse || {error:'async timed out'})
    }, timeout);
    return _cb
}
module.exports = protector
