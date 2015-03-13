var md5 = require('MD5');



var TotalServers = {
    cmd: "zfs list -o name -H | grep '/Snapshots/'| cut -d'/' -f3| sort | uniq",
};
TotalServers.hash = md5(TotalServers.cmd);
if (db.has(md5(TotalServers.hash))) {
    TotalServers.list = db.get(TotalServers.hash);
    Caches.Hits.Status.inc();
} else {
    TotalServers.list = exec(TotalServers.cmd);
    Caches.Misses.Status.inc();
    db.put(TotalServers.hash, TotalServers.list);
    Caches.Writes.Status.inc();
}

TotalServers.list = [TotalServers.list[3]];
