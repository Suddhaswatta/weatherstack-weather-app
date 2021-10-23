const req = require('request')

const access_key = "f2ae3814e6c8b6f7436ec0b7efffe702"
const api =  "http://api.weatherstack.com/current"

const BASE_URL = `${api}?access_key=${access_key}`

const weatherData = (location,callback) => {
    const query = `${BASE_URL}&query=${location}`
    console.log(query);
    req.get(query,(error,res)=>{
        if(error){
            console.log(`Connection error ....`);
        }else{
            callback(JSON.parse(res.body))
        }
    })
}

module.exports = {
    getWeatherData : weatherData
}