
// Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

const arr = [1,2,3,4,5];

function doubleValues(n){
    return n * n;
}

const doubled = arr.map(doubleValues);

console.log(doubled);

console.log('======================= TASK - 2 ========================================');
// Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(arr){
    const newArr = []
    arr.forEach(element => {
        if(element % 2 === 0 ){
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(onlyEvenValues(arr));


console.log('======================= TASK - 3 ========================================');
// Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

function showFirstAndLast(arr){
    let newArr = [];
    newArr.push(arr[0]);
    newArr.push(arr[arr.length - 1]);

    newArr.forEach((e,i) => {
        if(typeof e !== 'string'){
            // delete newArr[i]
            newArr.splice(i,1);
        }
    });
    return newArr;
}

console.log(showFirstAndLast([1,2,'sa']));
console.log(showFirstAndLast(['asda',2,'sa']));



console.log('======================= TASK - 4 ========================================');
// Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

function vowelCount(str){

    str = str.toLowerCase();
    const vowel = {};
    
    str.split('').forEach(letter => {
        if('aeuio'.indexOf(letter) !== -1){
            vowel[letter] = str.split(letter).length - 1;
        }
    });

    return vowel;
}

console.log(vowelCount("benny"));
console.log(vowelCount("appel"));
console.log(vowelCount("hello world"));

console.log('======================= TASK - 5 ========================================');
// Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str){
    const upperCase = str.split('').map(function(letter){
        return letter.toUpperCase();
    })
    return upperCase.join("");
}

console.log(capitalize("hello world"));


console.log('======================= TASK - 6 ========================================');
// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.


function shiftLetters(str){
    let temp = str[str.length - 1];
    const shifted = [temp];
    str.split("").forEach(e => {
        shifted.push(e);
    });
    shifted.pop();
    return shifted.join("");

}

console.log(shiftLetters("benny"));
console.log(shiftLetters("Appelseeds"));


console.log('======================= TASK - 7 ========================================');
// Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

const swapCase = (str) => {
    // for one word pnly
    if(str.indexOf(" ") === -1){
        return str.toUpperCase();
    }
    // for sentence
    const swaped = str.split(" ").map((word,i) => {
        if(i % 2 !== 0){
            return word.toUpperCase();
        }else{
            return word;
        }

    })
    return swaped.join(" ");
}

console.log(swapCase('hello'));
console.log(swapCase('hello world'));
console.log(swapCase('hello world what a beutiful day'));