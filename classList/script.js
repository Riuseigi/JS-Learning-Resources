// classList = Element property in Javascript used to interact with an element's list of classes (CSS classes)
//              Allows you to make reusable classes for many elements across the webpage
//add()
//remove()
//to
//replace(oldClass, newClass)
//contains()

//Example 1
// const myButton = document.getElementById("myButton")


// myButton.classList.add("enabled") //add method
// myButton.classList.remove("enabled") // remove method


//Toggle
// myButton.addEventListener("mouseover",(event) => {
//     event.target.classList.toggle("hover")
// })
// myButton.addEventListener("mouseout",(event) => {
//   event.target.classList.toggle("hover")
// })

// myButton.addEventListener("click",(event) => {

//   if(event.target.classList.contains("disabled")){
//     event.target.textContent+= "🤬"
  
//   }
//   else{
//     event.target.classList.replace("enabled","disabled")
//   }
   
// })


//Example 2

const myButtons = document.querySelectorAll(".myButtons")

myButtons.forEach((button) => {
  button.classList.add("enabled")

  button.addEventListener("mouseover",(event) => {
        event.target.classList.toggle("hover")
    })
    button.addEventListener("mouseout",(event) => {
      event.target.classList.toggle("hover")
    })
    button.addEventListener("click",(event) => {

        if(event.target.classList.contains("disabled")){
          event.target.textContent+= "🤬"
        
        }
        else{
          event.target.classList.replace("enabled","disabled")
        }
         
      })
})

