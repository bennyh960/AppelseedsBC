const arr = [1,7,3,0,-5,7,3,9];

for(let i = 0;i < arr.length ; i++){
    console.log(arr[i]);
}


console.log('======================');
(function arrayLength(arr){
    let res = 0;
    for(let i = 0;i < arr.length ; i++){
        res++;
    }
    console.log(res);
} )(arr);

console.log('======================');
(function arraySum(arr){
    let res = 0;
    for(let i = 0;i < arr.length ; i++){
        res += arr[i];
    }
    console.log(res);
} )(arr);

console.log('======================');
(function arrayMulty(arr){
    let res = 0;
    for(let i = 0;i < arr.length ; i++){
        res *= arr[i];
    }
    console.log(res);
} )(arr);

