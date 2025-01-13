// Default Book Items
const harryPotter = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
const pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", 345, true);
const theArt = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, false);
const intelligentInvestor = new Book("The Intelligent Investor", "Benjamin Graham", 640, true);

// Book Array Library
let myLibrary = [harryPotter, pridePrejudice, theArt, intelligentInvestor];

// Display Books UI
const mainContainer = document.querySelector('.container');
let formContainer = document.createElement('form');

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Display each books to the library
function addBookToLibrary() {
    const mainLibrary = document.querySelector('.main-library');
    mainContainer.appendChild(mainLibrary);

    // Loop through each books in library array
    for (let i = 0; i < myLibrary.length; i++) {
        // Create book item container
        const bookItem = document.createElement('div');
        mainLibrary.appendChild(bookItem);
        bookItem.classList.add('book-item');

        // Generate book details
        function generateBookInfo(element) {
            const bookDetail = document.createElement('div');
            bookItem.appendChild(bookDetail);
            bookDetail.classList.add(`book-${element}`);

            if (element === 'title') {
                bookDetail.textContent = myLibrary[i].title;
            } else if (element === 'author') {
                bookDetail.textContent = myLibrary[i].author;
            } else if (element === 'pages') {
                bookDetail.textContent = myLibrary[i].pages;
            } else if (element === 'read') {
                const bookRead = document.createElement('div');
                bookItem.appendChild(bookRead);
                bookRead.classList.add('book-read');

                const readSwitch = document.createElement('label');
                bookRead.appendChild(readSwitch);
                readSwitch.classList.add('Switch');

                const readCheckbox = document.createElement('input');
                bookRead.appendChild(readCheckbox);
                readCheckbox.type = 'checkbox';
                if (myLibrary[i].read === true) {
                    readCheckbox.checked = true;
                }

                const readToggleStyle = document.createElement('span');
                bookRead.appendChild(readToggleStyle);
                readToggleStyle.classList.add('slider');
            };
        };
        generateBookInfo('title');
        generateBookInfo('author');
        generateBookInfo('pages');
        generateBookInfo('read');

        console.log(bookItem);
    };
};

function addBtn() {
    // btn container
    const bookBtn = document.createElement('div');
    bookBtn.classList.add('add-btn');
    mainContainer.appendChild(bookBtn);

    // add button
    const addBtn = document.createElement('button');
    bookBtn.appendChild(addBtn);

    //Add text
    addBtn.textContent = 'Add Book';

    // Add Event Listener
    addBtn.addEventListener('click', pressAddBtn);
};

// Add Button Event Listener
function pressAddBtn() {
    formContainer.classList.toggle('form-active');
};

// Create Form UI
function createForm() {
    // Main Form div Container
    const addBookForm = document.createElement('div');
    addBookForm.classList.add('addBookForm');
    mainContainer.appendChild(addBookForm);
    addBookForm.appendChild(formContainer);

    // Form Content
    function formContent(value, inputType) {
        // Individual divs
        const mainForm = document.createElement('div');
        mainForm.classList.add(`form-${value}`)
        addBookForm.appendChild(mainForm);
        formContainer.appendChild(mainForm);

        // label
        const labelContainer = document.createElement('label');
        labelContainer.setAttribute('for', `${value}`);
        mainForm.appendChild(labelContainer);
        labelContainer.textContent = `${value}: `;

        // Input
        const titleContainer = document.createElement('input');
        titleContainer.type = `${inputType}`;
        titleContainer.setAttribute('id', `${value}`);
        mainForm.appendChild(titleContainer);
        titleContainer.setAttribute('name', `${value}`);
    }

    formContent('title', 'text');
    formContent('author', 'text');
    formContent('pages', 'number');
    formContent('read', 'checkbox');

    // Submit Button UI
    function submitBtn() {
        const submitBtnContainer = document.createElement('input');
        formContainer.appendChild(submitBtnContainer);
        submitBtnContainer.type = 'submit';
        submitBtnContainer.value = 'submit';

        // Submit the form
        submitBtnContainer.addEventListener('click', (e)=> {
            e.preventDefault();
            const newBook = new Book(this.title.value, this.author.value, this.pages.value, this.read.checked);
            myLibrary.push(newBook);
            addBookToLibrary();
            console.log(myLibrary);
        });
    }
    submitBtn();
};

addBtn();
createForm();
addBookToLibrary();