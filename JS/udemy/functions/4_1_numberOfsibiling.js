// index.html

let numSibiling = parseInt(prompt("How many sibiling do you have?"));

if (numSibiling === 1){
    console.log('1 sibiling!')
} else if (numSibiling > 1 ){
    console.log('More than 1 sibling');
} else {
    console.log("No sibilings.");
}

// 6. Change == to ===, and test the code again, with the 
// same values of 'numSiblings'. Notice what happens when 
// there is exactly 1 sibling! Why is this happening?

// answere : it happend due to === check for types also and user prompt get an str while in original code
// i wrote comparison to int . in this code i used parseInt to make them both int


// 7. Finally, convert 'numSibling' to a number, and watch 
// what happens now when you input 1.

// answere - already done

// 8. Reflect on why we should use the === operator and 
// type conversion in this situation.

// answere - some characters got the same value with diffrent type such as '9' == 9 where '9' is a string
// where 9 is int. the === or !== check also about the type of . 