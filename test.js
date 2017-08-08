'use strict';

const test = require('ava');
const filenameConverter = require('./index');

test('A valid filename', t => {
  t.plan(2);
  const testData = 'IAmANormalFileName.json'
  const ret1 = filenameConverter.serialize(testData);
  const ret2 = filenameConverter.deserialize(ret1);
  t.is(ret1, testData);
  t.is(ret2, testData);
});

test('Few invalid characters', t => {
  t.plan(2);
  const testData = '|//*as\\d"*@010';
  const ret1 = filenameConverter.serialize(testData);
  const ret2 = filenameConverter.deserialize(ret1);
  t.is(ret1, '@007@001@001@009as@006d@005@009@010');
  t.is(ret2, testData);
});
