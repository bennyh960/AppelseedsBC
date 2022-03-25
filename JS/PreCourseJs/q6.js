//divideOrHasSeven function rechive 2 arguments: 'start' and 'end'. The function return the 
// amount of numbers that have one of:
//      1.have the num 7 in one of the digits.
//      2. the number divide by 7.

const divideOrHasSeven = (start,end)=>{
    var count = 0;
    while(start < end){
        if(start % 7 == 0)
            count++;
        else if ((start+'').indexOf('7') != -1)
            count++;
        start++;
    }
    return count;
}
    