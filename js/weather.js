// API key. Replace with your API key
const APIKEY = '20b9617656d3a0c77905ba65cdf0a3db';
// City
const city = 'pasco';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  const template = `
    <h1>🌡️weather</h1>
    <data value="${data.name}" class="city">${data.name}</data>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
    <p>humidity
    <data value="${data.main.humidity}" class="unit">${data.main.humidity}</data>
    %</p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  `;


  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
  
});
