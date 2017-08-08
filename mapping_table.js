'use strict';

const forward = {
  '/': '@001',
  '<': '@002',
  '>': '@003',
  ':': '@004',
  '"': '@005',
  '\\': '@006',
  '|': '@007',
  '?': '@008',
  '*': '@009'
};

const reverse = {};
Object.keys(forward).forEach(key => {
  reverse[forward[key]] = key;
});

module.exports = {
  forward: forward,
  reverse: reverse
};
