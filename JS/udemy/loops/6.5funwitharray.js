let obj = {
    key : 'somthing',
}

// 1. Fill an array with 100 of a same object using array fill
// method.
let arr = Array(100).fill(obj);
console.log(arr);
// console.log(arr.keys())

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.

let arr2 = Array.from(Array(100).keys());
console.log(arr2);


console.log('===== Arr 3 =====');
let arr3 = Array.from(arr.keys());
console.log(arr3);


console.log('===Arr 4=======');
// 3. Convert only values of an object into one array

// let arr4 = [];
// for(let i = 0 ; i < arr.length ; i++){
// }
// arr4 = arr.map(Object.values());


// console.log(Array.from(obj.values()));
console.log('=======================================================');



// **********long solution
let interator = arr.values();
let arr4 = [];
for(let i = 0 ; i < arr.length ; i++){
    arr4.push(interator.next().value.key);
}
console.log(arr4);



console.log('========================');
// Convert an array into one object.

// let arrObj = Object.assign({},arr);
let arrObj = {...arr};
console.log(arrObj);


//5.  Find out if an array is an array.
console.log(Array.isArray(arr));

// 6.  Copy an array. 
// • Create a copy of an array that won’t effect the original array if modified.
const arrNew = ['a','b','c'];
const arr5 = [...arrNew];
const arr6 = arrNew.slice();
const arr7 = Array.from(arrNew);
const arr8 = [].concat(arrNew);
console.log(arr5,arr6,arr7,arr8);


// Create a copy of an array that will effect the original array if modified.
const array = arr;
array[0] = 10;
console.log(arr);