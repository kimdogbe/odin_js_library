const library = [
  new Book("Harry Potter", "JK Rowling", 354, true),
  new Book("Tomorrow, tomorrow and tomorrow", "RS James", 347, true)
]

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author} is ${this.pages} long. ${this.read ? "Has been read" : "Not read yet"}`;
  }
}

function addBookToLibrary(){
  return true;
}

function createBookCards(book){
  let bookDiv = document.createElement("div");
  bookDiv.id = "book1";

  let bookInfo = document.createElement("p");
  bookInfo.innerHTML = book.info();

  bookDiv.appendChild(bookInfo);
  console.log(bookDiv);

  document.getElementById("shelf").appendChild(bookDiv);
  
}

function displayBooks(books) {
  for (const book of books){
    createBookCards(book);
  }
}

displayBooks(library)