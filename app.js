"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllerData_1 = require("./controller/controllerData");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controllerData = new controllerData_1.ControlerData();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/', function (req, res) { return res.send('🏠'); });
app.get('/all', function (req, res) { return controllerData.GetAll(req, res); });
app.get('/temp', function (req, res) { return controllerData.GetTemp(req, res); });
app.get('/hydro', function (req, res) { return controllerData.GetHydro(req, res); });
app.get('/vent', function (req, res) { return controllerData.GetVent(req, res); });
app.listen(3001, function () {
    "Serveur listening on port :3001";
});
//# sourceMappingURL=app.js.map