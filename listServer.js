#!/usr/bin/env node

var getServers = require('./CollectServersFromZfsSnapshotList.js'),
    clog = require('c-log'),
    getPids = require('./Collect_Pids'),
    pj = require('prettyjson'),
    config = require('./config'),
    md5 = require('MD5'),
    _ = require('underscore'),
    async = require('async'),
    chalk = require('chalk');

var treeify = require('treeify');

var serverName = process.argv[2] || 'beo';
var maxServers = process.argv[3] || 3;
var ProcessServerList = require('./ProcessServers');


getServers(serverName, function(e, Servers) {
    if (e) throw e;
    Servers = Servers.slice(0, maxServers);
    ProcessServerList(Servers, function(e, Processed) {
        if (e) throw e;
        //console.log(pj.render(Processed));
//        console.log(Processed);
console.log(pj.render(Processed));
 /*       clog.table(Processed);
        treeify.asLines(Processed, true, function(line) {
            console.log(chalk.white(line));
        });
*/
    });
});
