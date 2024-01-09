// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

//spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

// function openFridge(...foods){
//     console.log(...foods)
// }
// function getFood(...foods){
//     return foods
// }

// const food1 = "ramen"
// const food2 = "cake"
// const food3 = "sushi"
// const food5 = "spaghetti"
// const food6 = "iced coffee"

// openFridge(food1,food2,food3,food5,food6)

// const foods = getFood(food1,food2,food3,food5,food6)

// console.log(foods)


// function sum(...numbers){
//         let result =0;
//         for(let number of numbers){
//             result+=number
//         }
//         return result
// }

// function getAverage(...numbers){
//     let result =0;
//     for(let number of numbers){
//         result+=number
//     }
//     return result /numbers.length
// }

// let total = sum(4,5,6)
// console.log(`The total of purchase is ₱${total}`)

// const total = getAverage(75, 100 ,85 , 90, 50)
// console.log(total)


function combineString(...strings){
    return strings.join(" ")
}

const fullName = combineString('Riusegi',"Tempest","IV")
console.log(fullName)



