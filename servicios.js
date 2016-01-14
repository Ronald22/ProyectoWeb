'use strict'
const express = require('express')
const http = require('http')
const bodyParser=require('body-parser')
let items=[]

let router=express.Router()
router.use(bodyParser())
router.route('/')
.get(function(request,response){
    var d=new Date()
    var cliente= {id:1, nombre:'JC'}
    response.status(200).send(items)
})
.post(function(req,res,next){
    items.push(req.body)
    res.status(200).send('post ESTA FUNCIONANDO')
});

let app= express()
.use('/todo',router)
.listen(3000)
