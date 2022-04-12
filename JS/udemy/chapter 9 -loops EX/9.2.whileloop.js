const arr = ["boo", "doooo", "hoo","ro"] 

// solution from 6.3 using for loop

function lengthOfwordsFor(arr){
    let lengthArr = []
    arr.forEach(word => {
        lengthArr.push(word.length);
    });
    return lengthArr;
}

console.log(lengthOfwordsFor(arr));

// solution  9.2 using while loop

function lengthOfwordsWhile(arr){
    let lengthArr = [];
    let i = 0;
    while(i < arr.length){
        lengthArr.push(arr[i].length)
        i++;
    }
    return lengthArr;
}
console.log(lengthOfwordsWhile(arr ));


// While loop is less convenience in this task