// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class owns anything static)

// When to Use Static Methods:

// When a method doesn't need to access or modify object state.
// When a method needs to be shared across all instances of the class.
// When you want to create utility methods that can be used independently of objects.
// When you want to create factory methods for object creation.
// When you need to access or manage class-level data or state.





//example 1
// class MathUtil{
//   static PI = 3.14159;
//   static getDiameter(radius){
//     return radius *2
//   }
//   static getCircumference(radius){
//     return 2 * this.PI * radius
//   }
//   static getArea(radius){
//     return this.PI * radius * radius
//   }
  
// }


// console.log(MathUtil.PI)

// console.log(MathUtil.getDiameter(10))

// console.log(MathUtil.getCircumference(10))

// console.log(MathUtil.getArea(10))



//example 2

class User{
    static userCount= 0
    constructor(username){
        this.username = username
        User.userCount++
    }
    static getUserCount(){
      console.log(`There are ${User.userCount} users`)
    }
    sayhello(){
      console.log(`Hi my username is ${this.username}`)
    }
}

const user1 = new User("Spongebob")
const user2 = new User("Patrick")
const user3 = new User("Sandy")

console.log(user1.username)
console.log(user2.username)
console.log(user3.username)
user1.sayhello()
User.getUserCount()

console.log(User.userCount)