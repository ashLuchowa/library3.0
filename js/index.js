// Default Book Items
let harryPotter = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true)
let pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", 345, true)

// Book Array Library
const myLibrary = [harryPotter, pridePrejudice];

// Display Books UI

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Push each books to the library
function addBookToLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
};

addBookToLibrary();