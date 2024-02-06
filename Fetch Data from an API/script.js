// fetch = Function used for making HTTP request to fetch 
//          resources. (JSON style data, images, files)
//          Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
//          fetch(url,{options})

//example 1
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch the resource")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))
const pokemonNameText =document.getElementById("pokemonNameText")
const pokemonTypeText = document.getElementById("pokemonType")
const imgElement = document.getElementById("pokemonSprite")
const pokemonIDText = document.getElementById("pokemonID")

async function fetchData(){
    
    
    try{
        const pokemonNameInput = document.getElementById("pokemonName").value.toLowerCase();
    
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInput}`)
        
        if(!response.ok){
            throw new Error ("Could not fetch Data")
        }
        const data = await response.json();
        console.log(data)
        const pokemonTypes = data.types.map(typeObject => typeObject.type.name);
        pokemonTypeText.textContent = `Type: ${pokemonTypes}`
        const pokemonName = data.name.toUpperCase();
        pokemonNameText.textContent = `${pokemonName}`
       const pokemonSprite = data.sprites.front_default;
       imgElement.src = pokemonSprite;
       imgElement.style.display = "block"
       const pokemonID = data.id;
       pokemonIDText.textContent = `ID: ${pokemonID}`

    }
    catch(error){
        pokemonNameText.textContent = error
        
    }
}