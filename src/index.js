const fs = require('fs');

const OP = {
   STC: "STC",
   CMC: "CMC",
   INR: "INR",
   DCR: "DCR",
   CMA: "CMA",
   DAA: "DAA",
   NOP: "NOP",
   MOV: "MOV",
   STAX: "STAX",
   LDAX: "LDAX",
   ADD: "ADD",
   ADC: "ADC",
   SUB: "SUB",
   SBB: "SBB",
   ANA: "ANA",
   XRA: "XRA",
   ORA: "ORA",
   CMP: "CMP",
   RLC: "RLC",
   RRC: "RRC",
   RAL: "RAL",
   RAR: "RAR",
   PUSH: "PUSH",
   POP: "POP",
   DAD: "DAD",
   INX: "INX",
   DCX: "DCX",
   XCHG: "XCHG",
   XTHL: "XTHL",
   SPHL: "SPHL",
   LXI: "LXI",
   MVI: "MVI",
   ADI: "ADI",
   ACI: "ACI",
   SUI: "SUI",
   SBI: "SBI",
   ANI: "ANI",
   XRI: "XRI",
   ORI: "ORI",
   CPI: "CPI",
   STA: "STA",
   LDA: "LDA",
   SHLD: "SHLD",
   LHLD: "LHLD",
   PCHL: "PCHL",
   JMP: "JMP",
   JC: "JC",
   JNC: "JNC",
   JZ: "JZ",
   JNZ: "JNZ",
   JP: "JP",
   JM: "JM",
   JPE: "JPE",
   JPO: "JPO",
   CALL: "CALL",
   CC: "CC",
   CNC: "CNC",
   CZ: "CZ",
   CNZ: "CNZ",
   CP: "CP",
   CM: "CM",
   CPE: "CPE",
   CPO: "CPO",
   RET: "RET",
   RC: "RC",
   RNC: "RNC",
   RZ: "RZ",
   RNZ: "RNZ",
   RP: "RP",
   RM: "RM",
   RPE: "RPE",
   RPO: "RPO",
   RST: "RST",
   EI: "EI",
   DI: "DI",
   IN: "IN",
   OUT: "OUT",
   HLT: "HLT",
};

// instr is an integer between 0 and 255
function decode(instr) {
   switch(instr) {
      case 0x37:
         return OP.STC;
      case 0x3F:
         return OP.CMC;
      case 0x04:
      case 0x0C:
      case 0x14:
      case 0x1C:
      case 0x24:
      case 0x2C:
      case 0x34:
      case 0x3C:
         return OP.INR;
      case 0x05:
      case 0x0D:
      case 0x15:
      case 0x1D:
      case 0x25:
      case 0x2D:
      case 0x35:
      case 0x3D:
         return OP.DCR;
      case 0x2F:
         return OP.CMA;
      case 0x27:
         return OP.DAA;
      case 0x00:
         return OP.NOP;
      case 0x40:
      case 0x41:
      case 0x42:
      case 0x43:
      case 0x44:
      case 0x45:
      case 0x46:
      case 0x47:
      case 0x48:
      case 0x49:
      case 0x4A:
      case 0x4B:
      case 0x4C:
      case 0x4D:
      case 0x4E:
      case 0x4F:
      case 0x50:
      case 0x51:
      case 0x52:
      case 0x53:
      case 0x54:
      case 0x55:
      case 0x56:
      case 0x57:
      case 0x58:
      case 0x59:
      case 0x5A:
      case 0x5B:
      case 0x5C:
      case 0x5D:
      case 0x5E:
      case 0x5F:
      case 0x60:
      case 0x61:
      case 0x62:
      case 0x63:
      case 0x64:
      case 0x65:
      case 0x66:
      case 0x67:
      case 0x68:
      case 0x69:
      case 0x6A:
      case 0x6B:
      case 0x6C:
      case 0x6D:
      case 0x6E:
      case 0x6F:
      case 0x70:
      case 0x71:
      case 0x72:
      case 0x73:
      case 0x74:
      case 0x75:
      case 0x76:
      case 0x77:
      case 0x78:
      case 0x79:
      case 0x7A:
      case 0x7B:
      case 0x7C:
      case 0x7D:
      case 0x7E:
      case 0x7F:
         return OP.MOV;
      case 0x02:
      case 0x12:
         return OP.STAX;
      case 0x0A:
      case 0x1A:
         return OP.LDAX;
      case 0x80:
      case 0x81:
      case 0x82:
      case 0x83:
      case 0x84:
      case 0x85:
      case 0x86:
      case 0x87:
         return OP.ADD
      case 0x88:
      case 0x89:
      case 0x8A:
      case 0x8B:
      case 0x8C:
      case 0x8D:
      case 0x8E:
      case 0x8F:
         return OP.ADC;
      case 0x90:
      case 0x91:
      case 0x92:
      case 0x93:
      case 0x94:
      case 0x95:
      case 0x96:
      case 0x97:
         return OP.SUB;
      case 0x98:
      case 0x99:
      case 0x9A:
      case 0x9B:
      case 0x9C:
      case 0x9E:
      case 0x9D:
      case 0x9F:
         return OP.SBB;
      case 0xA0:
      case 0xA1:
      case 0xA2:
      case 0xA3:
      case 0xA4:
      case 0xA5:
      case 0xA6:
      case 0xA7:
         return OP.ANA;
      case 0xA8:
      case 0xA9:
      case 0xAA:
      case 0xAB:
      case 0xAC:
      case 0xAD:
      case 0xAE:
      case 0xAF:
         return OP.XRA;
      case 0xB0:
      case 0xB1:
      case 0xB2:
      case 0xB3:
      case 0xB4:
      case 0xB5:
      case 0xB6:
      case 0xB7:
         return OP.ORA;
      case 0xB8:
      case 0xB9:
      case 0xBA:
      case 0xBB:
      case 0xBC:
      case 0xBD:
      case 0xBE:
      case 0xBF:
         return OP.CMP;
      case 0x07:
         return OP.RLC;
      case 0x0F:
         return OP.RRC;
      case 0x17:
         return OP.RAL;
      case 0x1F:
         return OP.RAR;
      case 0xC5:
      case 0xD5:
      case 0xE5:
      case 0xF5:
         return OP.PUSH;
      case 0xC1:
      case 0xD1:
      case 0xE1:
      case 0xF1:
         return OP.POP;
      case 0x09:
      case 0x19:
      case 0x29:
      case 0x39:
         return OP.DAD;
      case 0x03:
      case 0x13:
      case 0x23:
      case 0x33:
         return OP.INX;
      case 0x0B:
      case 0x1B:
      case 0x2B:
      case 0x3B:
         return OP.DCX;
      case 0xEB:
         return OP.XCHG;
      case 0xE3:
         return OP.XTHL;
      case 0xF9:
         return OP.SPHL;
      case 0x01:
      case 0x11:
      case 0x21:
      case 0x31:
         return OP.LXI;
      case 0x06:
      case 0x0E:
      case 0x16:
      case 0x1E:
      case 0x26:
      case 0x2E:
      case 0x36:
      case 0x3E:
         return OP.MVI;
      case 0xC6:
         return OP.ADI;
      case 0xCE:
         return OP.ACI;
      case 0xD6:
         return OP.SUI;
      case 0xDE:
         return OP.SBI;
      case 0xE6:
         return OP.ANI;
      case 0xEE:
         return OP.XRI;
      case 0xF6:
         return OP.ORI;
      case 0xFE:
         return OP.CPI;
      case 0x32:
         return OP.STA;
      case 0x3A:
         return OP.LDA;
      case 0x22:
         return OP.SHLD;
      case 0x2A:
         return OP.LHLD;
      case 0xE9:
         return OP.PCHL;
      case 0xC3:
         return OP.JMP;
      case 0xDA:
         return OP.JC;
      case 0xD2:
         return OP.JNC;
      case 0xCA:
         return OP.JZ;
      case 0xC2:
         return OP.JNZ;
      case 0xF2:
         return OP.JP;
      case 0xFA:
         return OP.JM;
      case 0xEA:
         return OP.JPE;
      case 0xE2:
         return OP.JPO;
      case 0xCD:
         return OP.CALL;
      case 0xDC:
         return OP.CC;
      case 0xD4:
         return OP.CNC;
      case 0xCC:
         return OP.CZ;
      case 0xC4:
         return OP.CNZ;
      case 0xF4:
         return OP.CP;
      case 0xFC:
         return OP.CM;
      case 0xEC:
         return OP.CPE;
      case 0xE4:
         return OP.CPO;
      case 0xC9:
         return OP.RET;
      case 0xD8:
         return OP.RC;
      case 0xD0:
         return OP.RNC;
      case 0xC8:
         return OP.RZ;
      case 0xC0:
         return OP.RNZ;
      case 0xF0:
         return OP.RP;
      case 0xF8:
         return OP.RM;
      case 0xE8:
         return OP.RPE;
      case 0xE0:
         return OP.RPO;
      case 0xC7:
      case 0xCF:
      case 0xD7:
      case 0xDF:
      case 0xE7:
      case 0xEF:
      case 0xF7:
      case 0xFF:
         return OP.RST;
      case 0xFB:
         return OP.EI;
      case 0xF3:
         return OP.DI;
      case 0xDB:
         return OP.IN;
      case 0xD3:
         return OP.OUT;
      case 0x76:
         return OP.HLT;
      default:
         throw "Instruction could not be decoded: " + instr.toString()
   }
}

function num_bytes(opcode) {
   switch(opcode) {
      case OP.LXI:
      case OP.STA:
      case OP.LDA:
      case OP.SHLD:
      case OP.LHLD:
      case OP.JMP:
      case OP.JC:
      case OP.JNC:
      case OP.JZ:
      case OP.JNZ:
      case OP.JP:
      case OP.JM:
      case OP.JPE:
      case OP.JPO:
      case OP.CALL:
      case OP.CC:
      case OP.CNC:
      case OP.CZ:
      case OP.CNZ:
      case OP.CP:
      case OP.CM:
      case OP.CPE:
      case OP.CPO:
         return 2;
      case OP.MVI:
      case OP.ADI:
      case OP.ACI:
      case OP.SUI:
      case OP.SBI:
      case OP.ANI:
      case OP.XRI:
      case OP.ORI:
      case OP.CPI:
      case OP.IN:
      case OP.OUT:
         return 1;
      default:
         return 0;
   }
}

function parse_instruction(fd, mem_offset) {
   const instruction = {
      addr: mem_offset,
      file: fd,
      len: 1,
      opcode: null,
      raw: null,
   };

   var header_byte = new Buffer.alloc(1);
   var num_bytes_read = fs.readSync(fd, header_byte, 0, 1, mem_offset);
   if (num_bytes_read === 0) {
      throw "Could not read memory at location: " + mem_offset;
   }

   instruction.opcode = decode(header_byte[0]);
   instruction.len = num_bytes(instruction.opcode) + 1;

   var num_data_bytes = instruction.len - 1;
   var data_bytes = new Buffer.alloc(num_data_bytes);

   for (var i = 0; i < num_data_bytes; ++i) {
      num_bytes_read = fs.readSync(fd, data_bytes, i, 1, null);
      if (num_bytes_read === 0) {
         throw "Could not read complete data of instruction: " + JSON.stringify(instruction);
      }
   }

   // TODO: parse register/register pair/data

   instruction.raw = Buffer.concat([header_byte, data_bytes], instruction.len);
   return instruction;
}

function disassemble(filename) {
   const fd = fs.openSync(filename, 'r');
   const fstats = fs.statSync(filename);

   const file_size = fstats.size;
   var file_position = 0;
   var instruction_id = 0;

   while (file_position < file_size) {
      const inst = parse_instruction(fd, file_position);
      console.log("INST " + instruction_id + ": " + JSON.stringify(inst));

      file_position += inst.len;
      instruction_id += 1;
   }
}

module.exports = {
   decode: decode,
   disassemble: disassemble,
   parse_instruction: parse_instruction,
   num_bytes: num_bytes,
   OP: OP
};
