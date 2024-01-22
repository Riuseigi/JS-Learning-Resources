// Closure = a function defined inside of anothe function, the inner function has access to the variables and scope of the outer function.
//          Allow for private variables and state maintenance. Used frequently in JS frameworks

// Coding practice 1
// Implementing a basic module pattern: Task: Create a module named MathUtils that contains two functions: add and multiply. These functions should only be accessible through the MathUtils module, not directly in the global scope.

// function MathUtils(){
//     function add(x,y){
//       return x+y
//     }
//     function multiply(x,y){
//       return x*y
//     }
//     return{add, multiply}
// }


// const value = MathUtils()

// console.log(value.add(1,2))



// Coding practice 2  Implementing a basic module pattern:
// Task: Create a class BankAccount with a deposit method that increases the balance, a withdraw method that decreases the balance, and a getBalance method that returns the current balance. However, the balance property itself should not be directly accessible outside the class.

function BankAccount(){
  let balance = 0;

  function deposit(amount){
    return balance+=amount;
  }
  function widthdraw(amount){
    return balance-=amount;
  }
  function getBalance(){
    console.log(`Your current balance is ${balance}`);
  }
  return{deposit,widthdraw,getBalance};
}


const person1 = BankAccount();

person1.deposit(100)
person1.getBalance()



