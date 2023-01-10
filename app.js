const addORdisplay = document.querySelector(".btn-add-new");
const previusORreset = document.querySelector(".btn-display-previus");
const nextORsubmit = document.querySelector(".btn-display-next");
const book = document.querySelector(".book");
const remove = document.querySelector(".rm");
let current = 0;
let myLibrary = [];

function write() {
  return (book.innerHTML = `
  <h4 class="title">title: ${myLibrary[current].title}</h4>
  <h4 class="author">author: ${myLibrary[current].author}</h4>
  <h4 class="pages">pages: ${myLibrary[current].pages}</h4>
  <h4 class="read">read: ${myLibrary[current].read}</h4>
  `);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function info() {
    return `${title} ${author} ${pages} ${read}`;
  };
}

function addBook(titleAdd, authorAdd, pagesAdd, readAdd) {
  const id = myLibrary.length;
  myLibrary[id] = new Book(titleAdd, authorAdd, pagesAdd, readAdd);
  console.log(myLibrary[id]);
}

addORdisplay.addEventListener("click", () => {
  if (addORdisplay.textContent === "ADD NEW BOOK") {
    addORdisplay.textContent = "DISPLAY BOOKS";
    nextORsubmit.textContent = "SUBMIT";
    previusORreset.textContent = "RESET";
    remove.innerHTML = "";
    book.innerHTML = `
    <div class="title">
      <label for="title">Title: </label>
      <input type="text" class="title-text" placeholder="Harry Potter">
    </div>
    <div class="author">
      <label for="author">Author: </label>
      <input type="text" class="author-text" placeholder="David Johnson">
    </div>
    <div class="pages">
      <label for="pages">Pages: </label>
      <input type="number" class="pages-number">
    </div>
    <div class="read">
      <label for="readed?">Read: </label>
      <input type="text" class="read-text">
    </div>
  `;
  } else {
    addORdisplay.textContent = "ADD NEW BOOK";
    nextORsubmit.textContent = "NEXT BOOK";
    previusORreset.textContent = "PREVIUS BOOK";
    remove.innerHTML = `<button type="button" class="btn-remove">REMOVE BOOK</button>`;
    write();
    const RemoveBook = document.querySelector(".btn-remove");
    RemoveBook.addEventListener("click", () => {
      myLibrary.splice(current, 1);
      if (current !== 0) {
        current -= 1;
      }
      if (myLibrary.length !== 0) {
        write();
      } else {
        book.innerHTML = `
        <h4 class="title">title: </h4>
        <h4 class="author">author: </h4>
        <h4 class="pages">pages: </h4>
        <h4 class="read">read: </h4>
        `;
      }
    });
  }
});

nextORsubmit.addEventListener("click", () => {
  const title = document.querySelector(".title-text");
  const author = document.querySelector(".author-text");
  const pages = document.querySelector(".pages-number");
  const read = document.querySelector(".read-text");
  if (nextORsubmit.textContent === "SUBMIT") {
    addBook(title.value, author.value, pages.value, read.value);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (
    nextORsubmit.textContent === "NEXT BOOK" &&
    myLibrary.length !== 0
  ) {
    const none = 0;
    if (current === myLibrary.length - 1) {
      current = 0;
    } else {
      current += 1;
    }
    write();
  }
});

previusORreset.addEventListener("click", () => {
  const title = document.querySelector(".title-text");
  const author = document.querySelector(".author-text");
  const pages = document.querySelector(".pages-number");
  const read = document.querySelector(".read-text");
  if (previusORreset.textContent === "RESET") {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (
    previusORreset.textContent === "PREVIUS BOOK" &&
    myLibrary.length !== 0
  ) {
    const none = 0;
    if (current === 0) {
      current = myLibrary.length - 1;
    } else {
      current -= 1;
    }
    write();
  }
});
