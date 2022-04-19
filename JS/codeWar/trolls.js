// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

const removeVowel = (str) => {
  let newStr = "";
  let newArr = str.split("");
  for (let letter of newArr) {
    "aeiou".indexOf(letter.toLowerCase()) !== -1 ? (newStr += "") : (newStr += letter);
  }
  return newStr;
};

console.log(removeVowel("This website is for losers LOL!"));
