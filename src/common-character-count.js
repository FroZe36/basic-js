const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCount = {};

  for(let i = 0; i < s1.length; i++) {
    const char = s1[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  let commonCount = 0;

  for(let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if(charCount[char]) {
      commonCount += 1;
      charCount[char] -= 1;
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
