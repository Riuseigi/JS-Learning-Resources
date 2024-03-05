//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.


let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

//As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

//So we should use map methods: set, get and so on.


let fernando = {name: 'Fernando'};

// for every user, let's store their visit count
let visitsCountMap = new Map();
visitsCountMap.set(fernando, 123);

console.log(visitsCountMap.get(fernando));

// Iteration over Map
// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }

  // runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });








// Set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// new Set() – creates the set
// set.add(value) – adds value to the set
// set.delete(value) – removes value from the set
// set.has(value) – returns true if the value exists in the set, false otherwise
// set.clear() – removes everything from the set
// set.size – returns the current value count

//The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// Iteration over Set
// We can loop over a set either with for..of or using forEach:

let fruits= new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
fruits.forEach((value, valueAgain, set) => {
  console.log(value);
});