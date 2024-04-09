interface Book {
    title: string;
    author: string;
    price: number;
}

let book: Book = {
    title: "abcd",
    author: "bgcd",
    price: 12000,
}

function printBook(book: Book): Book {
    return book;
}

function updateBook(book: Book): void {
    book.title = "aaaa";
    book.author = "bbbb";
    book.price = 10000;
}
console.log("truoc khi doi",printBook(book));

updateBook(book);

console.log("sau khi doi",printBook(book));

