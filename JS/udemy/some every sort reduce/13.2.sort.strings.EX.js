const foods = [
  "fblafel",
  "falafel",
  "sabich",
  "hummus",
  "pizza with extra pineapple",
];

// a1. Sort the array of strings from descending to ascending order
// ?methode with local comapre (also from des to arr no need any compare func)

const decToasc = foods
  .slice()
  .sort((a, b) => {
    return a.localeCompare(b);
  })
  .sort((b, a) => b.localeCompare(a));

console.log(decToasc);

// a.2. Sort the array of strings from ascending to descending order.
// ? with logic and not local compare
const ascToasc = foods.slice().sort((a, b) => {
  if (b > a) {
    return 1;
  } else if (a > b) return -1;
  return 0;
});
console.log(ascToasc);

// ===================================================================================
// Lets sort an array of words that includes a word with an uppercase:

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//   b.1. Sort the array of strings from descending to ascending order.

const desToascUpper = foodsWithUpperCase.slice().sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else return 0;
});

console.log(desToascUpper);

//   b.2. Sort the array of strings from ascending to descending order.

const ascTodscUpper = foodsWithUpperCase.slice().sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return 1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return -1;
  } else return 0;
});

console.log(ascTodscUpper);

// c Longest word
// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log([...words].sort((a, b) => a.length - b.length));


// mordi lesson
const students = [
    { name: 'Samer', attendance: false },
    { name: 'Keter', attendance: true },
    { name: 'Binjamin', attendance: false },
    { name: 'Eden', attendance: false },
    { name: 'Amir', attendance: true },
    { name: 'Haim', attendance: true },
  ];
  ​
  students.sort((a, b) => {
    //   console.log(a);
    if (a.attendance && !b.attendance) {
      return -1;
    } else if (a.attendance === b.attendance) {
      if (a.name < b.name) {
        return -1;
      }
    }
  });
  console.log(students);
