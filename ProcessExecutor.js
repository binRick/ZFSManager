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
