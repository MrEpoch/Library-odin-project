"use strict";

// Made by MrEpoch, Library project, practice of objects
// First i made integer number current to keep track of my library objects
var current = 0; // Then i made myLibrary array, because eslint was screaming at me to make let const then i made myLibrary array const

var myLibrary = []; // I defined object LocationSelectors which has properties which are locations of buttons and book element

var LocationSelectors = {
  addORdisplay: document.querySelector(".btn-add-new"),
  // to write new book or display array of books
  previusORreset: document.querySelector(".btn-display-previus"),
  // to previus shown book or reset what is written in input elements
  nextORsubmit: document.querySelector(".btn-display-next"),
  // to next book or submit what user has written in input elements
  book: document.querySelector(".book"),
  // book element is main element which is in the middle of document
  remove: document.querySelector(".rm") // remove book, it is shown when user is not writting

}; // In "objects" object i have svg icons which are in my buttons

var objects = {
  pen: "<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M14.1,9L15,9.9L5.9,19H5V18.1L14.1,9M17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L18.9,8.9L20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3M14.1,6.2L3,17.2V21H6.8L17.8,9.9L14.1,6.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z\"></path>\n        </svg>",
  next: " <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\"></path>\n          </svg>",
  prev: " <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\"></path>\n          </svg>",
  reset: "<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z\"></path>\n          </svg>",
  display: "<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n              <path fill=\"currentColor\" d=\"M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21\"></path>\n            </svg>",
  submit: LocationSelectors.nextORsubmit.innerHTML,
  remove: "<svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z\"></path>\n          </svg>"
}; // In BuildingBlocks i made some long writting html elements which will change my html code

var BuildingBlocks = function BuildingBlocks() {
  var emptyTags = function emptyTags() {
    LocationSelectors.book.innerHTML = "\n    <h4 class=\"title\">title: </h4>\n    <h4 class=\"author\">author: </h4>\n    <h4 class=\"pages\">pages: </h4>\n    <h4 class=\"read\">read: </h4>\n    ";
    return LocationSelectors.book;
  };

  var fullLibrary = function fullLibrary() {
    LocationSelectors.book.innerHTML = "\n    <h4 class=\"title\">title: ".concat(myLibrary[current].title, "</h4>\n    <h4 class=\"author\">author: ").concat(myLibrary[current].author, "</h4>\n    <h4 class=\"pages\">pages: ").concat(myLibrary[current].pages, "</h4>\n    <h4 class=\"read\">read: ").concat(myLibrary[current].read, "</h4>\n    ");
    return LocationSelectors.book;
  };

  var write = function write() {
    LocationSelectors.book.innerHTML = "\n    <div class=\"title\">\n      <label for=\"title\">Title: </label>\n      <input type=\"text\" class=\"title-text\" placeholder=\"Harry Potter\">\n    </div>\n    <div class=\"author\">\n      <label for=\"author\">Author: </label>\n      <input type=\"text\" class=\"author-text\" placeholder=\"David Johnson\">\n    </div>\n    <div class=\"pages\">\n      <label for=\"pages\">Pages: </label>\n      <input type=\"number\" class=\"pages-number\">\n    </div>\n    <div class=\"read\">\n      <label for=\"readed?\">Read: </label>\n      <input type=\"text\" class=\"read-text\">\n    </div>\n  ";
    return LocationSelectors.book;
  };

  return {
    emptyTags: emptyTags,
    fullLibrary: fullLibrary,
    write: write
  };
}; // Book constructor holds title, author, pages, read and returns it


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function info() {
    return "".concat(title, " ").concat(author, " ").concat(pages, " ").concat(read);
  };
} // addBook uses Book constructor here, i used new keyword, which is generally not advised, but i didn't want to change my code that much


function addBook(titleAdd, authorAdd, pagesAdd, readAdd) {
  var id = myLibrary.length;
  myLibrary[id] = new Book(titleAdd, authorAdd, pagesAdd, readAdd);
} // addOrdisplay button changes what is shown on the screen, if user writes new book or looks at the books


LocationSelectors.addORdisplay.addEventListener("click", function () {
  // if user clicked and is shown objects.pen then it will first if be used, it changes icons and user can write new book
  // when else happens, user can see his books which he written, it adds remove button which splices current array element when clicked
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
    LocationSelectors.remove.innerHTML = "<button type=\"button\" class=\"btn-remove\">".concat(objects.remove, "</button>");

    if (!myLibrary[current]) {
      BuildingBlocks().emptyTags();
    } else {
      BuildingBlocks().fullLibrary();
    }

    var RemoveBook = document.querySelector(".btn-remove");
    RemoveBook.addEventListener("click", function () {
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
}); // next or submit is changing next book or submits new book to the myLibrary array

LocationSelectors.nextORsubmit.addEventListener("click", function () {
  // this changes what next book is shown or submits book, condition is long
  var title = document.querySelector(".title-text");
  var author = document.querySelector(".author-text");
  var pages = document.querySelector(".pages-number");
  var read = document.querySelector(".read-text");

  if (LocationSelectors.nextORsubmit.innerHTML === objects.submit) {
    addBook(title.value, author.value, pages.value, read.value);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (LocationSelectors.nextORsubmit.innerHTML === objects.next && myLibrary.length !== 0 && current === myLibrary.length - 1) {
    current = 0;
    BuildingBlocks().fullLibrary();
  } else if (LocationSelectors.nextORsubmit.innerHTML === objects.next && myLibrary.length !== 0 && current !== myLibrary.length - 1) {
    current += 1;
    BuildingBlocks().fullLibrary();
  }
}); // previus or reset is changing previus book or resets what user written in adding new book

LocationSelectors.previusORreset.addEventListener("click", function () {
  // this resets what user has typed when he is writting new book or changes to the previus seen book, condition again is little longer
  var title = document.querySelector(".title-text");
  var author = document.querySelector(".author-text");
  var pages = document.querySelector(".pages-number");
  var read = document.querySelector(".read-text");

  if (LocationSelectors.previusORreset.innerHTML === objects.reset) {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (LocationSelectors.previusORreset.innerHTML === objects.prev && myLibrary.length !== 0 && current === 0) {
    current = myLibrary.length - 1;
    BuildingBlocks().fullLibrary();
  } else if (LocationSelectors.previusORreset.innerHTML === objects.prev && myLibrary.length !== 0 && current !== 0) {
    current -= 1;
    BuildingBlocks().fullLibrary();
  }
});