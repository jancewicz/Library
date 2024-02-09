const templateGridItem = document.getElementById("template-grid");
const addNewBookButton = document.querySelector(".addBook");
const displayBookQuestionary = document.getElementById("new-book-questionary");
const exitDisplayBookQuestionaryButton = document.getElementById("exit-button");
const submitBookButton = document.getElementById("submit-book");
const form = document.querySelector("form")

let bookList = [];
let booksTotal = 0;
let booksRead = 0;
let booksToRead = 0;


function submitNewBook() {
    const isReadValue = document.querySelector('input[name="isread"]:checked').value;
    let book = {
        id: 0,
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        publishDate: document.getElementById("publish-date").value,
        isRead: isReadValue
    };
    bookList.push(book);
    bookList.forEach((book, index) => {
        book.id = index + 1;
    });
    document.querySelector("#new-book-questionary").reset();
    console.log(bookList);

    const parentNode = document.getElementById("main-dispaly");
    let cloneNode = templateGridItem.cloneNode(true);
    cloneNode.style.cssText = templateGridItem.style.cssText;
    cloneNode.className = `grid-item from js code`;
    cloneNode.id = `cloned ${book.id}`;

    cloneNode.innerHTML = `<p>Title: ${book.title} </p> 
    <p>Author: ${book.author} </p> 
    <p>Genre: ${book.genre} </p> 
    <p>Publishing date: ${book.publishDate} </p> 
    <p>Read: ${book.isRead}</p> 
    <button type="button" class="remove-btn">REMOVE</button>`
    parentNode.appendChild(cloneNode);
    displayBookQuestionary.style.display = "none";
}


exitDisplayBookQuestionaryButton.addEventListener("click", () => {
    displayBookQuestionary.style.display = "none";
});

addNewBookButton.addEventListener("click", () => {
    displayBookQuestionary.style.display = "block";
});

submitBookButton.addEventListener("click", function (event) {
    event.preventDefault();
    submitNewBook();
});




