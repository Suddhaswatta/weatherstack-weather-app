const express = require("express")

const path = require("path")
const {getWeatherData} = require("./service/weather-service")
const app = express()
const port = 3000

const template = path.join(__dirname,"../public")

app.use(express.static(template))

app.get("/weather",(req,res)=>{
    getWeatherData("Texas",(data)=>{
        
    })
    
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})