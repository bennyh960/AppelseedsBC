//TODO PART 1
console.log("=============== PART 1 =================");
const maxCount = 1e3; //! from part 3 it take to long to use 1e6 as maxcount 


const obj = {};
const map = new Map();


console.time("Create a property with Object");

for(let i =0; i < maxCount; i++){
    obj[i] = i;
}

console.timeEnd("Create a property with Object") 
// console.log(map);

// now with map obj
console.time("Create a property with Map");

for(let i =0; i < maxCount; i++){
    map.set(i);
}

console.timeEnd("Create a property with Map") 
// console.log(map);

//TODO PART 2
console.log("=============== PART 2 =================");
console.time("get key with Object");

for(let i =0; i < maxCount; i++){
    obj[100];
}

console.timeEnd("get key with Object")

// map
console.time("get key with Map");

for(let i =0; i < maxCount; i++){
    map.get(100);
}

console.timeEnd("get key with Map") 

//TODO PART 3
console.log("=============== PART 3 =================");

console.time("get single entry with Object");

for(let i =0; i < maxCount; i++){
    Object.entries(obj)[0];
}
console.timeEnd("get single entry with Object")
// console.log(Object.entries(obj)[0]);

// map
console.time("get single entry with Map");

for(let i =0; i < maxCount; i++){
    map.entries().next();
}

// console.log(map.entries().next());
// console.log(obj.entries()[0]);


console.timeEnd("get single entry with Map") 

//TODO PART 4
console.log("=============== PART 4 =================");

console.time("delete single entry with Object");

for(let i =0; i < maxCount; i++){
    Object.entries(obj).shift();
}
console.timeEnd("delete single entry with Object")
// console.log(Object.entries(obj)[0]);

// map
console.time("delete single entry with Map");

for(let i =0; i < maxCount; i++){
    // map.delete(1);
    map.delete(map.get(1));
}

console.timeEnd("delete single entry with Map") 

