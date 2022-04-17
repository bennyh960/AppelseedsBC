// ? SORT

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

//  convert to strings before
console.log(prices.sort()); // [ 12, 3000, 35.99, 400.5, 9500, 99.99 ]
console.log(prices); // [ 12, 3000, 35.99, 400.5, 9500, 99.99 ]

// ?USING COMPARE FUNCTION
// ? arr.sort(compareFunction(a,b))
// ?    if cF(a,b) return less then 0
//          ?Sort a before b
//      ?if CSSFontFaceRule(a,b) returns 0
//          ?leave a and b unchanged with respect to each other
//?     if cF(a,b) returns > 0
//?         sort b before a

// ==============================================================
const sort1 = prices.sort((a, b) => a - b);
console.log(sort1); //?[ 12, 35.99, 99.99, 400.5, 3000, 9500 ]
console.log(prices); //?[ 12, 35.99, 99.99, 400.5, 3000, 9500 ]

const sort2 = prices.sort((a, b) => b - a);
console.log(sort2);
console.log(sort1); //?[ 12, 35.99, 99.99, 400.5, 3000, 9500 ]
console.log(prices); //?[ 12, 35.99, 99.99, 400.5, 3000, 9500 ]
