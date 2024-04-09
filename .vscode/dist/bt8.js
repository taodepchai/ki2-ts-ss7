"use strict";
let book = {
    title: "abcd",
    author: "bgcd",
    price: 12000,
};
function printBook(book) {
    return book;
}
function updateBook(book) {
    book.title = "aaaa";
    book.author = "bbbb";
    book.price = 10000;
}
console.log("truoc khi doi", printBook(book));
updateBook(book);
console.log("sau khi doi", printBook(book));
