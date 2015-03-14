var BashCommandCachingLogic = require('./BashCommandCachingLogic'),
    pj = require('prettyjson'),
    fs = require('fs'),
    chalk = require('chalk'),
    pt = require('pretty-tree'),
    md5 = require('MD5');

var MAX = 5;


module.exports = function(Setup, snapShotMatch, cb) {

    var Database = Setup.Database;
    var serverName = Setup.ServerName;

    snapShotMatch = snapShotMatch || 'Snapshots';
    cb = cb || function() {};
    var ServerCollection = {
        cmd: "zfs list -o name -H | grep '/" + snapShotMatch + "/'| cut -d'/' -f3|sort|uniq",
    };
    ServerCollection.hash = md5(ServerCollection.cmd);
    ServerCollection.Pool = 'tank';
    ServerCollection.List = BashCommandCachingLogic.Sync(Database, ServerCollection.hash, ServerCollection.cmd);
    //    console.log(pj.render(ServerCollection.List));
    ServerCollection.List = ServerCollection.List.slice(0, MAX);
    ServerCollection.List = ServerCollection.List.map(function(Server) {
        if (!fs.existsSync('/tmp/Thurs/' + Server  )) return;
       // var zpoolData = JSON.parse(fs.readFileSync('/tmp/Thurs/' + Server + '/zpoolList.json').toString());
 //       var zfsData = JSON.parse(fs.readFileSync('/tmp/Thurs/'+Server+'/zfs.json').toString());
        //console.log(pj.render(zpoolData));
        var Color = 'green';
        var It =  {
            Server: chalk[Color](Server),
     //       Pools: pj.render(zpoolData),
   //         ZFS: pj.render(zfsData),
        };
 console.log(       pj.render(It));
 //       console.log(It);
        return It;
        return [1, 2];
        return [{
            s: ['a', 'c'],
        }];

    });
    var str = pt({
        label: '(ZFSSnapshotServers - ' + ServerCollection.cmd + ')',
        nodes: [], //ServerCollection.List,
    });

 //   console.log(str);

    cb(null, ServerCollection.List);
};
