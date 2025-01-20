var express = require('express')
var route = express.Router();
var cont = require('../controller/cont')

route.get('/home',cont.homePage)
route.get('/about',cont.aboutPage)
module.exports.route = route
