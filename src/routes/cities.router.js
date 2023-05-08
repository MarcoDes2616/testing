const { getAll, create, getOne, remove, update } = require('../controllers/cities.controllers');
const express = require('express');

const citiesRoute = express.Router();

citiesRoute.route('/')
    .get(getAll)
    .post(create);

citiesRoute.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = citiesRoute;