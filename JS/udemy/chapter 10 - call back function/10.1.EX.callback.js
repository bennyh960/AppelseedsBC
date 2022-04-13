(space = (str) => {console.log(`=======================   ${str}   =====================`)})('line-1');
// 1
function isString(str,callback){
    if (typeof str === 'string'){
        return callback(str)
    }
}

const callback = str => console.log(str);

// isString("Yea i'm a string",console.log) also work
isString("Yea i'm a string",callback)
isString(5,callback)

// Create a function called ‘firstWordUpperCase’ that 
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence 
// and pass the string to a callback function which will create 
// dashes between the words
space('Task-2');
firstWordUpperCase = (str,call) => {
    let newStrArr = str.split(" ");
    newStrArr[0] = newStrArr[0].toUpperCase();
    return call(newStrArr.join(' '));
}

call = str => {
    return str.replaceAll(" ", "-");
}

console.log(firstWordUpperCase("Sara sings happy song",call));
console.log(firstWordUpperCase("code is awesome",call));

space('Task - 3');
// Call the ‘firstWordUpperCase’ function with a callback of your choice.
myCall = str => {
    let arr = str.split(" ");
    arr[0] = arr[0].toLowerCase();
    arr[arr.length - 1] = arr[arr.length - 1].toUpperCase();
    return arr.reverse().join(' ');
}
console.log(firstWordUpperCase("Sara sings happy song",myCall));


space('Task - 4')
const myFunc = (str,myaction) => {
    str = str[0].toUpperCase() + str.slice(1) ;
    // console.log(str);
    return myaction(str);
}
action = str => {
    let last = str[str.length - 1].toUpperCase();
    return str = str.slice(0,-1) + last ; 
}

console.log(myFunc('benny',action));

