// String methods = allow you to manipulate and work text(strings)

let userName = "Riuseigi "


// charAt Method
 // userName.charAt(0)
 // console.log(userName.charAt(0))

// indexOf method 
//  userName.indexOf('i')
//  console.log(userName.indexOf('i'))

//lastIndexof Methods
//  console.log(userName.lastIndexOf('i'))

// length
// console.log(userName.length)


// trim method
// userName = userName.trim()
// console.log(userName)

// Uppercase
// userName = userName.toUpperCase()
// console.log(userName)

// Lower Case method
// userName = userName.toLowerCase()
// console.log(userName)

// Repeat method
// userName = userName.repeat(3)
// console.log(userName)


// startsWith method returns True and false
// let result = userName.startsWith(" ")
// console.log(result)

// if(result){
//     console.log("Your Username can't begin with")
// } else{
//     console.log(userName)
// }


//endsWith
// let result = userName.endsWith(" ")
// if(result){
//     console.log("Your Username can't end with ' ' ")
// } else{
//     console.log(userName)
// }


//includes
// let result = userName.includes(" ")
// if(result){
//     console.log("Your Username can't include with ' ' ")
// } else{
//     console.log(userName)
// }

// replaceAll= nirereplace niya lahat ng value na gusto mo palitan
// let phoneNumber = "123-456-7890"
// phoneNumber = phoneNumber.replaceAll("-","/")
// console.log(phoneNumber)


//padStart = basta nagoccupy sa start ng character maachieve niya gusto mong ilagay na count
// let phoneNumber = "123-456-7890"
// phoneNumber = phoneNumber.padStart("15","0")
// console.log(phoneNumber)

//padStart = basta nagoccupy sa end ng character maachieve niya gusto mong ilagay na count
let phoneNumber = "123-456-7890"
phoneNumber = phoneNumber.padEnd("15","0")
console.log(phoneNumber)
