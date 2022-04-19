function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

//? Very smart
// function findUniq(arr) {
//   return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
// }

// ? my logic
// function findUniq(arr) {
//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     if (arr[i] !== arr[i + 1] && arr[i + 1] === arr[j]) return arr[i];
//     if (arr[i] !== arr[i + 1] && arr[i + 1] !== arr[j]) return arr[i + 1];
//     if (arr[j] !== arr[j - 1] && arr[j - 1] === arr[i]) return arr[j];
//     if (arr[j] !== arr[j - 1] && arr[j - 1] !== arr[i]) return arr[j - 1];
//   }
// }

// ?Very smart
// function findUniq(arr) {
//     let [a,b,c] = arr.slice(0,3);
//     if( a != b && a!=c ) return a;
//     for( let x of arr ) if( x!=a ) return x
//   }

const arr1 = [2, 1, 1, 1];
const arr2 = [1, 2, 1, 1];
const arr3 = [1, 1, 2, 1];
const arr4 = [1, 1, 1, 2];
const arr5 = [1, 1, 2];
const arr6 = [1, 2, 1];
const arr7 = [2, 1, 1];

console.log(findUniq(arr1));
console.log(findUniq(arr2));
console.log(findUniq(arr3));
console.log(findUniq(arr4));
console.log(findUniq(arr5));
console.log(findUniq(arr6));
console.log(findUniq(arr7));

// console.log(arr1.indexOf(1) === arr1.lastIndexOf(1));
