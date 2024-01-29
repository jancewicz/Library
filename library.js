const addNewBookButton = document.querySelector(".addBook");
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

function addBook() {
    addNewBookButton.addEventListener("click", () => {
        // get info from questionary div title/author etc and create new object with 
        // provided info
    });
}
