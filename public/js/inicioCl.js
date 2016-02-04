/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*------------------------Despegable de Administrador--------------------*/
$(document).ready(function(){
    var menustate = 0; 
    $(".linkdesple").click(function(){
        if (menustate === 0){
           $("#menu").slideToggle("slow"); 
           $(".linkdesple").addClass("open"); 
           menustate=1;
        }
        else if (menustate === 1){
           
            $("#menu").slideToggle("slow");
            $(".linkdesple").removeClass("open");        
            menustate=0;
        }
    });
/*----------------------Inicio Sesion Usuario------------------------*/    
    $('#btniniciosecion').click(function(){                 
        var band = 0;
        $.ajax({
            type:"GET",
            url:"projectoaweb.azurewebsites.net/usuario",
            dataType:"json",
            contentType:"text/plain"
        }).done(function(msg){              
            for (var dato in msg[0]){                    
                var user = $('#txtnombre').val();
                var contra = $('#txtcontra').val(); 
                var usua = msg[0][dato].usuario;
                var contrausua = msg[0][dato].contraseña;
                
                if((user === usua)&&(contra === contrausua)){
                    band = 1;                   
                    window.location.href='pagCliente/inicio.html';
                }                
            }
            if(band !== 1){
                var mensaje = "<div id='mensaje_error_sesion'>";
                mensaje += "<p>Sus datos de sesion son incorrectos. Porfavor, ingrese nuevamente sus datos</p>";
                mensaje += "<div id='border_mensaje'></div>";
                mensaje += "</div>";
                $("#mensaje").html(mensaje);
            }                            
        });        
    });
/*----------------------------Validación de Registro-------------------*/
    var band1;
    var band2;
    var band3;
    var band4 ;
    $("#txtusuario").keyup(function(){       
        var usuario = $("#txtusuario").val();
        var band = 0;
        $("#mensaje").html('');
        if(usuario === ""){
            $("#resultado").html('');
            band1 = false;   
        }
        else{
            $("#resultado").html('<img class="img_resul" src="img/loader.gif"/>');
            $.ajax({    
                type:"GET",
                url:"projectoaweb.azurewebsites.net/usuario",
                dataType:"json",
                contentType:"text/plain"
            }).done(function(msg){              
                for (var dato in msg[0]){                    
                    var usua = msg[0][dato].usuario;
                    var consulta = $("#txtusuario").val();
                    if(consulta === usua){
                        band = 1;                        
                    }                
                }
                if(band === 1){
                $("#resultado").html('<img class="img_resul" src="img/equis.png"/><div class="flecha"></div><span class="span_resul">Usuario no disponible</span>');
                    band1 = false;
                }
                else{
                    $("#resultado").html('<img class="img_resul" src="img/visto.png"/>');
                    band1=true;
                }
            });
        }    
    });
    
    $("#txtnombres").keyup(function(){
        var nombre = $("#txtnombres").val();
        if(nombre === ""){
            band2 = false; 
            $("#resultado4").html('');
        }
        else{
            $("#resultado4").html('<img class="img_resul" src="img/visto.png"/>');
            band1=true;
        }
    });
        $("#txtapellidos").keyup(function(){
        var apellido = $("#txtapellidos").val();
        if(apellido === ""){
            band2 = false; 
            $("#resultado5").html('');
        }
        else{
            $("#resultado5").html('<img class="img_resul" src="img/visto.png"/>');
            band1=true;
        }
    });
    
    $("#txtcorreo").keyup(function(){ 
        var correo = $("#txtcorreo").val();
        $("#mensaje").html('');
        if(correo === ""){
            band2 = false; 
            $("#resultado1").html('');
        }
        else{
            var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;           
            if (regex.test($('#txtcorreo').val().trim())){
                $("#resultado1").html('<img class="img_resul" src="img/visto.png"/>');
                band2=true;
            } 
            else{
                $("#resultado1").html('<img class="img_resul" src="img/equis.png"/><div class="flecha"></div><span class="span_resul">Correo incorrecto</span>');
                band2 = false;
            }  
        }    
    });
    $("#pass").keyup(function(){
        var pass = $("#pass").val();
        $("#mensaje").html('');
        if(pass ===""){
            $("#resultado2").html('');
            band3 = false;   
        }
        else{
            if ( pass.length < 6 ) {
                $("#resultado2").html('<img class="img_resul" src="img/equis.png"/><div class="flecha"></div><span class="span_resul">Debe tener mínimo 6 caracteres</span>');
                band3 = false;
            } else {
                $("#resultado2").html('<img class="img_resul" src="img/visto.png"/>');
                band3=true;
            }
        }    
    });
    
    $("#repass").blur(function(){
        var pass = $("#pass").val();
        var repass = $("#repass").val();
        $("#mensaje").html('');
        if(pass === ""){
            $("#resultado3").html('');
            band4 = false;   
        }
        else{
            if( pass === repass) {
                $("#resultado3").html('<img class="img_resul" src="img/visto.png"/>');
                band4=true;
            } else {
                $("#resultado3").html('<img class="img_resul" src="img/equis.png"/><div class="flecha"></div><span class="span_resul">Las contraseñas no coinciden</span>');
                band4 = false;
            }
        }    
    });
/*------------------------Insertar datos usuario----------------------------*/
    $("#btnregistro").click(function(){
        if((band1 === true)&&(band2 === true)&&(band3 === true)&&(band4 === true)){            
            var usuario = $("#txtusuario").val();
            var nombre = $("#txtnombres").val();
            var apellido = $("#txtapellidos").val();
            var email = $("#txtcorreo").val();
            var contraseña = $("#pass").val();
            var d = new Date();
            var fecharegistro = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();

            datos={"apellidos":apellido,"contraseña":contraseña,"edad":"","email":email,"fechanacimiento":"",
                   "fecharegistro":fecharegistro,"foto":"","nombres":nombre,"usuario":usuario};

           $.ajax({
               type:"POST",
               url:"projectoaweb.azurewebsites.net/usuario",
               dataType:"text",
               contentType:"application/json",
               data: JSON.stringify(datos)
           }).done(function(msg){
               alert(msg);
           }); 
           $("#txtusuario").val('');
           $("#txtnombres").val('');
           $("#txtapellidos").val('');
           $("#txtcorreo").val('');
           $("#pass").val('');
           $("#repass").val('');
           $("#resultado").html('');
           $("#resultado1").html('');
           $("#resultado2").html('');
           $("#resultado3").html('');
           $("#resultado4").html('');
           $("#resultado5").html('');
        }
        else{
            var mensaje = "<div id='mensaje_error_registro'>";
                mensaje += "<p>Por favor, rellena correctamente todos los campo</p>";
                mensaje += "<div id='border_mensaje'></div>";
                mensaje += "</div>";
            $("#mensaje").html(mensaje);
        }
    });
});
/*---------------------------Consultar Usuarios---------------------------*/
$("#btnconsultar").click(function(){
    $.ajax({
        type:"GET",
        url:"projectoaweb.azurewebsites.net/",
        dataType:"json",
        contentType:"text/plain"
    }).done(function(msg){
        var consulta='<table border=1 class="consultaUsuario">';
        for (var dato in msg[0]){
            consulta+='<tr>';
            consulta+='<td>'+  msg[0][dato].usuario+'</td>';
            consulta+='<td>'+ msg[0][dato].nombres+" "+  msg[0][dato].apellidos+'</td>';
            consulta+='<td>'+  msg[0][dato].email+'</td>';
            consulta+='<td>'+ msg[0][dato].contraseña+'</td>';
            consulta+='<td>'+  msg[0][dato].fecharegistro+'</td>';
            consulta+='</tr>';
        }
        consulta+='</table>';
        $("#boxUsuario").html(consulta);
   });
});