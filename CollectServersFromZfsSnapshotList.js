var BashCommandCachingLogic = require('./BashCommandCachingLogic'),
    fs = require('fs'),
    chalk = require('chalk'),
    md5 = require('MD5'),
    trim = require('trim'),
    nexpect = require('nexpect');

var excludes = ['old', 'sata', 'temp'];



module.exports = function(Server, cb) {
    var CMD = "ssh -o StrictHostKeyChecking=no "+ Server + " zfs list -o name -H| grep -v -i '" + excludes.join('|') + "'  | grep old -v -i | grep -i '/Snapshots/'|cut -d'/' -f3|sort|uniq";
    nexpect.spawn(CMD, {
            stripColors: true,
            ignoreCase: true,
        })
       .run(function (err, stdout, exitcode) {
                cb(err, stdout||[]);
        });
};
