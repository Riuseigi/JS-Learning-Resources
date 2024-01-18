//nested objects = Objects inside of other Objects.        Allows you to represent more complex data structures. 
//Child Object is enclosed by a Parent Object

//                  Person{Address{},ContactInfo{},
//                  ShoppingCart{Mouse{},Keyboard{},Monitor{}}}

//Example 1

// const person ={
//   fullname : "SpongeBob Sqauarepants",
//   age: 35,
//   hobbies: ["karate","cooking","jelly fishing"],
//   address: {
//     street: "124 conch st",
//     city: "Bikini Bottom",
//     country: "Int. Ocean"
//   }

// }

// console.log(person.fullname)// SpongeBob Sqauarepants
// console.log(person.hobbies[2]) //jelly fishing
// console.log(person.address.street) //124 conch st

// for(const property in person.address){
//   console.log(person.address[property])
// }
// console run
// 124 conch st
//  Bikini Bottom
//  Int. Ocean


//Example 2
// Creating class for nested objects

class Person {
  constructor(fullname,age,job, ...address){
    this.fullname =fullname
    this.age = age
    this.job = job
    this.address = new Address(...address)
  }
}

class Address {
    constructor(street,city, country){
      this.street =street
      this.city = city
      this.country=country
    }
}

const person1 = new Person("Spongebob Squarepants",34,"Cook","124 Conch St","Bikini Bottom","International Sea")
const person2 = new Person("Patrick Star",30,"Unemployed","125 Conch St","Bikini Bottom","International Sea")
const person3 = new Person("Squid Ward",59,"Cashier","128 Conch St","Bikini Bottom","International Sea")


console.log(person1.address)
for(const property in person1.address){
  console.log(person1.address[property])
}