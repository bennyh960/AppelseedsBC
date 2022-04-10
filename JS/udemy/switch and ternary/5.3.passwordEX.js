//1) Create a function that uses a if/else conditional expression.
function isValid(password){
    if(password.length > 7)
        return 'Strong';
    else if(password.length <= 7 )
        return 'Weak'
}

let pass1 = isValid('12345');
console.log(pass1);

//2) Create a function that uses a ternary conditionalexpression.
function isValid2(password){
    return password.length > 7 ? 'Strong' : 'Weak';
}

let pass2 = isValid2('12345678');
console.log(pass2);

//3) Create a function that uses a ternary conditionalexpression.
function isValid3(password){
    return (password.length > 7) && 'strong' || 'weak';
    
}

let pass3 = isValid3('126kdjsk78');
console.log(pass3);

//4) At least one capital letter.
function isValid4(password){    
    return (password.length > 7 && password.toLowerCase() !== password) ?'very strong' : (password.length > 7 ? 'strong' : 'weak');
}

let pass4 = isValid4('klk12kjkj21kjkj');
console.log(pass4);

