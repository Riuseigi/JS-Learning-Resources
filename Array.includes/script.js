//Array.includes = method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


//Machine Problem 1: Given an array of numbers, write a function that checks if a given number is present in the array using the array.includes() method. If the number is found, return true; otherwise, return false.


const numbers = [1, 2, 3, 4, 5];

function checkNumber(arr, num) {
    // Use array.includes() to check if the number is present in the array
    return arr.includes(num);
}

console.log(checkNumber(numbers, 3)); // Output: true
console.log(checkNumber(numbers, 6)); // Output: false


//what if it is in array
const testNumbers = [3, 6, 1];
function checkNumbersArray(arr,tesArr){
    return tesArr.map(num => arr.includes(num));
}
console.log(checkNumbersArray(numbers, testNumbers));


//Machine Problem 2: Given an array of strings and a target string, write a function that checks if the target string is included in any of the strings in the array. The function should return true if the target string is found in any of the strings (ignoring case), and false otherwise.

const words = ["apple", "banana", "Orange", "grape"];
const target = "OrAnGe";

// function findTargetInWords(arr, target) {

//     target = target.toLowerCase();
//     arr.forEach((element, index, array) => {
//         array[index] = element.toLowerCase();
       
//     });
//     return arr.includes(target);
// }

// console.log(findTargetInWords(words, target)); 

//Challenge: Modify the function to also accept an optional third argument, a boolean flag called ignoreCase, which, if true, indicates that the function should perform a case-insensitive search. If ignoreCase is not provided, it should default to true.

function findTargetInWords(arr, target, ignoreCase = true) {

    if(ignoreCase){
        target = target.toLowerCase();
        arr.forEach((element, index, array) => {
            array[index] = element.toLowerCase();
           
        });
        return arr.includes(target);
    }
    else{
        return arr.includes(target);
    }
   
}

console.log(findTargetInWords(words, target)); // Output: true
console.log(findTargetInWords(words, target, false)); // Output: false


//Machine Problem 3: Write a function that takes two arrays of numbers and returns a new array containing only the unique numbers that are present in both arrays, without duplicates. The order of the numbers in the output array should match their order of appearance in the input arrays.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 2 , 5, 6, 7];

function findCommonUniqueNumbers(arr1, arr2) {
    
    const unique = arr1.map(element =>{
        if (arr2.includes(element)) {
            return element;
          }
        
    }).filter(element => element !== undefined);
    return unique;
    
}

console.log(findCommonUniqueNumbers(arr1, arr2)); // Output: [3, 4, 5]

//Challenge: Modify the function to also accept an optional third argument, a boolean flag called sort, which, if true, indicates that the function should sort the output array in ascending order. If sort is not provided, it should default to false.

function findCommonUniqueNumbers(arr1, arr2, sort = false) {
    const unique = arr1.map(element =>{
        if (arr2.includes(element)) {
            return element;
          }
        
    }).filter(element => element !== undefined);
    if(sort){
        return unique.sort((a,b) => {
          return a-b;
        })
    }
    else{
        return unique;
    }
}

console.log(findCommonUniqueNumbers(arr1, arr2)); // Output: [3, 4, 5]
console.log(findCommonUniqueNumbers(arr1, arr2, true)); // Output: [3, 4, 5]

