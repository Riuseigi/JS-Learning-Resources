// JSON = (JavaScripy Object Notation)  data interchange format.
//        Used for exchanging data between a server and web application
//        JSOn files {key:value} OR [value1,value2,value3].

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON String to a JS object

// JSON.stringify()
// const names = ["Spongebob", "Patrick", "Squidward","Sandy"]

// const person = {
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["JellyFishing","Karate", "Cooking"]

// }
// const people = [
//   {
//       "name": "Spongebob",
//       "age": 30,
//       "isEmployed": true
//   },
//   {
//       "name": "Patrick",
//       "age": 34,
//       "isEmployed": false
//   },
//   {
//       "name": "SquidWard",
//       "age": 52,
//       "isEmployed": true
//   },
//   {
//       "name": "Sandy",
//       "age": 30,
//       "isEmployed": false
//   }
//   ]

// const jsonString = JSON.stringify(people)
// console.log(people)


//

// const jsonNames = `["Spongebob", "Patrick", "Squidward","Sandy"]`

// const jsonPerson = `{
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["JellyFishing","Karate", "Cooking"]

// }`
// const jsonPeople = `[
//   {
//       "name": "Spongebob",
//       "age": 30,
//       "isEmployed": true
//   },
//   {
//       "name": "Patrick",
//       "age": 34,
//       "isEmployed": false
//   },
//   {
//       "name": "SquidWard",
//       "age": 52,
//       "isEmployed": true
//   },
//   {
//       "name": "Sandy",
//       "age": 30,
//       "isEmployed": false
//   }
//   ]`

// const parsedData = JSON.parse(jsonPerson)
// console.log(parsedData)

//fetch
fetch("person.json").then(response => response.json()).then(value => console.log(value));

fetch("names.json").then(response => response.json()).then(value => console.log(value));

fetch("people.json").then(response => response.json()).then(values => values.forEach((value) => {
    console.log(value)
}));


