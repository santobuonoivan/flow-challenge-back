'use strict';
const ipApiController = require('./../ipApi/ipApiController');
const weatherController = require('./../weaterApi/weatherController');


exports.location = async function (req, res, next) {
    try{
        /* get ip data for req.ip */
        const data = await ipApiController.getIpData(req.ip);
        /* return data */
        return res.json(data);
    }catch (e) {
        return res.status(400).send({message: e.message});
    }
};

exports.current = async function (req, res, next) {
    try{
        /* destructuring city for req.params */
        let {city} = req.params;
        /* if city is undefined call ip-api service or continue */
        city = !city ? (await ipApiController.getIpData(req.ip)).city : city;
        /* get weather data of the city */
        const data = await weatherController.getWeatherData(city);
        /* return data */
        return res.send(data);
    }catch (e) {
        return res.status(400).send({message: e.message});
    }
};

exports.forecast = async function (req, res, next) {
    try{
        /* destructuring city for req.params */
        let {city} = req.params;
        /* if city is undefined call ip-api service or continue */
        city = !city ? (await ipApiController.getIpData(req.ip)).city : city;
        /* get weather data of the city */
        const data = await weatherController.getForecastData(city);
        /* return data */
        return res.send(data);

        return res.send({ message:'test' });
    }catch (e) {
        return res.status(400).send({message: e.message});
    }
};