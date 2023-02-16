const express = require('express');
require('dotenv').config()
const httpStatus = require('http-status');


const ApiError = require('../src/utils/ApiError')
const {errorHandler} = require('../src/middlewares/error')
const routes = require('./routes/v1')


const app = express();

// parse json request body
app.use(express.json())

// v1 api routes
app.use("/api/v1", routes);


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// handle error
app.use(errorHandler);

module.exports = app;