// Promise = An object that manages asynchronous operations
//            Wrap a Promise Object {asynchronous code}.
//            "I promise to return a value"
//            PENDING -> RESOLVED OR REJECT
//            new Promise((resolve, reject) => {asynchronous Code})

//Do These Chores in Order

//1. Walk the Dog
//2. Clean the Kitchen
//3. Take out the trash

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

walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeOutTrash()}).then(value => {console.log(value); console.log("All Tasks are Complete")}).catch(error =>{console.error(error)});

        