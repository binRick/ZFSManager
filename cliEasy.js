 var CLIeasy = require('cli-easy'),
     assert = require('assert');

 CLIeasy.describe('uname')
 .use('uname')
     .discuss('when using uname')
     .discuss('calling without arguments')
     .expect('should return Linux', 'Linux\n')
     .export(module);
