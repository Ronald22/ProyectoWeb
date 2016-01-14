/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('#btniniciosecion').click(function(){                 
    var user = $('#txtnombre').val();
    var contra = $('#txtcontra').val(); 
    var usuario = "Juan";
    var contrusua = "12345";

    if((user === usuario)&&(contra === contrusua)){
        alert('Bienvenido a Terra');
          window.location.href='inicio.html';
    }
    else{
        if(user===usuario){
            alert('contraseña incorrecta');
            }if (contra===contrusua) {
                alert('correo incorrecto');
                }
                else{
                    if((user!==usuario)&&(contra!==contrusua)){
                        alert('ingreso de datos incorrectos');
                    }

                } 
            }
});
                    

