'use strict'
const router = require('express').Router();
const { getQuote } = require('../models/qotd');

router.get('/', getQuote, function(req,res){
  console.log(res.quote);
  const mydata = res.quote;
  res.render('home')
})

module.exports = router;
