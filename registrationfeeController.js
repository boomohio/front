var url = "http://localhost:8080";
$( document ).ready(function() {
 getAllStatus();
});
            function getAllStatus(){
            $.ajax({
                  url:url+"/registrationfeee",
                  type:"GET",
                  success: function(res){

                                  var i = 0;
                                  var c=res.length;
                                   for(i=0;i<(res.statusEntityList.length)||i<c;i++){
                                   var currency1=res.statusEntityList[i].rate;
                                    var currency2=res.statusEntityList[i+1].rate;
                                    var currency3=res.statusEntityList[i+2].rate;
                                                   var convert1=(currency1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                                                    var convert2=(currency2).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                                                     var convert3=(currency3).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                                  $('#allstatus').append(
                                              '<tr>'// need to change closing tag to an opening `<tr>` tag.

                                              +'<td>'+res.statusEntityList[i].status_name+'&nbsp'+res.statusEntityList[i].type_status+'</td>'
                                              +'<td><center>'+convert1+'(฿)</center></td>'
                                              +'<td><center>'+convert2+'(฿)</center></td>'
                                              +'<td><center>'+convert3+'(฿)</center></td>'

                                              +'</tr>');
                                    i++;
                                    i++;

                                   }
                                   $('#allstatus').append(
                                   '<tr>'
                                   +'<td>Additionalpage</td>'
                                   +'<td><center>'+res.addPage+'</center></td>'
                                   +'<td><center>'+res.addPage+'</center></td>'
                                   +'<td><center>-</center></td>'
                                   );

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