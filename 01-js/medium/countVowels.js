/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    let n = str.length;

    let ans = 0;

    str = str.toLowerCase();

    let vowelArr = [ 'a', 'e', 'i', 'o', 'u' ];

    for( let i=0; i<n; i++){
      if( vowelArr.includes(str[i]) ){
        ans++;
      }
    }

    return ans;
}

// let s = "aei";

// console.log( countVowels(s) );

module.exports = countVowels;