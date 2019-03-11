//var url = "http://localhost:8080";
//
//var i=0;
//function addTextbox(){
//    i++;
//    var status_name=document.createElement("input");
//     var status_earlyrate=document.createElement("input");
//     var status_afterrate=document.createElement("input");
//     var status_onsiterate=document.createElement("input");
//
//    status_name.setAttribute("type","textbox");
//    status_earlyrate.setAttribute("type","textbox");
//    status_afterrate.setAttribute("type","textbox");
//    status_onsiterate.setAttribute("type","textbox");
//    status_name.setAttribute("id","status_name"+(i));
//    status_earlyrate.setAttribute("id","status_earlyrate"+(i));
//     status_afterrate.setAttribute("id","status_afterrate"+(i));
//      status_onsiterate.setAttribute("id","status_onsiterate"+(i));
//
//    $('#addstatus').append(
//    '<tr>'
//    +'<td><center><input type="textbox" id="'+status_name.id+'"></center></td>'
//    +'<td><center><input type="textbox" id="'+status_earlyrate.id+'"></center></td>'
//    +'<td><center><input type="textbox" id="'+status_afterrate.id+'"></center></td>'
//    +'<td><center><input type="textbox" id="'+status_onsiterate.id+'"></center></td>'
//    +'<tr>'
//
//    );
//}
//
//function addStatus(){
//    var nameArray=[];
//    for(var e=0 ;e<=i;e++){
//
//   console.log($("#status_name"+e).val());
// var check=$("#status_name"+e).val();
// if(check.length!==0){
// console.log(check.length);
//        var obj={"status_name":$("#status_name"+e).val(),"early_rate":$("#status_earlyrate"+e).val(),"after_rate":0,"onsite_rate":0};
//                var obj2={"status_name":$("#status_name"+e).val(),"early_rate":0,"after_rate":$("#status_afterrate"+e).val(),"onsite_rate":0};
//                            var obj3={"status_name":$("#status_name"+e).val(),"early_rate":0,"after_rate":0,"onsite_rate":$("#status_onsiterate"+e).val()};
//
//            nameArray.push(obj);
//            nameArray.push(obj2);
//            nameArray.push(obj3);
//}
//        }
//    $.ajax({
//        url:url+"/addstatus/",
//        type:"POST",
//        data:JSON.stringify(nameArray),
//        contentType:"application/json;charset=utf-8",
//        success: function(response){
//            console.log("success");
//        }
//
//    })
//
//
//
//
//
//}