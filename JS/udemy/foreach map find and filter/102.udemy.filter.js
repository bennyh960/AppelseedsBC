// ?example 1
const nums = [231,21,24,21,122,1,53];

const odd = nums.filter(n => n % 2 === 1);
const even = nums.filter(n => n % 2 === 0);
const bigNums = nums.filter(n => n > 100);

console.log(odd);
console.log(even);
console.log(bigNums);

//? example 2

const books = [
    {
    title: "title1",
    authors: ["sometwo","somone"],
    rating: 4.4,
    geners: ["comedy","drama"],
},
    {
    title: "title2",
    authors: ["Ata","somone"],
    rating: 3.4,
    geners: ["fantasy","action"],
},
    {
    title: "title3",
    authors: ["Ani","Ata"],
    rating: 4.1,
    geners: ["comedy","action"],
},
]


const goodBooks = books.filter(r => r.rating > 4);
console.log(goodBooks);



console.log('======================= EXAMPLE 2 ===============');
const actionBook = books.filter(b => b.geners.includes("action"));
console.log(actionBook);




console.log('======================= EXAMPLE 3  ===============');
const actionOrcomedy = books.filter(b =>
   ( b.geners.includes("action") ||  b.geners.includes("comedy")  )
);
console.log(actionOrcomedy);