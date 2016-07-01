'use strict'

const express         = require('express')
const tracker         = require('morgan')
const bodyParser      = require('body-parser')
const path            = require('path')

const homeRouter      = require('./router/homeRoute')
const siteRouter      = require('./router/siteRoute')

const app             = express();
const port            = process.env.PORT || process.argv[2] || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')))

app.use(tracker('dev'))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', homeRouter)
app.use('/', siteRouter)


app.listen(port, function(){
  console.log('Peas and Qs is listening from: ', port)
})
