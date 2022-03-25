//longest word function receive 1 argument 'arr' the function return sum of arr

const sumArray = (arr)=>{
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    });
    return sum;
 }