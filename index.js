#!/usr/bin/env node


var CollectServers = require('./MyServers'),
    BashCommandCachingLogic = require('./BashCommandCachingLogic'),
    config = require('./config'),
    md5 = require('MD5'),
    flatfile = require('flat-file-db'),
    db = flatfile(config.Caching.File);

db.on('open', function() {
    CollectServers('Snapshots', function(e, TotalServers) {
        if (e) throw e;
        console.log(TotalServers);
        if (db.has(md5(TotalServers.hash))) {
            //       TotalServers.list = db.get(TotalServers.hash);
            //       Caches.Hits.Status.inc();
        } else {
            //       TotalServers.list = exec(TotalServers.cmd);
            //       Caches.Misses.Status.inc();
            //       db.put(TotalServers.hash, TotalServers.list);
            //       Caches.Writes.Status.inc();
        }
    });


});
