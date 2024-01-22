//setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time(milliseconds). imes are approximate (varies based on the workload of the JavaScript runtime env)
//              setTimeout(callback,delay)
//              clearTimeout(timeoutID)
//Example 1
// function sayHello(){
//   window.alert('hello')
// }

// setTimeout(sayHello,3000)

//Example 2

// const timeoutId = setTimeout(() => {
//   window.alert("Hello")
// },3000)

// clearTimeout(timeoutId)

let timeoutId;
function startTimer(){
  timeoutId = setTimeout(() => {
    window.alert("Hello")
  },3000)
  console.log("Started")
}

function stopTimer(){
  clearTimeout(timeoutId)
  console.log("cleared")
}