var trim = require('trim'),
    child = require('child_process'),
    Encoding = {
        encoding: 'utf8'
    },
    lineFilter = function(s) {
        return s.split('\n').map(function(l) {
            return trim(l);
        }).filter(function(l) {
            return l.length > 3;
        });
    };

var nexpect = require('nexpect');

nexpect.spawn("echo", ["hello"])
    .expect("hello")
    .run(function(err, stdout, exitcode) {
        if (!err) {
            console.log("hello was echoed");
        }
    });

nexpect.spawn("ls -la /tmp/undefined", {
        stream: 'stderr'
    })
    .expect("No such file or directory")
    .run(function(err) {
        if (!err) {
            console.log("checked that file doesn't exists");
        }
    });

nexpect.spawn("node --interactive")
    .expect(">")
    .sendline("console.log('testing')")
    .expect("testing")
    .sendline("process.exit()")
    .run(function(err) {
        if (!err) {
            console.log("node process started, console logged, process exited");
        } else {
            console.log(err)
        }
    });
/*
module.exports = {
    execJson: function(c) {
        process.exit();
        return JSON.parse(child.execSync(c).toString());
    },
    execSyncLines: function(c) {
        return lineFilter(child.execSync(c, Encoding));
    },
    execRaw: function(c) {
        process.exit();
        return child.execSync(c);
    }
};
*/
