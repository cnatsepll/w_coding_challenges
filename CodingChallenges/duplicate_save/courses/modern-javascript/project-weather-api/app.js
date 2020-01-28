const ui = new UI();
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// initialize the weather class object with info from the returned local storage object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event listener
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  // change weather location to values
  weather.changeLocation(city, state);
  // set location in local storage
  storage.setLocationData(city, state);
  // get and display weather
  getWeather();
  // close modal with jquery
  $('#locModal').modal('hide');
});



function getWeather(){
  // weather.getWeather is async so we have to treat it like a promise
  weather.getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => console.log(err));
}
