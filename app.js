const LocationSelectors = {
  addORdisplay: document.querySelector(".btn-add-new"),
  previusORreset: document.querySelector(".btn-display-previus"),
  nextORsubmit: document.querySelector(".btn-display-next"),
  book: document.querySelector(".book"),
  remove: document.querySelector(".rm"),
};
let current = 0;
const myLibrary = [];
const objects = {
  pen: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14.1,9L15,9.9L5.9,19H5V18.1L14.1,9M17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L18.9,8.9L20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3M14.1,6.2L3,17.2V21H6.8L17.8,9.9L14.1,6.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z"></path>
        </svg>`,
  next: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
        </svg>`,
  prev: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
        </svg>`,
  reset: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z"></path>
          </svg>`,
  display: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21"></path>
          </svg>`,
  submit: LocationSelectors.nextORsubmit.innerHTML,
};

const BuildingBlocks = () => {
  const emptyTags = () => {
    LocationSelectors.book.innerHTML = `
    <h4 class="title">title: </h4>
    <h4 class="author">author: </h4>
    <h4 class="pages">pages: </h4>
    <h4 class="read">read: </h4>
    `;
    return LocationSelectors.book;
  };
  const fullLibrary = () => {
    LocationSelectors.book.innerHTML = `
    <h4 class="title">title: ${myLibrary[current].title}</h4>
    <h4 class="author">author: ${myLibrary[current].author}</h4>
    <h4 class="pages">pages: ${myLibrary[current].pages}</h4>
    <h4 class="read">read: ${myLibrary[current].read}</h4>
    `;
    return LocationSelectors.book;
  };
  const write = () => {
    LocationSelectors.book.innerHTML = `
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
    return LocationSelectors.book;
  };
  return { emptyTags, fullLibrary, write };
};

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

LocationSelectors.addORdisplay.addEventListener("click", () => {
  if (LocationSelectors.addORdisplay.innerHTML === objects.pen) {
    LocationSelectors.addORdisplay.innerHTML = objects.display;
    LocationSelectors.nextORsubmit.innerHTML = objects.submit;
    LocationSelectors.previusORreset.innerHTML = objects.reset;
    LocationSelectors.remove.innerHTML = "";
    BuildingBlocks().write();
  } else {
    LocationSelectors.addORdisplay.innerHTML = objects.pen;
    LocationSelectors.nextORsubmit.innerHTML = objects.next;
    LocationSelectors.previusORreset.innerHTML = objects.prev;
    LocationSelectors.remove.innerHTML = `<button type="button" class="btn-remove">REMOVE BOOK</button>`;
    if (!myLibrary[current]) {
      BuildingBlocks().emptyTags();
    } else {
      BuildingBlocks().fullLibrary();
    }
    const RemoveBook = document.querySelector(".btn-remove");
    RemoveBook.addEventListener("click", () => {
      myLibrary.splice(current, 1);
      if (current !== 0) {
        current -= 1;
      }
      if (!myLibrary[current]) {
        BuildingBlocks().emptyTags();
      } else {
        BuildingBlocks().fullLibrary();
      }
    });
  }
});

LocationSelectors.nextORsubmit.addEventListener("click", () => {
  const title = document.querySelector(".title-text");
  const author = document.querySelector(".author-text");
  const pages = document.querySelector(".pages-number");
  const read = document.querySelector(".read-text");
  if (LocationSelectors.nextORsubmit.innerHTML === objects.submit) {
    addBook(title.value, author.value, pages.value, read.value);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (
    LocationSelectors.nextORsubmit.innerHTML === objects.next &&
    myLibrary.length !== 0
  ) {
    const none = 0;
    if (current === myLibrary.length - 1) {
      current = 0;
    } else {
      current += 1;
    }
    BuildingBlocks().fullLibrary();
  }
});

LocationSelectors.previusORreset.addEventListener("click", () => {
  const title = document.querySelector(".title-text");
  const author = document.querySelector(".author-text");
  const pages = document.querySelector(".pages-number");
  const read = document.querySelector(".read-text");
  if (LocationSelectors.previusORreset.innerHTML === objects.reset) {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (
    LocationSelectors.previusORreset.innerHTML === objects.prev &&
    myLibrary.length !== 0
  ) {
    const none = 0;
    if (current === 0) {
      current = myLibrary.length - 1;
    } else {
      current -= 1;
    }
    BuildingBlocks().fullLibrary();
  }
});
