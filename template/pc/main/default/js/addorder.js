var addchrman_error_length=errorold+"<font color=\"red\">对不起,请填写联系人真实姓名！</font>";
var addquhuodateerror_length=errorold+"<font color=\"red\">对不起,请填写取货时间！</font>";
var addcheckquhuo_error_length=errorold+"<font color=\"red\">对不起,请填写取货人！</font>";
var addcheckchrmobile_error_length=errorold+"<font color=\"red\">对不起,请正确填写手机号码，方便及时联系！</font>";
var addhykchraddress_error_length=errorold+"<font color=\"red\">对不起,请填写送货地址！</font>";
var addchrcode_error_length =errorold+"<font color=\"red\">对不起,请填写邮政编码！</font>";
var addyuyuedi_error_length=errorold+"<font color=\"red\">对不起,请填写预约地点！</font>";
var addyuyueshi_error_length=errorold+"<font color=\"red\">对不起,请填写预约时间！</font>";
var addyuyuchrmark_error_length=errorold+"<font color=\"red\">限定100字以内！</font>";
var addchrname_error_length=errorold+"<font color=\"red\">对不起,请填写您在本站的用户名,3-12字符内！！</font>";
var addchrname_error_exist=errorold+"<font color=\"red\">对不起,此用户不存在！</font>";
var addchrpwd_error_exist=errorold+"<font color=\"red\">对不起,密码不正确！</font>";
var addchrpwd_error_length=errorold+"<font color=\"red\">对不起,请输入密码,密码长度6~32，字母区分大小写！</font>";
function $$(str){
	return document.getElementById(str);
}
function checkaddorder(o){
	var flag=$$("order_flag").value;
	if(flag=="0")
	{
		$$("order_flag").value="1";
		var chrname="";
		if($$("chrname")){
			trimspace($$("chrname"))
			if($$("chrname").value.length<3){
				setmsg('chkhykchrname','addchrname_error_length');
				$$("order_flag").value="0";
				return false;
			}
			chrname=$$("chrname").value;
		}
		var chrpwd="";
		if($$("chrpwd"))
		{
			trimspace($$("chrpwd"))
			if($$("chrpwd").value.length<6)
			{
				setmsg('chkhykchrpwd','addchrpwd_error_length');
				$$("order_flag").value="0";
				return false;
			}
			chrpwd=$$("chrpwd").value;
		}
		if(document.Main.styleid[0].checked){
			addhykchraddress_error_length =errorold+"<font color=\"red\">对不起,请填写收货地址,长度大于等于8！</font>";
		}
		else{
			addhykchraddress_error_length =errorold+"<font color=\"red\">对不起,请填写送货地址,长度大于等于8！</font>";
		}
		if($$("typeid").value=="0"){
			trimspace($$("chrman"))
			if($$("chrman").value.length<2){
				setmsg('chkchrman','addchrman_error_length');
				$$("order_flag").value="0";
				return false;
			}
			trimspace($$("chraddress"))
			if($$("chraddress").value=="" || $$("chraddress").value.length<3){
				setmsg('chkchraddress','addhykchraddress_error_length');
				$$("order_flag").value="0";
				return false;
			}
		}
		else if($$("typeid").value=="1"){
			trimspace($$("quhuodate"))
			if($$("quhuodate").value.length==0){
				setmsg('chkquhuodate','addquhuodateerror_length');
				$$("order_flag").value="0";
				return false;
			}
			trimspace($$("quhuo"))
			if($$("quhuo").value.length<1 ){
				setmsg('chkquhuo','addcheckquhuo_error_length');
				$$("order_flag").value="0";
				return false;
			}
		}
		else if($$("typeid").value=="2"){
			trimspace($$("chraddress"))
			if($$("chraddress").value=="" || $$("chraddress").value.length<3){
				setmsg('chkchraddress','addhykchraddress_error_length');
				$$("order_flag").value="0";
				return false;
			}
			trimspace($$("chrcode"))
			if($$("chrcode").value=="" || $$("chrcode").value.length!=6){
				setmsg('chkchrcode','addchrcode_error_length');
				$$("order_flag").value="0";
				return false;
			}
		}
		else if($$("typeid").value=="3"){
			trimspace($$("yuyuedi"))
			if($$("yuyuedi").value=="" || $$("yuyuedi").value.length<2){
				setmsg('chkyuyuedi','addyuyuedi_error_length');
				$$("order_flag").value="0";
				return false;
			}
			trimspace($$("yuyueshi"))
			if($$("yuyueshi").value=="" || $$("yuyueshi").value.length<2){
				setmsg('chkyuyueshi','addyuyueshi_error_length');
				$$("order_flag").value="0";
				return false;
			}
		}
		trimspace($$("chrmobile"))
		if($$("chrmobile").value.length<11 ){
			setmsg('chkchrmobile','addcheckchrmobile_error_length');
			$$("order_flag").value="0";
			return false;
		}
		trimspace($$("chrmark"))
		if($$("chrmark").value.length>100 ){
			setmsg('chraamark','addyuyuchrmark_error_length');
			$$("order_flag").value="0";
			return false;
		}
		addmyorder($$("typeid").value,$$("chrman").value,$$("quhuodate").value,$$("quhuo").value,$$("chraddress").value,$$("chrcode").value,$$("yuyuedi").value,$$("yuyueshi").value,$$("chrtel").value,$$("chrqq").value,$$("chrmobile").value,$$("chrmark").value,$$("shopid").value,chrname,chrpwd,$$("intnum").value);
		return false
	}
}

function checkorderchrman(){
	trimspace($$("chrman"))
	if($$("chrman").value.length<2){
		setmsg('chkchrman','addchrman_error_length');
		return false;
	}
	else{
		setmsg('chkchrman','okokok');
	}
}
function checkorderchrmark(){
	trimspace($$("chrmark"))
	if($$("chrmark").value.length>100 ){
		setmsg('chraamark','addyuyuchrmark_error_length');
		return false;
	}
}
function checkorderquhuodate(){
	trimspace($$("quhuodate"))
	if($$("quhuodate").value.length==0){
		setmsg('chkquhuodate','addquhuodateerror_length');
		return false;
	}
	else{
		setmsg('chkquhuodate','okokok');
	}
}

function checkorderquhuo(){
	trimspace($$("quhuo"))
	if($$("quhuo").value.length<1 ){
		setmsg('chkquhuo','addcheckquhuo_error_length');
		return false;
	}
	else{
		setmsg('chkquhuo','okokok');
		return false;
	}
}

function checkorderchrmobile(){
	trimspace($$("chrmobile"))
	if($$("chrmobile").value.length<11 ){
		setmsg('chkchrmobile','addcheckchrmobile_error_length');
		return false;
	}
	else{
		setmsg('chkchrmobile','okokok');
		return false;
	}
}
function checkorderchraddress(){
	trimspace($$("chraddress"))
	if(document.Main.styleid[0].checked){
		addhykchraddress_error_length =errorold+"<font color=\"red\">对不起,请填写收货地址,长度大于等于8！</font>";
	}
	else{
		addhykchraddress_error_length =errorold+"<font color=\"red\">对不起,请填写送货地址,长度大于等于8！</font>";
	}
	if($$("chraddress").value=="" || $$("chraddress").value.length<8){
		setmsg('chkchraddress','addhykchraddress_error_length');
		return false;
	}
	else{
		setmsg('chkchraddress','okokok');
		return false;
	}
}
function checkorderchrcode(){
	trimspace($$("chrcode"))
	if($$("chrcode").value=="" || $$("chrcode").value.length!=6){
		setmsg('chkchrcode','addchrcode_error_length');
		return false;
	}
	else{
		setmsg('chkchrcode','okokok');
	}
}

function checkorderyuyuedi(){
	trimspace($$("yuyuedi"))
	if($$("yuyuedi").value=="" || $$("yuyuedi").value.length<2){
		setmsg('chkyuyuedi','addyuyuedi_error_length');
		return false;
	}
	else{
		setmsg('chkyuyuedi','okokok');
	}
}
function checkorderyuyueshi(){
	trimspace($$("yuyueshi"))
	if($$("yuyueshi").value=="" || $$("yuyueshi").value.length<2){
		setmsg('chkyuyueshi','addyuyueshi_error_length');
		return false;
	}
	else{
		setmsg('chkyuyueshi','okokok');
	}
}
function addmyorder(styleid,chrman,quhuodate,quhuo,chraddress,chrcode,yuyuedi,yuyueshi,chrtel,chrqq,chrmobile,chrmark,shopid,chrname,chrpwd,intnum){
	var url="request.aspx?action=addorder&styleid="+escape(styleid)+"&chrman="+escape(chrman);
	url = url +"&quhuodate="+escape(quhuodate)+"&quhuo="+escape(quhuo)+"&chraddress="+escape(chraddress)+"&chrcode="+escape(chrcode)+"&yuyuedi="+escape(yuyuedi)+"&yuyueshi="+escape(yuyueshi)+"&chrtel="+escape(chrtel)+"&chrqq="+escape(chrqq)+"&chrmobile="+escape(chrmobile)+"&chrmark="+escape(chrmark)+"&goodid="+escape(shopid)+"&chrname="+escape(chrname)+"&chrpwd="+escape(chrpwd)+"&intnum="+escape(intnum);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	xmlHttp=GetXmlHttpObject(requestaddmyorder)
	xmlHttp.open("POST", url , true)
	xmlHttp.send(null)
}
function requestaddmyorder() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		var tt = xmlHttp.responseText;
		if(tt.indexOf("@")!=-1){
			//alert("您的订单已经提交成功，稍后客服会与您联系！");
			tt =tt.replace("1@","");
			parent.LoginHide();
			parent.showorderwan(tt)
			//window.location.href="woyaoorder.html?action=wan&chrorder="+tt;
		}
		else{
			alert(xmlHttp.responseText);
			$$("order_flag").value="0";
		}
	} 
} 


function checkhykchrname(){
	trimspace($$("chrname"))
	if($$("chrname").value.length<3){
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
	var url="request.aspx?action=chkpwd&chrname="+escape(str1)+"&chrpwd="+escape(str2);
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
			setmsg('chkhykchrpwd','okokok');
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
		var url="request.aspx?action=check&chrname="+escape(str)
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
			setmsg('chkhykchrname','okokok');
		}else{
			setmsg('chkhykchrname','addchrname_error_exist');
		}
	} 
} 


