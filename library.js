const addNewBookButton = document.querySelector(".addBook");
const displayBookQuestionary = document.getElementById("new-book-questionary");
const exitDisplayBookQuestionaryButton = document.getElementById("exit-button");
const submitBookButton = document.getElementById("submit-book");
const form = document.querySelector("form")
let bookList = [];


function submitNewBook(ev) {
    ev.preventDefault();
    const isReadValue = document.querySelector('input[name="isread"]:checked').value;
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        publishDate: document.getElementById("publish-date").value,
        isRead: isReadValue
    };
    bookList.push(book);
    document.querySelector("#new-book-questionary").reset();
    console.log(bookList);
    displayBookQuestionary.style.display = "none";
}


exitDisplayBookQuestionaryButton.addEventListener("click", () => {
    displayBookQuestionary.style.display = "none";
});

addNewBookButton.addEventListener("click", () => {
    displayBookQuestionary.style.display = "block";
});

submitBookButton.addEventListener("click", submitNewBook);

