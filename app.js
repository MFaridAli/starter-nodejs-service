if(process.env.NODE_ENV !== "production"){
  require('dotenv').load()
}

const mysql = require('mysql')
const morgan = require('morgan')
const exampleRouter = require('./routes/example.router')
const myConnection = require('express-myconnection')
const bodyParser = require('body-parser');

// CREATE SERVER
var express = require('express')
var app = express()
var port = process.env.PORT

// BODY parser
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

// EXTSNSION
app.use(morgan('dev'))

// CONNECT DATABAE
app.use(myConnection(mysql, {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
}, 'single'))

// ROUETER
app.use('/example', exampleRouter);

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)
