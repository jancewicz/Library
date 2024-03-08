const templateGridItem = document.getElementById("template-grid");
const mainDisplay = document.getElementById("main-dispaly");
const addNewBookButton = document.querySelector(".addBook");
const displayBookQuestionary = document.getElementById("new-book-questionary");
const exitDisplayBookQuestionaryButton = document.getElementById("exit-button");
const submitBookButton = document.getElementById("submit-book");
const form = document.querySelector("form")
const totalBooksCounter = document.getElementById("total");
const booksAlreadyReadCounter = document.getElementById("read");
const booksToReadCounter = document.getElementById("toRead");

let bookList = [];
let booksTotal = 0;
let booksRead = 0;
let booksToRead = 0;

// set dafault values for counters on page
const cssCounterStyle = 'margin: 5px; font-family: "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif; font-weight: 300; margin-left: 10px;'
totalBooksCounter.innerHTML = `<p id="total" style="${cssCounterStyle}">Books total: ${booksTotal}</p>`;
booksAlreadyReadCounter.innerHTML = `<p id="read" style="${cssCounterStyle}">Books read: ${booksRead}</p>`;
booksToReadCounter.innerHTML = `<p id="toRead" style="${cssCounterStyle}">Books to read: ${booksToRead}</p>`;


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


    let cloneNode = templateGridItem.cloneNode(true);
    cloneNode.style.cssText = templateGridItem.style.cssText;
    cloneNode.className = `grid-item from js code`;
    cloneNode.id = `${book.id}`;

    cloneNode.innerHTML = `<p><strong>Title:</strong> ${book.title} </p> 
    <p><strong>Author:</strong> ${book.author} </p> 
    <p><strong>Genre:</strong> ${book.genre} </p> 
    <p><strong>Publishing date:</strong> ${book.publishDate} </p> 
    <p><strong>Read:</strong> ${book.isRead}</p> 
    <button type="button" class="remove-btn" id=${book.id}>REMOVE</button>`
    mainDisplay.appendChild(cloneNode);

    totalBooksCounter.innerHTML = `<p id="total" style="${cssCounterStyle}">Books total: ${booksTotal += 1}</p>`;
    if (book.isRead === "yes") {
        booksAlreadyReadCounter.innerHTML = `<p id="read" style="${cssCounterStyle}">Books read: ${booksRead += 1}</p>`;
    } else if (book.isRead === "no") {
        booksToReadCounter.innerHTML = `<p id="toRead" style="${cssCounterStyle}">Books to read: ${booksToRead += 1}</p>`;
    }
    displayBookQuestionary.style.display = "none";
}

mainDisplay.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("remove-btn")) {
        const buttonId = ev.target.id;
        const gridElementToRemove = document.getElementById(buttonId);
        const gridElementToRemoveAsNum = parseInt(buttonId, 10);

        if (gridElementToRemove) {
            const filteredBookList = bookList.filter((book) => {
                return !(book.id === gridElementToRemoveAsNum);
            });

            const deletedElement = bookList.find((book) => {
                return (book.id === gridElementToRemoveAsNum)
            });

            if (deletedElement.isRead === "yes") {
                booksAlreadyReadCounter.innerHTML = `<p id="read" style="${cssCounterStyle}">Books read: ${booksRead -= 1}</p>`;

            } else if (deletedElement.isRead === "no") {
                booksToReadCounter.innerHTML = `<p id="toRead" style="${cssCounterStyle}">Books to read: ${booksToRead -= 1}</p>`;
            }

            totalBooksCounter.innerHTML = `<p id="total" style="${cssCounterStyle}">Books total: ${booksTotal -= 1}</p>`;
            gridElementToRemove.remove();
            bookList = filteredBookList;
        }
    }
});


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

