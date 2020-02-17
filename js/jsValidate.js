function validate(inputname)
{
	$("#"+inputname).on("focusout", function() {
		if($(this).val()=="")
			$("#"+inputname).css("background-color","#F0F0F0");
		else
			$("#"+inputname).css("background-color","#fff");
	});
}

function validateEmail(sEmail)
{
	var filter=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if(filter.test(sEmail))
		return true;
	else
		return false;
}

$("#btnupdatePro").on("click", function(e) {
	e.preventDefault();
	var pname=$("#pname").val();
	var pdesc=$("#pdesc").val();
	var pprice=$("#pprice").val();
	
	if(pname=="")
	{
		$("#pname").css("background-color","#F0F0F0");
		$("#pname").focus();
	}
	else if(pdesc=="")
	{
		$("#pdesc").css("background-color","#F0F0F0");
		$("#pdesc").focus();
	}
	else if(pprice=="")
	{
		$("#pprice").css("background-color","#F0F0F0");
		$("#pprice").focus();
	}
	else
	{
		$("#frmProduct").submit();
	}
});

$("#btnaddPro").on("click", function(e) {
	e.preventDefault();
	var pname=$("#pname").val();
	var pdesc=$("#pdesc").val();
	var pprice=$("#pprice").val();
	
	if(pname=="")
	{
		$("#pname").css("background-color","#F0F0F0");
		$("#pname").focus();
	}
	else if(pdesc=="")
	{
		$("#pdesc").css("background-color","#F0F0F0");
		$("#pdesc").focus();
	}
	else if(pprice=="")
	{
		$("#pprice").css("background-color","#F0F0F0");
		$("#pprice").focus();
	}
	else
	{
		$("#frmProduct").submit();
	}
});




$("#btnPost").on("click", function(e) {

	e.preventDefault();
	var pname=$("#pname").val();
	var pdesc=$("#pdesc").val();
	var operation=$("#operation").val();
	var pprice=$("#pprice").val();
	
	 if(operation=="")
	{
		$("#operation").css("background-color","#F0F0F0");
		$("#operation").focus();
	}
	
	else if(pname=="")
	{
		$("#pname").css("background-color","#F0F0F0");
		$("#pname").focus();
	}
	else if(pdesc=="")
	{
		$("#pdesc").css("background-color","#F0F0F0");
		$("#pdesc").focus();
	}
	else if(pprice=="")
	{
		$("#pprice").css("background-color","#F0F0F0");
		$("#pprice").focus();
	}
	else
	{
			
			$("#frmpost").submit();
			document.getElementById("confirmsub").innerHTML="<img src='images/loading_blue.gif' align='absmiddle' /> Please wait...";
			document.getElementById("confirmsub").innerHTML="Request Posted Successfully";
		/*$("#btnPost").submit();*/
	}
});





$("#btnaddBiz").on("click", function(e) {
	e.preventDefault();
	var bizname=$("#bizname").val();
	var bizaddress1=$("#bizaddress1").val();
	var bizphone=$("#bizphone").val();
	var bizdesc=$("#bizdesc").val();
	
	if(bizname=="")
	{
		$("#bizname").css("background-color","#F0F0F0");
		$("#bizname").focus();
	}
	else if(bizaddress1=="")
	{
		$("#bizaddress1").css("background-color","#F0F0F0");
		$("#bizaddress1").focus();
	}
	else if(bizphone=="")
	{
		$("#bizphone").css("background-color","#F0F0F0");
		$("#bizphone").focus();
	}
	else if(bizdesc=="")
	{
		$("#bizdesc").css("background-color","#F0F0F0");
		$("#bizdesc").focus();
	}
	else
	{
		$("#frmBiz").submit();
	}
});

$("#btnUpdateBio").on("click", function(e) {
	e.preventDefault();
	var pname=$("#pname").val();
	var pdesc=$("#pdesc").val();
	var price=$("#pprice").val();
	
	if(pname=="")		
	{
		$("#pname").css("background-color","#F0F0F0");
		$("#pname").focus();
	}
	else if(pdesc=="")		
	{
		$("#pdesc").css("background-color","#F0F0F0");
		$("#pdesc").focus();
	}
	else if(price=="")		
	{
		$("#pprice").css("background-color","#F0F0F0");
		$("#pprice").focus();
	}
	else
	{
		$("#frmProduct").submit();
	}
});