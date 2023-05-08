const express = require('express');
const citiesRoute = require('./cities.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/cities", citiesRoute)

module.exports = router;