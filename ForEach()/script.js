// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each elements  
//instances executes a provided function once for each array element.
//array.forEach(callback)

// element, index, array are provided






// let numbers = [1,2,3,4,5]


// numbers.forEach(cube)
// numbers.forEach(displayConsole)

// function double(element, index, array){
//     array[index] = element *2
// }
// function triple(element, index, array){
//     array[index] = element *3
// }

// function square(element,index,array){
//     array[index] = Math.pow(element,2)
// }
// function cube(element,index,array){
//     array[index] = Math.pow(element,4)
// }

// function displayConsole(element){
//     console.log(element)
// }



let fruits = ["apple", "mango", "Orange", "strawberry","banana"]


fruits.forEach(capFirstLetter)
fruits.forEach(displayConsole)
function toUpperCase(element, index, array){
    array[index] = element.toUpperCase()
}
function capFirstLetter(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+ element.slice(1)
}
function lowerCase(element, index, array){
    array[index] = element.toLowerCase()
}

function displayConsole(element){
    console.log(element)
}


