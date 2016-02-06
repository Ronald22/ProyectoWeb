'use strict'
const express = require('express')
const http = require('http')
const port = process.env.PORT || 8080;
const bodyParser=require('body-parser')
const Firebase= require('firebase')
let items=[]
let contador=0

/*----------------------------Usuario--------------------------------*/
let miUsuario= new Firebase('https://terra-4x4.firebaseio.com/Usuario')
let rutaUsuario=express.Router()
rutaUsuario.use(bodyParser())
rutaUsuario.route('/')
.get(function(request,response){
    items=[]
    miUsuario.once("value",function(snap){
        let nuevoUsuario=snap.val()
        items.push(nuevoUsuario)
        console.log(contador++)
        return response.send(items)
     })
})

.post(function(req,res,next){
    miUsuario.child(req.body.usuario).set(req.body)
    let mensaje ="<h3 class='registro_correcto'>REGISTRO TERRA</h3>"
        mensaje+="<p class='text_registro'>Gracias por registrarse en TERRA 4x4. Porfavor inicie sesión</p>"
    let registro = $("#box_registro").html(mensaje)
    res.status(200).send(registro)
})
.put(function(req,res,next){

    miUsuario.child(req.body.usuario).set(req.body)
    res.status(200).send(req.body.usuario)
})
.delete(function(req,res,next){
    miUsuario.child(req.body.usuario).remove(function(error){
        if (error)
        {
            return res.status(404).send('error ')
        }
    })
    return res.status(200).send('ok')
});

/*----------------------------Eventos--------------------------------*/
let miEvento= new Firebase('https://terra-4x4.firebaseio.com/Evento')
let rutaEvento=express.Router()
rutaEvento.use(bodyParser())
rutaEvento.route('/')
.get(function(request,response){
    items=[]
    miEvento.once("value",function(snap){
        let nuevoEvento=snap.val()
        items.push(nuevoEvento)
        console.log(contador++)
        return response.send(items)
     })
})
.post(function(req,res,next){
    miEvento.child(req.body.id).set(req.body)
    res.status(200).send('Se registro correctamente')
})
.put(function(req,res,next){
    miEvento.child(req.body.id).set(req.body)
    res.status(200).send(req.body.id)
})
.delete(function(req,res,next){
    miEvento.child(req.body.id).remove(function(error){
        if (error)
        {
            return res.status(404).send('error ')
        }
    })
    return res.status(200).send('ok')
});

let app = express()
.use('/usuario',rutaUsuario)
.use('/evento',rutaEvento)
.use(express.static(__dirname+'/public'))
.listen(port)
