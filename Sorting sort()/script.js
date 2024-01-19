// sort() = method used to sort elements of an array in place.
<<<<<<< HEAD
//          Sorts elements as strings in lexicographic order, not alphabetical.
=======
//          Sorts elements as strings in lexicographic orde, not alphabetical.
>>>>>>> e43f121b9c6fd6f8ff5fbb3e592509874fa4e72d
//          lexicographic = (alphabet + numbers + symbols)

// Example 1

let fruits = ["apple","oranng","banana","coconut","pineaple"]

fruits.sort()

console.log(fruits)
// [
//   "apple",
//   "banana",
//   "coconut",
//   "oranng",
//   "pineaple"
// ]

//Example 2

let numbers = [1,10,2,9,3,8,4,7,5,6]

// numbers.sort()
// [
//   1,
//   10,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9
// ]
numbers.sort((a,b)=> a-b)// 1,2,3,4,5,6,7,8,9,10
numbers.sort((a,b)=> a-b)// 10,9,8,7,6,5,4,3,2,1
console.log(numbers)


const people = [{name:"Spongebob", age:30, gpa: 3.0},
                {name:"Patrick", age:35, gpa: 5.0},
                {name:"Squidward", age:59, gpa: 2.0},
                {name:"Spongebob", age:27, gpa: 1.0},]


people.sort((a,b)=> a.age-b.age)// ascending order by age
people.sort((a,b)=> a.gpa-b.gpa)// ascending order by gpa
people.sort((a,b)=> a.name.localeCompare(b.name))
console.log(people)