// -------------- Example 1 <h1> ---------------------------


// Step 1 Create the element \

// Example 1
// const newH1 = document.createElement("h1")

//Example 2
const newListItem = document.createElement('li')

//Step 2 Add attributes/properties
newListItem.textContent = "coconut"
newListItem.id = "coconut"
newListItem.style.fontWeight = "bold"
newListItem.style.color = "tomato"

// Example 1
// newH1.textContent ="I like Pizza"
// newH1.id = 'myH1'
// newH1.style.color="tomato"
// newH1.style.textAlign = "center"

//Example 2

//Step 3 Append Element to the DOM



//Example 1
// document.body.append(newH1) // last element
// document.body.prepend(newH1) // First Element
// document.getElementById("box1").append(newH1)
// document.getElementById("box1").prepend(newH1)


// const box2 = document.getElementById("box2")

// document.body.insertBefore(newH1,box2)


// const boxes = document.querySelectorAll(".box")

// document.body.insertBefore(newH1, boxes[2])



// Example 2;
// document.getElementById('fruits').appendChild(newListItem)
// const orange = document.getElementById("orange")

// document.getElementById("fruits").insertBefore(newListItem,orange)

const listItems = document.querySelectorAll("#fruits li")

document.getElementById("fruits").insertBefore(newListItem,listItems[1])




// Remove Element
// document.getElementById("box1").removeChild(newH1)
// document.getElementById("fruits").removeChild(newListItem)

