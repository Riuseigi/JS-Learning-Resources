//DOM = Document Object Model

//          Object{} that represents the page you see in the web browser and provides you with an API to interact withit. Web Browser constructs the DOM when it loads an HTML document and structures all the elements in a tree-like reputation.
//          Javascrippt can access the DOM to dynamically
//          Change the content,structure, and style of a webpage
// document.title = "My website"
// document.body.style.backgroundColor = "hsl(0,0%,40%)"
// console.log(document)


const username = "Riuseigi";
const welcomeMSG = document.getElementById("welcome-msg")

welcomeMSG.textContent += username === "" ?  ' Guest': ` ${username}`;


