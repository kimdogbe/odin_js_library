const library = [
  new Book("Harry Potter", "JK Rowling", 354, true),
  new Book("Tomorrow, tomorrow and tomorrow", "RS James", 347, true)
]

const newBookForm = document.querySelector("dialog");
const addBookBtn = document.querySelector("dialog + button");
const closeModal = document.querySelector("dialog button");
const submitBook = document.querySelector("dialog #book-submit");
const shelf = document.querySelector("#shelf");

const newBookTitle = document.querySelector("#book-name");
const newBookAuthor = document.querySelector("#book-author");
const newBookPages = document.querySelector("#book-page-count");
const newBookRead = document.querySelector("#book-complete");

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author} is ${this.pages} long. ${this.read ? "Has been read" : "Not read yet"}`;
  }
}

function addBookToLibrary(newBook){
  library.push(newBook);
}

function createBookCards(book, index){
  let bookDiv = document.createElement("div");
  bookDiv.id = `book-${index}`;

  let bookInfo = document.createElement("p");
  bookInfo.innerHTML = book.info();

  let bookDeleteBtn = document.createElement("button");
  bookDeleteBtn.innerHTML = 'Delete'

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookDeleteBtn);
  console.log(bookDiv);

  shelf.appendChild(bookDiv);
}

function displayBooks(books) {
  shelf.innerHTML = "";
  for (const [index, book] of books.entries()){
    createBookCards(book, index);
  }
}

addEventListener("click", (event) => {
  if (event.target.innerHTML === "Delete") {
    let bookIndex = event.target.parentElement.id.split("-")[1]
    library.splice(bookIndex, 1);
    displayBooks(library);
  }
})

addBookBtn.addEventListener("click", () => {
  newBookForm.showModal();
});

closeModal.addEventListener("click", () => {
  newBookForm.close();
});

submitBook.addEventListener("click", (event) => {
  event.preventDefault();
  
  let newBook = new Book(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value,
    newBookRead.checked
  );

  addBookToLibrary(newBook);
  displayBooks(library);
  newBookForm.close();
});

displayBooks(library);