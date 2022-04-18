// original code
// function calcAverage (arr){
//     var sum ;
//     for ( var i = 0 ; i < arr .length; i ++ ){
//     sum += arr [ i ];
//     }
//     return sum ;
//     }
//     calcAverage ([ 85 , 90 , 92 ]);

// What is wrong with this code?
//? sum is not defined
// 1. First find the line that contains the problem. Write it down.
// ?  line 5
// 2. Which debug method did you use to find the bug?
// ? vs code
// 3. Explain the bug in your own words.
// ? adding numbers to undefined produce Nan
// 4. Fix the code and submit it all.

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);
// console.log(calcAverage([85, 90, 92]));
