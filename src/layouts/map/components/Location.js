//Location object to store all the location information

class Location {
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
  
  // Info for buffalo Dock
  const LocationBuffaloDock = new Location(
    "Buffalo Camp Ground Dock",
    44.428767,
    -111.356669,
    4.5,
    25,
    10,
    1000,
    3,
    "Partly Cloudy",
    0
  );
  
  // Info for buffalo Dock
  const LocationMacksInn = new Location(
    "Mack's Inn",
    44.500823,
    -111.335903,
    4.5,
    25,
    10,
    20,
    3,
    "Partly Cloudy",
    0
  );
  
  // Info for buffalo Dock
  const LocationHenrysLakeBoatLaunch = new Location(
    "Henry's Lake Boat Launch",
    44.620232,
    -111.372373,
    4.5,
    25,
    10,
    20,
    3,
    "Partly Cloudy",
    0
  );
  
  // Info for buffalo Dock
  const LocationThreeDollarBridge = new Location(
    "Three Dollar Bridge",
    44.830998,
    -111.514739,
    4.5,
    25,
    10,
    20,
    3,
    "Partly Cloudy",
    0
  );
  
  // Make the instance globally accessible
  if (typeof window !== "undefined") {
    window.LocationBuffaloDock = LocationBuffaloDock;
    window.LocationThreeDollarBridge = LocationThreeDollarBridge;
    window.LocationHenrysLakeBoatLaunch = LocationHenrysLakeBoatLaunch;
    window.LocationMacksInn = LocationMacksInn;
  }
  
  //plan: Create a const for each location and make them global
  // put all consts in a list and make that global
  // each time the website is loaded, it fetches the most current data and updates the list of objects
  
  //list of locations in an array
  // Create an empty array to store locations
  const locations = [];
  
  locations.push(window.LocationBuffaloDock);
  locations.push(window.LocationThreeDollarBridge);
  locations.push(window.LocationHenrysLakeBoatLaunch);
  locations.push(window.LocationMacksInn);
  
  // Make the array globally accessible
  if (typeof window !== "undefined") {
    window.Locations = locations;
  }
  