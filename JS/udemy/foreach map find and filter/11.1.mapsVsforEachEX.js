

const newReleases = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
   ];



//    TODO Create a function that will loop over the array with the forEachmethod. Return from the function an array of objects. Each object will contain the id and name of the specific movie.
const bookMarks = [];

newReleases.forEach(function(video){
    // video.bookmark.length > 0 && bookMarks.push(video.bookmark[0]);
    const obj = {
        id : video.id,
        name : video.title
    }
    bookMarks.push(obj)
});
console.log(bookMarks);

// TODO . Create another function that will do the same thing expect now use the map method.
console.log('===================== Task - 2 ====================================');
// ! ask mordi
// const mapBookmarks = newReleases.map(function(video){
//     if(video.bookmark !== undefined ){
//         return video.bookmark[0];
//     }
// })

// console.log(mapBookmarks);

const mapBookmarks = newReleases.map(function(video){
    return {
        id : video.id,
        name : video.title
    }
})

console.log(mapBookmarks);

