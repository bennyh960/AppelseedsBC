// in mathematics, the factorial of n is denoted by n! and calculated by the product of integer
// number from 1 to n. numFactorial that get a whole number (n)and return N factorial.

const numFactorial = (num)=>{ 
    //Your Code Here :-)
    let res = 1;
    while(num > 0){
        res *= num
        num--;
    }
    return res;
    }