// Default Book Items
let harryPotter = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
let pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", 345, true);
let theArt = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, false);
let intelligentInvestor = new Book("The Intelligent Investor", "Benjamin Graham", 640, true);

// Book Array Library
const myLibrary = [harryPotter, pridePrejudice, theArt, intelligentInvestor];

// Display Books UI
const mainContainer = document.querySelector('.container');
const mainLibrary = document.querySelector('.main-library');

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
        // Create book item container
        const bookItem = document.createElement('div');
        mainLibrary.appendChild(bookItem);
        bookItem.classList.add('book-item');

        // title
        const bookTitle = document.createElement('div');
        bookItem.appendChild(bookTitle);
        bookTitle.classList.add('book-title');
        bookTitle.textContent = myLibrary[i].title;

        // Author
        const bookAuthor = document.createElement('div');
        bookItem.appendChild(bookAuthor);
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = myLibrary[i].author;

        // Pages
        const bookPages = document.createElement('div');
        bookItem.appendChild(bookPages);
        bookPages.classList.add('book-pages');
        bookPages.textContent = myLibrary[i].pages;

        // Read
        const bookRead = document.createElement('div');
        bookItem.appendChild(bookRead);
        bookRead.classList.add('book-read');

        const readSwitch = document.createElement('label');
        bookRead.appendChild(readSwitch);
        readSwitch.classList.add('Switch');

        const readCheckbox = document.createElement('input');
        bookRead.appendChild(readCheckbox);
        readCheckbox.type = 'checkbox';
        
        const readToggleStyle = document.createElement('span');
        bookRead.appendChild(readToggleStyle);
        readToggleStyle.classList.add('slider');

        console.log(bookItem);
    }
};

addBookToLibrary();