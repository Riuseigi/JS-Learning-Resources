// Closure = a function defined inside of anothe function, the inner function has access to the variables and scope of the outer function.
//          Allow for private variables and state maintenance. Used frequently in JS frameworks

// Coding practice 1
// Implementing a basic module pattern: Task: Create a module named MathUtils that contains two functions: add and multiply. These functions should only be accessible through the MathUtils module, not directly in the global scope.

function MathUtils(){
    function add(x,y){
      return x+y
    }
    function multiply(x,y){
      return x*y
    }
    return{add, multiply}
}


const value = MathUtils()

console.log(value.add(1,2))



