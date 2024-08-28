//import dotenv - to load environment variable.
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./routes')

//import connection.js
require('./connection')

//create express server
//creates an express application. The express() function is a top-level function exported by the express module.
const projFileServer = express()

//use of cors - to communicate with the view.
projFileServer.use(cors())

//server should use json () method - returns a middleware which can parse json format.
projFileServer.use(express.json())

//use router
projFileServer.use(router)


//set port for the server
PORT = 4500 || process.env.PORT

//listen to the port - to resolve the request
projFileServer.listen(PORT,()=>{
    console.log(`server running successfully at port number : ${PORT}`);
})

