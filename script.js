


const check = async(city)=>{

  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '68ac7afe41msh6fa28ec124ebb98p170f61jsn6e579f902ca1',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
    
}




/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
let mcity= document.getElementById("city-name")
let weather= document.getElementById("weather-type")
let atemp= document.getElementById("temp")
let minTemp= document.getElementById("min-temp")
let maxTemp= document.getElementById("max-temp")

// API_KEY for maps api


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  
  
  let weatherData= await check(city)
  console.log(weatherData)
  showWeatherData(weatherData)
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  mcity.innerText= weatherData.name
  atemp.innerText= weatherData.main.temp
  maxTemp.innerText= weatherData.main.temp_max
  minTemp.innerText= weatherData.main.temp_min
  weather.innerText= weatherData.weather[0].main
  
  
}

