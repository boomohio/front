var url = "http://localhost:8080";
$(document).ready(function () {
    getDateOnclick();
});

function getDateOnclick(){
     $.ajax({
                      url:url+"/datepromotion",
                      type:"GET",
                      success: function(res){
                      var date=new Date(res.datepromotion);
                      console.log(date);
                     // var dateString = date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear();
                      //var currentDate = date.toISOString().slice(1,10);
                     // console.log(currentDate);
                      var day = ("0" + date.getDate()).slice(-2);
                      var month = ("0" + (date.getMonth() + 1)).slice(-2);

                      var today = date.getFullYear()+"-"+(month)+"-"+(day) ;
                      document.getElementById('date').value = today;
                     // console.log(dateString);
                      }
                      });
}


function addDate() {
    var date = new Date($('#date').val());
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    console.log("day === ",day, "\nmonth ===  ",month, "\nyear === ",year);
    timestamp = date.getTime();
    console.log("timestamp"+timestamp);
    var date2 = new Date(timestamp);
    console.log(date2);
  $.ajax({
                       url:url+"/datepromotion",
                       type:"POST",
                       data:'{"time":"'+timestamp+'"}',
                       contentType:"application/json;charset=utf-8",

                       success: function(res){
                        console.log("success");
                       }
                       });
 }



//
//function addTime() {
//    var timeControl = document.getElementById("time").value;
//    var time = document.getElementById("time").innerHTML = timeControl;
//    console.log("time === ",time);
//
//}

function addDateOnclick() {
    addDate();
//    addTime();

}

// function addTime() {
//     var time = new Date();
//     var hour = time.getHours();
//     var minutes = time.getMinutes();
//     if(hour < 10) hour = '0' + hour;
//     if(minutes < 10) minutes = '0' + minutes;
//     $('input[type="time"][value="time_in"]').each(function(){
//         $(this).attr({'value': hour + ':' + minutes});
//       });
//     console.log("hour === ",hour, "\nminutes === ",minutes);

// }

