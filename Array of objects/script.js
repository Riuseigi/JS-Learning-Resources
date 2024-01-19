// The array of objects represent storing multiple objects in a single name. In an array of objects, the data can be accessed randomly by using the index number. Reduce the time and memory by storing the data in a single variable.


// const fruits = [{name: "apple",color: "red", calories: 85},
//                 {name: "orange",color: "orange", calories: 45},
//                 {name: "banana",color: "yellow", calories: 105},
//                 {name: "coconut",color: "white", calories: 159},
//                 {name: "pineapple",color: "yellow", calories: 37},]


// console.log(fruits[0].name) //apple
// console.log(fruits[2].calories) // 105 which is banana[2]


// fruits.push({name: "grapes",color: "purple", calories: 62})

//For Each method
// fruits.forEach((fruit) => {
//   console.log(fruit.name)
// })
//apple
//orange
//banana
//coconut
//pineapple
//grapes

// Map Method

// const fruitNames = fruits.map((fruit) => {
//     return fruit.name
// })
// const fruitColor = fruits.map((fruit) => {
//   return fruit.color
// })
// const fruitCalories = fruits.map((fruit) => {
//   return fruit.calories
// })
// console.log(fruitCalories)
// [
//   "red",
//   "orange",
//   "yellow",
//   "white",
//   "yello",
//   "purple"
// ]


//filter method
// const yellowFruit = fruits.filter((fruit) => {
//     return fruit.color === "yellow" ;
// })

// const lowCalories = fruits.filter((fruit) => {
//   return fruit.calories <100 ;
// })
// const highCalories = fruits.filter((fruit) => {
//   return fruit.calories >100 ;
// })
// console.log(highCalories)
// // [
//   {
//       "name": "banana",
//       "color": "yellow",
//       "calories": 105
//   },
//   {
//       "name": "coconut",
//       "color": "white",
//       "calories": 159
//   }
// ]


// Reduce method
// const maxCaloriefruit = fruits.reduce((max,fruit) => fruit.calories>max.calories ? fruit:max )
// const minCalorieFruit = fruits.reduce((min,fruit) => fruit.calories<min.calories ? fruit:min )

// console.log(maxCaloriefruit)
// console.log(minCalorieFruit)


// Coding Excercise 1

// Here's a coding exercise to challenge your skills with array methods:

// Task:

// Create an array of objects representing tasks, each with properties name, priority (a number from 1 to 5), and completed (a boolean).
// const tasks =[{name:"Coding",priority:5,completed:true},
//               {name:"Reading a book",priority:3,completed:false},
//               {name:"Caretaking Grandma",priority:4,completed:true},
//               {name:"Cook Meal",priority:2,completed:false},
//               {name:"Workout",priority:5,completed:false},
//               {name:"Bebe time",priority:5,completed:true},]

// Use forEach to print a list of all tasks with their priority levels.
// tasks.forEach((task) => {
//     console.log(`Task: ${task.name}  Priority Level:${task.priority}`)
// })
// Use map to create a new array containing only the names of incomplete tasks.
// const incompleteTask = tasks.map((task) => 
//    (task.completed !== true ? task.name : null)
// ).filter(Boolean)
// console.log(incompleteTask)


// Use filter to create a new array containing only high-priority tasks (priority 4 or 5).
// const highPriority = tasks.filter((task)=> task.priority > 3)
// console.log(highPriority)

// Use reduce to calculate the total number of completed tasks.
// const totalCompleted = tasks.reduce((acc, task) => {
//   // Increment the accumulator if the task is completed
//   return task.completed ? acc + 1 : acc;
// }, 0);
// console.log(totalCompleted)

// Coding practice 2

// Here's another coding exercise to help you practice array methods:

// Task:

// Create an array of objects representing books, with properties like title, author, genre, pages, and rating (a number from 1 to 5).
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    pages: 180,
    rating: 4.5
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    pages: 336,
    rating: 3.8
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    pages: 328,
    rating: 2.6
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    pages: 310,
    rating: 4.7
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Classic',
    pages: 432,
    rating: 1.2
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Coming-of-age',
    pages: 224,
    rating: 2.0
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    pages: 320,
    rating: 3.9
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    pages: 1178,
    rating: 4.9
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Mystery',
    pages: 597,
    rating: 4.1
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Dystopian',
    pages: 374,
    rating: 4.3
  }
];


// Use forEach to print a list of all books with their titles and genres.

books.forEach((book)=> console.log(`Book Name: ${book.title} Genre:${book.genre}`))
// Use map to create an array containing only book titles with a rating of 4 or higher.
const highRating = books.map((book)=> book.rating >3 ? book.title:null).filter(Boolean)
console.log(highRating)

// Use filter to create an array of books belonging to a specific genre (e.g., "fantasy")
const fictionBook = books.filter((book)=>book.genre ==="Fiction")
const fantasyBook = books.filter((book)=>book.genre ==="Fantasy")
const dystopianBook = books.filter((book)=>book.genre ==="Dystopian")
const classicsBook = books.filter((book)=>book.genre ==="Classic")
console.log(classicsBook)
// Use reduce to calculate the total number of pages for all books.
const totalPagesBooks = books.reduce((acc,book)=>acc+book.pages,0)
console.log(totalPagesBooks)