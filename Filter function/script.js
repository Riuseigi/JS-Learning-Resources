// .filter() = creates a new array by filtering out elements


//Example 1
// let numbers = [1,2,3,4,5,6,7];

// let  evenNums = numbers.filter(isEven)
// let oddNums = numbers.filter(isOdd)
// console.log(oddNums)


// function isEven(element){
//         return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

//Example 2

// const ages = [16,17,18,18,20,60]
// const adults = ages.filter(isAdult)
// const minors = ages.filter(isMinor)
// console.log(minors)
// function isAdult(element){
//     return element >= 18;
// }

// function isMinor(element){
//     return element < 18;
// }


// Example 3

const words = ["applle", "orange", "banana", "kiwi", "pomegranate", "coconut"]

const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords)

console.log(longWords)
function getShortWords(element){
    return element.length <=6;
}

function getLongWords(element){
    return element.length>6;
}


