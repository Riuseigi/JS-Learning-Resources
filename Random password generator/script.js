// declare the onclick function
function generatePassword(){
    //initialize all DOM objects
    const passwordLength = Number(document.getElementById("passwordLength").value)
    const lowerCase = document.getElementById("lowerCase")
    const upperCase = document.getElementById("upperCase")
    const includeNumbers = document.getElementById("includeNumbers")
    const includeSymbols = document.getElementById("includeSymbols")
    const result = document.getElementById("result")

    //Initialize the characters
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = `!@#$%^&*()_+-={}[]|\:;"'<>,.?/~`

    // initialized the characters that allowed and password
    let charactersAllowed = "";
    let password = "";
    //Checked if the choices are check and add to the charactersAllowed
    charactersAllowed += lowerCase.checked ? lowerCaseChars : "";
    charactersAllowed += upperCase.checked ? upperCaseChars : "";
    charactersAllowed += includeNumbers.checked ? numberChars : "";
    charactersAllowed += includeSymbols.checked ? symbolChars : "";
    
    // Validate the lenght and if they choose a character to involve
    if(passwordLength <= 0){
        result.textContent = "You must input higher than 0"
    }
    else if(charactersAllowed === ""){
        result.textContent = "You must choose Characters"
    }
    else{
        
      // once passed, it generates random number that will get on characters allowed and pass characters to the password and depends to the length
        for(let i =0; i<passwordLength;i++){
            const randomChars = Math.floor(Math.random()*charactersAllowed.length)+1
            password += charactersAllowed[randomChars]

        }
        result.textContent = `Here is your password: ${password}`
          

    }



  
}
