/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let n1 = str1.length;
  let n2 = str2.length;

  if( n1 != n2 )
    return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // console.log( str1 );
  // console.log( str2 );

  let dict1 = {};

  for( let i=0; i<n1; i++ ){

    if( str1[i] in dict1 )
      dict1[str1[i]] += 1;
    else
      dict1[str1[i]] = 1;

    if( str2[i] in dict1 )
      dict1[str2[i]] -= 1;
    else
      dict1[str2[i]] = -1;

  }
    

  for( key in dict1 )
  {
    if( dict1[key] != 0 )
      return false;
  }

  
  return true;

}

let a = "Debit Card", b = "Bad Credit";

console.log( isAnagram(a, b) );


module.exports = isAnagram;
