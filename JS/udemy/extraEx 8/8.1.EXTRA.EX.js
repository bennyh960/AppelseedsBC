//TODO Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.

const person1 = { name : 'Ori'};
const person2 = { name : 'Shira'};
const person3 = { name : 'Talya'};

//TODO Create a new Map object that sets each object as a key
// and assign an id number as the value.

const data = new Map();
// set and get
data.set(person1,'123456')
data.set(person2,'211253')
data.set(person3,'989287')

//TODO Iterate over the Map object with the for..of loop.- log the name and id
for(let key of data.keys()){
    console.log(key , ':' , data.get(key));
}




// !from this line its just some explantion for my self 
// console.log(data);
// console.log(data.get(person1));

//! it is not possible to iterate over weakmap obj
// console.log(data.person1); //undefined
// console.log(data.get(person1));

// for(let [key, value] of data){
//     console.log(key + ' : ' + value);
// }




//? explain why old way will not work
// Map[obj1] = 1234567891;
//* Map[obj2] = 5678912233;
// Map[obj3] = 5678998983;
// console.log(Map['[object Object]']);//will print the value of obj3 due to overwrite
// console.log(Map);