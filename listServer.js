#!/usr/bin/env node

var serverName = process.argv[2] || 'cancer';

var getServers = require('./CollectServersFromZfsSnapshotList.js'),
    pj = require('prettyjson');


config = require('./config'),
    md5 = require('MD5'),
    flatfile = require('flat-file-db'),
    db = flatfile(config.Caching.File);

db.on('open', function() {
    getServers({db:db, servers: [serverName]}, 'Snapshots', function(e, Servers) {
        if (e) throw e;
 //       console.log(Servers);
//        pj.render(Servers);
    });

});

