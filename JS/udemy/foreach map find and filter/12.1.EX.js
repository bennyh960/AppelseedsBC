// Write a JavaScript function that receives the following library object as an
// input and displays the books that can be read (the reading status is true).
// Log the book name, author name and reading status .

var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

// function readyToread(arr){
//     const listOfreadyObj = arr.filter(b =>{
        
//     if (b.readingStatus === true){
//         console.log(b.title);
//         console.log(b.author);
//         console.log(b.readingStatus);
//     }
//     }      
//         );   
// }

// console.log(readyToread(library));
function readyToread(arr){
    const listOfreadyObj = arr.filter(b =>b.readingStatus === true);
    // console.log(listOfreadyObj);
    listOfreadyObj.forEach(element => {
        console.log("Title:", element.title );
        console.log("Author:", element.author );
        console.log("isReady:", element.readingStatus);
        console.log('======================');
    });
    return ""
}

console.log(readyToread(library));