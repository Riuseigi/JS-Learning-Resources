// Age validation
// IF STATEMENTS = if condition is true, execute some code, if not, do something else;
let myText = document.getElementById("myValue");
let submit = document.getElementById("submit");

let resultElement = document.getElementById("result")
let age = 0;
submit.onclick = () => {
   age = myText.value;
   age = Number(age)
   if(age>=100){
    resultElement.innerText = "You are too old for this site"
   }
   else if(age<=0){
    resultElement.textContent = "You were just born, can't enter"
   }
   else if(age<0){
    resultElement.textContent = "You can't age below 0"
   }
   else if(age>=18){
    resultElement.textContent = "You are old enough for this site"
   }
   else{
    resultElement.textContent = "You must be 18+ to enter t"
   }
   
}






