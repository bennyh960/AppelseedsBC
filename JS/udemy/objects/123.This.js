(space = (num) => console.log(`================================== ${num}   ==================================\n`))(1);

space("\n 123: Introduction to 'this'\n");

// (function sayHi(){
//     console.log("Hi");
//     console.log(this);
// })();

space('\n 124: The "this" \n');

const person = {
    first : 'Cherilyn',
    last  : 'Sarkisian',
    nickName : 'Cher',
    fullname(){
        console.log(this.first,this.last);
    },
    fullname2(){
        const{first,last} = this;
        console.log(first,last);
        return `${first} ${last} AKA ${this.nickName}`
    },
    printBio(){
        const fullname = this.fullname2();
        console.log(`${fullname} is a person`) 
    }
}

console.log(person.fullname());
console.log(person.fullname2());
console.log(person.printBio());