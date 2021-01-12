
var weatherfunc = function (cityName) {

   

    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        var iconImg = $("<img src=http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png>")

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;


        $(".header1").html(iconImg);
        $(".temperature").text("Temperature: " + tempF.toFixed(2));
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".windspeed").text("Windspeed: " + response.wind.speed + " MPH");
        // $(".uvIndex").text("UV Index: " + response.main.uv);

    });

};

var forecastfunc = function (cityName) {


    // var cityName = $(".searchInput").val();
    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        // $("forecast").text(response);
        // $("#dayForecast").text("5 Day Forescast" + response.main.uv);
        var forecast = $("#5forecast")
          forecast.html("")

        for (var i = 0; i < response.list.length; i = i + 8) {

           
            var forecastBlock = $("<div>").addClass("header2 col-2 ")
            var eachIcon = $("<h1>").addClass(" header3 eachIcon")
            var eachTemp = $("<div>").addClass("eachTemp")
            var eachHum = $("<div>").addClass("eachHum")


            var iconImg = $("<img src=http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png>")

            //  .attr("id", i)



           
            var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
            // var arr = (response.list;)
            eachIcon.text("(" + new Date(response.list[i].dt_txt).toLocaleDateString() + ")" );
            eachTemp.text("Temperature:" + tempF.toFixed(2));
            eachHum.text("Humidity:" + response.list[i].main.humidity);


            eachIcon.append(iconImg);
            forecastBlock.append(eachIcon)
            forecastBlock.append(eachTemp)
            forecastBlock.append(eachHum)
            forecast.append(forecastBlock)


        };

        // $.each()




    })



};

 var previousSearch = function(cityName){
var cities =JSON.parse(localStorage.getItem("city")) || [];
// $(".previousCity").text(searchCity)
var searchCities = [...new Set(cities)]
searchCities.push(cityName)
localStorage.setItem("city", JSON.stringify(searchCities))
// var citySearch = document.getElementById(".previousCity")
// previousCity.textcontent = searchCity

//  citySearch.appendChild(searchCity)
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
    

    // localStorage.setItem("city", cityName);


    //  previousSearch()

});