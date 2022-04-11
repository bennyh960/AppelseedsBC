(space = (num) => console.log(`================================== ${num}   ==================================\n`))(1);

space('Udemy chapter 121');

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'Benny'

const team = {
    role : person
}

// will take the value from person into object value 
console.log(team);

const var3 = 'Shira'
// if we want dynamic value 
const team2 = {
    [var3] : 'Admin'
};
// team2['role'] = person; //will ignore the role as variable
team2[role] = person;
team2[role2] = person2;
// team2.role2 = person2; will add anouther property "role2"
console.log(team2);

space('\n we can use a variable as a key name in an object literal property')

space('just some spasing');

function addProp(obj,k,v){
    const copy = {...obj};
    copy[k] = v;
    return copy;
}

const res = addProp(team2,'happy',':)');
console.log(team2);
console.log(res);

space('another example');
const addProp2 = (obj,k,v) => {
    return {
        ...obj,
        [k] : v
    }
}

const res2 = addProp2(res,'sad',':(');
console.log(res2);

space('\n if we want implicit return obj we need use ({})')
// const addProp2 = (obj,k,v) => {...obj,[k] : v} will not work
const addProp3 = (obj,k,v) => ({...obj,[k] : v} )
res3 = addProp3(res,'some','thing');
console.log(res3);