function SetCookie (name, value) 
{ 
   var exp = new Date(); 
   exp.setTime (exp.getTime()+3600000000); 
   document.cookie = name + "=" + value + "; expires=" + exp.toGMTString()+"; path=/"; 
}

function getCookieVal (offset) { 
	var endstr = document.cookie.indexOf (";", offset); 
	if (endstr == -1) endstr = document.cookie.length; 
    return unescape(document.cookie.substring(offset, endstr)); 
 } 
function DelCookie(name)
{
	var exp = new Date();
	exp.setTime (exp.getTime() - 1);
	var cval = GetCookie (name);
	document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
	SetCookie(name,"");
}

function GetCookie(name) {
	 var arg = name + "="; 
	 var alen = arg.length; 
	 var clen = document.cookie.length; 
	 var i = 0; 
	 while (i < clen) { 
		 var j = i + alen; 
		 if (document.cookie.substring(i, j) == arg) return getCookieVal (j); 
		 i = document.cookie.indexOf(" ", i) + 1; 
		 if (i == 0) break; 
	 } 
	 return null; 
 } 
function $$$$(o){
   var o=document.getElementById(o)?document.getElementById(o):'';
   return o;
}
function moreMenu(showBox) {
	var _selfObj = document.getElementById("search-more");
	tabMenu('search',showBox,_selfObj);
	showDiv("more","none");
}
function DelHtml(Word) {
  a = Word.indexOf("<");
  b = Word.indexOf(">");
  len = Word.length;
  c = Word.substring(0, a);
  if(b == -1)
  b = a;
  d = Word.substring((b + 1), len);
  Word = c + d;
  tagCheck = Word.indexOf("<");
   if(tagCheck != -1)
   Word = DelHtml(Word);
   return Word;
} 
function glog(evt)
{	
	if(document.getElementById('suggest'))
    document.getElementById('suggest').style.display="none";
   evt=evt?evt:window.event;var srcElem=(evt.target)?evt.target:evt.srcElement;
   if(srcElem.id != 'search-more'){
    showDiv("more","none");
   }
try
{
while(srcElem.tagName.toUpperCase()=="A" || srcElem.parentNode.tagName.toUpperCase()=="A") 
{
address=srcElem.href;
urlReg = /^http:\/\/(.*)\/catalog/;
urlReg2 = /^http:\/\/(.*)/; 
if (!urlReg.test(address)){
if(srcElem.parentNode.parentNode.parentNode.id=="list"
|| srcElem.parentNode.parentNode.parentNode.id=="fmsites"
|| srcElem.parentNode.parentNode.parentNode.id=="coolsite"
|| srcElem.parentNode.parentNode.parentNode.id=="tool"
|| srcElem.parentNode.parentNode.parentNode.id=="sidebar"
  )
{
 linkname=DelHtml(srcElem.innerHTML);
 if (linkname!='undefined')
 { 
 wlink=linkname+"+"+address+"_114la_"; 
 wlink+=GetCookie("history");
 wlink=escape(wlink);
 SetCookie("history",wlink); 
 history_show();
 }
}
}
if(urlReg2.test(address)){
		var regular = /\b(http:\/\/[-a-z0-9]+\.114la\.com\b(\/[-a-z0-9_:\@&?=+,.!/~%\$]*)?)/;
		if(!regular.test(address)){
			var urlname = encodeURIComponent(strip_tags(srcElem.innerHTML));
            var q = 0;
			if(getq()){
			   q = 1;	 
			}
            countimg.src = 'http://stat.114la.com/index?u='+encodeURIComponent(address)+'&n='+urlname+'&q='+q+'&i='+Math.random();
		}
}
srcElem = srcElem.parentNode;
}
}
catch(e){}
return true;
}

function showDiv(id,type) {
	document.getElementById(id).style.display = type;
}

function history_show()
{   
try
{
 var history=GetCookie("history");
 history=unescape(history);
 var content='';
 if(history!="null"&&history.indexOf("&")==-1)
 {
 history_arg=history.split("_114la_");
 i=0;
 linknum=0;
 len= history_arg.length;
 for(i=0;i<len;i++)
 { 
 	var wlink=history_arg[i].split("+");
    if(history_arg[i]!="null" && content.indexOf(wlink[0])==-1 && linknum<44){
       content+="<li><a href=\""+wlink[1]+"\" target=\"_blank\"  title=\""+wlink[0]+"\">"+wlink[0]+"</a></li>";
       linknum+=1;
    }
    
}    
 document.getElementById("history").innerHTML=content; 

}else{
 	document.getElementById("history").innerHTML='<li class="none">对不起，您没有任何浏览记录</li>';

}
}
catch(e){}
}

function ClearHistory()
{
clean=confirm("确定要清除所有的浏览记录？")	
if(clean)
{
	DelCookie("history");
	document.getElementById("history").innerHTML='<li class="none">对不起，您没有任何浏览记录</li>';
	}
}

var showsoft=false;
var showgame=false;
var show39net=false;
var shownews=false;
var showmeirong=false;


var waitInterval;
var MouseDelayTime=400;
function Hover(obj){
	var fn =function(){
		vaf=obj.getAttribute("onclick");
	    if(typeof(vaf)=="string"){
		   vaf=vaf.replace("this","obj");
		   eval(vaf);
		}else{
		   eval(vaf());
		}
		obj.className = "active";
	}
	clearTimeout(waitInterval);	 
	waitInterval = window.setTimeout(fn,MouseDelayTime);

}
var xmlHttp="";
function createXMLHttpRequest(){
  if(window.ActiveXObject){
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }else if(window.XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
  }
} 
function startRequest(url,returnfun) {
   createXMLHttpRequest(); 
   xmlHttp.onreadystatechange =returnfun;
   xmlHttp.open("GET",url,true);
   xmlHttp.send(null);    

}
function mouseOut(){
	clearTimeout(waitInterval);
}


function softinfo(){
	url=nowdomain+"request.aspx?action=soft";
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+Digital;
	startRequest(url,showsoftinfo);
}
function showsoftinfo(){
  if(xmlHttp.readyState == 4)
  {
	  if(xmlHttp.status == 200)
	  {
	    document.getElementById("indexsoft").innerHTML = xmlHttp.responseText;	
      }	 
  }
}
function tabMenu(tabId,showContent,selfObj){
	var tag = document.getElementById(tabId+"-menu").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		   tag[i].className = "";
	}
	selfObj.className = "active";
 	for(i=0; j=document.getElementById(tabId+"-box"+i); i++){
	 if(tabId=='board'){
	 if(showsoft==false && i==1){
		//document.getElementById("indexsoft").innerHTML="正在加载中,请稍后...";
        //softinfo();
		showsoft=true;
	 }else if (showgame==false && i==2)
	 {        
		//document.getElementById("indexgame").innerHTML="<iframe src='../request.aspx?action=game' frameborder='0' scrolling='no' frameborder='0' width='568' height='305' ></iframe>";
		showgame=true;
	 }
	/* else if (show39net==false && i==5)
	 {        
		document.getElementById("index39net").innerHTML="<iframe src='http://www.114la.com/public/widget/27cn/index.htm' frameborder='0' scrolling='no' frameborder='0' width='568' height='305'></iframe>";
		show39net=true;
	 }*/
	 else if (shownews==false && i==4)
	 {        
		//document.getElementById("indexnews").innerHTML="<iframe src='"+shishang+"' frameborder='0' scrolling='no' frameborder='0' width='568' height='305'></iframe>";
		shownews=true;
	 }else if (showmeirong==false && i==3)
	 {        
		//document.getElementById("indexmeirong").innerHTML="<iframe src='"+shenghuo+"' frameborder='0' scrolling='no' frameborder='0' width='568' height='305'></iframe>";
		showmeirong=true;
	 }}
			j.style.display = "none";
		}
		document.getElementById(showContent).style.display = "block";
	
}




var isIE=document.all?true:false;
function googleHint(key){
  if(document.getElementById('gsuggest'))document.getElementById('gsuggest').removeNode(true);
  if (document.readyState=="complete"){
   var sg=document.body.appendChild(document.createElement('script'));
    sg.language='javascript';
    sg.id='gsuggest';
    sg.charset='utf-8';
    sg.src='http://www.google.cn/complete/search?hl=zh-CN&client=suggest&js=true&q=' + encodeURIComponent(key);
  }
}
var showobj=document.getElementById('getfocus');
var keyword='';
function myhint(event,obj){
   showobj=obj;
   if(!isIE)  return ;
   keyword=showobj;
   for (i=0; i<10; i++)
   {
	   if(document.getElementById('keyword'+i)){
		   if (document.getElementById('keyword'+i).value!=keyword.value)
		   {
			   document.getElementById('keyword'+i).value=keyword.value;
		   }
	   }
   }
   document.getElementById('sitekeyword').value=keyword.value;
   var h=document.getElementById('suggest');
   if(!keyword.value || !keyword.value.length || event.keyCode==27 || event.keyCode==13){
       h.style.display='none';
       return;
   }
   if(event.keyCode==38 || event.keyCode==40){
     if(h.style.display=='none') return;
       if(event.keyCode==38){
         if(h._i==-1)h._i=h.firstChild.rows.length-1;
         else{
	     h._i--;
         } 
      }else{
         h._i++;
      } 
    for(var i=0;i<h.firstChild.rows.length;i++)h.firstChild.rows[i].style.background="#FFF";
      if(h._i >= 0 && h._i < h.firstChild.rows.length)with(h.firstChild.rows[h._i]){
        style.background="#F1F8FF";
		tmp=cells[0].innerHTML.split("</EM>");
        keyword.value=tmp[1].replace("</A>",'');
      }else{
        keyword.value=h._kw;
        h._i=-1;
      } 
    }else{
      h._i=-1;
      h._kw=keyword.value;
      googleHint(keyword.value);
      var pos=getPosition(keyword);
      with(h.style){
      //  left=pos.x;
       // top=pos.y+keyword.offsetHeight;
        //width=keyword.offsetWidth - 1;
      } 
    } 
}
var searchurl='http://www.baidu.com/s?tn=fengganru_pg&ie=utf-8&wd=';
window.google={} ;
window.google.ac={} ;
window.google.ac.Suggest_apply=function(a,b,c,d){
 if(!c || c.length<3) return;
 if(b != showobj.value) return;
 var ihtml='';
 if (document.readyState=="complete")
 {
  for(var j=1;j<c.length;j+=2){
      url=searchurl+encodeURIComponent(c[j]);
	  ihtml+='<tr onmouseover="this.style.background=\'#E2EDF7\';" onmouseout="this.style.background=\'#FFF\';"><td align="left"><a href="'+url+'" target="_blank" onclick="$$$$(\'suggest\').style.display=\'none\';"><em>' +c[j+1] +'</em>' +c[j] +'</a></td></tr>';
  }
    document.getElementById('suggest').innerHTML='<table width="100%" border="0" cellpadding="0" cellspacing="0">'+ihtml+'</table>';
    document.getElementById('suggest').style.display="block";
  }else{
    //setTimeout("myhint(event)", 2000);
  }
};
function getPosition(ele){
	var overflown = [];
	var el = ele, left = 1, top = 2;
	do {
		left += el.offsetLeft || 0;
		top += el.offsetTop || 0;
		el = el.offsetParent;
	} while (el);
	return {'x': left, 'y': top};
}
function JHshStrLen(sString)
{
var sStr,iCount,i,strTemp ; 
iCount = 0 ;
sStr = sString.split("");
for (i = 0 ; i < sStr.length ; i ++)
{
strTemp = escape(sStr[i]); 
if (strTemp.indexOf("%u",0) == -1) // 表示是汉字
{ 
iCount = iCount + 1 ;
} 
else 
{
iCount = iCount + 2 ;
}
}
return iCount ;
}
var oldkeyword='';
function KeyDown()
{
    if (event.keyCode == 13)
    {
        event.returnValue=false;
        event.cancel = true;
        if(document.getElementById('sitekeyword').value=='' ||JHshStrLen(document.getElementById('sitekeyword').value)<2){
			alert('请输入要搜索的关键字或关键字不能少于2个字节!!');
		}else{
			if (document.getElementById('sitekeyword').value!=oldkeyword)
			{
				gositesearch(document.getElementById('sitekeyword').value);
			}
			
		}
    }
}
function input(){
	
      if(document.getElementById('sitekeyword').value=='' ||JHshStrLen(document.getElementById('sitekeyword').value)<2 ){//||JHshStrLen($('sitekeyword').value)<3
      }else{
	       if (document.getElementById('sitekeyword').value!=oldkeyword)
		  {
			gositesearch(document.getElementById('sitekeyword').value);
		  }
			
	  }
}

function gositesearch(keyword){
	oldkeyword=keyword;
    ylmftime=new Date().getTime();
	url='../request.aspx?action=daohangsou&keyword='+encodeURIComponent(keyword)+'&ylmftime='+ylmftime;
    document.getElementById("indexhtml").innerHTML='<li>正在搜索中,请稍后...</li>';
	startRequest(url,showsearchsite);
}
function showsearchsite(){
  if(xmlHttp.readyState == 4){
	  if(xmlHttp.status == 200){
	  txt=xmlHttp.responseText;
	  if(txt=='')
	  { 
		 document.getElementById("indexhtml").innerHTML='<li>没有搜索到相关站点!</li>';
	  }else{
	     document.getElementById("indexhtml").innerHTML=txt;
	  }
	  }else{
	    document.getElementById("indexhtml").innerHTML='<li>服务器内部错误!请稍候搜索</li>';
	  }
  }	  
}

function   killErrors()   
{   
	return   true;   
}   
window.onerror   =   killErrors; 
