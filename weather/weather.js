var request = require('request');


var getWeather = (lat,lng,callback) => 
{
    request({
    url:`https://api.darksky.net/forecast/7cf1c6d12054778aea447242a086381e/${lat},${lng}`,
    json:true,
},
(error,response,body)=>{
    if(error){
        callback("Unable to connect to Forecast.io server!")
    }
    else if(response.statusCode === 400){
        callback("Unable to fetch data!")
    }
    else if(response.statusCode === 200){
        callback(undefined,{
            temperature : body.currently.temperature,
            apparentTemperature : body.currently.apparentTemperature
        })
    }
});
}
module.exports.getWeather = getWeather;