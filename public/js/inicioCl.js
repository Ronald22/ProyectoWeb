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
        var user = $('#txtnombre').val();
        var contra = $('#txtcontra').val(); 
        var usuario = "Juan";
        var contrusua = "12345";

        if((user === usuario)&&(contra === contrusua)){
            alert('Bienvenido a Terra');
              window.location.href='pagCliente/inicio.html';
        }
        else{
            if(user===usuario){
                alert('contraseña incorrecta');
            }
            if (contra===contrusua){
                alert('correo incorrecto');
            }
            else{
                if((user!==usuario)&&(contra!==contrusua)){
                    alert('ingreso de datos incorrectos');
                }

            } 
        }
    });
    
});