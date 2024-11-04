const library = [
  new Book("Harry Potter", "JK Rowling", 354, true),
  new Book("Tomorrow, tomorrow and tomorrow", "RS James", 347, false)
]

const newBookForm = document.querySelector("dialog");
const bookInfoForm = document.querySelector("form");
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

  let bookReadBtn = document.createElement("button");
  bookReadBtn.innerHTML = book.read ? "Status: Read" : "Status: Unread";

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookReadBtn);
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
  let bookIndex = event.target.parentElement.id.split("-")[1]

  if (event.target.innerHTML === "Delete") {
    library.splice(bookIndex, 1);
    displayBooks(library);
  }
  else if (event.target.innerHTML === "Add book") {
    newBookForm.showModal();
  }
  else if (event.target.innerHTML === "Close"){
    newBookForm.close();
  }
  else if (event.target.innerHTML.startsWith("Status:")){
    library[bookIndex].read = !library[bookIndex].read;
    displayBooks(library);
  }
})

bookInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let newBook = new Book(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value,
    newBookRead.checked
  );

  addBookToLibrary(newBook);
  displayBooks(library);
  bookInfoForm.reset();
  newBookForm.close();
});

displayBooks(library);