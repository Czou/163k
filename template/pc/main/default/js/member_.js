﻿
function checkpwd(){
	trimspace($$("oldpass"));
	if( $$("oldpass").value==""){
		alert("对不起,请输入原始密码！");
		$$("oldpass").focus();
		return false;
	}
	trimspace($$("userpass"));
	if( $$("userpass").value.length<6 || $$("userpass").value.length>15){
		alert("对不起,新密码只允许6-15 个字符！");
		$$("userpass").focus();
		return false;
	}
	if (!isRightPW($$("userpass").value)){
		alert("对不起,密码必须由字母、数字构成！");
		$$("userpass").select();
		return false;
   }
	trimspace($$("password"));
	if( $$("password").value==""){
		alert("对不起,请输入确认密码！");
		$$("password").focus();
		return false;
	}
	if( $$("password").value!=$$("userpass").value){
		alert("对不起,确认密码和新密码不一致，请重新输入！");
		$$("password").select();
		return false;
	}
	
}


function echo(obj,html)
{
	$$(obj).innerHTML=html;
}
function fopen(obj)
{
	$$(obj).style.display="";
}
function fclose(obj)
{
	$$(obj).style.display="none";
}
function QqLogin(str1,str2,str3)
{
	var url="../request.ashx?action=login&str1="+encMe(str1)+"&str2="+encMe(str2)+"&str3="+(str3);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlHttp=GetXmlHttpObject(requestlogin)
	xmlHttp.open("get", url , true)
	xmlHttp.send(null)
}
function Login(str1,str2,str3)
{
	//alert("str1=" + str1 + ",str2=" + str2 + ",str3=" +str3 );
	var url="../request.ashx?action=login&str1="+encMe(str1)+"&str2="+encMe(str2)+"&str3="+(str3);
	if(window.location.href.indexOf("loginother")!=-1){
		url = url.replace("../","");
	}
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlHttp=GetXmlHttpObject(requestlogin)
	xmlHttp.open("get", url , true)
	xmlHttp.send(null)
}
function requestlogin()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			if(window.location.href.indexOf("loginother")!=-1){
				parent.showlogin("../request.aspx?action=islogin")
			}
			var output=xmlHttp.responseText;
			if(output.indexOf("http://") != -1 )
			{
				alert("您的账户未完成激活，请先完成激活！");
				window.location.href=output;
			}
			else
			{
				if(output==3){
					output=1;	
					alert("尊贵的用户,您是第一次登陆本站，请更新您的个人资料。谢谢！");
				}
				else if(output==4){
					output=3;	
					alert("尊贵的用户,您是第一次登陆本站，请更新您的个人资料。谢谢！");
				}
				var fabulive=getCookie("nextcookie");
				if(output==2)
				{
					var   f=document.createElement("IFRAME")   
					f.height=0;   
					f.width=0   
					var tturl="other.aspx?action=login";
					if(window.location.href.indexOf("member")!=-1){
						tturl="../"+tturl;	
					}
					f.src=tturl;
					document.body.appendChild(f)  ;
					if(fabulive=="3,livefabu"){
						parent.LoginHide();
						parent.showlogin("../request.aspx?action=islogin");
					}
					else{
						setTimeout("showaganlogin1t()",1000);
					}
				}
				else if(output==1)
				{
					var   f=document.createElement("IFRAME")   
					f.height=0;   
					f.width=0;  
					var tturl="other.aspx?action=login";
					if(window.location.href.indexOf("member")!=-1){
						tturl="../"+tturl;	
					}
					f.src=tturl;  
					document.body.appendChild(f);   
					if(fabulive=="3,livefabu"){
						parent.LoginHide();
						parent.showlogin("../request.aspx?action=islogin");
					}
					else{
						setTimeout("showaganlogin2t()",1000);
					}
				}
				else{
					alert(output);	
				}
			}
		}
	}
}
		
		
function showaganlogin1t(){
	parent.LoginHide();
	var s=getCookie("gotourl");
	
	if(s)
	{   
		if(s.indexOf("baoming.aspx?activeid=")!=-1){
			var nowid=s.replace("../baoming.aspx?activeid=","");
			parent.showwybaoming(nowid);	
		}
		else if(s.indexOf("order.aspx?id=")!=-1){
			var nowid=s.replace("../order.aspx?id=","");
			parent.showorder(nowid);	
		}
		else{
			parent.location.href=s;
		}
	}
}	
		
function showaganlogin2t(){
	var ss=getCookie("logingoto");
	var agan=getCookie("aganparent");
	if(agan=="1"){
		delCookie("aganparent");
		parent.LoginHide();
		var next = getCookie("nextcookie");
		delCookie("nextcookie");
		
		if(next){
			parent.showlogin("../request.aspx?action=islogin")
			var nextvalue = next.split(",");
			if(nextvalue[0]=="1"){
				parent.showorder(nextvalue[1]);	
			}
			else if(nextvalue[0]=="2"){
				parent.showwybaoming(nextvalue[1]);	
			}
			else if(nextvalue[0]=="3"){
				parent.showtoujianli(nextvalue[1]);	
				//parent.window.location.href=parent.window.location.href;
			}
		}
	}
	else{
		if(ss){
			window.location.href=ss;
		}else{
			window.location.href="index.html";
		}
	}	
}
 function checkinput(o) {
            var sberr = document.formRegStep1Main.submitBackError;
        	if(sberr!= null){
        	  var p =sberr.parentNode;
        	  p.removeChild(sberr);
        	}
        	var logname = document.formRegStep1Main.logname;
        	var logemail = logname.value;
      	 	var originalPW  = document.formRegStep1Main.originalLogpasswd;
        	var oPW = originalPW.value;
			var showCode = '';
        	var hasWrongPW = false;
        	var WrongTipStr = "";
        	var isnulllogemail=(logemail=="")||(logemail==null)||(logemail.length==0);
			var lent=judgeString(logemail);
        	var isnullopw=oPW== "" || oPW == null || oPW.length == 0;
        	if(isnulllogemail&&isnullopw){
        		showCode +=　"请输入用户名和密码";
				logname.focus();
        		hasWrongPW = true;
        	} else if(isnulllogemail){
				logname.focus();
        		showCode += "请输入用户名";
        		hasWrongPW = true;
        	}
			else if(lent < 3 || lent > 15) {
        		showCode += '用户名长度为3到15个字符';
				logname.select();
        		hasWrongPW = true;
        	} 
			else if(isnullopw) {
        		showCode += '必须填写密码';
				originalPW.focus();
        		hasWrongPW = true;
        	} else if(oPW.length < 6 || oPW.length > 32) {
        		showCode += '密码最少6个字，不得超过32个字';
				originalPW.select();
        		hasWrongPW = true;
        	}  else {
        		hasWrongPW = false;
        	}
        	if(hasWrongPW)
        	{
        		//showCode += '</tr></table>';
				alert(showCode);
        		return false;
        	}
			delCookie("nextcookie"); //不需要跳转,直接继续
			setCookie("nextcookie","");
			var remeber=document.formRegStep1Main.remember_password.checked;
			Login(logemail,oPW,remeber);
        	return false;
        }
		
function checkfloatlogin(){
	trimspace($$("logname"));
	trimspace($$("originalLogpasswd"));
	var logname = $$("logname")
    var logemail = logname.value;
    var originalPW  = $$("originalLogpasswd");
    var oPW = originalPW.value;
	var isnulllogemail=(logemail=="")||(logemail==null)||(logemail.length==0);
	var lent=judgeString(logemail);
    var isnullopw=oPW== "" || oPW == null || oPW.length == 0;
	if(isnulllogemail){
	   logname.focus();
		alert("对不起,请输入您的用户名!");
	  return false;
   }
	if(lent < 3 || lent > 30) { 
		alert("对不起,用户名长度为3到15位!");
 	  return false;
   } 
  // setmsg('loginnamecheck','ok');
   if(isnullopw) {
		 alert("对不起,请输入您的密码!");
 	  return false;
   } else if(oPW.length < 6 || oPW.length > 32) {
		 alert("对不起,请输入6-32位的密码!");
 	  return false;
   }  
   //setmsg('loginpwdcheck','ok');
   Login(logemail,oPW,"agan");
   return false;
}

function checkqqlogin(){
	trimspace($$("logname1"));
	trimspace($$("originalLogpasswd1"));
	var logname = $$("logname1")
    var logemail = logname.value;
    var originalPW  = $$("originalLogpasswd1");
    var oPW = originalPW.value;
	var isnulllogemail=(logemail=="")||(logemail==null)||(logemail.length==0);
	var lent=judgeString(logemail);
    var isnullopw=oPW== "" || oPW == null || oPW.length == 0;
	if(isnulllogemail){
	   logname.focus();
		alert("对不起,请输入您的用户名!");
	  return false;
   }
	if(lent < 3 || lent > 30) { 
		alert("对不起,用户名长度为3到15位!");
 	  return false;
   } 
   if(isnullopw) {
		 alert("对不起,请输入您的密码!");
 	  return false;
   } else if(oPW.length < 6 || oPW.length > 32) {
		 alert("对不起,请输入6-32位的密码!");
 	  return false;
   }  
   QqLogin(logemail,oPW,"agan");
   return false;
}

function checkloginname(){
	trimspace($$("logname"));
    var logemail = $$("logname").value;
	var isnulllogemail=(logemail=="")||(logemail==null)||(logemail.length==0);
	if(isnulllogemail){
		alert("对不起,请输入您的用户名!");
	 	return false;
   }
	var lent=judgeString(logemail);
	if(lent < 3 || lent > 15) {
		alert("对不起,用户名长度为3到15位!");
 	   return false;
   }  
}

function checkloginpwd(){
	trimspace($$("originalLogpasswd"));
    var originalPW  = $$("originalLogpasswd");
    var oPW = originalPW.value;
	 if(oPW.length < 6 || oPW.length > 32) {
		 alert("对不起,请输入6-32位的密码!");
 	 	 return false;
	  } 
	   
  	 //setmsg('loginpwdcheck','ok');
}

function checkyuming(obj1,obj2,obj3,obj4)
{ 
	if (obj1.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="../request.aspx?action=yuming&id="+obj3+"&str="+escape(obj1)+"&typeid="+obj4;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdataquyu;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdataquyu()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if($$(obj2)){
						$$(obj2).innerHTML="<font color=red>"+xmlhttp.responseText+"</font>";
					}
				}
			}
		}
	} 
	
} 