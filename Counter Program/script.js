
const decreaseBtn = document.getElementById('decreaseBtn')
const resetBtn = document.getElementById('resetBtn')
const increaseBtn = document.getElementById('increaseBtn')
const myText = document.getElementById('myH1')


let count = 1

decreaseBtn.onclick = () =>{
   count--
   myText.textContent = count

}
increaseBtn.onclick = () =>{
   count++
   myText.textContent = count

}
resetBtn.onclick = () =>{
   count = 0
   myText.textContent = count

}