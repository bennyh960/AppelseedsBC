// IIFE -Immediately Invoked Function Expression

// with anonymous functon inside:
(()=> {
    // do stuff
})();

// with the function keyword:
(function() {
    // do stuff
})();

// with function name (aloows for recursion)
(function myIIFE(){
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log("finished!");
})(num = 0);

