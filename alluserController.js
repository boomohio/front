var url = "http://localhost:8080";
$( document ).ready(function() {
 getAllUsers();
});
            function getAllUsers(){
            $.ajax({
                  url:url+"/allusers/",
                  type:"GET",
                  success: function(res){
                                  var i = 0;

                                   for(i=0;i<res.length;i++){
                                  $('#allusers').append(
                                              '<tr>'// need to change closing tag to an opening `<tr>` tag.
                                              +'<td>'+res[i].id+'</td>'
                                              +'<td>'+res[i].firstname+'</td>'
                                              +'<td>'+res[i].lastname+'</td>'
                                              +'<td>'+res[i].username+'</td>'
                                              +'<td>'+res[i].email+'</td>'
                                              +'<td>'+res[i].university+'</td>'
                                              +'<td>'+res[i].tel+'</td>'
                                              +'<td>'+res[i].address+'</td>'
                                              +'<td>'+res[i].statusEntities+'</td>'
                                              +'<td><center><a href="edituserstatus.html?id='+ res[i].id +'"><button type="button" id="' + res[i].id +'"   class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></button></a></center></td>'
                                              +'<td><center><a href="allusers.html"><button type="button" id="' + res[i].id +'"  onclick="cut(id)" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></a></center></td>'
                                              +'</tr>');

                                   }
                          }
                          })

                          };

                          function cut(id){
                            $.ajax({
                                  url:url+"/deleteuser/"+id,
                                  type:"DELETE",
                                  success: function(response){
                                  console.log(response);
                                  }
                            })
                            };
                            function findUser(id){}

//$(".button").click(function(){
//       alert($(this).attr("name"));
//  });
//                              $.ajax({
//                                    url:url+"/deleteuser/"+id,
//                                    type:"DELETE",
//                                    success: function(response){
//                                      console.log(response);
//                                    }
//                                  });
//                                  }


