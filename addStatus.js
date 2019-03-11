var url = "http://localhost:8080";

var i=0;
function addTextbox(){
    i++;
    var status_name=document.createElement("input");
    var status_type=document.createElement("input");
     var status_earlyrate=document.createElement("input");
     var status_afterrate=document.createElement("input");
     var status_onsiterate=document.createElement("input");

    status_name.setAttribute("type","textbox");
    status_type.setAttribute("type","textbox");
    status_earlyrate.setAttribute("type","textbox");
    status_afterrate.setAttribute("type","textbox");
    status_onsiterate.setAttribute("type","textbox");
    status_name.setAttribute("id","status_name"+
    (i));
    status_type.setAttribute("id","status_type"+(i));
    status_earlyrate.setAttribute("id","status_earlyrate"+(i));
     status_afterrate.setAttribute("id","status_afterrate"+(i));
      status_onsiterate.setAttribute("id","status_onsiterate"+(i));

    $('#addstatus').append(
    '<tr>'
    +'<td><center><input type="textbox" id="'+status_name.id+'"></center></td>'
     +'<td><center><input type="textbox" id="'+status_type.id+'"></center></td>'
    +'<td><center><input type="textbox" id="'+status_earlyrate.id+'"></center></td>'
    +'<td><center><input type="textbox" id="'+status_afterrate.id+'"></center></td>'
    +'<td><center><input type="textbox" id="'+status_onsiterate.id+'"></center></td>'
    +'<tr>'

    );
}

function addStatus(){
    var nameArray=[];
    for(var e=0 ;e<=i;e++){

   console.log($("#status_name"+e).val());
 var check=$("#status_name"+e).val();
 if(check.length!==0){
 console.log(check.length);
        var obj={"status_name":$("#status_name"+e).val(),"type_status":$("#status_type"+e).val(),"type_regis":"Early Bird Registration Rate","rate":$("#status_earlyrate"+e).val(),"type":"EARLY"};
                var obj2={"status_name":$("#status_name"+e).val(),"type_status":$("#status_type"+e).val(),"type_regis":"Registration After Rate","rate":$("#status_afterrate"+e).val(),"type":"AFTER"};
                            var obj3={"status_name":$("#status_name"+e).val(),"type_status":$("#status_type"+e).val(),"type_regis":"Registration Onsite Rate","rate":$("#status_onsiterate"+e).val(),"type":"ONSITE"};

            nameArray.push(obj);
            nameArray.push(obj2);
            nameArray.push(obj3);
}
        }
        console.log(nameArray);
    $.ajax({
        url:url+"/addstatus",
        type:"POST",
        data:JSON.stringify(nameArray),
        contentType:"application/json;charset=utf-8",
        success: function(response){
            console.log("success");
        }

    })





}