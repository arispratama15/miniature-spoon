const word = "it's cool";
let wordArray = [];

const reverseString = function (word){
    for (let n = word.length -1; 0 <= n; n--){
        //console.log(word[n]);
        wordArray.push(word[n]);
    };
    return wordArray;
};

let reverseWord = "";
const arrayToWord = function (){
    for (let n = word.length; 0 <= n; n--){
        reverseWord = wordArray.join('');
    };
    return reverseWord;
};

console.log(arrayToWord(reverseString(word)));

//console.log(reverseString(word));