// const data = [
//   {
//     id: 1,
//     title: "The Lord of the Rings",
//     publicationDate: "1954-07-29",
//     author: "J. R. R. Tolkien",
//     genres: [
//       "fantasy",
//       "high-fantasy",
//       "adventure",
//       "fiction",
//       "novels",
//       "literature",
//     ],
//     hasMovieAdaptation: true,
//     pages: 1216,
//     translations: {
//       spanish: "El señor de los anillos",
//       chinese: "魔戒",
//       french: "Le Seigneur des anneaux",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.52,
//         ratingsCount: 630994,
//         reviewsCount: 13417,
//       },
//       librarything: {
//         rating: 4.53,
//         ratingsCount: 47166,
//         reviewsCount: 452,
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "The Cyberiad",
//     publicationDate: "1965-01-01",
//     author: "Stanislaw Lem",
//     genres: [
//       "science fiction",
//       "humor",
//       "speculative fiction",
//       "short stories",
//       "fantasy",
//     ],
//     hasMovieAdaptation: false,
//     pages: 295,
//     translations: {},
//     reviews: {
//       goodreads: {
//         rating: 4.16,
//         ratingsCount: 11663,
//         reviewsCount: 812,
//       },
//       librarything: {
//         rating: 4.13,
//         ratingsCount: 2434,
//         reviewsCount: 0,
//       },
//     },
//   },
//   {
//     id: 3,
//     title: "Dune",
//     publicationDate: "1965-01-01",
//     author: "Frank Herbert",
//     genres: ["science fiction", "novel", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 658,
//     translations: {
//       spanish: "",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.25,
//         ratingsCount: 1142893,
//         reviewsCount: 49701,
//       },
//     },
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Philosopher's Stone",
//     publicationDate: "1997-06-26",
//     author: "J. K. Rowling",
//     genres: ["fantasy", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 223,
//     translations: {
//       spanish: "Harry Potter y la piedra filosofal",
//       korean: "해리 포터와 마법사의 돌",
//       bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//       portuguese: "Harry Potter e a Pedra Filosofal",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.47,
//         ratingsCount: 8910059,
//         reviewsCount: 140625,
//       },
//       librarything: {
//         rating: 4.29,
//         ratingsCount: 120941,
//         reviewsCount: 1960,
//       },
//     },
//   },
//   {
//     id: 5,
//     title: "A Game of Thrones",
//     publicationDate: "1996-08-01",
//     author: "George R. R. Martin",
//     genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//     hasMovieAdaptation: true,
//     pages: 835,
//     translations: {
//       korean: "왕좌의 게임",
//       polish: "Gra o tron",
//       portuguese: "A Guerra dos Tronos",
//       spanish: "Juego de tronos",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 2295233,
//         reviewsCount: 59058,
//       },
//       librarything: {
//         rating: 4.36,
//         ratingsCount: 38358,
//         reviewsCount: 1095,
//       },
//     },
//   },
// ];

// function getBooks() {
//   return data;
// }

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// const book = getBook(3);

// const {title, author,pages,publicationDate,genres,hasMovieAdaptation} =book;

// const [primaryGenre,secondaryGenre,...otherGenres] = genres;

// const allGenres = [primaryGenre,secondaryGenre,...otherGenres]


// const updatedBook = {...book, 
//   //Adding new Property
//   moviePublicationDate:'2001-12-19',
//   //Overwriting an existing Property
//   pages:12190};

// updatedBook;

// const summary = `${title} a ${pages}-page long book, was written by ${author} that published in ${publicationDate.split('-')[0]}`;

// summary;


// function getTotalReviewCount(book){
//   const goodread = book.reviews.goodreads.reviewsCount;
//   const librarythings =  book.reviews.librarything?.reviewsCount ?? 0;

//     return goodread + librarythings
// }
// const total = getTotalReviewCount(book);

// total;


// const x =[1,2,3,4,5].map((element) => {
//   return element*2
// })
// x;

// const titles = data.map((book)=>{
//   return book.title
// })

// titles

// const essentialData = data.map((book) => ({
//     title: book.title,
//     author:book.author,
//     reviewsCount: getTotalReviewCount(book)
// }));

// essentialData;

// const longBooks = data.filter((book)=> book.pages >500).filter(book => book.hasMovieAdaptation).map(book => book.title)

// longBooks;

// const adventureBooks = data.filter(book => book.genres.includes('adventure')).map(book => book.title)

// adventureBooks;



// // const totalofBookspages = data.map(book => book.pages).reduce((acc,curr) => acc +curr)
// const totalofBookspages = data.reduce((acc,book)=> acc + book.pages, 0)

// totalofBookspages;

// const numbers = [3,7,1,9,6];

// //use slice method to not mutate the orignal array;
// const sorted = numbers.slice().sort((a,b)=>a-b)

// sorted;
// numbers;

// const sortedByPages = data.slice().sort((a,book)=>a.pages-book.pages).map((book => book.title))

// sortedByPages;

// const newBook = {
//   id:6,
//   title: 'Harry Potter and the Chamber of Secrets',
//   author: 'J.K Rowling'
// };


// //Working With Immutable Array
// // 1) add book object to array
// const booksAdd = [...data, newBook];
// booksAdd;

// // 2) Delete book object from array

// const bookAfterDelete = booksAdd.filter(book => book.id !==3);
// bookAfterDelete;


// // 3) Update book object in the array

// const bookAfterUpdate = bookAfterDelete.map(book => book.id ===1 ? {...book,pages:1203} : book)

// bookAfterUpdate;

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(response => response.json().then(data => console.log(data))).catch(error => console.log(error));


async function fetchData(){
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    if(!response.ok){
      throw new Error(`Could not Fetch Data`)
    }
    else{
      return response.json()
    }

  } catch (error) {
    console.log(`Could not Fetch Data: ${error}`)
  }
}
const pikachuData = fetchData()
pikachuData;
