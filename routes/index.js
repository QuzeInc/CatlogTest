var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

const Udemy = require('udemy-api');
var Catalog = require('udacity-api').Catalog;

/* GET home page. */
router.get('/', function(req, res, next) {


//  Udacity data
//  var cat = new Catalog();
//  cat.catalog(function(err, data) {
//    res.status(200).json(data);
//  });

// udemyApiClient = new Udemy('your Udemy API client ID', 'Your Udemy API client secret');
// udemyApiClient.get('courses?language=en&price=price-free', function(err, res, body) {
//     if(err) return console.error(err);
//     res.status(200).json(body);
// });

//iversity data
var client = new Client();
client.get("http://iversity.org/api/v1/courses", function (data, response) {
    // parsed response body as js object
    res.json(data);
    // raw response
    
});

});

module.exports = router;
