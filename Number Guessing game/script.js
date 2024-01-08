// Number Guessing Game

const min = 1;
const max = 100;
const correctAnswer = Math.floor(Math.random()*(max-min+1)+min)

let attempts =0;
let guess;

let running = true


while(running){

    guess = window.prompt(`Guess a number between ${min} to ${max}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("Please a Valid Number")
    }else if(guess<min || guess>max){
        window.alert("Please a Valid Number")
    }
    else{
        attempts++
        if(guess<correctAnswer){
            window.alert("Higher!!")
        }else if(guess>correctAnswer){
            window.alert("Lower!!")
        }
        else{
            window.alert(`The Correct answer was: ${correctAnswer}. It took you ${attempts} attempts`)
            running=false
        }
    }

    

}