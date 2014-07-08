[![Build Status](https://travis-ci.org/rook2pawn/timeout-protector.svg?branch=master)](https://travis-ci.org/rook2pawn/timeout-protector)

timeout-protector
=================

Provides a straight forward timeout-protection for any asynchronous callback.

What this means is you should slightly modify your callback to accept a "timeout" response. e.g.

Suppose i wanted to protect 

    var mycb = function(resp) {
        // do something with resp
    }


Now you should modify your callback to do this instead


    var mycb = function(resp) {
        if (resp == 'timeout') {
            // handle timeout
        } else {
            // do something with resp
        }
    }

    protector(mycb, 3000, 'timeout')


    So now wherever you would call mycb, instead you call protector(mycb, 3000, 'timeout').


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
