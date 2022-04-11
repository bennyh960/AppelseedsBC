// Create an object called ‘mycountry’ for a country of your choice, 
// containing properties ‘country’, ‘capital’, ‘language’, ‘population’ 
// and ‘neighbours’ (an array)

// Add a method to the object called 'describe' to the 'myCountry' 
// object. With the help of the ‘this’ keyword, this method will log a 
// string like this to the console:
// ‘Finland has 6 million people, their mother tongue is Finnish, they 
// have 3 neighbouring countries and a capital called Helsinki’. 

const mycountry = {
    country   : 'Israel',
    capital   : 'Jerusalem',
    population  : 8e6,
    language  : 'Hebrew',
    neighbours: ['Jordan','Egypt'],
    describe(){
        const {country, capital, language ,neighbours, population} = this;
        console.log(`${country} has ${population} people, thier mother tongue is ${language}, they have ${neighbours.length}
        neighbouring countries and a capital called ${capital}.`);
    },
    checkIsland(){
        this.isIsland = this.neighbours.length === 0 ? this.isIsland = true : this.isIsland == false;
    }
}


console.log(mycountry.describe());
console.log(mycountry.checkIsland());
console.log(mycountry.isIsland);