const {getWeatherData} = require("./service/weather-service")

getWeatherData("France",(data)=>{
    console.log(data);
});
