// The world population is 7900 million people. Create a 
// function declaration called 'percentageOfWorld1' which 
// receives a 'population' value, and returns the percentage of
// the world population that the given population represents. 
// For example, China has 1441 million people, so it's about 
// 18.2% of the world population.

// 2. To calculate the percentage, divide the given 'population'
// value by 7900 and then multiply by 100

function percentageOfWorld1(population){
    let worldPopulation = 7.9e9;
    return parseFloat((100 * population / worldPopulation).toFixed(1));
}
// china example
console.log(percentageOfWorld1(1441e6));


// 3. Call 'percentageOfWorld1' for 3 populations of countries 
// of your choice, store the results into variables, and log 
// them to the console

const israel = percentageOfWorld1(9e6);
const france = percentageOfWorld1(180e6);
const india = percentageOfWorld1(1600e6);
console.log(israel);
console.log(france);
console.log(india);

// 4. Create a function expression which does the exact same 
// thing, called 'percentageOfWorld2', and also call it with 3 
// country populations (can be the same populations)

const percentageOfWorld2 = function percentageOfWorld1(population){
    let worldPopulation = 7.9e9;
    return parseFloat((100 * population / worldPopulation).toFixed(1));
}

const italy = percentageOfWorld2;
const iran = percentageOfWorld2;
const germany = percentageOfWorld2;

console.log(italy(100e6),iran(300e6),germany(200e6));