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

class Person{
  constructor(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  set firstName(newFirstName){
      if(typeof newFirstName === "string" && newFirstName.length > 0){
        return this._firstName = newFirstName
      }else{
        console.error(`The First Name should be a String and greater than 0`)
      }
  }
  set lastName(newLastName){
    if(typeof newLastName === "string" && newLastName.length > 0){
       this._lastName = newLastName
    }else{
      console.error(`The Last Name should be a String and greater than 0`)
    }
  }
  set age(newAge){
    if(typeof newAge === "number" && newAge > 0){
      this._age = newAge
    }else{
      console.error(`The age should be a number and greater than 0`)
    }
  }

  get firstName(){
    return this._firstName
  }
  get lastName(){
    return this._lastName
  }
  get age(){
    return this._age
  }

}

const person1 = new Person("Diana","Palaganas",22)
person1.age = "n"

console.log(person1.age)
