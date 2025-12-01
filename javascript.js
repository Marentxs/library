const library = document.getElementById("library");
const newBook = document.getElementById("new");

const open = document.getElementById("open");
const popup = document.getElementById("popup");
const close = document.getElementById("close");
const form = document.getElementById("bookForm");

open.addEventListener("click", () => {
  popup.classList.add("open");

  form.reset();
});

close.addEventListener("click", (event) => {
  popup.classList.remove("open");
  event.preventDefault();
});

class Book {
  constructor(title, author, pages, read) {
    if (!new.target) {
      throw Error("You must use the 'new operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read"
    }`;
  }
}

class Library {
  #myLibrary = [];

  addBook(title, author, pages, read) {
    this.#myLibrary.push(book);
  }
}

function display() {
  library.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const title = document.createElement("span");
    const author = document.createElement("span");
    const pages = document.createElement("span");

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const status = document.createElement("button");
    const remove = document.createElement("button");
    remove.id = "close";

    title.textContent = "'" + myLibrary[i].title + "'";
    title.id = "title";
    remove.textContent = "X";

    author.textContent = "by " + myLibrary[i].author;
    pages.textContent = myLibrary[i].pages + " pages";
    status.textContent = myLibrary[i].read ? "Read" : "Not read";
    status.classList.toggle("green", myLibrary[i].read);

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
    card.appendChild(buttons);

    buttons.appendChild(status);
    buttons.appendChild(remove);

    library.appendChild(card);
  }
}

addBookToLibrary("The Martian", "Andy Weir", 384, true);
addBookToLibrary("Ficciones", "Jorge Luis Borges", 174, false);
addBookToLibrary("The Illiad", "Homer", 430, true);

display();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  display();

  popup.classList.remove("open");
});
