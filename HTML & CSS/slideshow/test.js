array = [4,3,9,7,2,1];

array.forEach((e,i) => {
    if( e**0.5 % 1 === 0){
        array[i] = e**0.5;
    }else{
        array[i] = e**2
    }
});

console.log(array);

// console.time("start")
// for(let i = 0 ; i < 1e7 ; i++){
//     16**0.5
// }
// console.timeEnd("start");
// console.time("start")
// for(let i = 0 ; i < 1e7 ; i++){
//     Math.sqrt(16);
//     Math.
// }
// console.timeEnd("start");



