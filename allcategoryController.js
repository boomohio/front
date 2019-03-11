var url = "http://localhost:8080";
$( document ).ready(function() {
 getAllCategory();
});
            function getAllCategory(){
            $.ajax({
                  url:url+"/getallcategory/",
                  type:"GET",
                  success: function(res){
                                  var i = 0;

                                   for(i=0;i<res.length;i++){

                                  $('#allcategory').append(

                                              '<tr>'// need to change closing tag to an opening `<tr>` tag.
                                              +'<td><center><input type="textbox" id="'+res[i].id+'" value="'+res[i].category_name+'"></center></td>'

                                              +'<td><center><a href="allcategory.html"><button type="button" id="' + res[i].id +'" onclick="editCategory(this.id)"   class="btn btn-info"><span class="glyphicon glyphicon-floppy-disk"></span></button></a></center></td>'
                                              +'<td><center><a href="allcategory.html"><button type="button" id="' + res[i].id +'"  onclick="cut(this.id)" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></a></center></td>'
                                              +'</tr>');

                                   }
                          }
                          })

                          };

                          function cut(id){
                          console.log(id);
                            $.ajax({
                                  url:url+"/deletecategory/"+id,
                                  type:"DELETE",
                                  success: function(response){
                                  console.log(response);
                                  }
                            })
                            };

function editCategory(id){
var id =id;
var category_name=$('#'+id+'').val();
 $.ajax({
        url:url+"/editcategory/"+id,
        type:"POST",
        data:'{"category_name":"'+category_name+'"}',
        contentType:"application/json;charset=utf-8",
        success: function(response){

                                  }
                            })
                            };

