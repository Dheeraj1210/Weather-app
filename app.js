
const weatherData = document.getElementById("weather-data")

const city = document.getElementById('city-input')

const form = document.querySelector('form');
const temp = document.querySelector('temp')
const degree = document.querySelector('degree')
const humidity = document.querySelector('humidity')
const wind = document.querySelector('wind')



form.addEventListener('submit', (e)=>{
	e.preventDefault()
	const cityVal = city.value;
	getWeather(cityVal)
})


const apikey = '7087bc7df1a851aa8a1a99cab555aa6c';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function getWeather(cityVal){
	const response = await fetch(apiUrl + cityVal + `&appid=${apikey}`);
	var data = await response.json();
	console.log(data)
	const temperature = `${Math.floor(data.main.temp)} °C`; 
    const degree = `feels like:${Math.floor(data.main.temp)} °C`;
    const humidity = `humidity:${data.main.humidity} %`;
    const wind = `wind speed:${data.wind.speed} m/s`;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.querySelector('.icon').innerHTML =`<img src="http://openweathermap.org/img/wn/${icon}.png" 
    alt="weather Icon">`;

	 document.querySelector('.temp').innerHTML = temperature;
     document.querySelector('.degree').textContent = degree;
     document.querySelector('.humidity').textContent = humidity;
     document.querySelector('.wind').textContent = wind;
     document.querySelector('.description').textContent = description;

}


