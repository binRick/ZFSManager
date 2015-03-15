var Table = require('cli-table');
var pt = require('pretty-tree');
var table = new Table();
var table = new Table({
      chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
                   , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
             , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
             , 'right': '' , 'right-mid': '' , 'middle': ' ' },
      style: { 'padding-left': 0, 'padding-right': 0 }
});

table.push(
            ['foo', 'bar', 'baz']
              , ['frobnicate', 'bar', 'quuz']
        );


var Ts =table.toString();

var table = new Table({ chars: {'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': ''} });
table.push(
            ['foo', 'bar', Ts]
              , ['frobnicate', 'bar', 'quuz']
        );

console.log(table.toString());
