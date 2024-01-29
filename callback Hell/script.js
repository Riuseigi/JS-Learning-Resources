//Callback hell = Situation in Javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
//Old pattern to handle asychronous functions.
// Use Promise + async / await to avoid Callback Hell 


function task1(callback){
  setTimeout(() => {
    console.log("task 1 complete")
    callback()
  },2000)
}
function task2(callback){
  setTimeout(() => {
    console.log("task 2 complete")
    callback()
  },3000)
}
function task3(callback){
  setTimeout(() => {
    console.log("task 3 complete")
    callback()
  },1000)
}
function task4(callback){
  setTimeout(() => {
    console.log("task 4 complete")
    callback()
  },3000)
}

// It is not good practices, maybe 4 is good but exceed is nah
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("Task Completely")
      })
    })
  })
})


