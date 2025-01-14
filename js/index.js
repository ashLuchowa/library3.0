// Default Book Items
const harryPotter = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
const pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", 345, true);
const theArt = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, false);
const intelligentInvestor = new Book("The Intelligent Investor", "Benjamin Graham", 640, true);

// Book Array Library
let myLibrary = [harryPotter, pridePrejudice, theArt, intelligentInvestor];

// Display Books UI
const mainContainer = document.querySelector('.container');
const mainLibrary = document.querySelector('.main-library');
let formContainer = document.createElement('form');

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Display each books to the library
function renderBook() {
    mainLibrary.innerHTML = '';
    mainContainer.appendChild(mainLibrary);

    // Loop through each books in library array
    for (let i = 0; i < myLibrary.length; i++) {
        // Create book item container
        const bookItem = document.createElement('div');
        mainLibrary.appendChild(bookItem);
        bookItem.classList.add('book-item');
        bookItem.setAttribute('key', myLibrary[i]);

        // Generate book details
        function renderBookInfo(element) {
            const bookDetail = document.createElement('div');
            bookItem.appendChild(bookDetail);
            bookDetail.classList.add(`book-${element}`);

            // Generate Text UI
            const bookReadText = document.createElement('p');
            bookDetail.appendChild(bookReadText);
            bookReadText.textContent = 'Read';

            if (element === 'title') {
                bookDetail.textContent = `${myLibrary[i].title}`;
            } else if (element === 'author') {
                bookDetail.textContent = `By ${myLibrary[i].author}`;
            } else if (element === 'pages') {
                bookDetail.textContent = `Pages: ${myLibrary[i].pages}`;
            } else if (element === 'read') {
                const bookRead = document.createElement('label');
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
        renderBookInfo('title');
        renderBookInfo('author');
        renderBookInfo('pages');
        renderBookInfo('read');

        // Display Delete Button
        deleteBtn(bookItem, i);
    };
};

// Render +Book UI
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

// +Book Event Listener
function pressAddBtn() {
    formContainer.classList.toggle('form-active');
};

// Render Book Form UI
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
        const inputContainer = document.createElement('input');
        inputContainer.type = `${inputType}`;
        inputContainer.setAttribute('id', `${value}`);
        mainForm.appendChild(inputContainer);
        inputContainer.setAttribute('name', `${value}`);
        
    }

    formContent('title', 'text');
    formContent('author', 'text');
    formContent('pages', 'number');
    formContent('read', 'checkbox');

    // Submit Button UI
    function submitBtnUI() {
        const submitBtnContainer = document.createElement('input');
        formContainer.appendChild(submitBtnContainer);
        submitBtnContainer.type = 'submit';
        submitBtnContainer.value = 'submit';

        //Submit the Form
        submitBtnContainer.addEventListener('click', (e)=> {
            e.preventDefault();
            submitForm();
            resetForm();
        });
    }
    submitBtnUI();
};

// Reset and Hide Form
function resetForm() {
    const inputTitleContainer = document.querySelector('.form-title input');
    const inputAuthorContainer = document.querySelector('.form-author input');
    const inputPagesContainer = document.querySelector('.form-pages input');
    const inputReadContainer = document.querySelector('.form-read input');

    inputTitleContainer.value = '';
    inputAuthorContainer.value = '';
    inputPagesContainer.value = '';
    inputReadContainer.checked = false;

    formContainer.classList.toggle('form-active');
}

// Submit the form
function submitForm() {
    let newBook = new Book(this.title.value, this.author.value, this.pages.value, this.read.checked);
    myLibrary.push(newBook);
    renderBook();
    console.log(myLibrary);
};

// Delete Btn UI
function deleteBtn(result, index) {
    const delBtnContainer = document.createElement('div');
    result.appendChild(delBtnContainer);
    delBtnContainer.classList.add('del-book');
    delBtnContainer.textContent = 'X';

    // Set individual data attributes to each delete button
    delBtnContainer.setAttribute('data-index', index);

    // Delete Book Event Listener
    delBtnContainer.addEventListener('click', deleteBook);
}

// Delete Book Event
function deleteBook(e) {
    const index = e.target.getAttribute('data-index');
    const delResult = confirm(`Delete book?`);

    if(delResult === true) {
        myLibrary.splice(index, 1);
        renderBook();
    } else {
        alert('Nope!');
    }
}

addBtn();
createForm();
renderBook();