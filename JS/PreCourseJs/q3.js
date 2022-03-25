// BiggestNumber is a function that rechive 3 numbers (a,b,c). function will return the biggest number
const biggestNumber = (a,b,c)=>{
    //Your Code Here :-)
        if(a > b && a > c)
            return a;
        else if(b > a && b > c)
            return b;
        else
            return c;
     }