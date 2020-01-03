const fs = require('fs');

const dasm = require('./index.js');

const filename = process.argv[2];

console.log("Reading file '" + filename + "'");
fs.open(filename, 'r', function(err, fd) { dasm.disassemble(err, fd); });
