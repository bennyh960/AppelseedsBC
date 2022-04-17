const sum = (arr) => {
  return arr.reduce((acc, val, i) => {
    console.log(
      `itteration number ${i} : acc = ${acc} , current = ${val} , acc = ${acc} + ${val} `
    );
    return (acc = acc + val);
  });
};

console.log(sum([1, 2, 3, 4]));

// ============================================
// =============================================

const myArr = [
  { name: "Dan" },
  { name: "Dani" },
  { name: "Dana" },
  { name: "Ran" },
];

const extractOnlyValue = (arrOfobj, key) => {
  return arrOfobj.reduce((acc, cur) => {
    acc.push(cur[key]);
    return acc;
  }, []);
};

console.log(extractOnlyValue(myArr, "name"));

// ===============================================
const countOnlyVowels = (str) => {
  let vowels = "aeoui";
  str = str.toLowerCase();
  return str.split("").reduce((acc, cur) => {
    if (vowels.includes(cur)) {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1); //acc is obj
    }
    return acc;
  }, {});
};

console.log(countOnlyVowels("Hola amigos"));
