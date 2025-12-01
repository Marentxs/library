const library = document.getElementById("library");

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

  addBook(book) {
    this.#myLibrary.push(book);
  }

  display() {
    library.innerHTML = "";

    for (let i = 0; i < this.#myLibrary.length; i++) {
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

      title.textContent = "'" + this.#myLibrary[i].title + "'";
      title.id = "title";
      remove.textContent = "X";

      author.textContent = "by " + this.#myLibrary[i].author;
      pages.textContent = this.#myLibrary[i].pages + " pages";
      status.textContent = this.#myLibrary[i].read ? "Read" : "Not read";
      status.classList.toggle("green", this.#myLibrary[i].read);

      status.addEventListener("click", () => {
        this.#myLibrary[i].read = !this.#myLibrary[i].read;
        this.display();
      });

      remove.addEventListener("click", () => {
        this.#myLibrary.splice(i, 1);
        this.display();
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
}

class Controller {
  constructor(library) {
    this.library = library;
    this.open = document.getElementById("open");
    this.popup = document.getElementById("popup");
    this.close = document.getElementById("close");
    this.form = document.getElementById("bookForm");

    this.open.addEventListener("click", () => {
      this.popup.classList.add("open");
      this.form.reset();
    });

    this.close.addEventListener("click", (event) => {
      this.popup.classList.remove("open");
      event.preventDefault();
    });

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const pages = document.getElementById("pages").value;
      const read = document.getElementById("read").checked;

      this.library.addBook(new Book(title, author, pages, read));
      this.library.display();

      this.popup.classList.remove("open");
    });
  }
}

const testLib = new Library();
const controller = new Controller(testLib);

testLib.addBook(new Book("The Martian", "Andy Weir", 384, true));
testLib.addBook(new Book("Ficciones", "Jorge Luis Borges", 174, false));
testLib.addBook(new Book("The Illiad", "Homer", 430, true));

testLib.display();
