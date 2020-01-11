const fs = require('fs');

const dasm = require('./index.js');

const filename = process.argv[2];
const output_filename = "out.txt";

console.log("Reading file '" + filename + "'");
const instructions = dasm.disassemble(filename);

try {
   fs.unlinkSync(output_filename);
} catch(err) {
   // ignore, file just probably doesn't exist
}

console.log("Writing to out.txt");
const outfd = fs.openSync(output_filename, 'w');

instructions.forEach(write_line);
function write_line(inst, index) {
   fs.appendFile(output_filename, "INST #" + index + ": " + JSON.stringify(inst) + "\n", function (err) {
      if (err) throw err;
   });
}
