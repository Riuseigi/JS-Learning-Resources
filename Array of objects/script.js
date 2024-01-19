// The array of objects represent storing multiple objects in a single name. In an array of objects, the data can be accessed randomly by using the index number. Reduce the time and memory by storing the data in a single variable.


const fruits = [{name: "apple",color: "red", calories: 85},
                {name: "orange",color: "orange", calories: 45},
                {name: "banana",color: "yellow", calories: 105},
                {name: "coconut",color: "white", calories: 159},
                {name: "pineapple",color: "yellow", calories: 37},]


console.log(fruits[0].name) //apple
console.log(fruits[2].calories) // 105 which is banana[2]


fruits.push({name: "grapes",color: "purple", calories: 62})

//For Each method
fruits.forEach((fruit) => {
  console.log(fruit.name)
})
//apple
//orange
//banana
//coconut
//pineapple
//grapes

// Map Method

const fruitNames = fruits.map((fruit) => {
    return fruit.name
})
const fruitColor = fruits.map((fruit) => {
  return fruit.color
})
const fruitCalories = fruits.map((fruit) => {
  return fruit.calories
})
console.log(fruitCalories)
// [
//   "red",
//   "orange",
//   "yellow",
//   "white",
//   "yello",
//   "purple"
// ]


//filter method
const yellowFruit = fruits.filter((fruit) => {
    return fruit.color === "yellow" ;
})

const lowCalories = fruits.filter((fruit) => {
  return fruit.calories <100 ;
})
const highCalories = fruits.filter((fruit) => {
  return fruit.calories >100 ;
})
console.log(highCalories)
// [
//   {
//       "name": "banana",
//       "color": "yellow",
//       "calories": 105
//   },
//   {
//       "name": "coconut",
//       "color": "white",
//       "calories": 159
//   }
// ]


// Reduce method
const maxCaloriefruit = fruits.reduce((max,fruit) => fruit.calories>max.calories ? fruit:max )
const minCalorieFruit = fruits.reduce((min,fruit) => fruit.calories<min.calories ? fruit:min )

console.log(maxCaloriefruit)
console.log(minCalorieFruit)



