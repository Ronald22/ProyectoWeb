'use strict'
const express = require('express')
const http = require('http')
const bodyParser=require('body-parser')
const Firebase= require('firebase')
let items=[]
let contador=0


let miRuta= new Firebase('https://terra-4x4.firebaseio.com/Usuario')
let router=express.Router()
router.use(bodyParser())
router.route('/')
.get(function(request,response){
    items=[]
    miRuta.once("value",function(snap){
        let nuevoUsuario=snap.val()
        items.push(nuevoUsuario)
        console.log(contador++)
        return response.send(items)
     })
})
.post(function(req,res,next){
    miRuta.child(req.body.usuario).set(req.body)
    res.status(200).send('Se registro correctamente')
})
.put(function(req,res,next){

    miRuta.child(req.body.usuario).set(req.body)
    res.status(200).send(req.body.codigo)
})
.delete(function(req,res,next){
    miRuta.child(req.body.usuario).remove(function(error){
        if (error)
        {
            return res.status(404).send('error ')
        }
    })
    return res.status(200).send('ok')
});

let app = express()
.use('/usuario',router)
.use(express.static(__dirname+'/public/index.html'))
.listen(8080)
