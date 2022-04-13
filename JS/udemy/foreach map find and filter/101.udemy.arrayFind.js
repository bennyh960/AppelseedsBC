// ? Example 1; return only the first match
let movies = [
    "The movie 1","movie 2", "movie 3", "x-man"
]

let movie = movies.find(movie => {
    return movie.includes("The")  
});

console.log(movie);

let movie2 = movies.find(m => m.indexOf("x") !== -1);
console.log(movie2);

