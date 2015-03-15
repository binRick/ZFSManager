var async = require('async'),
    _ = require('underscore'),
    getPids = require('./Collect_Pids');




module.exports = function(Servers, cb) {
    async.map(Servers, function(Server, CB) {
        getPids(Server, function(e, Pids) {
            if (e) throw e;
            CB(e, {
                Server: Server,
                Pids: Pids
            });
        });
    }, function(e, Processed) {
        if (e) throw e;
        cb(e, Processed);
    });
};
