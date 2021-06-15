
initWeather();
initMap();
function initWeather() { // weather
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        function buildList(data) { // juery

            let output = "";
            output += "<p>" + "<strong> Date: </strong>" + "</p>" + data.list[0].dt_txt;
            output += "<p>" + "<strong> Temp: </strong>" +  Math.round(data.list[0].main.temp_max) + "\xB0" + " / " + Math.round(data.list[0].main.temp_min) +"\xB0"+ "</p>";
            output += "<p>" + "<strong> Humidity: </strong>" + data.list[0].main.humidity;
            return output;
        }

        $('#weather').html(buildList(data)); // jquery
    });
}

function initMap() { //map
    //this is where i'm going to put map
    //MAPBOX_TOKEN here is my map id token const

}


