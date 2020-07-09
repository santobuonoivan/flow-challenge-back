'use strict';
const config = require('config');
const axios = require('axios');

exports.getIpData = async function (req, res, next) {
    const IP_API_URL = config.get('IP_API_URL');
    const IP = '181.46.137.8' || req.ip || req.ips;
    const URL = IP_API_URL + '/' + IP;
    try{
        const response = await axios.get(URL);
        return res.send(response.data);
    }catch (e) {
        throw e;
    }
}