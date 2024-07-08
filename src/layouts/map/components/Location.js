//Location object to store all the location information

export class Location {
    constructor(
      name,
      latitude,
      longitude,
      locationRating, // changed
      waterTemp, //changed
      waterFlow, //changed
      locationTemp, // changed
      locationCloudRating, // Changed
      locationWeatherConditions, // Changed
      locationWind
    ) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
      this.locationRating = locationRating;
      this.waterTemp = waterTemp;
      this.waterFlow = waterFlow;
      this.locationTemp = locationTemp;
      this.locationCloudRating = locationCloudRating;
      this.locationWeatherConditions = locationWeatherConditions;
      this.locationWind = locationWind;
    }
  
    // Getter methods
    getName() {
      return this.name;
    }
  
    getLatitude() {
      return this.latitude;
    }
  
    getLongitude() {
      return this.longitude;
    }
  
    getLocationRating() {
      return this.locationRating;
    }
  
    getWaterTemp() {
      return this.waterTemp;
    }
  
    getWaterFlow() {
      return this.waterFlow;
    }
  
    getLocationTemp() {
      return this.locationTemp;
    }
  
    getLocationCloudRating() {
      return this.locationCloudRating;
    }
  
    getLocationWeatherConditions() {
      return this.locationWeatherConditions;
    }
  
    getLocationWind() {
      return this.locationWind;
    }
  
    // Setter methods
    setName(name) {
      this.name = name;
    }
  
    setLatitude(latitude) {
      this.latitude = latitude;
    }
  
    setLongitude(longitude) {
      this.longitude = longitude;
    }
  
    setLocationRating(locationRating) {
      this.locationRating = locationRating;
    }
  
    setWaterTemp(waterTemp) {
      this.waterTemp = waterTemp;
    }
  
    setWaterFlow(waterFlow) {
      this.waterFlow = waterFlow;
    }
  
    setLocationTemp(locationTemp) {
      this.locationTemp = locationTemp;
    }
  
    setLocationCloudRating(locationCloudRating) {
      this.locationCloudRating = locationCloudRating;
    }
  
    setLocationWeatherConditions(locationWeatherConditions) {
      this.locationWeatherConditions = locationWeatherConditions;
    }
  
    // Other methods
    getCoordinates() {
      return `(${this.latitude}, ${this.longitude})`;
    }
    setLocationWind(locationWind) {
      this.locationWind = locationWind;
    }
  
    // You can add more methods as needed for your specific use case
  }
  
  
  