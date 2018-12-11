var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

const Udemy = require('udemy-api');
var Catalog = require('udacity-api').Catalog;
arr=[];
/* GET home page. */
router.get('/', function(req, res, next) {
var cat = new Catalog();
 
cat.catalog(function(err, data) {

  var stri=data;
   var js= stri.courses;


     for(var i=0;i<js.length;i++){
       
        var ud={
            name:js[i].title,
            duration:js[i].expected_duration,
            skills_developed:null,
            level_of_course:js[i].level,
            cost:null,
            provider_name:'udacity',
            description:js[i].short_summary,
            ratings:null,
            no_of_people_rated:null,
            link:null
        };
        arr.push(ud);
          
        }
  });



udemyApiClient = new Udemy('id', 'secret');
udemyApiClient.get('courses?page=10&page_size=100', function(err, body) {
    if(err) return console.log(err);
  var str=body.body;
 var j= JSON.parse(str).results;

for(var i=0;i<j.length;i++){
var ud={
    name:j[i].title,
    duration:null,
    skills_developed:null,
    level_of_course:null,
    cost:j[i].price,
    provider_name:'udemy',
    description:null,
    ratings:null,
    no_of_people_rated:null,
    link:`https://www.udemy.com${j[i].url}`
};
arr.push(ud);
}





});

//iversity data
 var client = new Client();
 client.get("http://iversity.org/api/v1/courses", function (data, response) {
  var strng=data.courses;
  
     // parsed response body as js object

    for(var i=0;i<strng.length;i++){
                  } 
        var ud={
            name:strng[i].title,
            instructor: null,
            duration:strng[i].duration,
            skills_developed:null,
            level_of_course:null,
            cost:strng[i].price,
            provider_name:'iversity',
            description:strng[i].description,
            ratings:null,
            no_of_people_rated:null,
            link:strng[i].url
        };
        arr.push(ud);
        }
       
       
});

res.json(arr);
});
module.exports = router;
