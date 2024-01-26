// DOM Navigation = The process of navigating through the structure of an HTML document using Javascript

//.firstElementChild
// .lastElementtChild
// .nextElementSibling
//. previousElementSibling
// .parentElement
// .children

// ===============First Element Child====================
// const element = document.getElementById('fruits')
// const firstChild = element.firstElementChild;
// console.dir(firstChild)
// firstChild.style.backgroundColor = "yellow"



// const ulElements = document.querySelectorAll('ul')

// ulElements.forEach((uiElement) => {
//     const firstChild = uiElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow"
// })

// ===============Last Element Child====================

// const element = document.getElementById("vegetables")
// const lastChild = element.lastElementChild

// lastChild.style.backgroundColor = "pink"

// const ulElements = document.querySelectorAll('ul')

// ulElements.forEach((uiElement) => {
//   const lastChild = uiElement.lastElementChild;
//   lastChild.style.backgroundColor = "pink"
// })

// ===============Next Element Sibling====================


// const element = document.getElementById('apple')

// const sibling = element.nextElementSibling;

// sibling.style.backgroundColor = "pink"


// ===============Previous Element Sibling====================
// const element = document.getElementById('eggplant')

// const sibling = element.previousElementSibling;

// sibling.style.backgroundColor = "pink"

// ===============Parent Element====================

// const element = document.getElementById('ice cream')

// const parentElement = element.parentElement;

// parentElement.style.backgroundColor = "pink"


// ===============Children====================

const element = document.getElementById("desserts");

const children = element.children;

// Array.from(children).forEach((child) => {
//     child.style.backgroundColor = 'pink'
// })


children[1].style.backgroundColor = 'pink'