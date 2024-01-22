//Digital Clock Program

function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  // check the military time
  const meridiem = hours >=12? "PM" : "AM"
  //convert the value to military time
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2,0)
  const minutes = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
  document.getElementById("clock").textContent = timeString
}

updateClock()
setInterval(updateClock,1000)