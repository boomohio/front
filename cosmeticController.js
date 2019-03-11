//var url = "http://localhost:8080";
//
////$( document ).ready(function() {
//// register();
////});
//
////function tel(){
////    var tel = $("#tel").val();
////    console.log("tel",tel);
////};
////function postId(){
////
////    var username = $("#username").val();
////
////    console.log("username",username);
////            $.ajax({
////              url:url+"/",
////              type:"POST",
////              data:'{"name":"'+username+'" , "amount":100}',
////              contentType:"application/json;charset=utf-8",
////              success: function(response){
////                console.log(response);
////              }
////            })
////
////};
//
//
//
//function register(){
//    var obj =document.querySelector('input[name="status_id"]:checked').value;
//
//    var firstname   = $("#firstname").val();
//    var lastname    = $("#lastname").val();
//    var username    = $("#username").val();
//    var password    = $("#password").val();
//    var email       = $("#email").val();
//    var university  = $("#university").val();
//    var tel       = $("#tel").val();
//    var address     = $("#address").val();
//
//    console.log(firstname);
//    console.log(lastname);
//    console.log(username);
//    console.log(password);
//    console.log(email);
//    console.log(university);
//    console.log(tel);
//    console.log(address);
//   console.log(obj);
//        $.ajax({
//            url:url+"/register/",
//            type:"POST",
//            data:'{"firstname":"'+firstname+'","lastname":"'+lastname+'", "username":"'+username+'", "password":"'+password+'","email":"'+email+'","university":"'+university+'","tel":"'+tel+'","address":"'+address+'","statusEntities":{"id":"'+obj+'"}}',
//            contentType:"application/json;charset=utf-8",
//            success: function(response){
//            console.log("success");
//            console.log(response);
//            if(response==0){
//                alert("username repeat");
//                document.getElementById("usernameLabel").innerHTML = "Username  **the username already exist";
//                    document.getElementById("usernameLabel").style.fontWeight = "bold";
//                document.getElementById("usernameLabel").style.color = "red";
//                }
//            if(response==1){
//                alert("success");
//                location.reload();
//                location.href = 'home.html';
//            }
//               }
//
//        })
//};
////function getAllUsers(){
////$.ajax({
////      url:url+"/allusers/",
////      type:"GET",
////      success: function(response){
////      console.log("Get DATA ID"+response[0].id);
////      console.log("Get DATA ID"+response[0].firstname);
////      }
////})
////}
//
//
//
//
////function getId(){
////    $.ajax({
////      url:url+"/cosmetics/",
////      type:"GET",
////      success: function(response){
////      console.log(response)
////        $("#firstName").val(response[0].name)
////        var nameValue = getUrlParameter("name");
////        $("#lastName").val(nameValue);
////      }
////    })
////
////}
////function deleteId(){
////    var name= $("#firstName").val();
////    $.ajax({
////          url:url+"/cosmetics/"+name,
////          type:"DELETE",
////          success: function(response){
////            console.log(response);
////          }
////        })
////
////}
//
////var getUrlParameter = function getUrlParameter(sParam) {
////    var sPageURL = window.location.search.substring(1),
////        sURLVariables = sPageURL.split('&'),
////        sParameterName,
////        i;
////
////    for (i = 0; i < sURLVariables.length; i++) {
////        sParameterName = sURLVariables[i].split('=');
////
////        if (sParameterName[0] === sParam) {
////            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
////        }
////    }
////};
////
////function findByName(){
//// var name= $("#firstName").val();
////  window.location.href = "test.html?name="+name+"&lastname=lastnameValue";
////    var name=$("#firstName").val();
////    $.ajax({
////
////          url:url+"/cosmetics/name/"+name,
////          type:"GET",
////          success: function(response){
////            console.log(response);
////          }
////        })
//
////}
////
////function checkUsername(username){
////    var letterNumber = "/^[0-9a-zA-Z]+$/";
////    if((username.value.match(letterNumber))){
////        username.setCustomValidity("");
////    }
////    else{
////        username.setCustomValidity("Only 0-9 or a-z A-Z");
////    }
////};
