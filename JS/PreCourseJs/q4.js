//countOddFromZeroToNum function get argument num , the argument 'num' is a positive number.
// the function returns the amount of the odd numbers from 0 to num.

const countOddFromZeroToNum = (num)=>{ 
    //Your Code Here :-)
    let count = 0;
    for(let i = 0;i <= num;i++){
        if(i % 2 != 0)
            count++;
    }
    return count;
    }