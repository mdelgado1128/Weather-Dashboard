
var weatherfunc = function () {

    var cityName = $(".searchInput").val();

    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        var iconImg = $("<img src=http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png>")

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;


        $(".header1").append(iconImg);
        $(".temperature").text("Temperature: " + tempF.toFixed(2));
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".windspeed").text("Windspeed: " + response.wind.speed + " MPH");
        // $(".uvIndex").text("UV Index: " + response.main.uv);

    });

};

var forecastfunc = function () {


    var cityName = $(".searchInput").val();
    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
            // $("forecast").text(response);
            // $("#dayForecast").text("5 Day Forescast" + response.main.uv);
         })


    for (var i = 1; i <= 5; i++) {

            var forecast = $("#dayForecast")
            var forecastBlock = $("<div>").addClass("container col-sm").text("edewd")
             var eachTemp = $("<div>").addClass("header1 col").text("edewd")
             var eachIcon = $("<div>").addClass("temperature").text("edewd")
             var eachHum = $("<div>").addClass("humidity").text("edewd")
            
            
            //  var iconImg = $("<img src=http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png>")

            //  .attr("id", i)
            forecastBlock.append(eachTemp)
            forecastBlock.append(eachHum)
            forecastBlock.append(eachIcon)
            forecast.append(forecastBlock)

        
            // $(".eachIcon").append(iconImg);
            // var tempF = (response.list[1].main.temp - 273.15) * 1.80 + 32;
            // $(".fore-cast").text(response.list[1].dt_txt);
            // $(".eachTemp").text("Temperature:" + tempF.toFixed(2));
            // $(".eachHum").text("Humidity:" + response.list[1].main.humidity);
        };



   
};

//  var previousSearch = function(){
// var searchCity =localStorage.getItem("cityName");
// // $(".previousCity").text(searchCity)

// var citySearch = document.getElementById(".previousCity")
// previousCity.textcontent = searchCity

//  citySearch.appendChild(searchCity)

//  };

$(".weatherBtn").on("click", function (event) {

    var cityName = $(".searchInput").val();

    weatherfunc()
    forecastfunc()


    localStorage.setItem("city", cityName);


    //  previousSearch()

});