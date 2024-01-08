// function = a section of reusable code
// declare code once, use it whenever you want.
// call the function to execute that code
// let username = "Riuseigi"
// let age = 24;
// function happyBirthday(username, age){
//     console.log("Happy Birthday to you")
//     console.log("Happy Birthday to you")
//     console.log(`Happy Birthday dear ${username}`)
//     console.log("Happy Birthday to you")
//     console.log(`You are ${age} years old`)
// }
// happyBirthday("Diana",22)
// happyBirthday("Spongebob",30)



//With Return Keyword

function add(x,y){
    // let result = x+y
    // return result

    return x+y

}

// let answer = add(21,22)



function substract(x,y){
    answer = x-y
    return answer

}
function multiply(x,y){
    answer = x*y
    return answer

}
function divide(x,y){
    answer = x/y
    return answer

}

function isEven(number){
    
    return number%2===0 ? true: false

}

function isValidEmail(email){
    // if(email.includes("@")){
    //     return true
    // }
    // else{
    //     return false
    // }

    return email.includes("@") ? true :false
}

console.log(isValidEmail("troyliamjarata@gmail.com"))
console.log(isEven(2))
console.log(add(3,2))
console.log(substract(2,3))

