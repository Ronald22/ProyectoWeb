/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var menustate = 0;  
    $(".linkdesple").click(function(){
        if (menustate == 0){
           $("#menu").slideToggle("slow"); 
           $(".linkdesple").addClass("open"); 
           menustate=1;
        }
        else if (menustate == 1){
           
            $("#menu").slideToggle("slow");
            $(".linkdesple").removeClass("open");        
            menustate=0;
        }
    });
        
    $("#desplegable").css({ display: 'none' });
    
    $('#btniniciosecion').click(function(){                 

        $.ajax({
            type:"GET",
            url:"http://localhost:8080/terra",
            dataType:"json",
            contentType:"text/plain"
        }).done(function(msg){
            var user = $('#txtnombre').val();
            var contra = $('#txtcontra').val(); 
            var usuario = msg.usuario; 
            var contrausua = msg.contraseña;
            
            if((user === usuario)&&(contra === contrausua)){
                alert('Bienvenido a Terra');
                  window.location.href='pagCliente/inicio.html';
            }
            else{
                if(user===usuario){
                    alert('contraseña incorrecta');
                }
                if (contra===contrausua){
                    alert('usuario incorrecto');
                }
                else{
                    if((user!==usuario)&&(contra!==contrausua)){
                        alert('ingreso de datos incorrectos');
                    }

                } 
            }
        });        
    });
    
    $("#btnregistro").click(function(){
                
                var usuario =$("#txtusuario").val();
                var email=$("#txtcorreo").val();
                var contraseña=$("#txtcontra").val();
                var fechanacimiento=$("#txtnacimiento").val();
                datos={"apellidos":"","contraseña":contraseña,"edad":"","email":email,"fechanacimiento":fechanacimiento,
                       "fecharegistro":"","foto":"","nombres":"","usuario":usuario};
                
               $.ajax({
                   type:"POST",
                   url:"http://localhost:8080/terra",
                   dataType:"text",
                   contentType:"application/json",
                   data: JSON.stringify(datos)
               }).done(function(msg){
                   alert(msg);
               }); 
           
            });
    
});