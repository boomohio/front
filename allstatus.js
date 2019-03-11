var url = "http://localhost:8080";
$( document ).ready(function() {
 getAllStatus();
});
function getAllStatus(){
$.ajax({
   url:url+"/allstatus",
   type:"GET",
   success: function(res){
   var i = 0;
   for(i=0;i<res.length;i++){
      $('#allstatus').append(
         '<tr>'// need to change closing tag to an opening `<tr>` tag.
         +'<td>'+res[i].status_name+'</td>'
         +'<td><center>'+res[i].type_status+'</center></td>'
         +'<td><center>'+res[i].type_regis+'</center></td>'
         +'<td><center>'+res[i].rate+'</center></td>'
 +'<td><center><a href="edittostatus.html?id='+ res[i].id +'"><button type="button" id="' + res[i].id +'"   class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></button></a></center></td>'
 +'<td><center><a href="allstatus2.html"><button type="button" id="' + res[i].id +'"  onclick="cut(id)" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></a></center></td>'
         +'</tr>');
         }
                    }
                    })
                    };

                          function cut(id){
                            $.ajax({
                                  url:url+"/status/"+id,
                                  type:"DELETE",
                                  success: function(response){
                                  console.log(response);
                                  }
                            })
                            };
                            function findUser(id){}