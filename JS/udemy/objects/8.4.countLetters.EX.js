

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
    
    let maxValue = 0;
    let maxKey ='';
    // simple way to find max key by value 
    // for(let char in letterObj){
    //     if(letterObj[char] > maxValue){
    //         maxKey = char;
    //         maxValue = letterObj[char];
    //     }                  
    // }
    // return `letter "${maxKey}" is with the most occurrences of ${maxValue} times. `
    
    maxValue = Math.max(...Object.values(letterObj));
    maxKey  = Object.keys(letterObj).find(key => letterObj[key] === maxValue);
    return `letter "${maxKey}" is with the most occurrences of ${maxValue} times. `
}

console.log(setObjfromArray(array));

