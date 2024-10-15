function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author} is ${this.pages} long. ${this.read ? "Has been read" : "Not read yet"}`;
  }
}
