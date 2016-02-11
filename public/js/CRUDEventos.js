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
    
    $("#btnconsultar").click(function(){
        $.ajax({
            type:"GET",
            url:"http://projectoaweb.azurewebsites.net/evento",
            dataType:"json",
            contentType:"text/plain"
        }).done(function(msg){
            var consulta='<table border=1 class="consultaEvento">';
                consulta+='<tr>';
                consulta+='<th class="th">Id</th>';
                consulta+='<th class="th">Nombre</th>';
                consulta+='<th class="th">Lugar</th>';
                consulta+='<th class="th">Fecha</th>';
                consulta+='<th class="th">Tipo</th>';
                consulta+='<th class="th">Pista</th>';
                consulta+='</tr>';
            for (var dato in msg[0]){
                consulta+='<tr>';
                consulta+='<td class="td">'+  msg[0][dato].id+'</td>';
                consulta+='<td class="td">'+ msg[0][dato].nombre+'</td>';
                consulta+='<td class="td">'+  msg[0][dato].Lugar+'</td>';
                consulta+='<td class="td">'+ msg[0][dato].fecha+'</td>';
                consulta+='<td class="td">'+  msg[0][dato].tipo+'</td>';
                consulta+='<td class="td">'+  msg[0][dato].pista+'</td>';
                consulta+='</tr>';
            }
            consulta+='</table>';
            $("#boxEvento").html(consulta);
       });
    });
});