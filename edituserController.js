var url="http://localhost:8080";
$(document).ready(function(){
    getInformationUser();
});
//function edituser(){
//    $.ajax({
//        url:url+"/edituser/",
//        type:"GET"
//        success:function(res){
//            $("#firstName").val(res[0].firstname);
//
//
//        }
//
//    })
//
//}
function getInformationUser(){
    var result=getUrlParameter('id');
    $.ajax({
            url:url+"/finduser/"+result,
            type:"GET",
            success: function(response){
             $("#id").val(response.id);
             $("#firstname").val(response.firstname);
             $("#lastname").val(response.lastname);
             $("#email").val(response.email);
             $("#university").val(response.university);
             $("#tel").val(response.tel);
             $("#address").val(response.address);
                                      }
                                })
               };


function getUrlParameter(sParam){
	var sPageUrl = window.location.search.substring(1);
	var sURLVariables = sPageUrl.split('&');
	for(var i=0;i<sURLVariables.length;i++){
	var sParameterName = sURLVariables[i].split('=');
	if(sParameterName[0]=sParam){

		return sParameterName[1];
		}
	}
}

function updateInformationUser(){
    var id=getUrlParameter('id')
    var status_id =document.querySelector('input[name="status_id"]:checked').value;
    var obj=document.querySelector('input[name="status_id"]:checked').value;
    var firstname   = $("#firstname").val();
    var lastname    = $("#lastname").val();
    var email       = $("#email").val();
    var university  = $("#university").val();
    var tel       = $("#tel").val();
    var address     = $("#address").val();
    var username;
    var password;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(university);
    console.log(tel);
    console.log(address);
    console.log(status_id);
    console.log(username);
    console.log(password);
    $.ajax({
                url:url+"/edituser/"+id,
                type:"POST",
                data:'{"firstname":"'+firstname+'","lastname":"'+lastname+'", "username":"'+username+'", "password":"'+password+'","email":"'+email+'","university":"'+university+'","tel":"'+tel+'","address":"'+address+'","statusEntities":{"id":"'+obj+'"}}',
                contentType:"application/json;charset=utf-8",
                success: function(response){
                console.log("success");
                              }

            })

}