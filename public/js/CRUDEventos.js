/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $("#btn_crear").click(function(){          
            var lugar = $("#inp_lugar").val();
            var nombre = $("#inp_nombre").val();
            var id = $("#inp_id").val();
            var pista = $("#inp_pista").val();
            var tipo = $("#inp_tipo").val();           
            var fecha = $("#inp_fecha").val();

            datos={"Lugar":lugar,"fecha":fecha,"id":id,"img":"","nombre":nombre,"pista":pista,"tipo":tipo};

            $.ajax({
               type:"POST",
               url:"http://projectoaweb.azurewebsites.net/evento",
               dataType:"text",
               contentType:"application/json",
               data: JSON.stringify(datos)
            }).done(function(msg){
               alert(msg);
            });
    });
});