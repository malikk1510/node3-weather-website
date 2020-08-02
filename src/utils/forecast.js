const request = require('request');
const weather = (address, callback) => {

    const weatherurl = 'http://api.weatherstack.com/current?access_key=9f5c7452a78f1bd21f570d01fcc549f9&query=' + encodeURIComponent(address);
    request({ url: weatherurl, json: true }, (error, response) => {
        if (error) {
            callback('Network Disconnection', undefined);
        } else if (response.body.error) {
            callback('Invalid input', undefined);
        } else {
            const weather_data = {
                weatherDescriptions: response.body.current.weather_descriptions,
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                is_day: response.body.current.is_day
            };
            const { weatherDescriptions, temperature, feelslike, is_day } = weather_data;
            callback(undefined, weather_data);
        }
    })
}
module.exports = {
    weather: weather
};