// How to accept User Input

// Easy Way = window prompt

 let username;

// username = window.prompt("What's your username?")

// console.log(username)

// Professional Way

document.getElementById("mySubmit").onclick =function(){
    username = document.getElementById("myText").value
   document.getElementById("myH1").textContent = `Hello ${username}`
}

