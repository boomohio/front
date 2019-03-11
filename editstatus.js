var url="http://localhost:8080";
$(document).ready(function(){
    getInformationStatus();
});

function getInformationStatus(){
    var result=getUrlParameter('id');
    $.ajax({
            url:url+"/status/"+result,
            type:"GET",
            success: function(response){
//            if(response.early_rate!==0){
//            var element = document.createElement("input");
//            var label=document.createElement("label");
//             var label2=document.createElement("label");
//              var label3=document.createElement("label");
//            label.setAttribute("for","early_rate");
//            label.innerHTML="Early Bird Rate:";
//            element.setAttribute("type","textbox");
//            element.setAttribute("value",response.early_rate);
//             element.setAttribute("class","form-control");
//            element.setAttribute("id","early_rate");
//            element.setAttribute("name","early_rate");
//            label2.setAttribute("id","after_rate");
//            label2.setAttribute("value",response.after_rate);
//            label3.setAttribute("id","onsite_rate");
//            label3.setAttribute("value",response.onsite_rate);
//             label2.innerHTML="After Rate:    "+response.after_rate;
//              label3.innerHTML="Onsite Rate:    "+response.onsite_rate;
//             $('#foo').append(label);
//             $('#foo').append(element);
//             $('#foo').append("<br>");
//              $('#foo').append(label2);
//              $('#foo').append("<br>");
//               $('#foo').append(label3);
//            }
//
//            if(response.after_rate!==0){
//                        var element = document.createElement("input");
//                        var label=document.createElement("label");
//                         var label2=document.createElement("label");
//                          var label3=document.createElement("label");
//                        label.setAttribute("for","after_rate");
//                        label.innerHTML="After Rate:";
//                        element.setAttribute("type","textbox");
//                        element.setAttribute("value",response.after_rate);
//                         element.setAttribute("class","form-control");
//                        element.setAttribute("id","after_rate");
//                        element.setAttribute("name","after_rate");
//                        label2.setAttribute("id","early_rate");
//                        label2.setAttribute("value",response.early_rate);
//                        label3.setAttribute("id","onsite_rate");
//                        label3.setAttribute("value",response.onsite_rate);
//                         label2.innerHTML="Early Bird Rate: <br>   "+response.early_rate;
//                          label3.innerHTML="Onsite Rate:  <br>  "+response.onsite_rate;
//                         $('#foo').append(label2);
//
//                         $('#foo').append("<br>");
//                         $('#foo').append(label);
//                         $('#foo').append(element);
//
//                          $('#foo').append("<br>");
//                           $('#foo').append(label3);
//                        }
//             if(response.onsite_rate!==0){
//                                     var element = document.createElement("input");
//                                     var label=document.createElement("label");
//                                      var label2=document.createElement("label");
//                                       var label3=document.createElement("label");
//                                     label.setAttribute("for","onsite_rate");
//                                     label.innerHTML="Onsite Rate:";
//                                     element.setAttribute("type","textbox");
//                                     element.setAttribute("value",response.onsite_rate);
//                                      element.setAttribute("class","form-control");
//                                     element.setAttribute("id","onsite_rate");
//                                     element.setAttribute("name","onsite_rate");
//                                     label2.setAttribute("id","after_rate");
//                                     label2.setAttribute("value",response.after_rate);
//                                     label3.setAttribute("id","early_rate");
//                                     label3.setAttribute("value",response.early_rate);
//                                      label2.innerHTML="Onsite Rate: <br>   "+response.after_rate;
//                                       label3.innerHTML="Early Bird Rate:  <br>  "+response.early_rate;
//                                      $('#foo').append(label3);
//
//                                      $('#foo').append("<br>");
//                                      $('#foo').append(label2);
//
//
//                                       $('#foo').append("<br>");
//                                        $('#foo').append(label3);
//                                         $('#foo').append(element);
//                                     }
//
//
//
//
//
//
        $("#statusname").val(response.status_name);
         $("#status_type").val(response.type_status);
          $("#regis_type").val(response.type_regis);
            $("#rate").val(response.rate);

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

function updateInformationStatus(){
    var id=getUrlParameter('id')
    var status_name   = $("#statusname").val();
    var status_type    = $("#status_type").val();
    var regis_type    = $("#regis_type").val();
    var rate    = $("#rate").val();
   $.ajax({
                url:url+"/edittostatus/"+id,
                type:"POST",
                data:'{"status_name":"'+status_name+'","type_status":"'+status_type+'","type_regis":"'+regis_type+'","rate":"'+rate+'"}',
                contentType:"application/json;charset=utf-8",
                success: function(response){
                console.log("success");
                              }

            })

}