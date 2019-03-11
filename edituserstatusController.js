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
            url:url+"/finduserstatus/"+result,
            type:"GET",
            success: function(response){
             $("#id").val(response.id);
             $("#firstname").val(response.user.firstname);
             $("#lastname").val(response.user.lastname);
             $("#email").val(response.user.email);
             $("#university").val(response.user.university);
             $("#tel").val(response.user.tel);
             $("#address").val(response.user.address);
             for(var i = 0 ; i<response.status.length;i++){
                var element = document.createElement("input");
                var label=document.createElement("label");
                label.setAttribute("for",response.status[i].status_name);
                label.innerHTML=response.status[i].status_name;
                element.setAttribute("type","radio");
                element.setAttribute("value",response.status[i].id);
                element.setAttribute("id",response.status[i].id);
                element.setAttribute("name","status_id");
                if(response.user.statusEntitiesId==response.status[i].id){
                    element.checked=true;
                }
                $('#foo').append(element);
                $('#foo').append(label);

             }

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