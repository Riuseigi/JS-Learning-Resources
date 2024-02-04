// Aync/Await - Async = makes a function return a promise
//              Await = makes an async function wait for a promise


// Allows you write asynchronous code in a synchronous manner
// Async doesnt have resolve or reject parameters
// Everything after Await is placed in an event queue
function walkDog(){
  
  
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const dogwalked =false;
      if(dogwalked){
        resolve("Walk the Dog 🐕")
      }else{
        reject("You didnt walk the Dog")
      }
      
    },5000)
  })
}
function cleanKitchen(){
  
  
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const kitchenClean = true;
      if(kitchenClean){
        resolve("Clean the Kitchen 🧽");
      }
      else{
        reject("You didnt clean the kitchen");
      }
      
    },5000)
  })
}
function takeOutTrash(){
  
  
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const trashTakeOut = true;
      if(trashTakeOut){
        resolve("Take out the Trash");
      }else{
        reject("You didn't take out Trash");
      }
      
    },200)
  })
}

async function doChores(){

  try{
    const walkDogResult = await walkDog();

    console.log(walkDogResult);
  
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
  
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
  
    console.log("Finish all the chores")
  }
  catch(error){
    console.error(error)
  }
 
}

        
doChores()



// Example 2

async function fetchWeather() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
    const data = await response.json();
    console.log(data.weather[0].description); // Output: "Clear sky" (example)
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

fetchWeather();