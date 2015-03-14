#!/usr/bin/env node

var getServers = require('./CollectServersFromZfsSnapshotList.js'),
    pj = require('prettyjson');


config = require('./config'),
    md5 = require('MD5'),
    flatfile = require('flat-file-db'),
    db = flatfile(config.Caching.File);

db.on('open', function() {
    getServers(db, 'Snapshots', function(e, Servers) {
        if (e) throw e;
        pj.render(Servers);
    });

});

