/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
*/
/*
const s = ['h', 'e', 'l', 'l', 'o']; 
let newArray = [];
console.log(s);

var reverseString = function(s) {
    let n = s.length - 1;
    for (let i = 0 ; i <= n ; n = n - 1) {
        newArray.push(s[n]);
    };
};

reverseString(s);
console.log(newArray);
*/


const word = ["h" , "e" , "l" , "l" , "o"];
let newArray = [];

var reverseString = function(s) {
    let i = 0, j = s.length - 1;
//    console.log(s.length);
    while (i < j) {
      // ES6 destructuring assignment
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
    return s;
};

console.log(reverseString(word));  
