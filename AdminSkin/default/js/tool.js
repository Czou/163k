var xmlHttp;

function createXMLHttpRequest() {
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest ();
	}
}

function $(id)
{
	return document.getElementById(id);
}
function startRequest() {
	var ajaxview=$("site_url").value;
	if(ajaxview=="")
	{
		alert("请输入域名或关键字！");
		return false;
	}
	var check_Google = $("check_Google").checked?$("check_Google").value:0;
	var check_Baidu = $("check_Baidu").checked?$("check_Baidu").value:0;
	var check_SOSO = $("check_SOSO").checked?$("check_SOSO").value:0;
	var check_Yahoo =$("check_Yahoo").checked?$("check_Yahoo").value:0;
	var check_Yodao = $("check_Yodao").checked?$("check_Yodao").value:0;
	var check_SoGou = $("check_SoGou").checked?$("check_SoGou").value:0;
	createXMLHttpRequest();
	xmlHttp.onreadystatechange = handleStateChange;
	var url="request.aspx?action=gg&site_url="+ajaxview+"&check_Google="+check_Google+"&check_Baidu="+check_Baidu+"&check_SOSO="+check_SOSO+"&check_Yahoo="+check_Yahoo+"&check_Yodao="+check_Yodao+"&check_SoGou="+check_SoGou;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;	
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function handleStateChange() {
	if(xmlHttp.readyState == 4) {
		if(xmlHttp.status == 200) {
			document.getElementById("results").innerHTML = xmlHttp.responseText;
		}
	}
}

function goFtpSite() {
	window.open("http://wpa.qq.com/msgrd?v=1&uin=" + document.qqh.qqhm.value + "&site=QQ临时会话系统&menu=yes");
}
function gomsnSite(){
	window.open("msnim:chat?contact=shpoly@hotmail.com" + document.msnliao.qqhm.value + "");
}
function addEvent(eventHandler)
    {
        var tags = document.getElementsByTagName('input');
        for(var i=0;i<tags.length;i++)
        {
            if(tags[i].getAttribute('url') == 'true')
            {
                if(tags[i].addEventListener)
                {
                    tags[i].addEventListener('keyup',eventHandler,true);
                }
                else
                {
                    tags[i].attachEvent('onkeyup',eventHandler);
                }
            }
        }
    }
    function addInput(e)
    {
        var obj = e.target ? e.target : e.srcElement;
        var tags = document.getElementsByTagName('input');
        for(var i=0;i<tags.length;i++)
        {
            if(tags[i].getAttribute('url') == 'true'&&tags[i]!=obj)
            {
                tags[i].value = obj.value;
            }
        }
    }
    window.onload = function()
    {
        addEvent(addInput);
    }
	
	
function checkIP()
{
	var ipArray,ip,j;
	ip = document.ipform.IpStr.value;
	
	if(/[A-Za-z_-]/.test(ip)){
		if(!/^([\w-]+\.)+((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$/.test(ip)){
			alert("不是正确的域名");
			document.ipform.IpStr.focus();
			return false;
		}
	}
	else{
		ipArray = ip.split(".");
		j = ipArray.length
		if(j!=4)
		{
			alert("不是正确的IP");
			document.ipform.IpStr.focus();
			return false;
		}

		for(var i=0;i<4;i++)
		{
			if(ipArray[i].length==0 || ipArray[i]>255)
			{
				alert("不是正确的IP");
				document.ipform.IpStr.focus();
				return false;
			}
		}
	}
}


function checkID(){
	var sID = document.sfzform.sfz.value
	if(!(/^\d{15}$|^\d{18}$|^\d{17}[xX]$/.test(sID))){
		alert("请正确输入15位或18位身份证号");
		document.sfzform.sfz.focus();
		return false;
	}
}

function checkMobile(){
	var sMobile = document.mobileform.mobile.value
	if(!(/^1[3|5][0-9]\d{4,8}$/.test(sMobile))){
		alert("您没有输入完整的11位手机号或者正确的手机号前七位！");
		document.mobileform.mobile.focus();
		return false;
	}
	
}

function checkbaidutop(o){
}