var addcontactname_error_length=error+"<font color=\"red\">对不起,请填写联系人真实姓名！</font>";
var addcontacttel_error_length =error+"<font color=\"red\">对不起,请填写常用联系方式，方便及时联系您！</font>";
var addduihuanchrmark_error_length=error+"<font color=\"red\">限定100字以内！</font>";
var addchrname_error_length=error+"<font color=\"red\">对不起,请填写您在本站的用户名,3-12字符内！！</font>";
var addchrname_error_exist=error+"<font color=\"red\">对不起,此用户不存在！</font>";
var addchrpwd_error_exist=error+"<font color=\"red\">对不起,密码不正确！</font>";
var addcontactaddress_error_exist=error+"<font color=\"red\">对不起,请正确输入您的联系地址,方便我们邮寄给您！</font>";
var addchrpwd_error_length=error+"<font color=\"red\">对不起,请输入密码,密码长度6~32，字母区分大小写！</font>";
function checkduihuan(o){
	var chrname="";
	var chrpwd="";
	var chrmark = "";
	trimspace($$("contactname"))
	if($$("contactname").value.length<2){
		setmsg('chkcontactname','addcontactname_error_length');
		return false;
	}
	trimspace($$("contacttel"))
	if($$("contacttel").value.length<1){
		setmsg('chkcontacttel','addcontacttel_error_length');
		return false;
	}
	trimspace($$("contactaddress"))
	if($$("contactaddress").value.length<1){
		setmsg('chkcontactaddress','addcontactaddress_error_exist');
		return false;
	}
	
	addduihuan($$("contactname").value,$$("contacttel").value,chrmark,$$("jiangpinid").value,chrname,chrpwd,$$("contactaddress").value);
	return false
}

function checkcontactname(){
	trimspace($$("contactname"))
	if($$("contactname").value.length<2){
		setmsg('chkcontactname','addcontactname_error_length');
		return false;
	}
	else{
		setmsg('chkcontactname','ok');
	}
}
function checkcontactaddress(){
	trimspace($$("contactaddress"))
	if($$("contactaddress").value.length<2){
		setmsg('chkcontactaddress','addcontactaddress_error_exist');
		return false;
	}
	else{
		setmsg('chkcontactaddress','ok');
	}
}
function checkcontacttel(){
	trimspace($$("contacttel"))
	if($$("contacttel").value.length<1){
		setmsg('chkcontacttel','addcontacttel_error_length');
		return false;
	}
	else{
		setmsg('chkcontacttel','ok');
	}
}

function checkchrmark(){
	trimspace($$("chrmark"))
	if($$("chrmark").value.length>100 ){
		setmsg('chraamark','addduihuanchrmark_error_length');
		return false;
	}
}


function addduihuan(contactname,contacttel,chrmark,jiangpinid,chrname,chrpwd,contactaddress){
	var url="../request.aspx?action=addduihuan&contactname="+encodeURIComponent(contactname)+"&contacttel="+encodeURIComponent(contacttel);
	url = url +"&chrmark="+encodeURIComponent(chrmark)+"&jiangpinid="+encodeURIComponent(jiangpinid)+"&chrname="+encodeURIComponent(chrname)+"&chrpwd="+encodeURIComponent(chrpwd)+"&contactaddress="+encodeURIComponent(contactaddress);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	xmlHttp=GetXmlHttpObject(requestaddmyorder)
	xmlHttp.open("get", url , true)
	xmlHttp.send(null)
}
function requestaddmyorder() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="1"){
			alert("您的礼品兑换申请已经提交成功，稍后客服会与您联系！");
			parent.LoginHide();
		}
		else{
			alert(xmlHttp.responseText);
		}
	} 
} 


function checkhykchrname(){
	trimspace($$("chrname"))
	var lent=judgeString($$("chrname").value);
	if(lent<3 || lent>12){
		setmsg('chkhykchrname','addchrname_error_length');
		return false;
	}
	else{
		setmsg('chkhykchrname','waite_chk');
		checkchrname_exist($$("chrname").value);
	}
}

function checkhykchrpwd(){
	trimspace($$("chrpwd"))
	if($$("chrpwd").value.length<6){
		setmsg('chkhykchrpwd','addchrpwd_error_length');
		return false;
	}
	else{
		setmsg('chkhykchrpwd','waite_chk');
		checkchrpwd_exist($$("chrname").value,$$("chrpwd").value);
	}
}


function checkchrpwd_exist(str1,str2){
	var url="../request.aspx?action=chkpwd&chrname="+encodeURIComponent(str1)+"&chrpwd="+encodeURIComponent(str2);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	xmlHttp=GetXmlHttpObject(requestcheckchrpwd_exist)
	xmlHttp.open("get", url , true)
	xmlHttp.send(null)
}

function requestcheckchrpwd_exist() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="0"){
			setmsg('chkhykchrpwd','ok');
		}
		else if(xmlHttp.responseText=="1"){
			setmsg('chkhykchrpwd','addchrname_error_exist');
		}
		else if(xmlHttp.responseText=="2"){
			setmsg('chkhykchrpwd','addchrpwd_error_exist');
		}
	} 
} 


function checkchrname_exist(str)
{ 
	if (str.length > 0)
	{ 
		var url="../request.aspx?action=check&chrname="+encodeURIComponent(str)
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+Digital;
		xmlHttp=GetXmlHttpObject(requestcheckchrname_exist)
		xmlHttp.open("POST", url , true)
		xmlHttp.send(null)
	} 
} 
function requestcheckchrname_exist() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="1"){
			setmsg('chkhykchrname','ok');
		}else{
			setmsg('chkhykchrname','addchrname_error_exist');
		}
	} 
} 


