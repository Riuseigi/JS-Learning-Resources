// .reduce = reduce the elements of an array to single value


// Example 1
// const prices = [5,30,10,25,15,20]

// const total = prices.reduce(sum)
// console.log(total)

// function sum(accumulator, elements){
//     return accumulator + elements;
// }


//Example 2

const grades = [76,56,78,98,87,95,75]

const maxNum = grades.reduce(getMax)

const minNum = grades.reduce(getMin)
console.log(minNum)
function getMax(accumulator, element){
        return Math.max(accumulator,element)
}
function getMin(accumulator, element){
    return Math.min(accumulator,element)
}