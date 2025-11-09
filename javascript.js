const myLibrary = [];
const library = document.getElementById("library");

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read"
    }`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function display() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    library.appendChild(card);
  }
}
