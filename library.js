const templateGridItem = document.getElementsByClassName("grid-item-template");
const addNewBookButton = document.querySelector(".addBook");
const displayBookQuestionary = document.getElementById("new-book-questionary");
const exitDisplayBookQuestionaryButton = document.getElementById("exit-button");
const submitBookButton = document.getElementById("submit-book");
const removeGridElementButton = document.getElementById("remove-btn");
const form = document.querySelector("form")

let bookList = [];


function submitNewBook(ev) {
    ev.preventDefault();
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
    displayBookQuestionary.style.display = "none";
}

function createNewGridElement() {
    // get parent node to append new childs elements
    const parentNode = document.getElementsByClassName("library-display");
    // clone and store in variable html blueprint of grid item
    let cloneNode = templateGridItem.cloneNode(true);
    // clone css for html element 
    cloneNode.style.cssText = templateGridItem.style.cssText;
    cloneNode.className = `grid-item ${book.id}`
    parentNode.appendChild(cloneNode)



}


exitDisplayBookQuestionaryButton.addEventListener("click", () => {
    displayBookQuestionary.style.display = "none";
});

addNewBookButton.addEventListener("click", () => {
    displayBookQuestionary.style.display = "block";
});

submitBookButton.addEventListener("click", submitNewBook);



// removeGridElementButton.addEventListener("click", () => {
//     // to remove parent element first I need to be able to add new grid element with id= n and remove btn with n'th id
//     // js needs to know which remove button I click
//     let parentElement = removeGridElementButton.parentNode;
// })
