const arr = [1,2,5,2,1,2,3,4,5,3,1];

((arr) => {
    let newArr = [];
    for(i of arr){
        if(newArr.indexOf(i) === -1){
            newArr.push(i);  
        }
    }
    console.log(newArr);
    return newArr;
})(arr);

