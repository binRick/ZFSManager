#!/usr/bin/env node

var getServers = require('./CollectServersFromZfsSnapshotList.js'),
    getPids = require('./Collect_Pids'),
    pj = require('prettyjson'),
    config = require('./config'),
    md5 = require('MD5'),
    _ = require('underscore'),
    async = require('async'),
    chalk = require('chalk');

var treeify = require('treeify');

var serverName = process.argv[2] || 'cancer';
var ProcessServerList = require('./ProcessServers');

getServers(serverName, function(e, Servers) {
    if (e) throw e;
    ProcessServerList(Servers, function(e, Processed) {
        if (e) throw e;
            console.log(pj.render(Processed));
            treeify.asLines(Processed, true, function(line) {
                       console.log(chalk.white(line));
            });

    });
});
