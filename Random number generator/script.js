// Random number generator
// const min = 50;
// const max = 100;


// let randomNum = Math.floor(Math.random() *max -min) +min ;
    
// console.log(randomNum)


let myBtn = document.getElementById("myButton")
let myText1 = document.getElementById("myH1")
let myText2 = document.getElementById("myH2")
let myText3 = document.getElementById("myH3")

let min = 1
let max = 6
let random1;
let random2;
let random3;

myBtn.onclick = () => {
 random1 = Math.floor(Math.random() *max -min) +min
 random2 = Math.floor(Math.random() *max -min) +min
 random3 = Math.floor(Math.random() *max -min) +min
 myText1.textContent = random1
 myText2.textContent = random2
 myText3.textContent = random3
}






