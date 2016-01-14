/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            $(document).ready(function(){
                $('.btn').click(function(){
                    var user = $('#txtnombre').val();
                    var contra = $('#txtcontra').val();
                    var admin = "Admi";
                    var contradmn='123456';
                    if((user === admin)&&(contra === contradmn)){
                            alert('Ud a Ingresado como Administrador');
                            window.location.href='../pagCliente/Inicio.html';
                    }
                    else{
                        if(user===admin){
                            alert('contraseña incorrecta');
                        }
                        if (contra===contradmn) {
                            alert('correo incorrecto');
                        }
                        else{
                            if((user!==admin)&&(contra!==contradmn)){
                                alert('ingreso de datos incorrectos');
                            }
                        } 
                    }
                }); 
            });

