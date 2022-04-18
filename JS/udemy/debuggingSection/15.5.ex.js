// Original
// function countOccurrences (str, char){
//     let counter = 0 ;
//     for ( let i = 0 ; i < str .length; i ++ ){
//     if ( str . charAt ( i ) === char ){
//     counter + 1 ;
//     }
//     }
//     return counter ;
//     }
//     countOccurrences ( "ini mini miny moe" , "n" );

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// ? line 6 ,counter value isnot affected
// 2. Which debug method did you use to find the bug?
//? vs code
// 3. Explain the bug in your own words.
// ? theres is no error but the counter will remain 0 due to nothing change it
// 4. Fix the code and submit it all.

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
// countOccurrences("ini mini miny moe", "n");
console.log(countOccurrences("ini mini miny moe", "n"));
