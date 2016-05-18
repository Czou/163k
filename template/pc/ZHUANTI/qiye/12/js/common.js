function checkcontact(o)
{
	if(o.chrname.value.length<2){
		alert("对不起，请输入您的称呼！");
		o.chrname.focus();
		return false;
	}
	if(o.chrtel.value.length<7){
		alert("对不起，请输入联系方式，至少七位！");
		o.chrtel.focus();
		return false;
	}
	if(o.chrmark.value.length<2){
		alert("对不起，请输入留言内容！");
		o.chrmark.focus();
		return false;
	}
	if(o.chrmark.value.length>300){
		alert("对不起，留言内容不能大于300字！");
		o.chrmark.focus();
		return false;
	}
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="../request.aspx?action=addqiye&qiyeid="+encodeURIComponent(o.qiyeid.value)+"&chrtel="+encodeURIComponent(o.chrtel.value)+"&chrmark="+encodeURIComponent(o.chrmark.value)+"&chrname="+encodeURIComponent(o.chrname.value) ;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	xmlhttp.onreadystatechange=requestaddqiye;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	return false;
	function requestaddqiye()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					alert("恭喜您,留言成功，我们会马上和您取得联系!");
					window.location.href= window.location.href;
				}
				else
					alert(xmlhttp.responseText);	
			}
		}
	}
}
function createxmlhttp(){var xmlhttp=false;try{xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");}catch (e) {try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){xmlhttp = false;}}if (!xmlhttp && typeof XMLHttpRequest!='undefined') {xmlhttp = new XMLHttpRequest();if (xmlhttp.overrideMimeType){xmlhttp.overrideMimeType('text/xml');}}return xmlhttp;}
function xmlhttpget(url,oktext1,okeval1,oktext2,okeval2,noeval,rpteval,yibu,obj)
   {var xmlhttp=createxmlhttp();if(!xmlhttp){alert("你的浏览器不支持XMLHTTP！！");return;}var yibudata = ""; if(yibu=="" || yibu == null){yibu=true}if(url.indexOf("?") > 1){var  Digital=new  Date();Digital=Digital+40000;url=url+"&k="+(Digital);}else{var  Digital=new  Date();Digital=Digital+40000;url=url+"?k="+(Digital);}xmlhttp.onreadystatechange=requestdeletefilet;	xmlhttp.open("GET",url,yibu);	xmlhttp.send(null);
	    function requestdeletefilet(){if(xmlhttp.readyState==4){if(xmlhttp.status==200)
				{ 
   			 var respos = xmlhttp.responseText;
					if(respos == oktext1 && okeval1 != "")
					{
						eval(okeval1);
					}
					else if(respos == oktext2 && okeval2 != "")
				  {
					 eval(okeval2);
					}
					else  if(noeval != ""){
						eval(noeval);
					}
					else if(rpteval != ""){eval(rpteval);}
				  else if(yibu == false){yibudata = respos;}
					else
					{
					 eval(xmlhttp.responseText);
					}
				}
			}
		}
    if(yibu==false){return yibudata ;}
  }