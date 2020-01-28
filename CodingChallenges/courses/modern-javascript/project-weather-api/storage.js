// creating the storage class
class Storage{
  // initializing constructor properties
  constructor(){
    this.city;
    this.state;
    this.defaultCity = 'Cleveland';
    this.defaultState = 'Ohio';
  }
// getting location data from the local storage if there is any
// if not we will set the location data to the default values
  getLocationData() {
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    if (localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }
    return {
      city: this.city,
      state: this.state
    }
  }
  // setting local storage properties to user selected values
  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}