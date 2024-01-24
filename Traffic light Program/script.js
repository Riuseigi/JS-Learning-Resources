let timers = [5000, 2000, 7000]
let counter = 1;
let intervalID;
let isRunning = false;
let timeoutID;
let currentLight = 'red';
const lights = document.querySelectorAll(".light");


function start() {
  // Reset all lights to default color
  lights.forEach(light => light.style.backgroundColor = '#ccc');
 
 
  counter = (counter + 1) % timers.length;
  // Clear previous interval and set a new one with the updated timer value
  clearInterval(intervalID);
  intervalID = setInterval(start, timers[counter]);
   // Determine which light to turn on
  switch (currentLight) {
    case 'red':
      lights[0].style.backgroundColor = 'red';
      currentLight = 'green';
      break;
    case 'yellow':
      lights[1].style.backgroundColor = 'yellow';
      currentLight = 'red';
      break;
    case 'green':
      lights[2].style.backgroundColor = 'green';
      currentLight = 'yellow';
      break;
  }
}
function stop(){
  clearInterval(intervalID);
  clearTimeout(timeoutID);
}

function toggleLightCycle(){
  const button = document.querySelector('button');
  if (!isRunning) {
    start();
    button.textContent = 'Stop Lights';
    isRunning = true;
  } else {
    stop();
    button.textContent = 'Start Lights';
    isRunning = false;
  }
}

