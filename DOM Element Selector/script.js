// element selectors = Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements from the DOM(Document Object Model)


//1. document.getElement byID() // Element or Null
// const myHeading = document.getElementById("my-headingg")

// myHeading.style.backgroundColor = "yellow"
// myHeading.style.textAlign = "center"

// console.log(myHeading)

//2. document.getElementsClassName() // HTML Collection
    // const fruits = document.getElementsByClassName("fruits")
    
    // fruits[2].style.backgroundColor="yellow"
    //set color method 1
    // for(let fruit of fruits){
    //     fruit.style.backgroundColor="yellow"
    // }

    //set color method 2
    // use array constructor
    // Array.from(fruits).forEach((fruit) => {
    //     fruit.style.backgroundColor = "yellow"
    // })


//3. document.getElementsByTagName() // HTML Collection

    // const h4Elements = document.getElementsByTagName("h4")
    // const liElements =document.getElementsByTagName("li")
    // console.log(h4Elements)
    // each element
    // h4Elements[0].style.backgroundColor = "green"


    //All Elements
    // for(let h4Element of h4Elements){
    //     h4Element.style.backgroundColor = "blue"
    // }

    //Use hiher order function
    // Array.from(h4Elements).forEach((h4Element) => {
    //     h4Element.style.backgroundColor = "blue"
    // })


    // Array.from(liElements).forEach((liElement) => {
    //     liElement.style.backgroundColor = "orange"
    // })
    

//4 document.querySelector()    // First Element or Null
// const element = document.querySelector(".fruits")

//     element.style.backgroundColor = "Blue"

//5 document.querySelectorAll() // Nodelist
    const fruits = document.querySelectorAll(".fruits")
    const foods = document.querySelectorAll("li")
    fruits[0].style.backgroundColor = "yellow"

    //Dont need to use array constructor
    foods.forEach((food) => {
        food.style.backgroundColor = "red"
    })
    

//6 document.getElementsByName() //  a collection of elements with a specified name attribute.

var genderRadios = document.getElementsByName("gender");

for (var i = 0; i < genderRadios.length; i++) {
  console.log(genderRadios[i].value);
}


