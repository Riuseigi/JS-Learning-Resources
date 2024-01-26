// eventListener = listen for sepcific events to create interactive web pages(event: click,mouseover,mouseout,.addEventListener(event, callback));


const myBox = document.getElementById("myBox")
const myButton = document.getElementById("myButton")

// function changeColor(event){
//     event.style.backgroundColor = "pink"
//     event.textContent = "OUCH! 😫"
// }
myButton.addEventListener("click",(event) => {
    myBox.style.backgroundColor = "pink"
    myBox.textContent = "Sugoii! 😫"
})

myButton.addEventListener("mouseover",(event) => {
    myBox.style.backgroundColor = "tomato"
    myBox.textContent = "Yamete!! 😋"
})
myButton.addEventListener("mouseout",(event) => {
    myBox.style.backgroundColor = "lightgreen"
    myBox.textContent = "Click Me 😁"
})
