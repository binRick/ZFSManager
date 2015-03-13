var status = require('node-status'),
    os = require('os'),
    console = status.console();

module.exports = function(cb) {
    var status = {
        Caches: require('./Caches'),
        Total: status.addItem("Total Servers Handled: ", {
            type: "count",
            color: 'blue'
        }),
        Errors: status.addItem("ZFS Failures", {
            color: 'red',
            label: 'errors'
        }),
        LoadingServers: status.addItem("Loading Servers", {
            type: ['bar', 'percentage'],
            max: 8
        }),
    };
    cb(null, status);
};
