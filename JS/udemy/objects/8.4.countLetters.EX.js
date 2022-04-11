
const myobj = {};

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

// obj[h] = ['h', 'ellogood dayyour welcomeh', 'otdogh', 'amburgers']


function setObjfromArray(arr,obj){
    let longWord = arr.join("").toLowerCase();
    // console.log(longWord);

    for(letter of longWord){
        if(!letter.includes(" ") && (obj[letter] == undefined)){
            // console.log(letter , (obj[letter]));
            obj[letter] = longWord.split(letter).length - 1; 
        }
    }

    let maxValue = Math.max(...Object.values(obj));
    let maxKey  = Object.keys(obj).find(key => obj[key] === maxValue);
    return `letter "${maxKey}" is with the most occurrences of ${maxValue} times. `
}

console.log(setObjfromArray(array,myobj));
console.log(myobj);
