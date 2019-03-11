var url = "http://localhost:8080";
$( document ).ready(function() {
 getAllStatus();
});
            function getAllStatus(){

            $.ajax({
                  url:url+"/getallstatus",
                  type:"GET",
                  success: function(res){
                                  console.log(res);
                                  var i = 0;

                                   for(i=0;i<res.length;i++){
                                    var checkEarly=res[i].early_rate;
                                    var checkAfter=res[i].after_rate;
                                    var checkOnsite=res[i].onsite_rate;
                                    if(checkEarly===0){
                                        checkEarly="-";
                                    }
                                    if(checkAfter===0){
                                       checkAfter="-";
                                                      }
                                    if(checkOnsite===0){
                                             checkOnsite="-";
                                             }


                                  $('#allstatus').append(
                                              '<tr>'// need to change closing tag to an opening `<tr>` tag.

                                              +'<td>'+res[i].status_name+'</td>'
                                              +'<td><center>'+checkEarly+'</center></td>'
                                              +'<td><center>'+checkAfter+'</center></td>'
                                              +'<td><center>'+checkOnsite+'</center></td>'
                                              +'<td><center><a href="editstatus.html?id='+ res[i].id +'"><button type="button" id="' + res[i].id +'"   class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></button></a></center></td>'
                                              +'<td><center><a href="allstatus.html"><button type="button" id="' + res[i].id +'"  onclick="cut(id)" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></a></center></td>'
                                              +'</tr>');

                                   }
                          }
                          })

                          };

                          function cut(id){
                            $.ajax({
                                  url:url+"/deletestatus/"+id,
                                  type:"DELETE",
                                  success: function(response){
                                  console.log(response);
                                  }
                            })
                            };
                            function findUser(id){}