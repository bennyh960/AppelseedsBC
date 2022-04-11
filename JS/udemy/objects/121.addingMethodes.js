(space = (num) => console.log(`================================== ${num}   ==================================\n`))(1);

space('121: Adding methode to object');

// const add = function(x,y){return x + y};

const math = {
    numbers: [1,2,3,4,5],
    add : function(x,y){
        return x + y;
    },
    multiply : function (x , y) {
        return x * y ;
    }

}

space('122: Shortand methode to object');

const math2 = {
    numbers: [1,2,3,4,5],
    add(x , y){
        return x + y;
    },
    multiply(x , y) {
        return x * y ;
    }

}

console.log(math2.add(3,5));


const auth = {
    login(){
        console.log('Logged you in!');
    }
}

console.log(auth.login());