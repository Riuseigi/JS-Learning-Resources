// class = {EST feature} provides fa more structured and cleaner way to work with objects compared to traditional constructor functions. ex. Static keyword, encapsulation, inheritance
// Classes define blueprints for creating objects with properties and methods.

// Example of Constructor method
// function Product(name, price){
//   this.name = name;
//   this.price = price;
//   this.displayProduct = function(){
//     console.log(`Product: ${this.name}`)
//     console.log(`Price: ${this.price}`)
//   }
//   this.calculateTotal = function(salesTax){
//     return this.price + (this.price * salesTax)
//   }

// }

// const salesTax = 0.05

// const product1 = new Product("Shirt",19.99)
// const product2 = new Product("Pants",19.99)
// const product3 = new Product("UnderWear",19.99)

// product1.displayProduct()
// const totalWithTax = product1.calculateTotal(salesTax);
// console.log(`Total with tax: $${totalWithTax.toFixed(2)}`);


// Here is the Class

class Product{
  constructor(name,price){
      this.name = name;
      this.price = price;
  }
  displayProduct(){
    console.log(`Product: ${this.name}`)
    console.log(`Price: ₱${this.price.toFixed(2)}`)

  }
  calculateTax(salesTax){
    return this.price + (this.price * salesTax)
  }
}

const product1 = new Product("Shirt", 219.99)
const product2 = new Product("Pants", 149.50)
const product3 = new Product("Underwear", 100.50)
const salesTax = 0.05


product1.displayProduct()
const totalWithTax = product1.calculateTax(salesTax).toFixed(2);
console.log(`Total with tax: $${totalWithTax}`);