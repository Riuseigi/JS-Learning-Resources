// NodeList = Static collection of HTML elements by (id, class, element)
//Can be creatred by using querySelectorAll()
//Similar to an array, but no (map,filter,reduce)
//NodeList won't update to automatically reflect changes

let myButtons = document.querySelectorAll(".myButtons")
// Add HTML/CSS Properties
// myButtons.forEach((box) => {
//   box.textContent+= "😊"
//   box.style.backgroundColor = 'green'
//   box.style.color = "white"
// })

// Click event listener
// myButtons.forEach((box) => {
//   box.addEventListener("click",(event) => {
//       event.target.style.backgroundColor = "tomato"
//   })
// })

//Mouseover + Mouseout Event Listener

// myButtons.forEach((box) => {
//   box.addEventListener("mouseover",(event) => {
//     event.target.style.backgroundColor = "yellow"
//   })
//   box.addEventListener("mouseout",(event) => {
//     event.target.style.backgroundColor = "hsl(240, 49%, 67%)"
//   })
// })


// Add an Element
// Stepp 1
let newElement = document.createElement("button")
// Step 2

// newElement.textContent = "Button 5"
// newElement.classList = "myButtons"


//Step 3 append
// document.body.appendChild(newElement)

// myButtons = document.querySelectorAll(".myButtons")
// console.log(myButtons)


// Remove an Element
myButtons.forEach((button) => {
    button.addEventListener('click',(event) => {
      event.target.remove()
      myButtons = document.querySelectorAll(".myButtons")
      console.log(myButtons)
    })
})