var url = "http://localhost:8080";
$( document ).ready(function() {
 getAllQuestion();
});
            function getAllQuestion(){
            $.ajax({
                  url:url+"/question/",
                  type:"GET",
                  success: function(res){
                                  var i = 0;

                                   for(i=0;i<res.length;i++){

                                  $('#allquestion').append(

                                              '<tr>'// need to change closing tag to an opening `<tr>` tag.
                                              +'<td><center><input type="textbox" id="'+res[i].id+'" value="'+res[i].question+'"></center></td>'

                                              +'<td><center><a href="allquestion.html"><button type="button" id="' + res[i].id +'" onclick="editQuestion(this.id)"   class="btn btn-info"><span class="glyphicon glyphicon-floppy-disk"></span></button></a></center></td>'
                                              +'<td><center><a href="allquestion.html"><button type="button" id="' + res[i].id +'"  onclick="cut(this.id)" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></a></center></td>'
                                              +'</tr>');

                                   }
                          }
                          })

                          };

                          function cut(id){
                          console.log(id);
                            $.ajax({
                                  url:url+"/question/"+id,
                                  type:"DELETE",
                                  success: function(response){

                                  }
                            })
                            };

function editQuestion(id){
var id =id;
var question_name=$('#'+id+'').val();
 $.ajax({
        url:url+"/question/edit/"+id,
        type:"POST",
        data:'{"question":"'+question_name+'"}',
        contentType:"application/json;charset=utf-8",
        success: function(response){

                                  }
                            })
                            };

