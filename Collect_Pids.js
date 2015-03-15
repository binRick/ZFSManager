var BashCommandCachingLogic = require('./BashCommandCachingLogic'),
    fs = require('fs'),
    md5 = require('MD5'),
    trim = require('trim');

module.exports = function(Server, cb) {
    cb = cb || function() {};
    var Collection = {
        cmd: "ssh -o StrictHostKeyChecking=false "+Server+" ps -o pid -C zfs| grep PID -v|sort|uniq",
    };
    Collection.hash = md5(Collection.cmd);
    Collection.List = BashCommandCachingLogic.SyncRaw(Collection.hash, Collection.cmd) || [];
    cb(null, Collection.List.map(function(Server) {
        return Server;
    }));
};
