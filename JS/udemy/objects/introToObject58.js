(space = (num) => console.log(`================================== ${num}   ==================================\n`))(1);

// create an object
const fitbitData = {
    totalSteps      : 303900,
    totalMiles      : 122.2,
    avgCalorieBurn  : 5755,
    workoutThisWeek : '5 of 7',
    avgGoodSleep    : '2:13',
    45 : 'test with key that is int',
    '45' : 'test with key that is int',
    
};

// access keys - ALL KEYS ARE CONVERTED TO STRINGS
// Except for Symbols
console.log(fitbitData)

space(2);

// access value
console.log(fitbitData.totalMiles)
// console.log(fitbitData.45) >>> will produce error
// console.log(fitbitData.'45') ;>>> will produce error
console.log(fitbitData[45]) //this is the way to call a string or int key
console.log(fitbitData['45']) //this is the way to call a string or int key
console.log(fitbitData[45] === fitbitData['45'])
console.log(fitbitData[45] == fitbitData['45'])

// we can also get to value of variable wit square braket
let x = 'avgGoodSleep'
console.log(fitbitData.x); //undefined
console.log(fitbitData[x]); // Good
console.log(fitbitData['x']); // undfined
console.log(fitbitData['avg' + 'GoodSleep']); // work

space(3);
space(3);
space('Update & Adding properties');

const userReviews = {};
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
console.log(userReviews);

userReviews.mrSmith78 += 3.5;
console.log(userReviews);



space('Arrays + Objects');

const student = {
    firstName : 'Benny',
    lastName  : 'Hassan',
    strength  : ['Music','Sports','Art'],
    exams     : {
        midterm : 95 ,
        final   : 100
    }
};

console.log(student.exams.midterm);
console.log(student.strength[0] );


space('somthing');

const pallete = {
    red    : '#eb4d4b',
    yellow : '3f9ca24',
    blue   :  '#30336b'
}
// console.log(pallete[yellow]); not work
console.log(pallete.yellow);
console.log(pallete['yellow']);

const pallete2 = pallete;
pallete2.green = '#eb7896';
console.log(pallete['green']);
console.log(pallete2['green']);


space('64: Equality with array and object');

let nums = [1,2,3]
let nums2 = [1,2,3]

// nums === nums2 >>> false
// nums == nums2 >>> false


space('Iterate trough object by converting to list')
// fitbitData
console.log(Object.keys(fitbitData));
console.log(Object.values(fitbitData));

for(let key of Object.keys(fitbitData)){
    console.log(key);
}


space('for in ');

const jeopardyWinnings = {
    regularplay    : 2529893,
    wastonChallenge: 1021923,
    tournaments    : 98989102, 
};

for(let key in jeopardyWinnings){
    console.log(key,jeopardyWinnings[key]);
}


for(let k in [88,99,77,66]){
    console.log(k);
}