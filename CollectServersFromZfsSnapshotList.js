var BashCommandCachingLogic = require('./BashCommandCachingLogic'),
    pj = require('prettyjson'),
    fs = require('fs'),
    chalk = require('chalk'),
    pt = require('pretty-tree'),
    md5 = require('MD5');

var MAX = 2;

module.exports = function(Database, snapShotMatch, cb) {
    snapShotMatch = snapShotMatch || 'Snapshots';
    cb = cb || function() {};
    var ServerCollection = {
        cmd: "zfs list -o name -H | grep '/" + snapShotMatch + "/'| cut -d'/' -f3|sort|uniq",
    };
    ServerCollection.hash = md5(ServerCollection.cmd);
    ServerCollection.Pool = 'tank';
    ServerCollection.List = BashCommandCachingLogic.Sync(Database, ServerCollection.hash, ServerCollection.cmd);
    //    console.log(pj.render(ServerCollection.List));
ServerCollection.List = ServerCollection.List.slice(0,MAX);
    ServerCollection.List = ServerCollection.List.map(function(Server) {
if(!fs.existsSync('/tmp/serverJsons/'+Server+'/zp'))return;
        var zpoolData = JSON.parse(fs.readFileSync('/tmp/serverJsons/'+Server+'/zp').toString());
console.log(pj.render(zpoolData));
        var Color = 'green';
        return {
            label: chalk[Color](Server),
            leaf: { Pools: pj.render(zpoolData),
            },
        };
        return [1, 2];
        return [{
            s: ['a', 'c'],
        }];

    });
    var str = pt({
        label: '(ZFSSnapshotServers - ' + ServerCollection.cmd + ')',
            nodes: [],//ServerCollection.List,
    });

    console.log(str);

    cb(null, ServerCollection.List);
};
