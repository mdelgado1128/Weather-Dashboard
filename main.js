


var weatherfunc = function () {

    event.preventDefault();

    var cityName = $("#searchInput").val();

    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";

    console.log(cityName);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var iconcode = (response.weather[0].icon); 
        var iconUrl = "http://openweathermap.org/img/wn/"+ iconCode + ".png"
        $('#wicon').attr('src', iconurl);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".header1").text(iconUrl);
        $(".temperature").text("Temperature: " + tempF.toFixed(2));
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".windspeed").text("Windspeed: " + response.wind.speed + " MPH");
        $(".uvIndex").text("UV Index: " + response.main.uv);


    });

};

var forecastfunc = function () {

    event.preventDefault();

    var cityName = $("#searchInput").val();
    var APIKey = "297d1db0f7aa491ec1ec6a9e9df90610";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
    

        var forecastBlock = $("<div>").addClass("fore-cast row")
        var forecast = $(".forecast")

        for (var i = 1; i <= 5; i++) {
            
            var eachDay = $("<div>").addClass("eachDay col-2 box" ).attr("id", i)
            
        
            forecastBlock.append(eachDay)
            forecast.append(forecastBlock)
        

        }

        $(".eachDay").text(response.list[0].main.temp);

    
        // $("forecast").text(response);
        // $("#dayForecast").text("5 Day Forescast" + response.main.uv);
        
    });
};





$(".weatherBtn").on("click", function (event) {
    weatherfunc()
    forecastfunc()

});

