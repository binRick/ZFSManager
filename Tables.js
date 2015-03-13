var Table = require('cli-table'),
    prettyjson = require('prettyjson'),
    tree = require('pretty-tree'),
    chalk = require('chalk'),
    _ = require('underscore'),
    trim = require('trim'),
    child = require('child_process'),
    Border = {
        chars: {
            'mid': '',
            'left-mid': '',
            'mid-mid': '',
            'right-mid': ''
        }
    };


module.exports = function(cb) {
    var Table = {
        TotalServersTable: new Table(Border),
    };
    Table.TotalServersTable.push(
        ['Server', 'State', 'Pools', 'Qty', 'S', 'Pool Status', 'Destination']
    );
    cb(null, Table);
};
