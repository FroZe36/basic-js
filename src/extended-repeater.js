const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {addition = '', additionSeparator = '|', additionRepeatTimes = 1, repeatTimes = 1, separator = '+'} = options;
  const additionStr = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  const repeatStr = new Array(repeatTimes).fill(String(str) + additionStr).join(separator);
  return repeatStr
}

module.exports = {
  repeater
};
