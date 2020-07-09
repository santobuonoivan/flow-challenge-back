'use strict';
const config = require('config');

exports.location = async function (req, res, next) {
    try{


        return res.send({ message:'test' });
    }catch (e) {
        return res.status(400).send({message: e.errors[0].message});
    }
};

exports.current = async function (req, res, next) {
    try{


        return res.send({ message:'test' });
    }catch (e) {
        return res.status(400).send({message: e.errors[0].message});
    }
};

exports.forecast = async function (req, res, next) {
    try{


        return res.send({ message:'test' });
    }catch (e) {
        return res.status(400).send({message: e.errors[0].message});
    }
};