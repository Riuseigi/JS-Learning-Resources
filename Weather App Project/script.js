// Weather app

// Initialize the DOM Elements
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

//API key fro weatherapi
const apiKey = "fcc13824fac7c3854fa83934059d3ea4";


/* This code is adding an event listener to the weatherForm element for the "submit" event. When the
form is submitted, it prevents the default form submission behavior (which would refresh the page)
using `event.preventDefault()`. */
weatherForm.addEventListener("submit",async (event) => {
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
            const weatherData =  await getWeatherData(city);
            displayWeatherInfo(weatherData)
        }catch(error){
            console.error(error)
            displayError(error)
        }
    }
    else{
        displayError("Please Enter a City")
    }
});


/**
 * The function `getWeatherData` is an asynchronous function that fetches weather data for a given city
 * using the OpenWeatherMap API.
 * @param city - The `city` parameter is a string that represents the name of the city for which you
 * want to fetch weather data.
 * @returns a promise that resolves to the weather data for the specified city.
 */
async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(apiUrl)
    
    if(!response.ok){
        throw new Error("Could not Fetch weather Data")
    }
    return await response.json();
    
}

//function that display all the weather details of a specific city that enters by a user
function displayWeatherInfo(data){
        console.log(data)

        //Destructuring to extract the data from api
        const {name: city,
                main: {temp, humidity,},
                weather:[{description, id}]} = data;
                console.log(data);
                card.textContent= "";
                console.log(city)
                
        card.style.display = "flex"

        const cityDisplay = document.createElement('h1');
        const tempDisplay = document.createElement('p');
        const humidityDisplay = document.createElement('p');
        const descDisplay = document.createElement('p');
        const weatherEmoji = document.createElement('p');
        
        cityDisplay.textContent = city;
        cityDisplay.classList.add("cityDisplay");
        
       
        tempDisplay.textContent = `${Math.floor(temp- 273.15).toFixed(1)}°C`;
        tempDisplay.classList.add("tempDisplay");

        
        humidityDisplay.textContent =`Humidity: ${humidity}%`;
        humidityDisplay.classList.add("humidityDisplay");

       
        descDisplay.textContent = description;
        descDisplay.classList.add("descDisplay")

        weatherEmoji.textContent = getWeatherEmoji(id)
        weatherEmoji.classList.add("weatherEmoji")
        card.appendChild(cityDisplay)
        card.appendChild(tempDisplay)
        card.appendChild(humidityDisplay)
        card.appendChild(descDisplay)
        card.appendChild(weatherEmoji)



}

// Validate the weatherID to convert into emoji
function getWeatherEmoji(weatherID){

    switch (true) {
   
        case (weatherID >= 200 && weatherID <= 232):
            return '🌩️';
        case (weatherID >= 300 && weatherID <= 321):
            return '🌦️';
        case (weatherID === 800):
            return '🌤️';
        case weatherID >= 500 && weatherID <= 531:
            return '🌧️';
        case weatherID >= 600 && weatherID <= 622:
            return '🌨️';
        case (weatherID >= 701 && weatherID <= 781):
            return '🌫️';
        case (weatherID>=801 && weatherID<900):
            return `☁️`;
        
        default:
          return '❓'; // Default icon
      }

}

//function that display error
function displayError(message){
   
    const errorDisplay = document.createElement("p")
   
    errorDisplay.textContent = message;
    
    errorDisplay.classList.add("errorDisplay")
    card.style.display = "flex"
    card.appendChild(errorDisplay)
}