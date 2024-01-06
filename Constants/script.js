// const = a varianle that cant be changed

const PI = 3.14159;
let radius;
let circumference



// radius = window.prompt('Enter the radius of a circle')

radius = Number(radius)




console.log(circumference)

document.getElementById('mySubmit').onclick = () =>{
   radius= document.getElementById("myText").value
   circumference = 2 * PI * radius;
   document.getElementById('myH3').textContent = `circumference is : ${circumference}`
}
