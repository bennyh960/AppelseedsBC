(space = (num) => console.log(`================================== ${num}   ==================================\n`))(1);

space('Example of old way')

const getStates = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max : max,
        min : min,
        sum : sum,
        avg : avg
    }
}

const reviews = [4.5,5.0,3.4,2.8 ,5,4.10];
const states = getStates(reviews);
console.log(states);


space('shorter syntax using this')
const getStates2 = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min, 
        sum,
        avg,
        
    }
}

const states2 = getStates2(reviews);
console.log(states2);

