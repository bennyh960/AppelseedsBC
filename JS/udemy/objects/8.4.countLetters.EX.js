

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];



function setObjfromArray(arr){
    let longWord = arr.join("").toLowerCase();

    let letterObj = {}
    for(letter of longWord){
        if(!letter.includes(" ") && (letterObj[letter] == undefined)){
            letterObj[letter] = longWord.split(letter).length - 1; 
        }
    }

    console.log(letterObj);
    let maxValue = Math.max(...Object.values(letterObj));
    let maxKey  = Object.keys(letterObj).find(key => letterObj[key] === maxValue);
    return `letter "${maxKey}" is with the most occurrences of ${maxValue} times. `
}

console.log(setObjfromArray(array));

