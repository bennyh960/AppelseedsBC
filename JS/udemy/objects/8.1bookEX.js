const mybook = {
    name    : 'My Life',
    author  : 'me',
    price   : 40,
    janner  : 'comedy',
    publishedYear    : 2020
}

bookDetail = book => {
    return `The book ${book.name} was written by ${book.author} in the year ${book.publishedYear}`};
// function bookDetail(book){
//     return `The book ${book.name} was written by ${book.author} in the year ${book.publishedYear}`
// };


console.log(bookDetail(mybook));