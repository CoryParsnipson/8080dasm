const dasm = require('./index.js');

const filename = process.argv[2];

console.log("Reading file '" + filename + "'");
dasm.disassemble(filename);
