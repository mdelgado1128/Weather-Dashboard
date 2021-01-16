
var weatherfunc = function (cityName) {

    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
    

        var iconImg = $("<img src=http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png>")

        $(".header1").html(iconImg);
        $(".header1").append(response.name);
        $(".header1").append("(" + new Date(response.dt).toLocaleDateString() + ")" );
        $(".temperature").text("Temperature: " + response.main.temp);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".windspeed").text("Windspeed: " + response.wind.speed + " MPH");
       
    });

    var lon =0;
    var lat =0;


    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        


    })


};

var forecastfunc = function (cityName) {

    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var forecast = $("#5forecast")
          forecast.html("")

        for (var i = 0; i < response.list.length; i = i + 8) {

            var forecastBlock = $("<div>").addClass("header2 col-2 ")
            var eachIcon = $("<h1>").addClass(" header3 eachIcon")
            var eachTemp = $("<div>").addClass("eachTemp")
            var eachHum = $("<div>").addClass("eachHum")

            var iconImg = $("<img src=http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png>")
           
        
            eachIcon.text("(" + new Date(response.list[i].dt_txt).toLocaleDateString() + ")" );
            eachTemp.text("Temperature:" + response.list[i].main.temp);
            eachHum.text("Humidity:" + response.list[i].main.humidity);

            eachIcon.append(iconImg);
            forecastBlock.append(eachIcon)
            forecastBlock.append(eachTemp)
            forecastBlock.append(eachHum)
            forecast.append(forecastBlock)
        };
    })
};

// var uvIndex = function(){
//     var lon =$(".searchInput").val();
//     // var lat =$(".searchInput").val();


//     var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";
//     var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lon + "&lon=" + lon + "&appid=" + APIKey;

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response){
//         console.log(response)



//     })


// };



 var previousSearch = function(cityName){
var cities =JSON.parse(localStorage.getItem("city")) || [];
var searchCities = [...new Set(cities)]
searchCities.push(cityName)
localStorage.setItem("city", JSON.stringify(searchCities))

showCities()
 };

 var showCities = function(){
   var loc = $(".previousCity")
   loc.html("")
   var cities = JSON.parse(localStorage.getItem("city")) || []
   cities.forEach(city => {
       var cityEl =$("<li>").text(city).addClass("list-group-item list-group-item-action").on("click", function(){
        weatherfunc(city)
        forecastfunc(city)
       })
       loc.append(cityEl)
   });
 }

$(".weatherBtn").on("click", function (event) {

    var cityName = $(".searchInput").val();
   
  previousSearch(cityName)
    weatherfunc(cityName)
    forecastfunc(cityName)


});