timeout-protector
=================

Provides a straight forward timeout-protection for any asynchronous callback.


Example
=======

    var protector = require('timeout-protector')
    async("beep",protector(mycb,5000))

    // async is some asynchronous function which may or may not complete


Usage
=====

Wrap the callback, cb like so

    protector(cb,timeout,timeoutResponse)

timeout is required.

timeoutResponse defaults to {error:'async timed out'}
