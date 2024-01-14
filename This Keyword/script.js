// this = reference to the object where THIS is used(the object dependes on the immediate context)


const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayhello: function(){
    // console.log(`Hi! i am ${person1.name}`) same method
    console.log(`Hi! i am ${this.name}`)
  },
  eat: function(){
    console.log(`${this.name} is eating ${this.favFood}`)
  }
}

const person2 = {
  name: "Patrick",
  favFood: "Pizza",
  sayhello: function(){
    // console.log(`Hi! i am ${person1.name}`) same method
    console.log(`Hi! i am ${this.name}`)
  },
  eat: function(){
    console.log(`${this.name} is eating ${this.favFood}`)
  }
}


person2.sayhello()
person2.eat()