//Callback = a function that is passed as an argument to another function

            // used to handle asyncrhonous operations
            // 1.reading a file
            // 2. Network requests
            // 3. Interacting with databases

            // Hey, when you're done, call this next;
// hello(wait)


// function hello(callback){
//     console.log("Hello")
//     callback();
// }

// function wait(){
//     console.log("Wait!")
// }

// function leave(){
//     console.log("Leave!")
// }

// function goodbye(){
//     console.log("Goodbye")
// }


//function for sum that has call back
function sum(num1,num2, callback){
   
    let result = num1+num2;
    callback(result)
}
// display on console
function displayResult(result){
    const resultDisplay = document.getElementById("result")
    console.log(`The result is: ${result}`)
    resultDisplay.textContent = `The result is: ${result}`
}
function calculateSum() {
    const x = Number(document.getElementById('x').value);
    const y = Number(document.getElementById('y').value);
    sum(x, y, displayResult);
}

