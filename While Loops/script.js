// while loop = repeat some Code while some condition is true

// let username;

// while(username==="" || username === null){
//     username = window.prompt("Enter your name: ")
// }


//the body of the Do while loop will execute at least once, even if the condition is false. The while loop, on the other hand, only executes the body of the loop if the condition is true.
// do{
//     username = window.prompt("Enter your name: ")
// } while(username==="" || username === null)

// console.log(`Hello ${username}`)





let loggedIn = false;

let username;
let password;


while(!loggedIn){
    username = window.prompt(`Enter your username: `)
    password = window.prompt(`Enter your password: `)

    if(username === "myUsername" && password=== "myPassword"){
        loggedIn = true
        console.log("You are logged in")
    }else{
        console.log("Invalid Credentials")
    }
}