let populations = [10e6,50e6,30e6,100e6];


function percentageOfWorld(population){
    let worldPopulation = 7.9e9;
    return parseFloat((100 * population / worldPopulation).toFixed(1));
}

(populationPercentages = arr => {
    let percentages = [];
    arr.forEach(element => {
        percentages.push(percentageOfWorld(element));
    });
    return console.log(percentages);
})(populations);

