<?php
global $total_record;
?>
<?php

session_start();
$_session['N_hr']=0;
$type = $_GET['type'];
if ($type=="subscribe"){
	subscribe();
}
elseif($type=="faq"){
	faq();
}
elseif($type=="loadfaq"){
	loadfaq();
}
elseif($type=="sendchat"){
	sendchat();
}
elseif($type=="updatechat"){
	updatechat();
}
elseif($type=="dropdb"){
	dropdb();
}

function subscribe(){
$host = "localhost";
$userr = "root";
$pass = "";
$dbase = "wolbeno";
$email = $_GET['para1'];
	//Connect to MySQL Server

$conn=mysql_connect($host,$userr,$pass) or die(mysql_error());

mysql_select_db($dbase,$conn) or die(mysql_error());
	 
Mysql_query("insert into subscribe set email='$email'") or die(mysql_error());

}

function loadfaq(){
$host = "localhost";
$userr = "root";
$pass = "";
$dbase = "wolbeno";
$email = $_GET['email'];
$fullname = $_GET['fullname'];
$message = $_GET['message'];
	//Connect to MySQL Server

$conn=mysql_connect($host,$userr,$pass) or die(mysql_error());

mysql_select_db($dbase,$conn) or die(mysql_error());

$dis="";
	//Connect to MySQL Server
mysql_connect($host, $userr, $pass);
	//Select Database
mysql_select_db($dbase) or die(mysql_error());
	// Retrieve data from Query String

	//build query
$query = "SELECT * FROM faq";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String

$dis="<span style='color:green;
	font-size:18px; font-weight:bold'>&nbsp;&nbsp;Previous Questions and Replies</span><br />
<br /><hr/><br />";
// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){

	$dis .="<span style='color:green;
	font-size:14px; font-weight:bold'>&nbsp;Question:</span> $row[message]&nbsp;&nbsp;&nbsp;:::: <i>$row[date]</i><br/><br/><span style='color:red;
	font-size:14px; font-weight:bold'>&nbsp;Reply:</span> $row[reply]<br/><br/><hr><br/>";
	
}

//echo $display_string;
echo $dis;
}

function faq(){
$host = "localhost";
$userr = "root";
$pass = "";
$dbase = "wolbeno";
$email = $_GET['email'];
$fullname = $_GET['fullname'];
$message = $_GET['message'];
	//Connect to MySQL Server

$conn=mysql_connect($host,$userr,$pass) or die(mysql_error());

mysql_select_db($dbase,$conn) or die(mysql_error());
	 
Mysql_query("insert into faq set fullname='$fullname', email='$email', message='$message', reply='No reply yet'") or die(mysql_error());




$dis="";
	//Connect to MySQL Server
mysql_connect($host, $userr, $pass);
	//Select Database
mysql_select_db($dbase) or die(mysql_error());
	// Retrieve data from Query String

	//build query
$query = "SELECT * FROM faq";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String

$dis="<span style='color:green;
	font-size:18px; font-weight:bold'>&nbsp;&nbsp;Previous Questions and Replies</span><br />
<br /><hr/><br />";
// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){

	$dis .="<span style='color:green;
	font-size:14px; font-weight:bold'>&nbsp;Question:</span> $row[message]&nbsp;&nbsp;&nbsp;:::: <i>$row[date]</i><br/><br/><span style='color:red;
	font-size:14px; font-weight:bold'>&nbsp;Reply:</span> $row[reply]<br/><br/><hr><br/>";
	
}

//echo $display_string;
echo $dis;

}

function sendchat(){
$host = "localhost";
$userr = "root";
$pass = "";
$dbase = "wolbeno";
$name = $_GET['name'];
$txt = $_GET['txt'];
	//Connect to MySQL Server

$conn=mysql_connect($host,$userr,$pass) or die(mysql_error());

mysql_select_db($dbase,$conn) or die(mysql_error());
	 
Mysql_query("insert into chat set name='$name', message='$txt'") or die(mysql_error());	

}

function updatechat(){
$host = "localhost";
$userr = "root";
$pass = "";
$dbase = "wolbeno";



$dis="";
	//Connect to MySQL Server
mysql_connect($host, $userr, $pass);
	//Select Database
mysql_select_db($dbase) or die(mysql_error());
	// Retrieve data from Query String

	//build query
$query = "SELECT * FROM chat";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String

$dis="Chat started !!!<hr/><br />";
// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){
if ($row['name']=="Admin"){
	
	$dis .="&nbsp;<span style='color:red;
	font-size:14px;  font-weight:bold'> $row[name]:</span>&nbsp;$row[message]<br/><br/>";
}
else{
	$dis .="&nbsp;<span style='color:#438db8;
	font-size:14px; font-weight:bold'> $row[name]: </span>&nbsp;$row[message]<br/><br/>";
}

//Mysql_query("TRUNCATE TABLE chat") or die(mysql_error());	
}

//echo $display_string;
echo $dis;	
}

function dropdb(){
	$host = "localhost";
$userr = "root";
$pass = "";
$dbase = "wolbeno";




	//Connect to MySQL Server
mysql_connect($host, $userr, $pass);
	//Select Database
mysql_select_db($dbase) or die(mysql_error());
	// Retrieve data from Query String
	Mysql_query("TRUNCATE TABLE chat") or die(mysql_error());
}


function show_profile(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="";
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$phoneR = $_GET['phoneR'];

	// Escape User Input to help prevent SQL Injection
$phoneR = mysql_real_escape_string($phoneR);

	//build query
$query = "SELECT * FROM user_profile WHERE phone = '$phoneR'";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String


// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){

	$dis ="<table border=0 width='100%' align='center'><tr><td><a onClick='big_img($row[phone])' href='#big_img'><img src='$row[img_url]' width='50px' height='50px'/></a></td><td id='usname'>$row[username]</td><td>$row[online_status]</td><td id='call' onClick='call($row[phone])'><img src='images/call.png' width='30px' height='30px'/></td><td><a href='#chat'><img src='images/back.png' width='40px' height='30px'/></a></td></tr><tr><td>Fullname:</td><td colspan='4'>$row[name]</td></tr> <tr><td>Fullname:</td><td colspan='4'>$row[name]</td></tr> <tr><td>Status Message:</td><td colspan='4'>$row[status_msg]</td></tr> <tr><td>Location:</td><td colspan='4'>$row[location]</td></tr><tr><td>Distance:</td><td colspan='4'>$row[distance]</td></tr><tr><td>Sex:</td><td colspan='4'>$row[sex]</td></tr> <tr><td>School:</td><td colspan='4'>$row[school]</td></tr> <tr><td>Department:</td><td colspan='4'>$row[department]</td></tr> <tr><td>Level:</td><td colspan='4'>$row[level]</td></tr> <tr><td>Phone Number:</td><td colspan='4'>$row[phone]</td></tr>";
	
}

//echo $display_string;
$dis .="</table>";
echo $dis;
}



function show_my_profile(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="";
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$phoneR = $_GET['phoneR'];

	// Escape User Input to help prevent SQL Injection
$phoneR = mysql_real_escape_string($phoneR);

	//build query
$query = "SELECT * FROM user_profile WHERE phone = '$phoneR'";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String


// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){

	$dis ="<table border=0 width='100%' align='center'><tr><td><a onClick='big_img($row[phone])' href='#big_img'><img src='$row[img_url]' width='50px' height='50px'/></a></td><td id='my_usname'>$row[username]</td><td>$row[online_status]</td><td id='call' onClick='call($row[phone])'><img src='images/call.png' width='30px' height='30px'/></td><td><a href='#chat'><img src='images/back.png' width='40px' height='30px'/></a></td></tr><tr><td>Fullname:</td><td colspan='4'>$row[name]</td></tr> <tr><td>Fullname:</td><td colspan='4'>$row[name]</td></tr> <tr><td>Status Message:</td><td colspan='4'>$row[status_msg]</td></tr> <tr><td>Location:</td><td colspan='4'>$row[location]</td></tr><tr><td>Distance:</td><td colspan='4'>$row[distance]</td></tr><tr><td>Sex:</td><td colspan='4'>$row[sex]</td></tr> <tr><td>School:</td><td colspan='4'>$row[school]</td></tr> <tr><td>Department:</td><td colspan='4'>$row[department]</td></tr> <tr><td>Level:</td><td colspan='4'>$row[level]</td></tr> <tr><td>Phone Number:</td><td colspan='4'>$row[phone]</td></tr>";
	
}

//echo $display_string;
$dis .="</table>";
echo $dis;
}


function update_status(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="";
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$phoneR = $_GET['phoneR'];
$str = $_GET['str'];
	// Escape User Input to help prevent SQL Injection
$phoneR = mysql_real_escape_string($phoneR);

	//build query
//$query = "SELECT * FROM user_profile WHERE phone = '$phoneR'";

$query = "UPDATE user_profile SET status_msg = '$str'
WHERE phone = '$phoneR'";

	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String


// Insert a new row in the table for each person returned
//"$row[status_msg]= $str";
	
//echo "knklkjnkll";
}





/*
function show_header_profile(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="";
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$phoneR = $_GET['phoneR'];

	// Escape User Input to help prevent SQL Injection
$phoneR = mysql_real_escape_string($phoneR);

	//build query
$query = "SELECT * FROM user_profile WHERE phone = '$phoneR'";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String


// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){

	$dis ="<div><img src='$row[img_url]' width='100%' height='100%'/></div>";
	
}

//echo $display_string;
echo $dis;
} 
*/


function logout(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="";
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$phoneR = $_GET['phoneR'];
$str = $_GET['str'];
	// Escape User Input to help prevent SQL Injection
$phoneR = mysql_real_escape_string($phoneR);

	//build query
//$query = "SELECT * FROM user_profile WHERE phone = '$phoneR'";

$query = "UPDATE user_profile SET online_status = 'offline'
WHERE phone = '$phoneR'";

	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String


// Insert a new row in the table for each person returned
//"$row[status_msg]= $str";
	
//echo "knklkjnkll";
}

function timer(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="no";
$day="";
$code="none";

	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$phoneR = $_GET['phoneR'];
$day = strtolower(date('l'));
$hr = date('h')-1;
	// Escape User Input to help prevent SQL Injection
$phoneR = mysql_real_escape_string($phoneR);

	//build query
$query = "SELECT * FROM timetable WHERE user_id = '$phoneR' AND day = '$day' AND checkT=''";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String


// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){

if ("$row[fromT]" == $hr) {
	$dis="yes";
	$code="$row[course_code]" . "<br>" . $day . " <br> "  . $hr;

	update_from();
}
	
}

//echo $display_string;
echo $dis;
echo " <br> "  . $code;
}

function update_from(){
	$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="no";
$day="";
$code="none";
$phoneR = $_GET['phoneR'];
$day = strtolower(date('l'));
$hr = date('h')-1;

	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());

$query = "UPDATE timetable SET checkT = 'checked'
WHERE user_id='$phoneR' AND day='$day' AND fromT='$hr' AND checkT=''";
//$total_record
	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

last_update();
}


function last_update(){

	$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "student";
$dis="no";
$code="none";
$phoneR = $_GET['phoneR'];
$day = strtolower(date('l'));
$hr = date('h')-1;
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
$query = "SELECT * FROM timetable WHERE user_id = '$phoneR' AND day='$day'";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String

$count=0;
// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){
$c+=1;
$num[$c]="$row[fromT]";
$count+=1;
echo $num[$c];
}



//checking if all alarm has alarmed !!!

	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
$query = "SELECT * FROM timetable WHERE user_id = '$phoneR' AND day='$day' AND checkT='checked'";


	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String

$count1=0;
// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){
$count1+=1;

}

/////////endof checking if all alarm has alarmed !!!

if ($count==$count1){
	echo "reolaced all";
	//clear_check
		//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());

$query = "UPDATE timetable SET checkT = ''
WHERE user_id='$phoneR' AND day='$day' AND checkT='checked'";
//$total_record
	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());
	
}

}

?>
