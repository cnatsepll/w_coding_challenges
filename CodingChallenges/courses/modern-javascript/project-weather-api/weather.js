class Weather {
  constructor(city, state){
    this.apiKey = 'fa1fe8b32c3438a3acfa8e68615c7321';
    this.city = city;
    this.state = state;
  }
  // fetch weather from API
  async getWeather(){
    // setting up the API call
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}`);
    // setting the response returned from the API call
    const responseData = await response.json();
    // return the response data
    return responseData;
  }
  // Change Weather Location
  changeLocation(city,state){
    this.city = city;
    this.state = state;
  }
}