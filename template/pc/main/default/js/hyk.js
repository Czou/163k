var addchrname_error_length=error+"<font color=\"red\">对不起,请填写您在本站的用户名,3-12字符内！！</font>";
var addchrname_error_exist=error+"<font color=\"red\">对不起,此用户不存在！</font>";
var addchrpwd_error_exist=error+"<font color=\"red\">对不起,密码不正确！</font>";
var addchrpwd_error_length=error+"<font color=\"red\">对不起,请输入密码,密码长度6~32，字母区分大小写！</font>";
var addchecktruename_error_length=error+"<font color=\"red\">对不起,请输入您的真实姓名！</font>";
var addcheckyhkchrtel_error_length =error+"<font color=\"red\">对不起,请输入您的手机号码！</font>";
var addhykchrqq_error_length=error+"<font color=\"red\">对不起,请输入您的常用网络联系方式！</font>";
var addchraddress_error_length=error+"<font color=\"red\">对不起,请认真填写邮寄地址，以便准确邮送 ！</font>";
var addcardnum_error_length=error+"<font color=\"red\">对不起,请认真填写收到的本站邮寄的团购卡卡上的卡号 ！</font>";
function checkjhcardnum(){
	trimspace($$("cardnum"))
	if($$("cardnum").value.length<6){
		setmsg('chkjhcardnum','addcardnum_error_length');
		return false;
	}
}
function checkjhhyk(){
	var chrname="";
	var chrpwd="";
	if($$("chrname")){
		trimspace($$("chrname"))
		if(judgeString($$("chrname").value)<3){
			setmsg('chkhykchrname','addchrname_error_length');
			$$("chrname").focus();
			return false;
		}
		chrname=$$("chrname").value
	}
	if($$("chrpwd")){
		trimspace($$("chrpwd"))
		if($$("chrpwd").value.length<6){
			setmsg('chkhykchrpwd','addchrpwd_error_length');
			$$("chrpwd").focus();
			return false;
		}
		chrpwd=$$("chrpwd").value
	}
	trimspace($$("cardnum"))
	if($$("cardnum").value.length<6){
		setmsg('chkjhcardnum','addcardnum_error_length');
		return false;
	}
	activehyksq(chrname,chrpwd,$$("cardnum").value);
	return false
}
function activehyksq(chrname,chrpwd,cardnum){
	var url="../request.aspx?action=jhhyk&chrname="+encodeURIComponent(chrname)+"&chrpwd="+encodeURIComponent(chrpwd);
	url = url +"&cardnum="+encodeURIComponent(cardnum);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlHttp=GetXmlHttpObject(requestcheckhyksqactive)
	xmlHttp.open("POST", url , true)
	xmlHttp.send(null)
}
function requestcheckhyksqactive() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="0"){
			alert("恭喜您激活成功，以后您可以查看商家门店信息，获得积分并兑换礼品！");
			window.location.href=window.location.href;
		}
		else{
			alert(xmlHttp.responseText);
		}
	} 
} 

function checksqhyk(o){
	var chrname="";
	var chrpwd="";
	
	if($('#isLogin').val() === '0'){alert("您好！请先登录再申领折扣一卡通！"); return false;}
	var truename = $("input[name='truename']");
	var chrtel = $("input[name='chrtel']");
	var chraddress = $("input[name='chraddress']");
	var code = $("input[name='code']");
	
	if(truename.val().length<2 ){
		setmsg('chkhykchrtruename','addchecktruename_error_length');
		truename.focus();
		return false;
	}
	
	if(chrtel.val().length<7 ){
		setmsg('chkhykchrtel','addcheckyhkchrtel_error_length');
		chrtel.focus();
		return false;
	}
	else{
		setmsg('chkhykchrtel','ok');
	}
	
	if(chraddress.val()=="" || chraddress.val().length<3){
		setmsg('chkhykchraddress','addchraddress_error_length');
		chraddress.focus();
		return false;
	}
	addhyksq(chrname,chrpwd,truename.val(),chrtel.val(),chraddress.val(),code.val());
	return false;
}

function checkhykchrname(){
	trimspace($$("chrname"))
	if(judgeString($$("chrname").value)<3){
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

function checkhyktruename(){
	trimspace($$("truename"))
	if($$("truename").value.length<2 ){
		setmsg('chkhykchrtruename','addchecktruename_error_length');
		return false;
	}
	else{
		setmsg('chkhykchrtruename','ok');
		return false;
	}
}

function checkhykchrtel(){
	trimspace($$("chrtel"))
	if($$("chrtel").value.length<7 ){
		setmsg('chkhykchrtel','addcheckyhkchrtel_error_length');
		return false;
	}
	else{
		setmsg('chkhykchrtel','ok');
		return false;
	}
}
function checkhykchrqq(){
	/*trimspace($$("chrqq"))
	if($$("chrqq").value=="" || $$("chrqq").value.length<4){
		setmsg('chkhykchrqq','addhykchrqq_error_length');
		return false;
	}
	else{
		setmsg('chkhykchrqq','ok');
		return false;
	}*/
}
function checkhykchraddress(){
	trimspace($$("chraddress"))
	if($$("chraddress").value=="" || $$("chraddress").value.length<3){
		setmsg('chkhykchraddress','addchraddress_error_length');
		return false;
	}
	else{
		setmsg('chkhykchraddress','ok');
	}
}
function addhyksq(chrname,chrpwd,truename,chrtel,chraddress,code){
	var url="../request.aspx?action=yhksq&chrname="+encodeURIComponent(chrname)+"&chrpwd="+encodeURIComponent(chrpwd);
	url = url +"&truename="+encodeURIComponent(truename)+"&chrtel="+encodeURIComponent(chrtel)+"&chraddress="+encodeURIComponent(chraddress)+"&code="+encodeURIComponent(code);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlHttp=GetXmlHttpObject(requestcheckhyksq)
	xmlHttp.open("get", url , true)
	xmlHttp.send(null)
}
function requestcheckhyksq() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="0"){
			alert("恭喜您,申请成功,请等待管理员的审核,我们会尽快与您取得联系！");
			window.location.href=window.location.href;
		}
		else{
			alert(xmlHttp.responseText);
		}
	} 
} 

function checkchrpwd_exist(str1,str2){
	var url="../request.aspx?action=chkpwd&chrname="+encodeURIComponent(str1)+"&chrpwd="+encodeURIComponent(str2);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlHttp=GetXmlHttpObject(requestcheckchrpwd_exist)
	xmlHttp.open("POST", url , true)
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

