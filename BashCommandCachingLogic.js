    var config = require('./config'),
        ProcessExecutor = require('./ProcessExecutor'),
        md5 = require('MD5'),
        chalk = require('chalk'),
        pj = require('prettyjson');


    module.exports = {
        SyncRaw: function(Hash, BashCommand) {
                var Data = ProcessExecutor.execSyncLinesRaw(BashCommand);
                return Data;
        },
        Sync: function(Hash, BashCommand) {
                var Data = ProcessExecutor.execSyncLinesRaw(BashCommand);
                return Data;
        },
        Async: function(Hash, BashCommand, cb) {
                var Data = '';
                cb(null, Data);
        },
    };
