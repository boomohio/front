var url = "http://localhost:8080";

var i=0;
function addQuestionTextbox(){
    i++;
    var question_name=document.createElement("input");

    question_name.setAttribute("type","textbox");
    question_name.setAttribute("id","question_name"+(i));
    $('#addquestion').append(
    '<tr>'
    +'<td><center><input type="textbox" class="resizedTextbox" id="'+question_name.id+'">&nbsp<button type="button" class="glyphicon glyphicon-plus" onclick="addQuestionTextbox()"></button></center></td>'
    +'<tr>'
    );
}

function addQuestion(){
    var nameArray=[];
    for(var e=0 ;e<=i;e++){
        var obj={"question":$("#question_name"+e).val()};
        nameArray.push(obj);
        }
    $.ajax({
        url:url+"/question/",
        type:"POST",
        data:JSON.stringify(nameArray),
        contentType:"application/json;charset=utf-8",
        success: function(response){
            console.log("success");
        }

    })





}