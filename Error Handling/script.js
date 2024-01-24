// Error = An object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection


//try {} = Enclosses code that might potentially cause an error
// catch{} = Catch and handle any thrown Errors from try{}

// Finally {} = (Optional) Always executes. Used mostly for clean up.

// example: close files, close connections, release resources

// Example 1
// try{
//     console.log("Hello");
    //Network Errors
    //Promise Rejection
    //Security Errors
// }
// catch(error){
//     console.error(error)
// }
// finally{
    //Close Files
    //Close Connections
    //Release Resources
//     console.log("This always Execute")
// }
// console.log("You have reached the end")


try{
    const dividend = Number(window.prompt("Enter a dividend:"));
    const divisor = Number(window.prompt("Enter a Divisor: "));

    if(divisor==0){
        throw new Error("You can't divide 0")
    }
    if(isNaN(dividend)|| isNaN(divisor)){
        throw new Error("Values must be number")
    }
    const result = dividend / divisor;
    console.log(result)

}
catch(error){
    console.error(error)
}
console.log("You have reached the end")