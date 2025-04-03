const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id =crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
console.log(Book.info()); // Output: "the book by author, 100 pages, already read"

function addBookToLibrary() {
  const book = new Book('the book', 'author', 100, true);
  myLibrary.push(book);
  console.log(myLibrary);
}