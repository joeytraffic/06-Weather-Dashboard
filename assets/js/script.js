
var searchBtn = $("#search-button");

var preLat = "lat=";
var preLon = "&lon=";

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?";
const geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=";
const APIKey = "&appid=3a0745b6c5398a233987de0276531a08";
const fahrenheit = "&units=imperial";

var queryGeoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + currentCity + APIKey;
var queryURL = ["http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + APIKey];

var currentCity = $("#search-input");
var tempMain = $("#temp-main");
var windMain = $("#wind-main");
var humidityMain = $("#humidity-main");

var dayOne = $("#day1");
var dayTwo = $("#day2");
var dayThree = $("#day3");
var dayFour = $("#day4");
var dayFive = $("#day5");

var tempOne = $("#temp1");
var tempTwo = $("#temp2");
var tempThree = $("#temp3");
var tempFour = $("#temp4");
var tempFive = $("#temp5");

var windOne = $("#wind1");
var windTwo = $("#wind2");
var windThree = $("#wind3");
var windFour = $("#wind4");
var windFive = $("#wind5");

var humidityOne = $("#humidity1");
var humidityTwo = $("#humidity2");
var humidityThree = $("#humidity3");
var humidityFour = $("#humidity4");
var humidityFive = $("#humidity5");

// http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}




// $(document).ready(function() {
    console.log("testing,testing,123");

    function fetchGeoAPI() {
        console.log("ahem");
        fetch(geoURL + currentCity + APIKey).then(function (response) {
            if(response.ok){
                response.json()
        .then(function (data) {
                console.log(data);
                currentCity.text(data.name);
                var lat = data.lat;
                var lon = data.lon;
            })
            console.log(queryGeoURL)
            }
        })
    }

    function fetchAPI(){
        console.log("AHEM!");
        fetch(apiURL + preLat + lat + preLon + lon + APIKey + fahrenheit).then(function (response){
            if(response.ok){
                response.json()
            .then(function (data){
                console.log(data);
                tempMain.text(data.main.temp);
                windMain.text(data.wind.speed);
                humidityMain.text(data.main.humidity);
            })
            }
        })
    }
// })

searchBtn.click(function(){
    alert("click!");
    fetchGeoAPI;
    fetchAPI;
})