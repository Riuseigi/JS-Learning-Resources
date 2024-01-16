// super = keyword is used in classes to call the constructor access the properties and methods of a parent (superclass)

//        this = the object
//        super = the parent


class Animal {
  constructor(name,age){
    this.name =name;
    this.age = age;
  }
  move(speed){
    console.log(`This ${this.name} is moves at ${speed} kmph`)
  }
}


class Rabbit extends Animal{
  constructor(name,age,runSpeed){
    super (name, age)
    this.runSpeed = runSpeed
  }
  run(){
    console.log(`This ${this.name} is running`)
    super.move(this.runSpeed)
  }
}

class Fish extends Animal{
  constructor(name,age,swimSpeed){
    super (name, age)
    this.swimSpeed = swimSpeed
  }
  swim(){
    console.log(`This ${this.name} is swimming`)
    super.move(this.swimSpeed)
  }
}

class Hawk extends Animal{
  constructor(name,age,flySpeed){
    super (name, age)
    this.flySpeed = flySpeed
  }
  fly(){
    console.log(`This ${this.name} is flying`)
    super.move(this.flySpeed)
  }
}


const rabbit1 = new Rabbit("rabbit","23",34)
const fish1 = new Fish("fish","24",22)
const hawk2 = new Hawk("hawk","20",56)

fish1.swim()


