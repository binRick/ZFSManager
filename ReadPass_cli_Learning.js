var path = require('path'),
    nexpect = require('nexpect'),
    fs = require('fs');

var secret = fs.readFileSync('/root/.pass') || 'test123';
var user = fs.readFileSync('/root/.user') || 'root';

nexpect.spawn('ssh missouri zpool list', {
        stripColors: true,
    })
    .wait('Username')
    .sendline(user)
    .expect('first-prompt')
    .wait('second')
    .sendline('second-prompt')
    .expect('second-prompt')
    .run(function(err) {
        if (!err) {
            console.log('two prompts were waited and responded to');
        }
    });