const countryToLiveIn = (language ,isIsland, population ,country) => {
    let answere = population < 50e6 && language == 'english' && !isIsland  && country == 'finland' ?  'You should live in finlad' : 'Finland doesnt meet your criteria';
    return answere
}

let sara = countryToLiveIn('english',false,59e6,'finland');
console.log(sara);
