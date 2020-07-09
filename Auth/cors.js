
const express = require('express');

module.exports = function allowCrossDomain (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'/*'https://orderdispatcher.herokuapp.com'*/);
    res.header('Access-Control-Allow-Origin', '*'/*'http://localhost:5001'*/);
    res.header('Access-Control-Allow-Methods', '*'/*'GET,PUT,POST,DELETE,OPTIONS'*/);
    res.header('Access-Control-Allow-Headers', '*'/*'Content-Type, Authorization, Content-Length, X-Requested-With'*/);
    next()
};