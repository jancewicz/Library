const addNewBookButton = document.querySelector(".addBook");
const displayBookQuestionary = document.getElementById("new-book-questionary");
const exitDisplayBookQuestionaryButton = document.getElementById("exit-button");
const submitBookButton = document.getElementById("submit-book");
let bookList = [];



function Book(title, author, genre, publishDate, isRead) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publishDate = publishDate;
    this.isRead = isRead;
}


Book.prototype.storeBooksList = function () {
    // whenever new book object is created, append it to bookList array
}

function exitDisplayBookQuestionary() {
    exitDisplayBookQuestionaryButton.addEventListener("click", () => {
        displayBookQuestionary.style.display = "none";
    });
}

function addBook() {
    addNewBookButton.addEventListener("click", () => {
        displayBookQuestionary.style.display = "block";
    });
}


function submitBookToLibrary() {
    submitBookButton.addEventListener("click"() => {
        // data from inputs is converted to create a new object Book

    })
}

addBook();
exitDisplayBookQuestionary();
