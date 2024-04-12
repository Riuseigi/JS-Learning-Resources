//Array.find() = method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

// Machine problem 1 
// You have an array of objects representing books, each with a title, author, and publishedYear property. You want to find the first book in the array that was published after the year 2000. Use the find method to solve this problem.

const books = [
    { title: 'Book 1', author: 'Author 1', publishedYear: 1998 },
    { title: 'Book 2', author: 'Author 2', publishedYear: 2005 },
    { title: 'Book 3', author: 'Author 3', publishedYear: 1995 },
    { title: 'Book 4', author: 'Author 4', publishedYear: 2010 }
  ];


  function yearpublished(arr, year) {
    return arr.find((book) => book.publishedYear === year);
  }
const year = 2005
const book2000 = yearpublished(books,year)
console.log(book2000);

//Machine problem 2
// Write a function findPokemonByType(pokemonArray, type) that takes an array of Pokémon objects and a type string as arguments. The function should return the first Pokémon object from the array that has the given type. If no Pokémon with the given type is found, the function should return null.
const pokemon = [
  { id: 1, name: 'Bulbasaur', type: 'Grass', hp: 45 },
  { id: 2, name: 'Charmander', type: 'Fire', hp: 39 },
  { id: 3, name: 'Squirtle', type: 'Water', hp: 44 },
  { id: 4, name: 'Pikachu', type: 'Electric', hp: 35 },
];

function findPokemonByType(pokemons,type){

   return pokemons.find((pokemon) => 
      pokemon.type === type
    )
}


console.log(findPokemonByType(pokemon, 'Fire'));  // Output: { id: 2, name: 'Charmander', type: 'Fire', hp: 39 }
console.log(findPokemonByType(pokemon, 'Bug'));   // Output: null


