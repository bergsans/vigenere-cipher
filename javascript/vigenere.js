function vigenere(key) {
  const AZ_LENGTH = 26;
  const alphabetAZ = Array
    .from(
      {length: AZ_LENGTH},
      (_, i) => String.fromCharCode(i + 65)
    );
  const table = alphabetAZ.reduce((table, v, i) => ({...table, [v]: i}), {});
  const cryptoStr = (msg, key) => ''.padStart(msg.length, key);
  const cryptoStrLetterAt = (msg, key, pos) => cryptoStr(msg,key)[pos];
  return {
    encrypt: (msg) => msg
      .split('')
      .map(
        (char, i) => alphabetAZ[
            (table[char] + table[cryptoStrLetterAt(msg, key, i)]) % AZ_LENGTH
            ]
      )
      .join(''),
    decrypt: (msg) => msg
      .split('')
      .map(
        (char, i) => alphabetAZ[
          (table[char] - table[cryptoStrLetterAt(msg, key, i)] + AZ_LENGTH) % AZ_LENGTH
          ]
      )
      .join('')
  }
}
module.exports = vigenere;
