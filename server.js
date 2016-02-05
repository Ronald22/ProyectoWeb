'use strict'
const express = require('express')
const http = require('http')
const port = process.env.PORT || 8080;
const bodyParser=require('body-parser')
const Firebase= require('firebase')

var claseUsuario = require('./Usuario')

claseUsuario.Usuario;

let app = express()
.use(express.static(__dirname+'/public'))
.listen(port)
