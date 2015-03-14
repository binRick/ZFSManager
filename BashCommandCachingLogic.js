    var config = require('./config'),
        ProcessExecutor = require('./ProcessExecutor'),
        md5 = require('MD5'),
        chalk = require('chalk'),
        pj = require('prettyjson');


    module.exports = {
        Sync: function(Database, Hash, BashCommand) {
            if (Database.has(Hash)) {
                console.log(chalk.black.bgGreen('cache hit for command: ', chalk.black.bgWhite(BashCommand)));
                //                Caches.Hits.Status.inc();
                return Database.get(Hash);
            } else {
                console.log(chalk.white.bgRed('cache miss. performing command: ', chalk.black.bgWhite(BashCommand)));
                var Data = ProcessExecutor.execSyncLines(BashCommand);
                if (Data.length > 0) {
                    Database.put(Hash, Data);
                    //Caches.Writes.Status.inc();
                }
                return Data;
            }
        },
        Async: function(Database, Hash, BashCommand, cb) {
            Database.on('open', function() {
                var Data = '';
                cb(null, Data);
            });
        },
    };
