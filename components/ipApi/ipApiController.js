'use strict';
const config = require('config');
const axios = require('axios');

exports.getIpData = async function (ip) {
    /* get ip api url config */
    const IP_API_URL = config.get('IP_API_URL');
    /* only for test local */
    ip = ip === '::1' ? '181.46.137.8' : ip;
    /* create url to send to api*/
    const URL = IP_API_URL + '/' + ip;
    try{
        /* send request */
        const response = await axios.get(URL);
        /* return data */
        return response.data;
    }catch (e) {
        throw e;
    }
}