$ (document).ready(function(){
    console.log("It is ready!");
    $('#loginForm').submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
});

function ajaxPost(){
    var formData = {
        email : $('#email').val(),
        upwd : $('#upwd').val()
    }
    $.ajax({
        type : "POST",
        contentType : "application/json",
        url : window.location + "api/login",
        data : JSON.stringify(formData),
        dataType : 'Json',
        success : function(customer){
            if (customer.valid == true){
                $("#loginForm").removeClass("fail");
                $("#loginForm").addClass("success");
                $('#errormsg').removeClass("showmessage");
                $('#errormsg').addClass("hidemessage");

                $("#postResultDiv").html("<img src='./img/smile.png' width='400'> "+"<h2>" + "Successfully Login! + </h2> <br>"+ "<p>"+ "Email Address: " + customer.email + "<br>" +
                "Password: " + customer.upwd+ "<br>" + "Valid User: " + customer.valid + "</p>");

            }else{
                $("#loginForm").removeClass("success");
                $("#loginForm").addClass("fail");
                $('#errormsg').removeClass("hidemessage");
                $('#errormsg').addClass("showmessage");

                $("#postResultDiv").html("<img src='./img/sad.png' width='400'> "+"<h2>" + "Login fail.. </h2> <br>"+ "<p>"+ "Email Address: " + customer.email + "<br>" +
                "Password: " + customer.upwd+ "<br>" + "Valid User: " + customer.valid + "</p>");
            }
        },
        error : function(e){
            alert("Error")
            console.log("Error: ",e);
        }
    });
    function resetData(){
        $("#email").val("");
        $("#upwd").val("");
    }
    resetData();
};



