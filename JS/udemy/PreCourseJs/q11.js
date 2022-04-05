// minNumber function receive 1 argument 'arr' the function return the min val in arr

const minNumberInArr = (arr)=>{ 
    return Math.min(...arr);
}


/*
const minNumberInArr = (arr)=>{ 
    min = arr[0] ;
    arr.forEach((value) => {
        if(value < min)
            min = value;
    });
    return min;
}
*/