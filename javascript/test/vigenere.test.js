const vigenere = require('../vigenere.js');

const lemonCrypter = vigenere('LEMON');

test('#encrypt', () => {
  expect(lemonCrypter.encrypt('ATTACKATDAWN')).toEqual('LXFOPVEFRNHR');
});

test('#decrypt', () => {
  expect(lemonCrypter.decrypt('LXFOPVEFRNHR')).toEqual('ATTACKATDAWN');
});

