// object = A collection of related properties and/or methods can represent real world objects (people, products,places)


  // object = {key:value,
  //           function()}


//   const person1 ={
//     firstName : "SpongeBob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello : function(){console.log("Hi! I am Spongebob!")},
//     eat: () => {
//       console.log("I am eating a Krabby Patty")
//     }
//   }

//   const person2 ={
//     firstName : "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello : () => 
//       {console.log("Hey, I'm Patrick...")},
//     eat: () => {
//       console.log("I am eating a roast beef, chicken, and pizza")
//       }
//   }


// person1.sayHello()
// person2.sayHello()

// person1.eat()
// person2.eat()
// console.log(person1.firstName)
// console.log(person1.lastName)
// console.log(person1.age)
// console.log(person1.isEmployed)


// console.log(person2.firstName)
// console.log(person2.lastName)
// console.log(person2.age)
// console.log(person2.isEmployed)



// Machine Problem 1 Calculator:

// Create an object with methods for basic arithmetic operations like add, subtract, multiply, and divide.
// Allow users to input numbers and operations, and display the results.


const submit = document.getElementById("submit")


submit.onclick = () => {

// Initialize the dom elements
const num1 = Number(document.getElementById("num1").value)
const num2 = Number(document.getElementById("num2").value)

const operations = document.getElementsByName("arithmetic")


const results = document.getElementById("result")
   
// create an object for my operation methods
const arithmethic = {
    addition: function(x,y){
         let result = x +y
         results.textContent = `Result: ${result}`

    },
    subs: function(x,y){
      let result = x -y
      results.textContent = `Result: ${result}`
    },
    mults: function(x,y){
      let result = x *y
      results.textContent = `Result: ${result}`
    },
    divs: function(x,y){
      let result = x /y
      results.textContent = `Result: ${result}`
    },
  }

  //create a for loop to extract my radio buttons
  for (var i = 0; i < operations.length; i++){

    //checked if checked
    if(operations[i].checked){
      if(operations[i].value ==="add"){
        arithmethic.addition(num1,num2)
      }else if(operations[i].value ==="substract"){
        arithmethic.subs(num1,num2)
      }
      else if(operations[i].value ==="multiply"){
        arithmethic.mults(num1,num2)
      }
      else if(operations[i].value ==="divide"){
        arithmethic.divs(num1,num2)
      }
    }
  }
}

