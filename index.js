'use strict';

const mappingTable = require('./mapping_table');

module.exports = {
  serialize: function serialize(str) {
    const ret = [];
    const table = mappingTable.forward;
    for (let i = 0; i < str.length; i++) {
      ret.push(table[str[i]] ? table[str[i]] : str[i]);
    }
    return ret.join('');
  },
  deserialize: function deserialize(str) {
    const ret = [];
    const table = mappingTable.reverse;
    const keys = Object.keys(table);
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '@') {
        const tmp = str.slice(i, i + 4);
        if (keys.indexOf(tmp) > -1) {
          ret.push(table[tmp]);
          i += 3;
        } else {
          ret.push(str[i]);
        }
      } else {
        ret.push(str[i]);
      }
    }
    return ret.join('');
  }
};
