const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];


   console.log("========================================= TASK - 1 =====================================================");
   //    Create a function that returns all the names from the array.
   const names = (arr) => {
       const nameList = []
       arr.forEach(element => {
        // console.log(element.name);
        nameList.push(element.name);
    });
    return nameList;
}

console.log(names(data));

console.log("========================================= TASK - 2 =====================================================");
// Create a function that returns all the objects that are born before 1990

function parseDateToInt(date){
 return parseInt(date.slice(-4));   
}

// console.log(parseDateToInt("1-10.1990"));

const olders = (arr,func) => {
    const adults = [];
    arr.forEach(element =>{
        if(func(element.birthday) < 1990){
            adults.push(element);
        }
    })

    return adults;
}

console.log(olders(data,parseDateToInt));


console.log("========================================= TASK - 3 =====================================================");
// Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.

function foodList(arr){
    const obj = {};
    const listOffood = [];
    arr.forEach(element => {
        for(key in element.favoriteFoods){
            for(let i = 0; i < element.favoriteFoods[key].length ; i++){
                listOffood.push(element.favoriteFoods[key][i]);
            }
        }
    });

    listOffood.forEach((e)=>{
        obj[e] = obj[e] ? (obj[e] += 1) : 1;
    });


    return obj;
}

console.log(foodList(data));
