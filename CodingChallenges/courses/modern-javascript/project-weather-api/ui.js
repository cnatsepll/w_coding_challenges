// create the UI class
class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }
  // taking UI properties and assigning new values to them from the returned json object
  // we are expecting a single days worth of stats, so any property that would be in an 
  // array is set to the [0] position
  paint(weather){
    console.log(weather);
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humiditiy : ${weather.main.humidity}`;
    this.feelsLike.textContent = `Pressure : ${weather.main.pressure}`;
    this.dewpoint.textContent = `Visibility : ${weather.visibility}`;
    this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;
  }
}