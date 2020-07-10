'use strict';
const config = require('config');
const axios = require('axios');

exports.getIpData = async function (ip) {
    const IP_API_URL = config.get('IP_API_URL');
    ip = ip === '::1' ? '181.46.137.8' : ip;
    const URL = IP_API_URL + '/' + ip;
    try{
        const response = await axios.get(URL);
        return response.data;
    }catch (e) {
        throw e;
    }
}