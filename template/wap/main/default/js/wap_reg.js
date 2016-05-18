function judgeString(str){
 	var len = str.length;
	var tt=0;
    for(var i=0;i<len;i++){
       var txt = str.charCodeAt(i);
       if(txt>128){     //ascii码大于128的是汉字
          tt= tt+2;
       } else{
          tt= tt+1;
       }
    }
 	return tt;
}
function trimspace(obj){
	String.prototype.Trim = function()	{
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}			
	obj.value = obj.value.Trim();
}
function getCookie(name){
	 var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return decodeURIComponent(arr[2]); return null;
}
function setCookie(name,value){
  var Days = 30; //此 cookie 将被保存 30 天
  var exp  = new Date();    //new Date("December 31, 9998");
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ encodeURIComponent(value) +";expires="+ exp.toGMTString()+";path=/" ;
}
function delCookie(name){
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null) document.cookie=name +"="+cval+";expires="+exp.toGMTString();
}

var errorFunction = function(o,txt){
	//o.style.border="1px solid #f00";
	document.getElementById("allok").value='0';
	alert(txt);
}
var successFunction = function(o){
	o.style.border="";
	document.getElementById("allok").value='1';
}
var error="";
var shopcomment_error_name=error+"对不起,请填写您的昵称！";
var shopcomment_error_pwd=error+"对不起,请填写您的密码！";
var shopcomment_error_code=error+"对不起,请填写验证码！";
var shopcomment_error_chrmark=error+"对不起,请填写内容！";
var shopcomment_error_chrmark1=error+"对不起,内容仅限300汉字！";
var user_length_error=error+" 昵称长度错误,3-15字符内！";
var user_regist_ok="<font color=\"green\">恭喜您，该昵称还未被注册，您可以使用这个昵称！";
var user_regist_error=error+" 该昵称已经被注册，请选用其他昵称。";
var waite_chk="检测中，请稍等...";
var pwd_nothing_error=error+"请输入密码!";
var pwd_length_error=error+"密码不合法!密码长度6-16位(英文字母、数字)，区分大小写";
var pwd_length_error2=error+"密码必须有数字和字母混合组成";
var pwd_insert_align=error+"请再一次输入遍您上面输入的密码";
var pwd_same_error=error+"两次密码不符，请重新输入";
var email_nothing_error=error+"请输入您的登录名";
var email_error_error=error+"电子邮件地址不符合规则!";
var email_regist_error=error+'该电子邮件地址已被注册!';
var code_length_error=error+"请正确输入验证码";
var chrqq_nothing_error=error+"请正确输入您的QQ号码";
var chkanswer_nothing_error=error+"请正确输入验证问题答案";
var chkchrtruename_nothing_error=error+"请正确输入您的企业名称";
var chkqiyedizhi_nothing_error=error+"请正确输入您的经营办公地址";
var chkfaren_nothing_error=error+"请正确输入法人代表名称";
var chkchrtel_nothing_error=error+"请正确输入您的联系电话";
var mysq_error_chraddress=error+"请正确输入面试地点";
var qq_nothing_error=error+"请输入您的联系QQ";
var tel11_nothing_error=error+"请输入您的手机号码";
var pass=/^[^#&/*<>'", \\\r\t\n]{6,16}$/;
function checkmobile(vale){
	return /^(13\d{9}|18\d{9}|14\d{9}|15\d{9}|659\d{7}|658\d{7})$/i.test(vale);	
}
function checkuser(o){
	trimspace(document.form1.chrname);
	var username = document.form1.chrname.value.replace(" ","");
	document.form1.chrname.value=username;
	var lent=judgeString(username);
	if (lent<3 || lent>15) {
		errorFunction(o,user_length_error);
		return false;
	}
	checkchrname(document.form1.chrname.value,o);
}
function checkchrname(chrname,o){
	$.ajax({
	  url: "../request.aspx?action=check&chrname="+encodeURIComponent(chrname),
	  cache: false,
	  success: function(data){
		if(data==='1'){
			errorFunction(o,user_regist_error);
		}
		if(data==='2'){
			successFunction(o);
		}
	  }
	});
}
function isRightEmail(email) {
   var re="^[\s]*[a-zA-Z0-9._%-]+@[a-zA-Z0-9._%-]+\.[a-zA-Z0-9]{2,4}[\s]*$";
   if(email.match(re)==null)
       return false;
   else
       return true;
}
function isRightTel(value){
	return /^(13\d{9}|18\d{9}|14\d{9}|15\d{9}|659\d{7}|658\d{7})$/i.test(value);
}
function getByteLen(val){
	var len = 0;            
	for (var i = 0; i < val.length; i++) {
		var a = val.charAt(i);   
		if (a.match(/[^\x00-\xff]/ig) != null){
			len += 2;             
		}else{      
			len += 1;             
		}        
	}            
	return len;
}
function test_email2() {
	trimspace(document.form1.chremail);
	var strEmail=document.form1.chremail.value;
	var lent = getByteLen(strEmail);
	
	if(document.form1.ismember.value=="1"){
		if(!isRightEmail(strEmail)){
			alert(email_error_error);
			return false;
		}
	}else if(document.form1.ismember.value=="2"){
		if(!isRightTel(strEmail)){
			alert(tel11_nothing_error);
			return false;
		}
	}else{   
		if(!!isRightEmail(strEmail)||!!isRightTel(strEmail)){
			
		}else{
			if (lent<3 || lent>15) {
				alert(user_length_error);
				return false;
			}
		}
	}
	var url="../request.ashx?action=chkchrname&chrname="+encodeURIComponent(strEmail);
	var  Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	$.ajax({url:url,success:function(data){
		if(data.islogin==='0'){
			alert(data.error);
			$('#allok').val('0');
		}else{
			$('#allok').val('1');
		}
	}});
	return true;
}
function test_email(o) {
   trimspace(document.form1.chremail);
   var strEmail=document.form1.chremail.value;	   
   
   if(strEmail=="" ){
	errorFunction(o,email_nothing_error);
	return false;
   }
   if(!isRightEmail(strEmail)){
	   	errorFunction(o,email_error_error);
		return false;
	}
   checkemail(strEmail,o);
}
function checkemail(email,o){      	
	$.ajax({
	  url: "../request.aspx?action=checkemail&chrname="+encodeURIComponent(email),
	  cache: false,
	  success: function(data){
		if(data==='1'){
			errorFunction(o,email_regist_error);
		}
		if(data==='2'){
			errorFunction(o,email_error_error);
		}
		if(data==='3'){
			successFunction(o);
		}
	  }
	});
}

//密码强度检测 Begin =======================
function CharMode(iN){
	if (iN>=48 && iN <=57) //数字
		return 1;
	if (iN>=65 && iN <=90) //大写字母
		return 2;
	if (iN>=97 && iN <=122) //小写
		return 4;
	else
		return 8; //特殊字符
}

function checkStrong(sPW){
	if (sPW.length<=4)
		return 0;  //密码太短
	Modes=0;
	for (i=0;i<sPW.length;i++){
		Modes|=CharMode(sPW.charCodeAt(i));
	}
	return bitTotal(Modes);
}

function bitTotal(num){
	modes=0;
	for (i=0;i<4;i++){
		if (num & 1) modes++;
		num>>>=1;
	}
	return modes;
}
function checkpwd(o){
	trimspace(o);
	var pwd=o.value;
	
	var pwdStrong = checkStrong(pwd);
	if(pwd==''){
		errorFunction(o,pwd_nothing_error);
		return false;
	}
	if(!pass.test(pwd)){
		errorFunction(o,pwd_length_error);
		return false;
	}
	if(pwdStrong == 1){
		errorFunction(o,pwd_length_error2);
		return false;
	}
	successFunction(o);
}
function rcheckpwd(o){
	trimspace(document.form1.chrpwd);
	var pwd=document.form1.chrpwd.value;
	var rpwd=document.form1.chrpwd_1.value;
	rpwd=='' ? errorFunction(o,pwd_insert_align) : (pwd!=rpwd ? errorFunction(o,pwd_same_error) : successFunction(o));
}
function checktruename(o){
	trimspace(o);
	var truename=o.value;
	if(truename==''){
		errorFunction(o,chkchrtruename_nothing_error);
		return false;
	}
	successFunction(o);
}

function checkregister(){
	delCookie("floatregister");
	setCookie("floatregister","");
	if(document.form1.checkxieyi){
		if(!document.form1.checkxieyi.checked){
			alert("请先阅读接受会员注册协议!");
			document.form1.checkxieyi.focus();
			return false;
		}
	}
	trimspace(document.form1.chremail);
	
	if(!test_email2()){ return false;}
	
	trimspace(document.form1.chrpwd);
	var pwd=document.form1.chrpwd.value;
	if(document.form1.chrpwd.value==""){
		alert(pwd_nothing_error);
		return false;
	}
	var chrtel="",chrqq="",chrpwd_1=pwd;
	if(document.form1.ismember.value=="2"){
		chrtel = document.form1.chremail.value;
	}
	if(document.form1.qqmust.value=="1"){
		if(document.form1.chrqq.value == ''){
			alert(qq_nothing_error);
			return false;
		}
		chrqq = document.form1.chrqq.value;
	}
	var chrtruename="",qiyedizhi="",faren="";
	var detailsid="",answer="";
	if(document.form1.detailsid){
		detailsid = document.form1.detailsid.value;
		if(document.form1.answer.value==''){
			alert(chkanswer_nothing_error)
			return false;
		}else{
			answer=document.form1.answer.value;
		}
	}
	trimspace(document.form1.code);
	if(document.form1.code.value.length!=5 && document.form1.code.value.length!=6){
	   	alert(code_length_error)
		return false;
	}
	if(document.getElementById("allok").value==="0"){
		alert("您有未正确填写的选项，请检查并正确填写！");
		return false;
	}
	//var styleid = $('input[name="styleid"]:checked').val();
	var styleid = $('#styleid').val();
	addregister(document.form1.chremail.value,document.form1.chrpwd.value,chrpwd_1,document.form1.chremail.value,document.form1.code.value,chrqq,detailsid,answer,chrtruename,qiyedizhi,faren,chrtel,styleid);
	return false;
}


function addregister(chrname,chrpwd,chrpwd_1,chremail,code,chrqq,detailsid,answer,chrtruename,qiyedizhi,faren,chrtel,styleid){
		$('#loadding').show();
		$('#form_submit_disabled').addClass('disabled').prop('disabled',true);
      	var url="../request.aspx?action=register&json=1&jsoncallback=?&chrname="+encodeURIComponent(chrname);
		url =url+"&chrpwd="+encodeURIComponent(chrpwd)+"&chrpwd_1="+encodeURIComponent(chrpwd_1)+"&chremail="+encodeURIComponent(chremail)+"&code="+encodeURIComponent(code)+"&chrqq="+encodeURIComponent(chrqq)+"&detailsid="+encodeURIComponent(detailsid)+"&answer="+encodeURIComponent(answer)+"&chrtruename="+encodeURIComponent(chrtruename)+"&qiyedizhi="+encodeURIComponent(qiyedizhi)+"&faren="+encodeURIComponent(faren)+"&chrtel="+encodeURIComponent(chrtel)+"&styleid="+encodeURIComponent(styleid);
		
		
		var jqxhr = $.getJSON(url,function(data){
			$('#loadding').hide();
			var success_txt='恭喜您，注册成功了！';
			var jump_url = $.cookie('reg_jump_url');
			if(jump_url =='' || jump_url == null){
				jump_url= nowdomain;
			}else{
				jump_url = decodeURIComponent(jump_url);
			}
			var d = data[0];
			if(d.islogin === '1'){
				MSGwindowShow('reg','0',success_txt,'','');
				window.location.href= jump_url;
			}else if(d.islogin === '3'){
				MSGwindowShow('reg','1','恭喜您，注册成功了！您好，您的账户需要激活才能登录！',d.checkurl,'');
			}else{
				MSGwindowShow('reg','1',d.error,'','');
			}
		}).error(function(){
			$('#loadding').hide();
			$('#have_login').hide();
			alert("error");
		})
}