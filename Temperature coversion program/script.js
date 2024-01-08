// Temperature Conversion Program
let textBox = document.getElementById("textBox")
let toFarenheit = document.getElementById("toFarenheit")
let toCelcious = document.getElementById("toCelcious")
let result = document.getElementById("result")

let farenheit;
let celcious;


function convert(){
    myNumber = Number(textBox.value)
    
    if(toFarenheit.checked){
        farenheit = (myNumber * 9/5) + 32
        result.textContent = `The Farenheit of ${myNumber}°C is ${farenheit}°`
    }
    else if(toCelcious.checked){
        celcious = Math.round((myNumber - 32) * 5/9).toFixed(2)
        result.textContent = `The Celcious of ${myNumber}° is ${celcious}°`
    }else{
        result.textContent = "Select a Unit"
    }
}