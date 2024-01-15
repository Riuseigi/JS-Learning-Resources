// 1. Build a Simple Calculator:

// Create a Calculator class with static methods for basic arithmetic operations (add, subtract, multiply, divide).
// Practice using constructors to initialize properties.
// Explore the this keyword within methods.


// class Calculator {
//   constructor(x,y){
//     this.x = x
//     this.y = y
//   }
//   add(){
//     console.log(`The Result is : ${this.x+this.y}`)
//   }
//   substract(){
//     console.log(`The Result is : ${this.x-this.y}`)
//   }
//   multiply(){
//     console.log(`The Result is : ${this.x*this.y}`)
//   }
//   divide(){
//     console.log(`The Result is : ${this.x/this.y}`)
//   }
// }

// const resultAdd = new Calculator(3,2)
// const resultSubstract = new Calculator(3,2)
// const resultMultiply = new Calculator(3,2)
// const resultDivide = new Calculator(3,2)
// resultAdd.add()
// resultSubstract.substract()
// resultMultiply.multiply()
// resultDivide.divide()




// 2. Create a Bank Account Manager:

// Design a BankAccount class with properties like balance, accountNumber, and ownerName.
// Implement methods for depositing, withdrawing, and transferring funds.
// Handle errors gracefully (e.g., insufficient funds).


class BankAccount {
  static #balance = 0;

  constructor(ownerName, initialBalance, accountNumber) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this._balance = initialBalance; // Use private property for balance
    BankAccount.#balance += initialBalance;
  }

  deposit(amount) {
    this._balance += amount;
    BankAccount.#balance += amount;
    return this._balance;
  }

  checkBalance() {
    console.log(`Hi ${this.ownerName}, Your Balance is: ${this._balance}`);
  }

  _updateBalance(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
      BankAccount.#balance -= amount;
      return true; // Indicate successful withdrawal or transfer
    } else {
      console.log(`Sorry ${this.ownerName}, you have insufficient funds`);
      return false;
    }
  }

  withdraw(amount) {
    return this._updateBalance(amount);
  }

  transfer(amount, transferName) {
    if (this._updateBalance(amount)) {
      console.log(`You transferred funds to ${transferName} with ${amount}`);
    }
  }
}

// Example usage:
const account1 = new BankAccount("John Doe", 1000, "123456");
account1.deposit(500);
account1.checkBalance();
account1.withdraw(200);
account1.checkBalance();
account1.transfer(300, "Friend");
account1.checkBalance();














// 3. Model a Vehicle Inventory System:

// Create a Vehicle class with properties like make, model, year, and price.
// Define subclasses for different vehicle types (e.g., Car, Truck, Motorcycle) with specific properties and methods.
// Practice using inheritance to share common functionality and establish unique behaviors.
// 4. Develop a Simple Task Manager:

// Create a Task class with properties like title, description, priority, and completed status.
// Implement methods to add, remove, and mark tasks as complete.
// Consider using static methods for tasks like filtering or sorting.
// 5. Simulate a Pet Shelter:

// Create a Pet class with properties like name, species, age, and breed.
// Define subclasses for different pet types (e.g., Dog, Cat, Rabbit) with unique properties and behaviors.
// Manage a collection of pets using arrays or objects, and implement methods to adopt, release, and care for them.