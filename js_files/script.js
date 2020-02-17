// JavaScript Document
function civil(){
	alert("civil construction");
	
}
function firstsend(){
var fullname,email,btn,admint;
fullname=$("#uname").val();
email=$("#uemail").val();
btn=$("#adminbtn").val();
admint=$("#admintxt").val();

if (fullname=="" || email==""){
	alert("All fields are required");
		$("#chatpanel").css('visibility','hidden');
			$("#ln").css('visibility','visible');
}

else if(btn=="on"){
	
	if (admint==""){
		alert("You are required to enter password as admin");
		
	}
	
	else if(admint=="wolbeno"){
		$("#admin").css('visibility','hidden');
	$("#chatpanel").css('visibility','visible');
	$("#chattxt").html("Chat Started : 12:49 PM");
		$("#start").css('visibility','hidden');
			$("#ln").css('visibility','hidden');	
			$("#adminpass").css('visibility','hidden');
		$("#welcome").html ("Welcome to live chat Pannel :: Admin");
	}
	else
	{	alert("Incorrect password. Contact admin");
		
	}
	
}
else {
	$("#admin").css('visibility','hidden');
	$("#chatpanel").css('visibility','visible');
	$("#chattxt").html("Chat Started : 12:49 PM");
		$("#start").css('visibility','hidden');
			$("#ln").css('visibility','hidden');
				$("#welcome").html("Welcome to live chat Pannel :: Client");
	
}
}

function endchat(){
	$("#chatpanel").css('visibility','hidden');
		$("#start").css('visibility','visible');
			$("#ln").css('visibility','visible');
				$("#admin").css('visibility','visible');
$("#adminbtn").val("on");	
$("#welcome").html("Welcome to live chat Pannel");
$("#adminbtn").val("on");	
}


/////////////////////////////

function subscribe(){


var email;
var typee;
email=document.getElementById('subtext').value;

if(email=="")
{
alert("No email was entered !");
}


else{
alert("Thank you for subscribing !");
document.getElementById('subtext').value="";	
var ajaxRequest;  // The variable that makes Ajax possible!
	var str="" ;
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }


 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('chat_profile');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
	  str= ajaxRequest.responseText;
	  alert (str);
  }
   }



 typee="subscribe";
 var queryString = "?para1=" + email ;
 queryString +=  "&type=" + typee;
 ajaxRequest.open("GET", "includes/api1.php" + 
                              queryString, true);
 ajaxRequest.send(null); 
}
}





function faq(){


var email;
var typee;
var fullname;
var message;
var st;
fullname=document.getElementById('faqname').value;
email=document.getElementById('faqemail').value;
message=document.getElementById('faqmsg').value;

if(email=="")
{
alert("Email Fields are compulsary !");
	$("#faqemail").css('border-color','red');
	$("#faqmsg").css('border-color','#ccc');
}

else if(message==""){
alert("Message Fields are compulsary !");	
$("#faqmsg").css('border-color','red');
$("#faqemail").css('border-color','#ccc');
	
}

else{
alert("Thank you !. Check your mail withing 24 hours for reply.");	
document.getElementById('faqmsg').value="";	
document.getElementById('faqname').value="";
document.getElementById('faqemail').value="";
var ajaxRequest;  // The variable that makes Ajax possible!
	
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }


 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('reply');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
	  st= ajaxRequest.responseText;
	  alert (st);
  }
   }



 typee="faq";
 var queryString = "?email=" + email ;
 queryString +=  "&type=" + typee;
  queryString +=  "&fullname=" + fullname;
    queryString +=  "&message=" + message;
 ajaxRequest.open("GET", "includes/api1.php" + 
                              queryString, true);
 ajaxRequest.send(null); 
}
}




function loadfaq(){
	
var email;
var typee;
var fullname;
var message;
var st;
fullname=document.getElementById('faqname').value;
email=document.getElementById('faqemail').value;
message=document.getElementById('faqmsg').value;



//alert("Thank you !. Check your mail withing 24 hours for reply.");	

var ajaxRequest;  // The variable that makes Ajax possible!
	
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }


 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('reply');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
	  st= ajaxRequest.responseText;
	  //alert (st);
  }
   }



 typee="loadfaq";
 var queryString = "?email=" + email ;
 queryString +=  "&type=" + typee;
  queryString +=  "&fullname=" + fullname;
    queryString +=  "&message=" + message;
 ajaxRequest.open("GET", "includes/api1.php" + 
                              queryString, true);
 ajaxRequest.send(null); 


}


////send chat function//////

function send_chat(){
	
	var no;
	var txt;
	var st;
	var typee;
	var name;
 txt=document.getElementById('chatti').value;

no=document.getElementById('adminbtn').value;
if(no=="on"){
name="Admin";
$("#chattxt").append("&nbsp;<span style='color:red;font-size:14px; font-weight:bold'> Admin:</span>&nbsp;" + txt + "<br/><br/>");	
}
else{
name=document.getElementById('uname').value;
$("#chattxt").append("&nbsp;<span style='color:#438db8;font-size:14px; font-weight:bold'>" + name + ":</span>&nbsp;" + txt + "<br/><br/>");

}


//alert("Thank you !. Check your mail withing 24 hours for reply.");	

var ajaxRequest;  // The variable that makes Ajax possible!
	
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }


 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('chattxt');
	 
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
	  st= ajaxRequest.responseText;
	  
	 document.getElementById('chatti').value=""; 
  }
   }



 typee="sendchat";
 var queryString = "?name=" + name ;
 queryString +=  "&type=" + typee;
  queryString +=  "&txt=" + txt;
 ajaxRequest.open("GET", "includes/api1.php" + 
                              queryString, true);
 ajaxRequest.send(null); 



}

///end of send chat///////////

function adminchanj(){
	var getv;
	getv=$("#adminbtn").val();
	if (getv=="on"){
			$("#adminpass").css('visibility','hidden');
		
		
	$("#adminbtn").val("off");
		getv="off";
	}
	else if (getv=="off"){
		
			$("#adminpass").css('visibility','visible');
		
 $("#adminbtn").val("on");
		getv="on";
	}	
}




///////////////////////////////chat updater////////////


setInterval(function update_chat(){
	//alert("Hello")
	
	
	updatechat();
	
	
	}, 1000);


////////////////////end of vhat updater/////////////





function updatechat(){

	var typee;
var st;

//alert("Thank you !. Check your mail withing 24 hours for reply.");	

var ajaxRequest;  // The variable that makes Ajax possible!
	
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }


 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('chattxt');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
	  st= ajaxRequest.responseText;
	   
  }
   }



 typee="updatechat";
 var queryString = "?type=" + typee ;

 ajaxRequest.open("GET", "includes/api1.php" + 
                              queryString, true);
 ajaxRequest.send(null); 



}

function dropdb(){
	update_chat();
	alert ("drop");
	var typee;
var st;

//alert("Thank you !. Check your mail withing 24 hours for reply.");	

var ajaxRequest;  // The variable that makes Ajax possible!
	
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }


 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
     // var ajaxDisplay = document.getElementById('chattxt');
      //ajaxDisplay.innerHTML = ajaxRequest.responseText;
	 // st= ajaxRequest.responseText;
	   
  }
   }



 typee="dropdb";
 var queryString = "?type=" + typee ;

 ajaxRequest.open("GET", "includes/api1.php" + 
                              queryString, true);
 ajaxRequest.send(null); 



}