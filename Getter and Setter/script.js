//getter = special method that makes a property readable
//setter - special method that makes a property writeable

// validate and modify a value when reading/writing a property

//Example 1
// class Rectangle {
  
//   constructor(width,height){
//     this.width = width
//     this.height = height
//   }
//   set height(newHeight){
//     if(newHeight>0){
//         this._height = newHeight
//     }
//     else{
//       console.error(`Invalid Input`)
//     }
//   }
//   set width(newWidth){
//     if(newWidth>0){
//         this._width = newWidth
//     }
//     else{
//       console.error(`Invalid Input`)
//     }
//   }
//   get height(){
//     return `${this._height.toFixed(1)}cm`
//   }
//   get width(){
//     return `${this._width.toFixed(1)}cm`
//   }
//   get area(){
//     return `The area is ${(this._width *this._height).toFixed(1)}`
//   }
// }

// const rectangle1 = new Rectangle(13,15)

// console.log(rectangle1.area)

//Example 2

// class Person{
//   constructor(firstName,lastName,age){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }
//   set firstName(newFirstName){
//       if(typeof newFirstName === "string" && newFirstName.length > 0){
//         return this._firstName = newFirstName
//       }else{
//         console.error(`The First Name should be a String and greater than 0`)
//       }
//   }
//   set lastName(newLastName){
//     if(typeof newLastName === "string" && newLastName.length > 0){
//        this._lastName = newLastName
//     }else{
//       console.error(`The Last Name should be a String and greater than 0`)
//     }
//   }
//   set age(newAge){
//     if(typeof newAge === "number" && newAge > 0){
//       this._age = newAge
//     }else{
//       console.error(`The age should be a number and greater than 0`)
//     }
//   }

//   get firstName(){
//     return this._firstName
//   }
//   get lastName(){
//     return this._lastName
//   }
//   get age(){
//     return this._age
//   }

// }

// const person1 = new Person("Diana","Palaganas",22)
// person1.age = "n"

// console.log(person1.age)


//Machine Problem 1

// Temperature Conversion:

// Create a Temperature object with celsius and fahrenheit properties.
// Use getters and setters to ensure that:
// Setting one property automatically updates the other.
// The temperature cannot be set below absolute zero (-273.15°C or -459.67°F).


class Temperature{
  constructor(celcious,farenheit){
    this.celcious = celcious
    this.farenheit = farenheit
  }
  set celcious(newCelcious){
    if(newCelcious >-273.15 ){
      this._celcious = newCelcious
    }
    else{
      console.log(`The temperature cannot be set below absolute zero`)
    }
  }
  set farenheit(newFarenheit){
    if(newFarenheit >-273.15 ){
      this._fareheit = newFarenheit
    }
    else{
      console.log(`The temperature cannot be set below absolute zero`)
    }
  }
  get celcious(){
    return this._celcious
  }
  get farenheit(){
    return this._fareheit
  }
  get celToFa(){
    let result = this._celcious *(9/5) +32
    console.log(`The Result is ${result}`)
  }
  get faToCel(){
    let result = (this._fareheit -32) * (5/9) 
    console.log(`The Result is ${result.toFixed(2)}°F`)
  }
}

const celcios1 = new Temperature(35,154)
celcios1.farenheit = 157
console.log(celcios1.farenheit)

celcios1.faToCel
