//The value of this depend of the invokation context of the function it is used in

function sayHi() {
  console.log("HI");
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    //In a method, this refers to the object the method "lives" in
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName(); //depend who call this function. if person.printbio() is ok . if outside person variable it will produce error due to this refer to window
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this. they get the nearest local eaxeution context
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`);
  },
};

// INVOCATION CONTEXT MATTERS!!!
person.printBio(); //THIS refers to the person object

const printBio = person.printBio;
printBio(); //THIS refers to window object

// person.laugh();
