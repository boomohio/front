var URL="http://localhost:8080" ;

$(document).ready(function(){
    getEmailPattern();
});

function emailPattern() {
    var main = $("#content").val();
    var end = $("#regard").val();
    var name = $("#name_sent").val();
    console.log(main);
    console.log(end);
    console.log(name);
    $.ajax({
        url: URL+"/emailTemplate",
        type: "POST",
        data: '{"main": "' +main+ '" , "end": "' +end+ '" , "name": "' +name+ '" }',
        contentType: "application/json;charset=utf-8",
        success: function (response){
            console.log("STEP 2 AJAX response === ",response);
            
        }
    })
    
}
function getEmailPattern() {
    var content;
    var regard;
    var sent;
    $.ajax({
            url: URL + "/emailTemplate",
            type: "GET",
            success: function (res) {
                document.getElementById("content").innerHTML = res.main;
                document.getElementById("regard").value = res.end;
                document.getElementById("name_sent").value = res.name;

            }
        });
    }


