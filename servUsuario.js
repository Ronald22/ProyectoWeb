'use strict'
const express = require('express')
const http = require('http')
const bodyParser=require('body-parser')
let items=[]

let router=express.Router()
router.use(bodyParser())
router.route('/')
.get(function(request,response){
    response.status(200).send(items)
})
.post(function(req,res,next){
    items.push(req.body)
    res.status(200).send('post ESTA FUNCIONANDO')
})
.put(function(req,res,next){

    for (var i=0;i<items.length;i++)
    {
         if (items[i]['id']==req.body.id )
        {
            items[i]['nombre']=req.body.nombre
            items[i]['apellido']=req.body.apellido
            items[i]['fechaNa']=req.body.fechaNa
            items[i]['email']=req.body.email
        }
    }
     res.status(200).send(req.body.codigo)
})
.delete(function(req,res,next){
    items= items.filter(function(elemento){
         return elemento.id!=req.body.id
    })
    res.status(200).send('delete esta funcionando')
});

let app= express()
.use('/todo',router)
.listen(3000)

