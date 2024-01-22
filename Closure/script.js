// Closure = a function defined inside of anothe function, the inner function has access to the variables and scope of the outer function.
//          Allow for private variables and state maintenance. Used frequently in JS frameworks



// Example 1
// function outer(){
//     let message = "Hello" //encapsulate variables to make private
//     function inner(){
//         console.log(message)
//     }
//     inner()
// }
// outer()

//Example 2

// function createCounter(){
//     let count = 0;
//     function increment(){
//        count++;
//        console.log(`Count increased to ${count}`);
//     }
//     function getCount(){
//         return count
//     }
//     return{increment, getCount}
// }

// const counter = createCounter()

// counter.increment(); //1
// counter.increment(); //2
// counter.increment(); //3
// counter.increment(); //4

// counter.count = 0; // is private

// console.log(count)// count is not defined

// console.log(counter.count); //0

// console.log(`The current counter is ${
//     counter.getCount()}`) //The current counter is 4

//Example 3
// function scorePoints(){
//     let score = 0;
//     function increaseScore(points){
//             score += points;
//             console.log(`+${points}pts`)
//     }
//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`)
//     }
//     function getScore(){
//         return score;
//     }
//     return {increaseScore,decreaseScore,getScore}
// }

// const player = scorePoints();
// player.score = 0;
// player.increaseScore(5);
// player.increaseScore(6);
// player.decreaseScore(3);
// console.log(`The Final Score is ${player.getScore()}pts`)

//Example 4  Implementing modules and namespaces:
const mathFunctions = (function() {
    let pi = 3.14159;
  
    return {
      calculateArea: function(radius) {
        return pi * radius * radius;
      },
      calculateCircumference: function(radius) {
        return 2 * pi * radius;
      }
    };
  })();
  
  console.log(mathFunctions.calculateArea(5));


  // Example 5 Implementing partial application
  function add(x, y) {
    return x + y;
  }
  
  const add5 = add.bind(null, 5);
  console.log(add5(3));  // 8