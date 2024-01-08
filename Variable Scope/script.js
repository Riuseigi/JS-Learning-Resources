// variable scope  = where a variable is recognized and accessible (local vs global)


//Local scope
// function function1(){
//     let x = 1;
//     return console.log(x)
// }

// function function2(){
//     let x = 2;
//     return console.log(x)
// }
// function1()

//Gloval scope
let x = 3;

function function1(){
    console.log(x)
}
function function2(){
    console.log(x)
}
function1()