const {NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


let result = 0;
function countCats( matrix ) {
  
  //throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

result = matrix.filter(item => item === '^^').length;
return result;
}


countCats ( [
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2],
].flat());




module.exports = {
  countCats
};

