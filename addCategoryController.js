var url = "http://localhost:8080";

var i=0;
function addCategoryTextbox(){
    i++;
    var category_name=document.createElement("input");

    category_name.setAttribute("type","textbox");
    category_name.setAttribute("id","category_name"+(i));
    $('#addcategory').append(
    '<tr>'
    +'<td><center><input type="textbox" id="'+category_name.id+'">&nbsp<button type="button" class="glyphicon glyphicon-plus" onclick="addCategoryTextbox()"></button></center></td>'
    +'<tr>'
    );
}

function addCategory(){
    var nameArray=[];
    for(var e=0 ;e<=i;e++){
        var obj={"category_name":$("#category_name"+e).val()};
        nameArray.push(obj);
        }
    $.ajax({
        url:url+"/addcategory/",
        type:"POST",
        data:JSON.stringify(nameArray),
        contentType:"application/json;charset=utf-8",
        success: function(response){
            console.log("success");
        }

    })





}