var async = require('async'),
    _ = require('underscore'),
    getPids = require('./Collect_Pids');




module.exports = function(Servers, cb) {
    async.map(Servers, function(Server, CB) {
        Tanks = [1, 2];
        zfsVMs = [{
            ctid: 123,
            private: '/tank/vz/private/123',
        }];
        ext4VMs = [{
            ctid: 124,
            private: '/vz/private/124',
        }];
        totalVMs = zfsVMs + ext4VMs
        getPids(Server, function(e, Pids) {
            if (e) throw e;
            CB(e, {
                Server: Server,
                Pids: Pids,
                Tanks: Tanks,
                VMs: {
                    Total: zfsVMs.length + ext4VMs.length,
                    zfs: zfsVMs,
                    ext4: ext4VMs
                },
            });
        });
    }, function(e, Processed) {
        if (e) throw e;
        cb(e, Processed);
    });
};
