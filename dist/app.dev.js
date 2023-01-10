"use strict";

var addORdisplay = document.querySelector(".btn-add-new");
var previusORreset = document.querySelector(".btn-display-previus");
var nextORsubmit = document.querySelector(".btn-display-next");
var book = document.querySelector(".book");
var remove = document.querySelector(".rm");
var current = 0;
var myLibrary = [];

function write() {
  return book.innerHTML = "\n  <h4 class=\"title\">title: ".concat(myLibrary[current].title, "</h4>\n  <h4 class=\"author\">author: ").concat(myLibrary[current].author, "</h4>\n  <h4 class=\"pages\">pages: ").concat(myLibrary[current].pages, "</h4>\n  <h4 class=\"read\">read: ").concat(myLibrary[current].read, "</h4>\n  ");
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function info() {
    return "".concat(title, " ").concat(author, " ").concat(pages, " ").concat(read);
  };
}

function addBook(titleAdd, authorAdd, pagesAdd, readAdd) {
  var id = myLibrary.length;
  myLibrary[id] = new Book(titleAdd, authorAdd, pagesAdd, readAdd);
  console.log(myLibrary[id]);
}

addORdisplay.addEventListener("click", function () {
  if (addORdisplay.textContent === "ADD NEW BOOK") {
    addORdisplay.textContent = "DISPLAY BOOKS";
    nextORsubmit.textContent = "SUBMIT";
    previusORreset.textContent = "RESET";
    remove.innerHTML = "";
    book.innerHTML = "\n    <div class=\"title\">\n      <label for=\"title\">Title: </label>\n      <input type=\"text\" class=\"title-text\" placeholder=\"Harry Potter\">\n    </div>\n    <div class=\"author\">\n      <label for=\"author\">Author: </label>\n      <input type=\"text\" class=\"author-text\" placeholder=\"David Johnson\">\n    </div>\n    <div class=\"pages\">\n      <label for=\"pages\">Pages: </label>\n      <input type=\"number\" class=\"pages-number\">\n    </div>\n    <div class=\"read\">\n      <label for=\"readed?\">Read: </label>\n      <input type=\"text\" class=\"read-text\">\n    </div>\n  ";
  } else {
    addORdisplay.textContent = "ADD NEW BOOK";
    nextORsubmit.textContent = "NEXT BOOK";
    previusORreset.textContent = "PREVIUS BOOK";
    remove.innerHTML = "<button type=\"button\" class=\"btn-remove\">REMOVE BOOK</button>";
    write();
    var RemoveBook = document.querySelector(".btn-remove");
    RemoveBook.addEventListener("click", function () {
      myLibrary.splice(current, 1);

      if (current !== 0) {
        current -= 1;
      }

      if (myLibrary.length !== 0) {
        write();
      } else {
        book.innerHTML = "\n        <h4 class=\"title\">title: </h4>\n        <h4 class=\"author\">author: </h4>\n        <h4 class=\"pages\">pages: </h4>\n        <h4 class=\"read\">read: </h4>\n        ";
      }
    });
  }
});
nextORsubmit.addEventListener("click", function () {
  var title = document.querySelector(".title-text");
  var author = document.querySelector(".author-text");
  var pages = document.querySelector(".pages-number");
  var read = document.querySelector(".read-text");

  if (nextORsubmit.textContent === "SUBMIT") {
    addBook(title.value, author.value, pages.value, read.value);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (nextORsubmit.textContent === "NEXT BOOK" && myLibrary.length !== 0) {
    var none = 0;

    if (current === myLibrary.length - 1) {
      current = 0;
    } else {
      current += 1;
    }

    write();
  }
});
previusORreset.addEventListener("click", function () {
  var title = document.querySelector(".title-text");
  var author = document.querySelector(".author-text");
  var pages = document.querySelector(".pages-number");
  var read = document.querySelector(".read-text");

  if (previusORreset.textContent === "RESET") {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
  } else if (previusORreset.textContent === "PREVIUS BOOK" && myLibrary.length !== 0) {
    var none = 0;

    if (current === 0) {
      current = myLibrary.length - 1;
    } else {
      current -= 1;
    }

    write();
  }
});