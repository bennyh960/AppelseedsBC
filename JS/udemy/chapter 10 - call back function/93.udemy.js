// function as a return value 

function multiplyBy(num){
    return function (x){
        return num * x;
    }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
const halve = multiplyBy(0.5);

console.log(double(5));
console.log(triple(5));
console.log(halve(5));


console.log('=============================================');

function makeBetweenFunc(x,y){
    return function(num){
       return num >= x && num <= y ;
    }
}


const isChild = makeBetweenFunc(0,18);
console.log(isChild(5));
console.log(isChild(20));

const isNiceWeather = makeBetweenFunc(20,27);
console.log(isNiceWeather(22));
console.log(isNiceWeather(18));