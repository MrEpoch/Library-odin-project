const addORdisplay = document.querySelector(".btn-add-new");
const previusORreset = document.querySelector(".btn-display-previus");
const nextORsubmit = document.querySelector(".btn-display-next");
const book = document.querySelector(".book");
const remove = document.querySelector(".rm");
let current = 0;
let myLibrary = [];

const objects = {
  pen: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14.1,9L15,9.9L5.9,19H5V18.1L14.1,9M17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L18.9,8.9L20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3M14.1,6.2L3,17.2V21H6.8L17.8,9.9L14.1,6.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z"> </path>
        </svg>`,
  next: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"> </path>
        </svg>`,
  prev: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"> </path>
        </svg>`,
  reset: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z"> </path>
          </svg>`,
}

function write() {
  book.innerHTML = `
  <h4 class="title">title: ${myLibrary[current].title}</h4>
  <h4 class="author">author: ${myLibrary[current].author}</h4>
  <h4 class="pages">pages: ${myLibrary[current].pages}</h4>
  <h4 class="read">read: ${myLibrary[current].read}</h4>
  `;
  return book;
}

function emptyTags() {
  book.innerHTML = `
  <h4 class="title">title: </h4>
  <h4 class="author">author: </h4>
  <h4 class="pages">pages: </h4>
  <h4 class="read">read: </h4>
  `;
  return book;
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
}


addORdisplay.addEventListener("click", () => {
  if (addORdisplay.innerHTML === objects.pen) {
    addORdisplay.textContent = "DISPLAY BOOKS";
    nextORsubmit.textContent = "SUBMIT";
    previusORreset.innerHTML = objects.reset;
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
    addORdisplay.innerHTML = objects.pen;
    nextORsubmit.innerHTML = objects.next;
    previusORreset.innerHTML = objects.prev;
    remove.innerHTML = `<button type="button" class="btn-remove">REMOVE BOOK</button>`;
    if(!myLibrary[current]) {
      emptyTags();
    }
    else
    {
      write();
    }
    const RemoveBook = document.querySelector(".btn-remove");
    RemoveBook.addEventListener("click", () => {
      myLibrary.splice(current, 1);
      if (current !== 0) {
        current -= 1;
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
