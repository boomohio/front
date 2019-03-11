var url = "http://localhost:8080";
$( document ).ready(function() {
 getAllPaperStatus();
});

var paperadd=5;
var category = [];
var CHECKDROPDOWN=0;
function getAllStatus(){
            $.ajax({
            url:url+"/statusRegistration",
            type:"GET",
            success: function(response){
            console.log(response);
                for(var i = 0 ; i<response.length;i++){
                var currency=response[i].rate;
                var convert=(currency).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                var element = document.createElement("input");
                                var label=document.createElement("label");
                                label.setAttribute("for",response[i].status_name);
                                label.innerHTML='&nbsp'+response[i].type_regis+'&nbsp'+response[i].status_name+'&nbsp'+response[i].type_status+'&nbsp'+convert;
                                element.setAttribute("type","radio");
                                 element.setAttribute("value",response[i].id);
                                 element.setAttribute("id",response[i].id);
                                 element.setAttribute("name","status_id");
                                 $('#foo').append(element);
                                 $('#foo').append(label);
                                 $('#foo').append('<br>');

                }
            }
            })
            };

function getAllPaperStatus(){
            $.ajax({
            url:url+"/registration",
            type:"GET",
            success: function(response){
            console.log(response);
                for(var i = 0 ; i<response.statusList.length;i++){
                var currency=response.statusList[i].rate;
                var convert=(currency).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                var element = document.createElement("input");
                                var label=document.createElement("label");
                                label.setAttribute("for",response.statusList[i].status_name);
                                label.innerHTML='&nbsp'+response.statusList[i].type_regis+'&nbsp'+response.statusList[i].status_name+'&nbsp'+response.statusList[i].type_status+'&nbsp'+convert;
                                element.setAttribute("type","radio");
                                 element.setAttribute("value",response.statusList[i].id);
                                 element.setAttribute("id",response.statusList[i].id);
                                 element.setAttribute("name","status_id");
                                 $('#foo').append(element);
                                 $('#foo').append(label);
                                 $('#foo').append('<br>');

                }
                for(var i = 0 ; i<response.paperList.length;i++){
                    for(var j=1;j<=paperadd;j++){
                    $('#paper'+j).append(
                        '<option id="'+i+'" value="'+response.paperList[i].id+'">'+response.paperList[i].id+'</option>'

                    )

                    }
                     category[i]=response.paperList[i].category;
                     console.log(category[i]);
                    }

            }
            })
            };
function Choose(data)
{

 // var x=  $("#'"+data+"' option:selected").attr('id');
    console.log(data);
    CHECKDROPDOWN++;
    var x=document.getElementById(data).options[document.getElementById(data).selectedIndex];
    x+1;
    console.log(x.id);
    var res = data.substring(5)
   document.getElementById("category"+res).value = category[x.id];
}

function register(){
    var status =document.querySelector('input[name="status_id"]:checked').value;
    var present =document.querySelector('input[name="presenter"]:checked').value;
    var title=$("#title").val();
    var firstname   = $("#firstname").val();
    var middlename    = $("#middlename").val();
            var lastname    = $("#lastname").val();
            var email       = $("#email").val();
            var tel= $("#telephone").val();
            var username    = $("#username").val();
            var password    = $("#password").val();
            var confirmpassword=$("#confirmpassword").val();
            var nameorganize=$("#nameorganize").val();
            var namedept=$("#namedept").val();
            var address     = $("#address").val();
            var nationality=$("#nationality").val();
            var member= $("#member").val();
//            var papers[];


            console.log(title);
            console.log(status);
            console.log(present);
            console.log(firstname);
            console.log(middlename);
            console.log(lastname);
            console.log(email);
            console.log(tel);
            console.log(username);
            console.log(password);
            console.log(confirmpassword);
            console.log(nameorganize);
            console.log(namedept);
            console.log(address);
            console.log(nationality);
            console.log(member);

            $.ajax({
                            url:url+"/registration",
                            type:"POST",
                            data:'{"title":"'+title+'","familyname":"'+firstname+'","middlename":"'+middlename+'","givenname":"'+lastname+'","organization":"'+nameorganize+'","dept":"'+namedept+'","address":"'+address+'","nationality":"'+nationality+'","tel":"'+telephone+'","email":"'+email+'","membership":"'+member+'","presenter":"'+present+'" ,"username":"'+username+'", "password":"'+password+'","status_id":"'+status+'","papers":[]}',
                            contentType:"application/json;charset=utf-8",
                            success: function(res){

                            if(res===1){
                                console.log("Username repeat");
                            }
                            if(res===2){
                                console.log("Email repeat");


                                          }
                            if(res===3){
                                console.log("Regist Success");
                            }

                        }
                        })


}


function registration(){
    var status =document.querySelector('input[name="status_id"]:checked').value;
    var present =document.querySelector('input[name="presenter"]:checked').value;
    var title=$("#title").val();
    var firstname   = $("#firstname").val();
    var middlename    = $("#middlename").val();
            var lastname    = $("#lastname").val();
            var email       = $("#email").val();
            var tel= $("#telephone").val();
            var username    = $("#username").val();
            var password    = $("#password").val();
            var confirmpassword=$("#confirmpassword").val();
            var nameorganize=$("#nameorganize").val();
            var namedept=$("#namedept").val();
            var address     = $("#address").val();
            var nationality=$("#nationality").val();
            var member= $("#member").val();
            var identity=$("#identitycard").val();
            var papers=[];
            for(var i=1;i<=CHECKDROPDOWN;i++){
                console.log($("#paper"+i).val());
                var check=$("#paper"+i).val();
                if(check.length!==0){
                $("#paper"+i).val()
                  var inpaper =parseInt($("#paper"+i).val(), 10);
                var obj={"id_paper":inpaper, "page":$("#page"+i).val(),"category":$("#category"+i).val()};
                    papers.push(obj);
                }
             }
             var paperJson = JSON.stringify(papers);
           //  console.log(tel);
var object={"title":title,"familyname":firstname,"middlename":middlename,"givenname":lastname,"organization":nameorganize,"dept":namedept,"address":address,"nationality":nationality,"telephone":tel,"email":email,"membership":member,"presenter":present,"username":username, "password":password,"status_id":status,"thai_id":identity,"papers":papers};

var objectJson=JSON.stringify(object);
console.log(objectJson);

            $.ajax({
                            url:url+"/registration",
                            type:"POST",
                            //data:'{"title":"'+title+'","familyname":"'+firstname+'","middlename":"'+middlename+'","givenname":"'+lastname+'","organization":"'+nameorganize+'","dept":"'+namedept+'","address":"'+address+'","nationality":"'+nationality+'","telephone":"'+tel+'","email":"'+email+'","membership":"'+member+'","presenter":"'+present+'" ,"username":"'+username+'", "password":"'+password+'","status_id":"'+status+'","thai_id":"'+identity+'","papers":'+papers+'}',
                            data:objectJson,
                            contentType:"application/json;charset=utf-8",
                            success: function(res){

                            if(res===1){
                                console.log("Username repeat");
                            }
                            if(res===2){
                                console.log("Email repeat");


                                          }
                            if(res===3){
                                console.log("Regist Success");
                            }

                        }
                        })


}

