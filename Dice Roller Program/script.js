


// create a function directed on onclick on HTML
function rollDice(){

//  Initialize the Dom
    const numDice = Number(document.getElementById("numDice").value)
    const diceResult = document.getElementById("diceResult")
const diceImages = document.getElementById("diceImages")

// Create arrays for images and values
const values = []
const images = []

    // created loop to push a values an images to their arrays
    for(let i =0 ; i <numDice; i++){
        const value = Math.floor(Math.random()* 6)+1;
    values.push(value)
     images.push(`<img src="./img/${value}.png" alt="dice ${value}" />`)

    }
    // this is the result of values and images to html
    diceResult.textContent =` Dices: ${values.join(", ")}`
    diceImages.innerHTML = images.join(" ")


}
