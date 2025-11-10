const myLibrary = [];
const library = document.getElementById("library");
const newBook = document.getElementById("new");

const open = document.getElementById("open");
const popup = document.getElementById("popup");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  popup.classList.add("open");
});

close.addEventListener("click", () => {
  popup.classList.remove("open");
});

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
    card.setAttribute("class", "card");

    const title = document.createElement("span");
    const author = document.createElement("span");
    const pages = document.createElement("span");
    const status = document.createElement("button");
    const remove = document.createElement("button");

    title.textContent = "'" + myLibrary[i].title + "'";
    remove.textContent = "X";
    author.textContent = "by " + myLibrary[i].author;
    pages.textContent = myLibrary[i].pages + " pages";
    status.textContent = myLibrary[i].read ? "read" : "not read";

    status.addEventListener("click", () => {
      myLibrary[i].read = !myLibrary[i].read;
      display();
    });

    remove.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      display();
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(remove);

    library.appendChild(card);
  }
}

addBookToLibrary("The Martian", "Andy Weir", 384, true);
addBookToLibrary("Ficciones", "Jorge Luis Borges", 174, true);
addBookToLibrary("The Illiad", "Homer", 430, false);

display();
