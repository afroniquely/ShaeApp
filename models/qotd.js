'use strict'

const request       = require('request');
const apiURL        = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';

//Get the JSON file, and then parse it and pass the data to a variable
function getQuote(req, res, next) {
  request( apiURL, function (err, response, body) {
   if(err) throw (err);
    console.log(body);
    res.quote = JSON.parse(response.body);
    // let fOne = res.quote
    next();
  });
}

module.exports = { getQuote };


