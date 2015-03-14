var BashCommandCachingLogic = require('./BashCommandCachingLogic');


module.exports = function(snapShotMatch, cb) {
    snapShotMatch = snapShotMatch || 'Snapshots';
    cb = cb || function(){};
    var TotalServers = {
        cmd: "zfs list -o name -H | grep '/" + snapShotMatch + "/'| cut -d'/' -f3| sort | uniq",
    };
    TotalServers.hash = md5(TotalServers.cmd);
    TotalServers.List = BashCommandCachingLogic.sync(TotalServers);
    cb(null, TotalServers);
};
