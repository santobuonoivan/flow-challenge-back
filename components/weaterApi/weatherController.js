'use strict';
const axios = require('axios');
const config = require('config');

exports.getWeatherData = async function (city) {
    try{
        /* get api key config*/
        const API_KEY = config.get('WEATHER_API_KEY');
        /* get url base config*/
        const URL_BASE_WEATHER = config.get('URL_BASE_WEATHER');
        /* create url to send to api*/
        const URL = `${URL_BASE_WEATHER}?q=${city}&APPID=${API_KEY}&units=metric`;
        /* send request */
        const response = await axios.get(URL);
        /* return data */
        return response.status === 200 ? response.data : response;
    }catch (e) {
        return res.status(400).send({message: e.message});
    }
};




/*

let apiKey = '59ee020710f0bcfb07b99fe2f1ed34ab';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
});
*/