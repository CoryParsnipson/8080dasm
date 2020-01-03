const fs = require('fs');

function disassemble(err, fd) {
   if (err) {
      throw err;
   }

   var current_byte = new Buffer.alloc(1);
   var byte_id = 0;
   while (true) {
      var num_bytes_read = fs.readSync(fd, current_byte, 0, 1, null);
      if (num_bytes_read === 0) {
         break;
      }

      console.log(byte_id + ": " + current_byte[0]);
      byte_id += 1;
   }
}

module.exports = {
   disassemble: disassemble
};
