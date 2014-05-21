var tape = require('tape');
tape('callback happens before timeout',function(t) {
    t.plan(1)
    var protector = require('../');

    var mycb = function(resp) {
        t.equal(resp,'beep boop')    
    }
    var async = function(data,cb) {
        setTimeout(function() {
            cb(data + " boop")
        },1500)
    }

    async("beep",protector(mycb,3000))
})
tape('callback happens too late after timeout',function(t) {
    t.plan(1)
    var protector = require('../');

    var mycb = function(resp) {
        t.equal(resp,'error')    
    }
    var async = function(data,cb) {
        setTimeout(function() {
            cb(data + " boop")
        },4500)
    }

    async("beep",protector(mycb,3000,'error'))
})
