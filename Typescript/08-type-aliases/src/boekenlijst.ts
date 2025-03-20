interface Book {
    title: string;
    author: string;
    publishedYear: number;
    ISBN: string;
}

type BookList = Book[];

function findBookByAuthor(books: BookList, author: string): Book | null {
    return books.find((book) => book.author === author) || null;
}
function filterBooksByYear(books: BookList, year: number): BookList {
    return books.filter((book) => book.publishedYear === year);
}
const books: BookList = [
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedYear: 1951,
        ISBN: "978-0-316-76948-0",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        ISBN: "978-0-06-112008-4",
    },
    {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        ISBN: "978-0-452-28423-4",
    },
];
const bookByAuthor = findBookByAuthor(books, "Harper Lee");
console.log("Book by Harper Lee:", bookByAuthor);

const booksPublishedIn1960 = filterBooksByYear(books, 1960);
console.log("Books published in 1960:", booksPublishedIn1960);