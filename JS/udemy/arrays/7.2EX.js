const string = "The more you know, the more you know that you don't know";


// my solution without indexof using split
let arr = string.split('you');
let indexFromEnd = arr[arr.length-1].length + 'you'.length;
let lastOccurence = string.length - indexFromEnd;

console.log(lastOccurence);


// with indexOf
console.log(string.lastIndexOf('you'));