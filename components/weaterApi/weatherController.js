'use strict';
const axios = require('axios');
const config = require('config');

exports.getOne = async function (req, res, next) {
    try{
        const apiKey = config.get('WEATHER_API_KEY');
        const url_base_forecast = config.get('URL_BASE_FORECAST');
        const url = `${url_base_forecast}?q=${city}&APPID=${apiKey}&units=metric`;

        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });


        return res.send({ message:'test' });
    }catch (e) {
        return res.status(400).send({message: e.errors[0].message});
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