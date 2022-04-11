
const book1 = {
    name   : 'My Life',
    author : 'Me',
    year   : 2022
}

const book2 = {
    name   : '5 balloons',
    author : 'Somone',
    year   : 2000
}



// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2 
// books and returns the book with the smaller year.

const bookUtils = {
    getFirstPublished(book_1,book_2){
        let smaller = null;
        book_1.year < book_2.year ? smaller = book_1 : smaller = book_2 ;
        return smaller;
    }
};

console.log(bookUtils.getFirstPublished(book1,book2));



// 4. add to to the bookUtils object a function setNewEdition, that recieves a 
// book and an edition year and sets a new property latestEdition with the 
// edition year, or updates an existing one.

bookUtils.setNewEdition = function (book,edditionYear){
    book.lastEdition = edditionYear;
}

console.log(bookUtils.setNewEdition(book1,2022));
console.log(book1);


// 5. add to to the bookUtils object a setLanguage function, that recieves a book 
// and a language and sets a new property language with the languahe, or 
// updates an existing one.
bookUtils.setLanguage = function (book,language){
    // book.language = language; //also should work
    book[language] = language;
}

console.log(bookUtils.setLanguage(book1,'Hebrew'));
console.log(book1);



// 6. add to to the bookUtils object a setTranslation function, that recieves a 
// book a language and a translator, and sets a new property of translation, 
// which is an object that contains the translator and the language.

bookUtils.setTranslation = function (book,language, translator){
    // shorter
    book.translation = {language,translator};
    // long way
    // book.translation = {language: language,translator : translator};
}

console.log(bookUtils.setTranslation(book1,'English','Shira'));
console.log(book1);



// 7. add to to the bookUtils object a setPublisher function, that recieves a book 
// a name and a location, and sets a new property named publisher, which is an 
// object that contains the name and location.

bookUtils.setPublisher = function(book, name, location){
    book.publisher = {name,location};
}

console.log(bookUtils.setPublisher(book1,'Stimazky','Ashkelon'));
console.log(bookUtils.setPublisher(book2,'Stimazky','Ashkelon'));
console.log(book1);


// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2 
// books and checks if the publisher name and location are identical in the 2 


bookUtils.isSamePublisher = function(book_a, book_b){
    return book_a.publisher.name === book_b.publisher.name && book_a.publisher.location === book_b.publisher.location  ;
}

console.log(bookUtils.isSamePublisher(book1,book2));

book2.publisher.location = 'Ashdod';
console.log(bookUtils.isSamePublisher(book1,book2));