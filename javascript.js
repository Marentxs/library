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
  library.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    const title = document.createElement("span");
    const author = document.createElement("span");
    const pages = document.createElement("span");

    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);

    library.appendChild(card);
  }
}

addBookToLibrary("The Martian", "Andy Weir", 384, true);
addBookToLibrary("Ficciones", "Jorge Luis Borges", 174, true);
addBookToLibrary("The Illiad", "Homer", 430, false);

display();
