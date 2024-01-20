// Fisher- Yates Algo


// const cards= ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

// shuffle(cards)
// console.log(cards)

// function shuffle(array){
//   for (let i = array.length - 1; i > 0; i--){
//     const random = Math.floor(Math.random()*(i+1));

//     [array[i],array[random]] = [array[random],array[i]]
//   }
// }

// using Built-in method

// cards.sort(()=> Math.random()-0.5)
// console.log(cards)



// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}

// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];

// Now pass this array to the bblSort() function
bblSort(arr);