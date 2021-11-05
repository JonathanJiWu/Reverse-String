/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

let testArr = ["h", "e", "l", "l", "o"];
var reverseString = function (s) {
  //     make a empty array to push elements into
  let arrEmpty = [];
  //     for loop count down from the end
  for (let i = s.length - 1; i >= 0; i--) {
    arrEmpty.push(s[i]);
    console.log(i);
    console.log(s[i]);
  }
  s = arrEmpty;
};

reverseString(testArr)