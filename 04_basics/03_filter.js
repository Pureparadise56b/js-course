const arr = [10, 20, 30, 40, 50];

// filter
const result = arr.filter((number) => number > 30); // implicitly return

const result2 = arr.filter((number) => {
  return number > 20; // explicitly return while using curly braces
});
// console.log(result2);

const books = [
  {
    bookname: "The Catcher in the Rye",
    genre: "Fiction",
    edition_year: 1951,
    author_name: "J.D. Salinger",
  },
  {
    bookname: "To Kill a Mockingbird",
    genre: "Classics",
    edition_year: 1960,
    author_name: "Harper Lee",
  },
  {
    bookname: "1984",
    genre: "Dystopian",
    edition_year: 1949,
    author_name: "George Orwell",
  },
  {
    bookname: "The Great Gatsby",
    genre: "Classics",
    edition_year: 1925,
    author_name: "F. Scott Fitzgerald",
  },
  {
    bookname: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    edition_year: 1997,
    author_name: "J.K. Rowling",
  },
];

const booksByGenre = books.filter((book) => book.genre === "Classics");
const booksByyear = books.filter((book) => book.edition_year > 1950);
const booksByBoth = books.filter(
  (book) => book.genre === "Classics" && book.edition_year > 1950
);
console.log("Category - Classics: ", booksByGenre);
console.log("Edition after 1950: ", booksByyear);
console.log("Both: ", booksByBoth);
