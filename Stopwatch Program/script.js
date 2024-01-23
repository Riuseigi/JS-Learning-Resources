//Stopwatch Program
// initialize the values
const display = document.getElementById("clock")
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start button function
function start(){
  if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update,10)
    isRunning = true
  }
}
// Stop button function
function stop(){
 
  clearInterval(timer)
  elapsedTime = Date.now() - startTime;
  isRunning=false
}
// Reset button function
function reset(){
  clearInterval(timer)
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = `00:00:00:00`
}
// Callback function for interval
function update(){
  //Calculate elapsed time in milliseconds.
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  console.log(elapsedTime)


 /* These lines of code are calculating the hours, minutes, seconds, and milliseconds from the elapsed time in milliseconds. */
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);


  // Format and display the time in the "clock" element.
  hours = String(hours).padStart(2,0);
  minutes = String(minutes).padStart(2,0);
  seconds = String(seconds).padStart(2,0);
  milliseconds = String(milliseconds).padStart(2,0);


  //display the time
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}
