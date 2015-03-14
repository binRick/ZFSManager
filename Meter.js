var Meter = require ('cli-meter');


var m = new Meter({total: 500, length: 30, value: 200});

console.log("#{m} #{m.value} / #{m.total}");


