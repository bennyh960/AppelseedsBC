const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

//before fix
// console.log(whoIsStronger(hero.getStrength));

// the "whoIsStronger" is activate the "getsStrength" then "this" is related to "Window object" which is havnt the keywords as in hero
// tofix that i use bind methode that bind "this" into "hero" object

// after
//fastway
console.log(whoIsStronger(hero.getStrength.bind(hero)));
//steps
const x = hero.getStrength.bind(hero); //hero.getStrength is already a part of hero object but if it called from window obj "this" will refer to window
console.log(whoIsStronger(x)); //now in getStrengh function "this" is here no matter who call this func
console.log(x());
