// primeNumberFromOneToN function rechive 1 argument 'n' the function return the amount of 
// Prime numbers from 1 to n

const primeNumberFromOneToN = (n)=>{ 
    
    function isPrime(j){
        for(let i = 2 ; i < j ; i++){
            if(j % i == 0)
                return false;
        }
        return true;
    }

    var count = 0;

    for(let j = 2; j < n ; j++){
        if (isPrime(j))
            count++;
    }
    return count;
}