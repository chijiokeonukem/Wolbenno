// JavaScript Document
var rootfolder="http://localhost/fullsite/";
//var rootfolder="http://www.marketcity.biz/";
$(document).ready(function(){
	$("#btnaddPro").click(function() {
		alert();
	});
	//BEGINING OF PULL DOWN MENU
	$(".menu-button").click(function() {
		$("#polldown_menu").toggle();
	});
	$("#body_content,#menu").click(function() {
		$("#polldown_menu").hide();
	});
	//END OF PULLDOWN MENU
	// When a link is clicked
	$("a.tab").click(function () {
		
		
		// switch all tabs off
		$(".active").removeClass("active");
		
		// switch this tab on
		$(this).addClass("active");
		
		// slide all content up
		$(".content").hide();
		
		// slide this content up
		var content_show = $(this).attr("title");
		$("#"+content_show).show();
	});
	
	$("#dialog2").dialog({
		autoOpen: false,
		modal: true,
		width: 800,
		height: 400,
		buttons: {
			"Dismiss": function() {
				$(this).dialog("close");
			}
		}
	});
	$(".dialogify").on("click", function(e) {
		e.preventDefault();
		$("#dialog2").html("");
		$("#dialog2").dialog("option", "title", "Loading...").dialog("open");
		//$("#dialog").load(this.href);
		$("#dialog2").load(this.href, function() {
			$(this).dialog("option", "title", $(this).find("h1").text());
			$(this).find("h1").remove();
		});
	});
	
	$("#btnLogin").on("click", function(e) {
		e.preventDefault();
		var username=$("#username").val();
		var password=$("#password").val();
		
		if(username=="")
		{
			$("#username").css("background-color","#4AA0DF");
			$("#username").focus();
		}
		else if(password=="")
		{
			$("#password").css("background-color","#4AA0DF");
			$("#password").focus();
		}
		else
		{
			$.ajax({
				url:"includes/handle_request.php?_mode=userLogin",
				type:"POST",
				data:$("#frmLogin").serialize(),
				beforeSend: function() {
					document.getElementById("confirmsub").innerHTML="<img src='images/loading_blue.gif' align='absmiddle' /> Please wait...";
				},
				success: function(data) {
					if(data==1)
						location.href=rootfolder+"members";
					else
					{
						document.getElementById("password").value="";
						document.getElementById("confirmsub").innerHTML="Invalid Login Details, Retry";
					}
				}
			});
		}
	});
	
	$("#btnRegister").on("click", function(e) {
		e.preventDefault();
		
		var fullname=$("#fullname").val();
		var email=$("#email").val();
		var phone=$("#phone").val();
		var specification=$("#specification").val();
		var username=$("#username").val();
		var password=$("#rpassword").val();
		var rpassword=$("#rrpassword").val();
		
		if(fullname=="")
		{
			$("#fullname").css("background-color","#4AA0DF");
			$("#fullname").focus();
		}
		else if(email=="")
		{
			$("#email").css("background-color","#4AA0DF");
			$("#email").focus();
		}
		else if(phone=="")
		{
			$("#phone").css("background-color","#4AA0DF");
			$("#phone").focus();
		}
		else if(specification=="")
		{
			$("#specification").css("background-color","#4AA0DF");
			$("#specification").focus();
		}
		else if(username=="")
		{
			$("#username").css("background-color","#4AA0DF");
			$("#username").focus();
		}
		else if(password=="")
		{
			$("#rpassword").css("background-color","#4AA0DF");
			$("#rpassword").focus();
		}
		else if(password!=rpassword)
		{
			$("#rrpassword").css("background-color","#FF6");
			$("#rrpassword").focus();
		}
		else if(validateEmail(email)==false)
		{
			$("#email").css("background-color","#FF6");
			$("#email").focus();
		}
		else if(document.getElementById("errUsername").innerHTML=="Invalid Username" || document.getElementById("errUsername").innerHTML=="Username is unavailable")
		{
			$("#username").css("background-color","#FF6");
			$("#username").focus();
		}
		else if(document.frmReg.agree.checked==false)
		{
			alert("You must agree to abide by the Terms and Conditions");
			$("#agree").css("background-color","#FF6");
			$("#agree").focus();
		}
		else
		{
			$.ajax({
				url:"includes/handle_request.php?_mode=userReg",
				type:"POST",
				data:$("#frmReg").serialize(),
				beforeSend: function() {
					//document.getElementById("confirmsub").innerHTML="images/loader.gif";
				},
				success: function(data) {
					if(data==false)
						alert("The specified email or phone number already exist");
					else
					{
						document.getElementById("membercode").innerHTML=data;
						$(".sendinvitation").css("display","block");
						$(".central").css("display","none");
					}
				}
			});
		}
	});
	
	$("#btnUpdate").on("click", function(e) {
		e.preventDefault();
		var bizname=$("#bizname").val();
		var bizaddress1=$("#bizaddress1").val();
		var bizphone=$("#bizphone").val();
		var bizdesc=$("#bizdesc").val();
		
		if(bizname=="")
		{
			$("#bizname").css("background-color","#4AA0DF");
			$("#bizname").focus();
		}
		else if(bizaddress1=="")
		{
			$("#bizaddress1").css("background-color","#4AA0DF");
			$("#bizaddress1").focus();
		}
		else if(bizphone=="")
		{
			$("#bizphone").css("background-color","#4AA0DF");
			$("#bizphone").focus();
		}
		else if(bizdesc=="")
		{
			$("#bizdesc").css("background-color","#4AA0DF");
			$("#bizdesc").focus();
		}
		else
		{
			$("#frmBiz").submit();
		}
	});
	
	$("#btnReply").on("click", function(e) {
		var reciever=$("#txtReciever").val();
		var subject=$("#txtSubject").val();
		var message=$("#txtBody").val();
		
		if(reciever=="")
		{
			$("#txtReciever").css("background-color","#4AA0DF");
			$("#txtReciever").focus();
		}
		else if(subject=="")
		{
			$("#txtSubject").css("background-color","#4AA0DF");
			$("#txtSubject").focus();
		}
		else if(message=="")
		{
			$("#txtBody").css("background-color","#4AA0DF");
			$("#txtBody").focus();
		}
		else
		{
			location.href="../includes/handle_request.php?_mode=message&category=reply&id_reciever="+reciever+"&subject="+subject+"&message="+message;
		}
	});
	
	$("#btnContact").on("click", function(e) {
		e.preventDefault();
		
		var fullname=$("#fullname").val();
		var email=$("#email").val();
		var phone=$("#phone").val();
		var subject=$("#subject").val();
		var message=$("#message").val();
		
		if(fullname=="")
		{
			$("#fullname").css("background-color","#4AA0DF");
			$("#fullname").focus();
		}
		else if(email=="")
		{
			$("#email").css("background-color","#4AA0DF");
			$("#email").focus();
		}
		else if(subject=="")
		{
			$("#subject").css("background-color","#4AA0DF");
			$("#subject").focus();
		}
		else if(message=="")
		{
			$("#message").css("background-color","#4AA0DF");
			$("#message").focus();
		}
		else
		{
			$("#frmContact").submit();
		}
	});
	
	$("#sendBuyingRequest").click(function (){
		var sender_id=$("#sender_id").val();
		var receiver_id=$("#receiver_id").val();
		var product_id=$("#product_id").val();
		var request=$("#request").val();
		var form_data={"sender_id":sender_id,"receiver_id":receiver_id,"product_id":product_id,"request":request};
		
		if(request=="")
			$("#request").focus();
		else
		{
			$.ajax({
					url:"includes/handle_request.php?_mode=sendBuyingRequest",
					type:"POST",
					data:form_data,
					beforeSend: function() {
						document.getElementById("confirmsub").innerHTML="<img src='images/loading_blue.gif' /> Sending Request...";
					},
					success: function(data) {
						$("#confirmsub").html("<font style='color:#090;'>"+data+"</font>");
					}
				});
		}
	});
	
	$("#sendBuyingRequest2").click(function (){
		var sender_id=$("#sender_id").val();
		var receiver_id=$("#receiver_id").val();
		var request=$("#request").val();
		var form_data={"sender_id":sender_id,"receiver_id":receiver_id,"request":request};
		
		if(request=="")
			$("#request").focus();
		else
		{
			$.ajax({
					url:"includes/handle_request.php?_mode=sendBuyingRequest",
					type:"POST",
					data:form_data,
					beforeSend: function() {
						document.getElementById("confirmsub").innerHTML="<img src='images/loading_blue.gif' /> Sending Request...";
					},
					success: function(data) {
						$("#confirmsub").html("<font style='color:#090;'>"+data+"</font>");
					}
				});
		}
	});
});

checked = false;
function checkedAll()
{
	if (checked == false)
		checked = true
	else
		checked = false
		
	for (var i = 0; i < document.getElementById('frmInbox').elements.length; i++) 
	{
		document.getElementById('frmInbox').elements[i].checked = checked;
	}
}

function confirmbox(id,category) {
		$.confirm({
			'title'		: 'Delete Confirmation',
			'message'	: 'You are about to delete this item. <br />It cannot be restored at a later time! Continue?',
			'buttons'	: {
				'Yes'	: {
					'class'	: 'blue',
					'action': function(){
						location.href="../includes/handle_request.php?_mode=delete&category="+category+"&id="+id;
					}
				},
				'No'	: {
					'class'	: 'gray',
					'action': function(){}	// Nothing to do in this case. You can as well omit the action property.
				}
			}
		});
		
	}

function checkUsername()
{
	var username=$("#username").val();
	var form_data={"username":username};
	
	$.ajax({
		url:"includes/handle_request.php?_mode=checkUsername",
		type:"POST",
		data:form_data,
		success: function(data) {
			//$("#confirmsub").html("<font style='color:#090;'>"+data+"</font>");
			document.getElementById("errUsername").innerHTML=data;
		}
	});
}

function regcon()
{
	var membercode=document.getElementById("membercode").innerHTML;
	
	location.href=rootfolder+"members/Regcon/"+membercode;
}