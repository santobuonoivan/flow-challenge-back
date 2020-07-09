const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');

const apiController = require('./apiController');


router.get('/location',[cors()], apiController.location);
router.get('/current/:city?',[cors()], apiController.current);
router.get('/forecast/:city?',[cors()], apiController.forecast);

module.exports = router;