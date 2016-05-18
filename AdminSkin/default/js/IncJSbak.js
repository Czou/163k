var uagent    = navigator.userAgent.toLowerCase();var is_safari = ( (uagent.indexOf('safari') != -1) || (navigator.vendor == "Apple Computer, Inc.") );var is_ie     = ( (uagent.indexOf('msie') != -1) && (!is_opera) && (!is_safari) && (!is_webtv) );var is_ie4    = ( (is_ie) && (uagent.indexOf("msie 4.") != -1) );var is_moz    = (navigator.product == 'Gecko');var is_ns     = ( (uagent.indexOf('compatible') == -1) && (uagent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_safari) );var is_ns4    = ( (is_ns) && (parseInt(navigator.appVersion) == 4) );var is_opera  = (uagent.indexOf('opera') != -1);var is_kon    = (uagent.indexOf('konqueror') != -1);var is_webtv  = (uagent.indexOf('webtv') != -1);var is_win    =  ( (uagent.indexOf("win") != -1) || (uagent.indexOf("16bit") !=- 1) );var is_mac    = ( (uagent.indexOf("mac") != -1) || (navigator.vendor == "Apple Computer, Inc.") );var ua_vers   = parseInt(navigator.appVersion);
function switchSysBar(){	if (switchPoint.innerText==3){		switchPoint.innerText=4;		top.adminf.cols='0,*';	}else{		switchPoint.innerText=3;		top.adminf.cols='180,*';	}}
function Allaction(form)  {     if(form.ID){  if (form.ID.length>1) {  for (var i=0;i<form.ID.length;i++)      {      var e = form.ID[i];	e.checked = form.alldel.checked;    }   } else {  form.ID.checked=form.alldel.checked;  } }}
function isInt(v){	var regEx=/^\d+$/;	return regEx.test(v);}
function JHshNumberText(){	if ( !(((window.event.keyCode >= 48) && (window.event.keyCode <= 57))|| (window.event.keyCode == 13) || (window.event.keyCode == 46)|| (window.event.keyCode == 45)))	{		window.event.keyCode = 0 ;	}} 
String.prototype.trim=trim;
function trim(){	return this.replace(/^\s+|\s+$/,"");}
function isRightEmail(email) {   var re="^[\s]*[a-zA-Z0-9._%-]+@[a-zA-Z0-9._%-]+\.[a-zA-Z0-9]{2,4}[\s]*$";    if(email.match(re)==null)        return false;    else       return true;}
function isRightPW(pwd) {    var re= "^[a-zA-Z0-9_]*$";    if (pwd.match(re) == null)       return false;    else       return true;}
function judgeString(str){        var len = str.length;	var tt=0;        for(var i=0;i<len;i++){           var txt = str.charCodeAt(i);           if(txt>128){              tt= tt+2;           } else{              tt= tt+1;           }        }   	return tt;}

/****************************通过ID号取得对象***********************************/
function $(id){  if (typeof(id)=="object")        return id;    if (typeof(id)=="string")	{        var obj = document.getElementById(id);        if(obj != null)            return obj;        obj = document.getElementsByName(id);        if(obj != null && obj.length > 0)            return obj[0];    }    return null;}
function checkNum(KeyCode){    if(((KeyCode>47)&&(KeyCode<58))||(KeyCode==8))    {          return true;    }    else    {          return false;     }}
function setduo(val){	if(parseInt(val)>3){		$("tt").style.display="";		}		else{		$("tt").style.display="none";		}}
function suitPic(setWidth,setHeight) {    var imageName = "showpic";    var srcWidth  = 0;    var srcHeight = 0;    var changed   = 0;    var postImages = document.getElementsByName(imageName);    try {        for (i = 0; i < postImages.length; i++) {            var e = postImages[i];            srcWidth  = e.width;            srcHeight = e.height;            changed = 0;            if (e.width > setWidth) {                n = e.width / setWidth;                e.width = setWidth;                e.height = srcHeight / n;                changed = 1;            }            if (e.height > setHeight) {                n = e.height / setHeight;                e.width = e.width / n;                e.height = setHeight;                changed = 1;            }            if (changed == 1) {                  }        }        window.setTimeout("suitPic()", 1000);    }    catch(e) {        window.setTimeout("suitPic()", 1000);    }}
function createxmlhttp(){var xmlhttp=false;try{xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");}catch (e) {try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}catch(e){xmlhttp = false;}}if (!xmlhttp && typeof XMLHttpRequest!='undefined') {xmlhttp = new XMLHttpRequest();if (xmlhttp.overrideMimeType){xmlhttp.overrideMimeType('text/xml');}}return xmlhttp;}
function xmlhttpget(url,oktext1,okeval1,oktext2,okeval2,noeval,rpteval,yibu,obj)
   {var xmlhttp=createxmlhttp();if(!xmlhttp){alert("你的浏览器不支持XMLHTTP！！");return;}var yibudata = ""; if(yibu=="" || yibu == null){yibu=true}if(url.indexOf("?") > 1){var  Digital=new  Date();Digital=Digital+40000;url=url+"&k="+encMe(Digital);}else{var  Digital=new  Date();Digital=Digital+40000;url=url+"?k="+encMe(Digital);}xmlhttp.onreadystatechange=requestdeletefilet;	xmlhttp.open("GET",url,yibu);	xmlhttp.send(null);
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
function tssh_delstr(str){}
function getdata(url,obj){xmlhttpget(url,"","","","","","echo(obj,xmlhttp.responseText);","",obj);}
function addquestion()
{
	var ischeck="0";
	if(document.getElementById('ischeck').checked)
		ischeck=="1"
	if(document.getElementById('question').value=="")
	{
		alert("对不起，请输入问题！");
		return false;
	}
	if(document.getElementById('answer').value=="")
	{
		alert("对不起，请输入答案！");
		return false;
	}
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="admin_qiang.aspx?action=add&ischeck="+ischeck+"&question="+escape(document.getElementById('question').value)+"&answer="+escape(document.getElementById('answer').value);
	xmlhttpget(url,"1","window.location.href='admin_qiang.aspx';","","","","alert(xmlhttp.responseText);","","");
}
function deleteflushdetails(aa,bb){url="request.aspx?action=deleteflush&id="+aa+"&str="+bb;	xmlhttpget(url,"","","","","","document.getElementById('flushnumbers').innerHTML ='';","","");}
function showquyu(str){if (str.length > 0 && document.getElementById("qu_classid"))
	{ 
		var url="request.aspx?action=quyu&id="+str;
		xmlhttpget(url,"","","","","","BuildSel(xmlhttp.responseText ,document.getElementById('qu_classid'));","","");
	}} 
	//专题模版显示选择
function showxtr(_id,_action,_newid,_ok) { 	if(_id==0){hide("xtr0");} if(_id==1){show("xtr0");hide("xtr2");show("xtr1");} if(_id==2) { 	show("xtr0");hide("xtr1");show("xtr2");	var url="../request.aspx?action=zhuantitpllist&id=" + _action + "&newid=" + _newid + "&idok=" + _ok;	xmlhttpget(url,"","","","","","echo('tpllist',xmlhttp.responseText);","",""); 	} }
function show_sel_template(_clienttype,_articleid,_default,divid){
	var url="../request.ashx?action=template&_clienttype=" + _clienttype + "&id=" + _articleid + "&_default=" + _default;	
	//alert(url);
	xmlhttpget(url,"","","","","","show_sel_template_out('" + divid + "',xmlhttp.responseText,'"+_default+"');","",""); 	} 
//模版客户端选择
function show_sel_template_out(divid,_str,_default){
var arr_str = _str.split('|');
var _str = "<select name='template' id='template' calss='sel_tpl'><option value=''>:请选择模版:</option>";
            for (var i = 0; i < arr_str.length; i++) {
               if(arr_str[i] != ""){
               	
               	if(_default == arr_str[i]){_str += "<option value='" + arr_str[i] + "' selected >" + arr_str[i] + "</option>";}
               	else{_str += "<option value='" + arr_str[i] + "'>" + arr_str[i] + "</option>";}
               	
              }
            }
echo(divid,_str + "</select>");
}

function showwapid(_id)
 {
 	if(_id == ""){return false;}
 	show_val('arrtemplate','default');
 	show_val('wapval',_id);
	var url="../request.aspx?action=showwapid&id=" + _id;
	xmlhttpget(url,"","","","","","echo('arrtemplateselect',xmlhttp.responseText);","","");
	var	arrstr =  new Array("0|网站首页专用","1|通用:全站有效","2|_信息频道","3|_房产频道","4|_团购频道","5|_活动频道","6|_人才频道","7|_投票系统","8|_购物频道","9|_店铺频道","10|_视频频道","11|_文章/新闻","12|_网址频道","13|_礼品兑换","14|_相册频道","15|_黄页频道");
    if(_id=="2"){var	arrstr =  new Array("0|企业首页专用","1|通用:模版套系有效","2|_关于我们","3|_领导致辞","4|_新闻中心","5|_产品展示","6|_客户案例","7|_招贤纳士","8|_在线留言","9|_联系我们");}
   else if(_id=="3"){var	arrstr =  new Array("0|店铺首页专用","1|通用:模版套系有效","2|_店铺介绍","3|_店铺动态","4|_店铺展示","5|_商品展厅","6|_团购与打折","7|_网友点评","8|_联系方式","9|_在线预约");}
   else if(_id=="4"){var	arrstr =  new Array("1|模版页有效");}
   optionsselect("Lableida","",arrstr,1);
 }
 	//专题模版显示选择
function showparentid(_id){if(_id == ""){return false;}show_val('classid','');var url="../request.aspx?action=showparentid&id=" + _id;xmlhttpget(url,"","","","","","show('arrtemplateselect',xmlhttp.responseText);","","");}
function arrtemplatego(_id){if(_id == ""){show_val('arrtemplate','default');}else{show_val('arrtemplate',_id);}}
 function lableidgo(_id){
 	if(_id == ""){}
 	if(_id == "0"){show_val('lableid','20');hide('lableidsselect');return false;}
 	else if(_id == "1"){show_val('lableid','10');hide('lableidsselect');return false;}
 	show('lableidsselect');
 	show_val('lableid','');
 	var	arrstr =  new Array("0|::无::");
 	var wapval = document.getElementById('wapval').value;
 	if(wapval < 2)
 	{
 	if(_id == "2"){var	arrstr =  new Array("0|::请选择::","1001|信息首页标签","1000|信息通用标签","1002|_大类首页通用","1010|••交易类首页","1011|••房屋类首页","1012|••活动类首页","1013|••服务类1首页","1014|••交友类首页","1015|••服务类2首页","1016|••通用类首页","1110|___交易类内容页","1111|___房屋类内容页","1112|___活动类内容页","1113|___服务类1内容页","1114|___交友类内容页","1115|___服务类2内容页","1116|___通用类内容页");}
  else if(_id == "3"){var	arrstr =  new Array("0|::请选择::","2001|房产首页标签","2000|房产通用标签","2002|_大类首页通用","2010|••新房(楼盘)首页","2011|••二手房首页","2012|••租房首页","2013|••小区首页","2014|••中介(经纪人)首页","2110|___楼盘概览","2111|___楼盘详情","2112|___销售动态","2113|___房价走势","2114|___楼盘视频","2115|___楼盘相册","2116|___房型图","2117|___位置与周边","2118|___点评","2119|___在线问房","2120|___二手房内容页","2121|___出租内容页","2122|___小区详情页","2123|___小区出租房","2124|___小区出售房","2125|___小区房型图","2126|___小区照片","2127|___小区评价","2128|___经纪人店铺首页","2129|___经纪人二手房","2130|___经纪人出租房","2131|___经纪人个人介绍","2132|___经纪人公司介绍");}
  else if(_id == "4"){var	arrstr =  new Array("0|::请选择::","3001|首页(今日团购)","3000|团购通用标签","3002|_大类首页通用","3010|••更多团购","3011|••流程问题合作","3110|___团购详情");}
  else if(_id == "5"){var	arrstr =  new Array("0|::请选择::","4001|活动首页","4000|活动通用标签","4002|_大类首页通用","4110|___活动详情");}
  else if(_id == "6"){var	arrstr =  new Array("0|::请选择::","5001|人才首页","5000|人才通用标签","5002|_大类首页通用","5010|••职位列表","5011|••人才列表","5012|••招聘企业列表","5013|••资讯列表","5110|___职位详情","5111|___人才详情","5112|___企业简介","5113|___资讯内容");}
  else if(_id == "7"){var	arrstr =  new Array("0|::请选择::","6001|投票首页","6000|投票通用标签","6010|••选手列表","6110|___选手详情");}
  else if(_id == "8"){var	arrstr =  new Array("0|::请选择::","7001|购物首页","7000|购物通用标签","7010|••购物列表","7110|___商品详情");}
  else if(_id == "9"){var	arrstr =  new Array("0|::请选择::","8001|店铺首页","8000|店铺通用标签","8010|••商家店铺列表","8110|___商家店铺首页","8111|___店铺介绍","8112|___店铺动态","8113|___店铺展示","8114|___商品展厅","8115|___团购与折扣","8116|___网友点评","8117|___联系方式","8118|___在线预约");}
  else if(_id == "10"){var	arrstr =  new Array("0|::请选择::","9001|视频首页","9000|视频通用标签","9010|••视频列表","9110|___视频播放页");}
  else if(_id == "11"){var	arrstr =  new Array("0|::请选择::","10001|文章/新闻首页","10000|文章/新闻通用标签","10002|_大类首页通用","10010|••文章列表","10110|___通用内容页","10111|___文章内容页");}
  else if(_id == "12"){var	arrstr =  new Array("0|::请选择::","11001|网址首页","11000|网址通用标签","11010|••网址分类列表");}
  else if(_id == "13"){var	arrstr =  new Array("0|::请选择::","12001|礼品兑换首页列表");}
  else if(_id == "14"){var	arrstr =  new Array("0|::请选择::","13001|相册首页","13000|相册通用标签","13010|••相册列表","10111|___相册内容页");}
  else if(_id == "15"){var	arrstr =  new Array("0|::请选择::","14001|黄页首页","14000|黄页通用标签","14002|_分类首页通用","14010|••服务机构列表","14011|••公司企业列表","14110|___通用内容页","14111|___服务机构内容页");}
 }
  optionsselect("Lableids","",arrstr,0);
 }
 function lableidsgo(_id){show_val('lableid',_id);}
  function tablenamego(_id)
 {
 	if(_id == ""){return false;}
 	if(_id == "0"){for (var i=3;i < 10;i++){hide("tr_" + i);}}
 	else if(_id == "1"){for (var i=3;i < 9;i++){hide("tr_" + i);}show("tr_9");}
 	else{for (var i=3;i < 9;i++){show("tr_" + i);}hide("tr_9"); }
 	var obj = "categoryidselect";
  var url="../request.aspx?action=showcategory&objid=" + obj + "&table=" + _id;
  show("test","url=<a href='" + url + "' target='_blank'> " + url + " </a>");
  xmlhttpget(url,"","","","","","optionsselect_str(obj,'',xmlhttp.responseText,1);","",obj);
 }
 function tablenamego_a(_id)
 {
 	if(_id == ""){return false;}
 	if(_id == "0"){for (var i=3;i < 10;i++){hide("tr_" + i);}}
 	else if(_id == "1"){for (var i=3;i < 9;i++){hide("tr_" + i);}show("tr_9");}
 	else{for (var i=3;i < 9;i++){show("tr_" + i);}hide("tr_9"); }
 		var	arrstr =  new Array("0|::无::");
 		var	categoryidstr =  new Array("0|::无::");
 		var	slassidstr =  new Array("0|::无::");
 	if(_id == "article"){	var	arrstr =  new Array("id|ID","title|标题","intorder|排序","chrcome|来源","dtappenddate|发布时间","content|内容","color|颜色","categoryid|分类","userid|发布人","hits|人气");}
 	else if(_id == "category"){	var	arrstr =  new Array("categoryid|ID","chrcategory|分类名称","intorder|排序","styleid|大类ID","parentid|小类ID","chrimage|图片地址","color|颜色");}
 	else if(_id == "house_category"){	var	arrstr =  new Array("categoryid|ID","chrcategory|分类名称","intorder|排序","styleid|大类ID");}
  else if(_id == "live_category"){	var	arrstr =  new Array("categoryid|ID","chrcategory|分类名称","intorder|排序","typeid|大类ID","parentid|小类ID","title|SEO标题","chrmark|栏目介绍","color|颜色");}
 	else if(_id == "live"){	var	arrstr =  new Array("detailsid|ID","chrlive|信息编号","chrtitle|信息标题","categoryid|信息分类","areaid|地区","intorder|排序","color|颜色","chrmark|描述","youxiaodate|有效时间","chrname|姓名","chrtel|电话","chrmobile|手机","chrqq|QQ号码","isindex|首页头版","intop|大类置顶","chrip|发布人IP","xinjiu|新旧程度","jiage|价格","shuxing|属性","userid|发布人","f_xiaoqu|房_小区","jingjia|是否竞价","flushint|刷新次数","flushdate|刷新时间");}
 	else if(_id == "house_chuzhu"){	var	arrstr =  new Array("detailsid|ID","chrlive|信息编号","chrtitle|信息标题","categoryid|信息分类","areaid|地区","intorder|排序","color|颜色","chrmark|描述","youxiaodate|有效时间","chrname|发布人","chrtel|电话","chrmobile|手机","chrqq|QQ号码","isindex|首页头版","intop|大类置顶","chrip|发布人IP","xinjiu|新旧程度","jiage|价格","shuxing|属性","1|1");}
 	
 //house_categorylive
   show('col_names',optionscheckbox("col_name","",arrstr));
   show_val("tablenamestr",_id);
   hide("w1_3str");
   hide("w2_3str");
   hide("w3_3str");
   optionsselect("w1_1","",arrstr,1);
   optionsselect("w2_1","",arrstr,1);
   optionsselect("w3_1","",arrstr,1);
   optionsselect("orderby","",arrstr,1);
   optionsselect("categoryidselect","",categoryidstr,1);
   optionsselect("slassidselect","",slassidstr,1);
}
function WComparisonGo(_id,_val){var tablenamestr = document.getElementById('tablenamestr').value;
//	if(tablenamestr == "article" &&  _val == "categoryid"){show("w" + _id + "_3str","<select name='w" + _id + "_3' id='w" + _id + "_3'><option value='38'>就业资讯</option><option value='39'>职场攻略</option><option value='40'>面试指南</option><option value='41'>简历指导</option></select>");return false;}
	if (tablenamestr == "category" && _val == "styleid") {show("w" + _id + "_3str","<input type='text' name='w" + _id + "_3' id='w" + _id + "_3' value=\"\"><select name='w" + _id + "_3s' id='w" + _id + "_3s'  onchange=\"javascript:show_val('w" + _id + "_3',this.value);\" ><option value='0'>区域/地段</option><option value='2'>店铺分类</option><option value='3'>文章分类</option><option value='4'>活动分类</option><option value='5'>商品分类</option><option value='6'>帮助分类</option><option value='7'>人才资讯分类</option><option value='8'>分类</option><option value='9'>人才行业分类</option><option value='10'>黄页行业分类</option><option value='11'>加盟分类</option><option value='12'>房产类型</option><option value='13'>房产特色</option><option value='14'>装修分类</option><option value='15'>房屋配置</option><option value='16'>房基础设施</option><option value='17'>团购分类</option></select>");return false;}
  else	if (tablenamestr == "house_category" && _val == "styleid") {show("w" + _id + "_3str","<input type='text' name='w" + _id + "_3' id='w" + _id + "_3' value=\"\"><select name='w" + _id + "_3s' id='w" + _id + "_3s'  onchange=\"javascript:show_val('w" + _id + "_3',this.value);\" ><option value='0'>房产资讯分类</option><option value='1'>总价分类</option><option value='2'>租金分类</option><option value='3'>均价分类</option></select>");return false;}
	
	var url="../request.aspx?action=showlabletype&table=" + tablenamestr + "&col_name=" + _val + "&id=w" + _id + "_3" ;
	//show("w" + _id + "_3str",url);
	xmlhttpget(url,"","","","","","show(obj,xmlhttp.responseText);","","w" + _id + "_3str");
	}



function deletebackground()
{
	if(confirm("此操作不可逆，您确定要删除网站首页背景吗？"))
	{
		var url="request.aspx?action=deleteback";
		xmlhttpget(url,"","","","","","window.location.href=window.location.href;","","");
	}
}
function showzhuan(str)
{ 
	if (str.length > 0 && document.getElementById("zhuan_classid"))
	{ 
		var url="request.aspx?action=quyu&id="+str;
		xmlhttpget(url,"","","","","","BuildSel_zhuan(xmlhttp.responseText ,document.getElementById('zhuan_classid'));","","");
	}
} 

function showquyulive(str)
{ 
	if (str.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=live&id="+str;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdataquyulive;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdataquyulive()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					BuildSel(xmlhttp.responseText ,document.getElementById("live_classid"))
				}
			}
		}
	} 
	
} 
function showhangyecategory(str)
{ 
	if (str.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=quyu&id="+str;
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
					BuildSel(xmlhttp.responseText ,document.getElementById("categoryid"))
				}
			}
		}
	} 
} 
function showloupancategory(str,nowcc)
{ 
   
	if (str.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=quyu&id="+str;
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
					var sel=document.getElementById("qu_classid");
					var val="选择地段";
					var str =xmlhttp.responseText;
					
					sel.options.length=0;
					var arrstr = new Array();
					arrstr = str.split(",");
					//开始构建新的Select.
					sel.options.add(new Option( val,"")); 
					if(str.length>0)   
					{
						for(var i=0;i<arrstr.length-1;i++)
						{
							//分割字符串
							var subarrstr=new Array
							subarrstr=arrstr[i].split("|")
							//生成下级菜单
							sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
							if(nowcc==subarrstr[0])
							{  sel.options[i+1].selected=true;
							}
						}
					}
				}
			}
		}
	} 
}
function optionsselect_str(_id,selectstr,str,_o){var arrstr = new Array();arrstr = str.split("&");optionsselect(_id,selectstr,arrstr,_o);}
function optionsselect(_id,selectstr,arrstr,_o){	var sel=document.getElementById(_id);	sel.options.length=0;if(_o == 1 ){sel.options.add(new Option("::请选择::",""));}	for(var i=0;i<arrstr.length;i++){var subarrstr=new Array();	subarrstr=arrstr[i].split("|");sel.options.add(new Option(subarrstr[1],subarrstr[0]));if(selectstr==subarrstr[0]){sel.options[i+1].selected=true;}}}
function optionscheckbox(_id,selectstr,arrstr){var output ="";for(var i=0;i<arrstr.length;i++){var subarrstr=new Array();subarrstr=arrstr[i].split("|");if(selectstr==subarrstr[0]){output = output + "<input type=\"checkbox\"  name=\"" + _id + "\" value=\"" + subarrstr[0] + "\" checked>" + subarrstr[1] + " ";}else{output = output + "<input type=\"checkbox\"  name=\"" + _id + "\" value=\"" + subarrstr[0] + "\">" + subarrstr[1] + " ";}}return output;}




function BuildSel_tt(str,sel,val)
{
	//先清空原来的数据.
	sel.options.length=0;
	var arrstr = new Array();
	arrstr = str.split(",");
	//开始构建新的Select.
	sel.options.add(new Option( val,"")); 
	if(str.length>0)   
	{
		for(var i=0;i<arrstr.length-1;i++)
		{
			//分割字符串
			var subarrstr=new Array();
			subarrstr=arrstr[i].split("|")
			//生成下级菜单
			sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
		}
		sel.options[0].selected=true
	}
}

function BuildSel(str,sel,val)
{
	//先清空原来的数据.
	sel.options.length=0;
	var arrstr = new Array();
	arrstr = str.split(",");
	//开始构建新的Select.
	sel.options.add(new Option( "::请选择::","")); 
	if(str.length>0)   
	{
		for(var i=0;i<arrstr.length-1;i++)
		{
			//分割字符串
			var subarrstr=new Array
			subarrstr=arrstr[i].split("|")
			//生成下级菜单
			sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
		}
		sel.options[0].selected=true
	}
}
function BuildSel_zhuan(str,sel,val)
{
	//先清空原来的数据.
	sel.options.length=0;
	var arrstr = new Array();
	arrstr = str.split(",");
	//开始构建新的Select.
	if(window.location.href.indexOf("bianming")!=-1)
	{
		sel.options.add(new Option( "请选择","")); 
	}
	else
	{
		sel.options.add(new Option( "不选子类","")); 
	}
	if(str.length>0)   
	{
		for(var i=0;i<arrstr.length-1;i++)
		{
			//分割字符串
			var subarrstr=new Array
			subarrstr=arrstr[i].split("|")
			//生成下级菜单
			sel.options.add(new Option(subarrstr[1],subarrstr[0])); 
		}
		sel.options[0].selected=true
	}
}


function setqiyong(val,aabb){
	if(val==0){
		$("qiyong1").style.display="none";	
	}
	else{
		$("qiyong1").style.display="";	
		$("chrcontent").value=aabb;
	}
}


//删除指定行
function DeleteSignRow(rowid){
	var signFrame = findObj("SignFrame",document);
	var signItem = findObj(rowid,document);
	//获取将要删除的行的Index
	if(signItem){
		var rowIndex = signItem.rowIndex;
		//删除指定Index的行
		signFrame.deleteRow(rowIndex);
	}
	if($("total")){
		$("total").value = parseInt($("total").value)-1;	
	}
}

function addSignRow(){
	var txtTRLastIndex = findObj("count",document);
	var imgtt = findObj("img",document);
	var rowID = parseInt(txtTRLastIndex.value);
	var signFrame = findObj("SignFrame",document);
	//添加行
	var ab = rowID+1;
	var newTR = signFrame.insertRow(signFrame.rows.length);
	newTR.id = "SignItem" + ab;
	//添加列:付款时间
	var newNameTD=newTR.insertCell(0);
	//添加列内容
	newNameTD.innerHTML = "<table width=\"100%\"  ><tr><td valign=top ><input type=file name=file /> 描述（13汉字内）：<input type=\"text\" name=\"chrmark\" maxlength=20/> <img  style=\"cursor:pointer\" onclick=\"DeleteSignRow('SignItem" + ab + "')\" src='"+imgtt.value+"' border=0></td></tr></table>";
	//将行号推进下一行
	$("count").value = (rowID + 1).toString() ;
}
//删除指定行
function DeleteSignRowdianpu(rowid){
	var signFrame = findObj("SignFrame",document);
	var signItem = findObj(rowid,document);
	//获取将要删除的行的Index
	if(signItem){
		var rowIndex = signItem.rowIndex;
		//删除指定Index的行
		signFrame.deleteRow(rowIndex);
	}
	if($("total")){
		$("total").value = parseInt($("total").value)-1;	
	}
}

function addSignRowdianpu(){
	var txtTRLastIndex = findObj("count",document);
	var imgtt = findObj("img",document);
	var rowID = parseInt(txtTRLastIndex.value);
	var signFrame = findObj("SignFrame",document);
	//添加行
	var ab = rowID+1;
	var newTR = signFrame.insertRow(signFrame.rows.length);
	newTR.id = "SignItem" + ab;
	//添加列:付款时间
	var newNameTD=newTR.insertCell(0);
	//添加列内容
	var shopid=$("hiddenshopid").value;
	newNameTD.innerHTML = " "+shopid+" 排序：<input type=\"text\" name='intorder' size=8 onkeypress=\"return event.keyCode>=48&&event.keyCode<=57||event.keyCode==46\" onpaste=\"return !clipboardData.getData('text').match(/\D/)\" ondragenter=\"return false\">(仅可输入数字)";
	//将行号推进下一行
	$("count").value = (rowID + 1).toString() ;
}

// Example: obj = findObj("image1");
function findObj(theObj, theDoc){var p, i, foundObj;if(!theDoc) theDoc = document;if( (p = theObj.indexOf("?")) > 0 && parent.frames.length){    theDoc = parent.frames[theObj.substring(p+1)].document;    theObj = theObj.substring(0,p);}if(!(foundObj = theDoc[theObj]) && theDoc.all) foundObj = theDoc.all[theObj];for (i=0; !foundObj && i < theDoc.forms.length; i++)     foundObj = theDoc.forms[i][theObj];for(i=0; !foundObj && theDoc.layers && i < theDoc.layers.length; i++)     foundObj = findObj(theObj,theDoc.layers[i].document);if(!foundObj && document.getElementById) foundObj = document.getElementById(theObj);return foundObj;}

function set_image(){
	var cityid=document.getElementById('chrdiqu').value;
	var shop_x=document.getElementById('shop_x').value;
	var shop_y=document.getElementById('shop_y').value;
	var shop_z=document.getElementById('shop_z').value;
	var url='ezmarker.aspx?city='+cityid+'&x='+shop_x+'&y='+shop_y+'&z='+shop_z;
	var va = showModalDialog(url,"","dialogWidth:510px; dialogHeight:430px; status:0;help:0;scroll:0");
	if(va!=null)
	{
	    var str=va.split('|');
	    document.getElementById("shop_x").value=str[0];			
	    document.getElementById("shop_y").value=str[1];
	    document.getElementById("shop_z").value=str[2];		
	}
}
function set_newimage(){
	/*var cityid="0";
	if(document.getElementById('chrdiqu')){
		cityid=document.getElementById('chrdiqu').value;
	}
	else{
		cityid=document.getElementById('loupancategory').value;
	}
	var shop_x=document.getElementById('shop_x').value;
	var shop_y=document.getElementById('shop_y').value;
	var shop_z=document.getElementById('shop_z').value;
	var url='ezmarker.aspx?city='+cityid+'&x='+shop_x+'&y='+shop_y+'&z='+shop_z;
	var height=parseInt(window.screen.height)-60;
	window.open(url,'newindow','height='+height +',width='+window.screen.width +',top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
	*/
	var chraddress="";
	try{
		chraddress= $('chraddress').value;
	}
	catch(err)
	{}
	
	var shop_x=$('shop_x').value;
	var shop_y=$('shop_y').value;
	if($('ggmap')){
		var ggmap=$('ggmap').value;
	}
	else{
		var ggmap=$('shop_z').value;
	}
 	var url='../ezmarker/index.aspx?city='+escape(chraddress)+'&x='+shop_x+'&y='+shop_y+'&ggmap='+ggmap;
	window.open(url,'newindow','height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=yes');
}

function setfuwu(val){
	if(val==1){
		$("fuwu1").style.display="";	
	}
	else{
		$("fuwu1").style.display="none";	
	}
}

function setfukan(val){
	if(val==1){
		$("fukan1").style.display="";	
	}
	else{
		$("fukan1").style.display="none";	
	}
}
function setpeisong(val){
	if(val==1){
		$("peisong1").style.display="";	
	}
	else{
		$("peisong1").style.display="none";	
	}
}

function showphotocategory(str)
{ 
	if (str.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=photo&id="+str;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdataquyu1;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdataquyu1()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					 BuildSel_tt(xmlhttp.responseText ,document.getElementById("classid"),"请选择相册")
				}
			}
		}
	} 
	
} 
function setbianhao(obj){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="request.aspx?action=bianhao";
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestsetbianhao;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestsetbianhao()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				obj.value=xmlhttp.responseText;
			}
		}
	}
}
function showphotocategory1(str)
{ 
	if (str.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=photo&id="+str;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdataquyu2;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdataquyu2()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					BuildSel_tt(xmlhttp.responseText ,document.getElementById("classid1"),"请选择相册")
				}
			}
		}
	} 
	
} 

function showzhiweitel(str)
{ 
	if (str.length > 0)
	{ 
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=zhiwei&id="+str;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdatazhiwei;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdatazhiwei()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					var aa=xmlhttp.responseText.split('@fengganru@');
					document.getElementById("chraddress").value=aa[0];
					document.getElementById("chrcode").value=aa[1];
					document.getElementById("chremail").value=aa[2];
					document.getElementById("chrtel").value=aa[3];
				}
			}
		}
	} 
	
} 

function base_name(pFilePath){
	var temp_win = pFilePath.lastIndexOf("\\");
	var temp_unix = pFilePath.lastIndexOf("/");
	if (temp_win>0)
	{
		temp = temp_win;
	}
	else if (temp_unix>0)
	{
		temp = temp_unix;
	}
	else
	{
		temp = -1;    
	}
	file_name = pFilePath.substr(temp+1);
	return(file_name);
}
function setupload(aa,val){
	var tt=base_name(val);
	obj=document.form1.chrmark[(parseInt(aa)-1)]
	if(obj){
		
	}
	else{
		obj=document.form1.chrmark;
	}
	if(obj){
		if(obj.value=="")
		{
			if(tt.lastIndexOf(".")!=-1){
				tt=tt.substring(0,tt.lastIndexOf("."));
			}
			obj.value = tt;
		}
	}
}
function setclick(aa,bb){
	if(parseInt(aa)==parseInt(bb.value)){
			
	}	
	else{
		if(aa=="2")
		{
			$("styleid").value=aa;
			$("SignFrame").style.display="none";
			$("SignFrame_").style.display="";
		}
		else
		{
			$("SignFrame").style.display="";
			$("SignFrame_").style.display="none";
			var tt =parseInt($("count").value);
			$("styleid").value=aa;
			$("count").value="0";
			for(var mm=1;mm<=tt;mm++)
			{
				DeleteSignRow("SignItem"+mm);
			}
			$("total").value="0";
			addphotorow();
		}
	}
}

function addphotorow(){
	if(parseInt($("total").value)>=10){
		alert("对不起,一次只能上传十张相片!");
		return false;
	}
	var txtTRLastIndex = findObj("count",document);
	var rowID = parseInt(txtTRLastIndex.value);
	var signFrame = findObj("SignFrame",document);
	//添加行
	var ab = rowID+1;
	var newTR = signFrame.insertRow(signFrame.rows.length);
	newTR.id = "SignItem" + ab;
	//添加列:付款时间
	var newNameTD=newTR.insertCell(0);
	//添加列内容
	var styleid=$("styleid").value;
	if(styleid=="0"){
		newNameTD.innerHTML = "<input type=\"file\" name=\"file\" style=\"width:320px;\"  onchange=\"setupload('"+ab+"',this.value);\"/> 描述：<input type=\"text\"  style=\"width:200px;\" name=\"chrmark\" /> <img  style=\"cursor:pointer\" onclick=\"DeleteSignRow('SignItem"+ab+"')\" src='../adminskin/default/images/del.jpg' border=0>";
	}
	else{
		newNameTD.innerHTML = "<input type=\"text\" name=\"url_"+ab+"\" style=\"width:320px;\"  value='http://' /> 描述：<input type=\"text\"  style=\"width:200px;\" name=\"urlmark_"+ab+"\" /> <img  style=\"cursor:pointer\" onclick=\"DeleteSignRow('SignItem"+ab+"')\" src='../adminskin/default/images/del.jpg' border=0>";
	}
	//将行号推进下一行
	$("count").value = (rowID + 1).toString() ;
	$("total").value = parseInt($("total").value)+1;
}
function checkaddlive(o){	if($("classid").value==""){		alert("对不起,请选择信息小类!");		$("classids").focus();		return false;	}		if($("chrtitle").value==""){		alert("对不起,请输入信息标题!");		$("chrtitle").focus();		return false;	}	if($("areaid").value=="0" || $("areaid").value==""){		alert("对不起,请选择地区!");		$("areaid").focus();		return false;	}	if($("chrmark")){			}	if($("f_jiage")){		if($("f_jiage").value==""){			alert("对不起,请输入价格!");			$("f_jiage").focus();			return false;		}	}	if($("f_mianji")){		if($("f_mianji").value==""){			alert("对不起,请输入面积!");			$("f_mianji").focus();			return false;		}	}	if($("jiage")){		if($("jiage").value==""){			alert("对不起,请输入价格!");			$("jiage").focus();			return false;		}	}	if($("chrname")){		if($("chrname").value==""){			alert("对不起,请输入联系人!");			$("chrname").focus();			return false;		}	}	if($("t_huodong")){		if($("t_huodong").value==""){			alert("对不起,请输入活动地点!");			$("t_huodong").focus();			return false;		}	}	if($("t_xiaofei")){		if($("t_xiaofei").value==""){			alert("对不起,请输入人均消费!");			$("t_xiaofei").focus();			return false;		}	}	if($("t_renshu")){		if($("t_renshu").value==""){			alert("对不起,请输入活动人数!");			$("t_renshu").focus();			return false;		}	}		if($("chrtel").value=="" && $("chrmobile").value==""  && $("chrqq").value==""){		alert("对不起,联系手机,联系电话,联系QQ必填一项!");		$("chrtel").focus();		return false;	}		if(o.isindex[0].checked){		if($("isindexdate").value==""){			alert("对不起,请输入首页头版有效期");			$("isindexdate").focus();			return false;		}	}	if(o.istop[0].checked){		if($("istopdate").value==""){			alert("对不起,请输入大类置顶有效期");			$("istopdate").focus();			return false;		}	}}

function addlivefile(tt,aa){
	var count=parseInt($("count").value);
	if(count<parseInt(tt)){
		if($("showfile").innerHTML!=""){
			$("showfile").innerHTML+="<br>";
		}
		$("count").value=count+1;
		$("showfile").innerHTML=	$("showfile").innerHTML+'<input type="file" class="'+aa+'" size="50" name="file" />';
	}
	else{
		alert("对不起,目前最多可上传八张图片!");
	}
}

function checkaddzhiweiform(o){
	if(o.p1[1].checked){
	if(o.zhiweiuserid.value==""){
		alert("请选择招聘企业!");
		o.zhiweiuserid.focus();
		return false;
	}
	}
	else{
		if(o.zidingyi.value.trim()==""){
			alert("对不起,请输入自定义招聘企业");	
			o.zidingyi.focus();
			return false;
		}	
	}
	if(o.zhiweiname.value==""){
		alert("请输入职位名称!");
		o.zhiweiname.focus();
		return false;
	}
	if(o.zhiweixinzhi.value==""){
		alert("请选择职位性质!");
		o.zhiweixinzhi.focus();
		return false;
	}
	if(o.hangyecategory.value==""){
		alert("请选择行业分类!");
		o.hangyecategory.focus();
		return false;
	}
	if(o.categoryid.value==""){
		alert("请选择岗位分类!");
		o.categoryid.focus();
		return false;
	}
	if(o.renshu.value==""){
		alert("请输入招聘人数！");
		o.renshu.focus();
		return false;
	}
	if(o.youxiao.value==""){
		alert("请选择有效时间！");
		o.youxiao.focus();
		return false;
	}
	if(o.chrmark.value==""){
		alert("请输入职位描述！");
		o.chrmark.focus();
		return false;
	}
}

function checkaddrencaiform(o){
	if(o.chrname.value==""){
		alert("对不起,请输入姓名!");
		o.chrname.focus();
		return false;
	}
	if(o.chusheng.value==""){
		alert("对不起,请输入出生年月!");
		o.chusheng.focus();
		return false;
	}
	/*if(o.jiguan.value==""){
		alert("对不起,请输入籍贯!");
		o.jiguan.focus();
		return false;
	}
	if(o.mingzu.value==""){
		alert("对不起,请输入民族!");
		o.mingzu.focus();
		return false;
	}
	if(o.shenggao.value==""){
		alert("对不起,请输入身高!");
		o.shenggao.focus();
		return false;
	}
	if(o.tizhong.value==""){
		alert("对不起,请输入体重!");
		o.tizhong.focus();
		return false;
	}*/
	if(o.xueli.value==""){
		alert("对不起,请选择学历!");
		o.xueli.focus();
		return false;
	}
	if(o.biyexuexiao.value==""){
		alert("对不起,请输入毕业学校!");
		o.biyexuexiao.focus();
		return false;
	}
	if(o.hangyecategory.value==""){
		alert("对不起,请选择希望行业分类!");
		o.hangyecategory.focus();
		return false;
	}
	if(o.categoryid.value==""){
		alert("对不起,请选择希望岗位!");
		o.categoryid.focus();
		return false;
	}
}

function checkusers(aa,bb,old){
	if(aa!=""){
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=rencai&id="+old+"&name="+escape(aa);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdatazhiwei;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdatazhiwei()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText=="1"){
						alert("对不起,此用户已有全职简历,不能再添加了!");	
						bb.value="";
					}
					else if(xmlhttp.responseText=="2"){
						alert("对不起,您填写的用户不存在!");	
						bb.value="";
					}
					else{
						var cc=xmlhttp.responseText.split('@fengganru@');
						document.getElementById("chrqq").value=cc[0];
						document.getElementById("chremail").value=cc[1];
					}
				}
			}
		}
	}	
}
function checkuserszj(aa,bb,old){
	if(aa!=""){
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="request.aspx?action=rencaizj&id="+old+"&name="+escape(aa);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdatazhiwei;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdatazhiwei()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText=="1"){
						alert("对不起,此用户已有兼职简历,不能再添加了!");	
						bb.value="";
					}
					else if(xmlhttp.responseText=="2"){
						alert("对不起,您填写的用户不存在!");	
						bb.value="";
					}
					else{
						var cc=xmlhttp.responseText.split('@fengganru@');
						//document.getElementById("chrqq").value=cc[0];
						//document.getElementById("chremail").value=cc[1];
					}
				}
			}
		}
	}	
}


function dropmenu(obj){
	obj.className = obj.className == 'hasdropmenu' ? 'current' : 'hasdropmenu';
	$(obj.id + 'child').style.display = $(obj.id + 'child').style.display == 'none' ? '' : 'none';
}
function isUndefined(variable) {
		return typeof variable == 'undefined' ? true : false;
	}

	function insertunit(text, obj) {
		if(!obj) {
			obj = 'jstemplate';
		}
		$(obj).focus();
		if(!isUndefined($(obj).selectionStart)) {
			var opn = $(obj).selectionStart + 0;
			$(obj).value = $(obj).value.substr(0, $(obj).selectionStart) + text + $(obj).value.substr($(obj).selectionEnd);
		} else if(document.selection && document.selection.createRange) {
			var sel = document.selection.createRange();
			sel.text = text.replace(/\r?\n/g, '\r\n');
		} else {
			$(obj).value += text;
		}
	}
	function textareasize(obj) {
		if(obj.scrollHeight > 70) {
			obj.style.height = obj.scrollHeight + 'px';
		}
	}
	
function checkaddsave(o){
	if(o.title.value==""){
		alert("对不起,请输入模块名称!");
		o.title.focus();
		return false;
	}
	if(o.number.value==""){
		alert("对不起,请输入显示条数!");
		o.number.focus();
		return false;
	}
}
function addqiyecategory(id,bb){
	if(document.formt1.chrcategory.value==""){
		alert("对不起,请输入分类名称!");
		document.formt1.chrcategory.focus();
		return false;
	}
	var aa=document.formt1.chrcategory.value;
	var cc=document.formt1.paixu.value;
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="qiye.aspx?action=addcategory&id="+id+"&chrcategory="+escape(aa)+"&aa="+escape(bb)+"&paixu="+cc;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestqiyedataaddcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestqiyedataaddcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadqiyecategoryid(id,bb);
					loadqiyecategoryidselect(id,bb);
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
	
}
function loadqiyecategoryid(id,aa){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="qiye.aspx?action=showvalue&styleid=2&id="+id+"&aa="+aa;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdatashopcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				document.getElementById("listcategoryshow").innerHTML=xmlhttp.responseText;
			}
		}
	}
}
function loadqiyecategoryidselect(id,aa){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="qiye.aspx?action=showvalue&styleid=1&id="+id+"&aa="+aa;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdataqiyecategoryidselect;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdataqiyecategoryidselect()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				BuildSel(xmlhttp.responseText ,document.getElementById("categoryid"))
			}
		}
	}
}
function deleteqiyecategoryid(id,categoryid,aa){
	if (!confirm("您确定要删除此分类名称吗？此分类下面的信息也会一起删除!"))
	{
		return false;
	}
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="qiye.aspx?action=showvalue&styleid=3&id="+id+"&categoryid="+categoryid+"&aa="+aa;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdataqiyecategoryiddelete;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdataqiyecategoryiddelete()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadqiyecategoryid(id,aa);
					loadqiyecategoryidselect(id,aa);
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
}
function editqiyecategory(cc){
	if(document.formt1.editchrcategory.value==""){
		alert("对不起,请输入分类名称!");
		document.formt1.editchrcategory.focus();
		return false;
	}
	var aa=document.formt1.editchrcategory.value;
	var bb=document.formt1.editcategoryid.value;
	var paixu=document.formt1.editpaixu.value;
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="qiye.aspx?action=editcategory&id="+document.formt1.ID.value+"&categoryid="+bb+"&chrcategory="+escape(aa)+"&paixu="+escape(paixu);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdataeditcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdataeditcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadqiyecategoryid(document.formt1.ID.value,cc);
					loadqiyecategoryidselect(document.formt1.ID.value,cc);
					document.getElementById("editchrcategory").value="";
					document.getElementById("editcategoryid").value="";
					document.getElementById("editcategory").style.display='none';
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
}
function addcategory(id){
	if(document.formt1.chrcategory.value==""){
		alert("对不起,请输入分类名称!");
		document.formt1.chrcategory.focus();
		return false;
	}
	var aa=document.formt1.chrcategory.value;
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="shop.aspx?action=addcategory&id="+id+"&chrcategory="+escape(aa);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdataaddcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdataaddcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadcategoryid(id);
					loadcategoryidselect(id);
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
	
}
function editcategory(){
	if(document.formt1.editchrcategory.value==""){
		alert("对不起,请输入分类名称!");
		document.formt1.editchrcategory.focus();
		return false;
	}
	var aa=document.formt1.editchrcategory.value;
	var bb=document.formt1.editcategoryid.value;
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="shop.aspx?action=editcategory&id="+document.formt1.ID.value+"&categoryid="+bb+"&chrcategory="+escape(aa);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdataeditcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdataeditcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadcategoryid(document.formt1.ID.value);
					loadcategoryidselect(document.formt1.ID.value);
					document.getElementById("editchrcategory").value="";
					document.getElementById("editcategoryid").value="";
					document.getElementById("editcategory").style.display='none';
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
}

function loadcategoryid(id){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="shop.aspx?action=showvalue&styleid=2&id="+id;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdatashopcategoryid;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryid()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				document.getElementById("listcategoryshow").innerHTML=xmlhttp.responseText;
			}
		}
	}
}
function loadcategoryidselect(id){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="shop.aspx?action=showvalue&styleid=1&id="+id;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdatashopcategoryidselect;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryidselect()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				BuildSel(xmlhttp.responseText ,document.getElementById("categoryid"))
			}
		}
	}
}
function deletecategoryid(id,categoryid){
	if (!confirm("您确定要删除此分类名称吗？此分类名称下面的展示图片也会一起删除!"))
	{
		return false;
	}
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="shop.aspx?action=showvalue&styleid=3&id="+id+"&categoryid="+categoryid;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdatashopcategoryiddelete;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryiddelete()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					loadcategoryid(id);
					loadcategoryidselect(id);
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
}
function seteditcategory(categoryid,id,chrcategory){
	document.getElementById("editchrcategory").value=chrcategory;
	document.getElementById("editcategoryid").value=categoryid;
	document.getElementById("editcategory").style.display='';
}
function setqiyeeditcategory(categoryid,id,chrcategory,paixu){
	document.getElementById("editchrcategory").value=chrcategory;
	document.getElementById("editcategoryid").value=categoryid;
	document.getElementById("editcategory").style.display='';
	document.getElementById("editpaixu").value=paixu;
}
function showeditphoto(id){
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="shop.aspx?action=editpic&id="+id;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdatashopcategoryideditshow;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestdatashopcategoryideditshow()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText.length>50){
					document.getElementById("showinner").innerHTML=xmlhttp.responseText;
					showRelatedProductDialog()
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
}

function checkformtt(o){
	if(o.urlt1.value==""){
		alert("对不起，请上传商品展示图片！");
		o.urlt1.focus();
		return false;
	}
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="shop.aspx?action=piceditsave&urlt1="+encMe(o.urlt1.value)+"&id="+o.EDITID.value+"&chrmark="+encMe(o.chrmark.value);
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestdatashopcategoryideditsave;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	return false;
	function requestdatashopcategoryideditsave()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText.length=="1"){
					alert("修改成功！");
					window.location.href=window.location.href;
					return false;
				}
				else{
					alert(xmlhttp.responseText);	
					return false;
				}
			}
		}
	}
}

function checkaddloupan(o){
	if(o.chrloupan.value==""){
		alert("对不起,请输入楼盘名称!");
		o.chrloupan.focus();
		return false;
	}
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}
	if(o.file.value==""){
		//alert("对不起,请选择楼盘图片!");
		//o.file.focus();
		//return false;
	}
	if(o.biaoyu.value==""){
		alert("对不起,请输入特色标语!");
		o.biaoyu.focus();
		return false;
	}
	if(o.avgprice.value==""){
		alert("对不起,请输入当前均价!");
		o.avgprice.focus();
		return false;
	}
}

function checkhousehuxing(o){
	if(o.shi.value==""){
		alert("对不起,请输入房型!");
		o.shi.focus();
		return false;
	}
	if(o.wei.value==""){
		alert("对不起,请输入房型!");
		o.wei.focus();
		return false;
	}
	if(o.ting.value==""){
		alert("对不起,请输入房型!");
		o.ting.focus();
		return false;
	}
	if(o.chrsize.value==""){
		alert("对不起,请输入面积!");
		o.chrsize.focus();
		return false;
	}
	if(o.file.value==""){
		alert("对不起,请上传房型图!");
		o.file.focus();
		return false;
	}
}

function deletehuxing(id,tt){
	if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
	{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="loupan.aspx?action=delhuxing&id="+id;
		if(tt=="2"){
			url="xiaoqu.aspx?action=delhuxing&id="+id;
		}
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdeletehuxing;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletehuxing()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText.length=="1"){
						alert("删除成功！");
						window.location.href=window.location.href;
						return false;
					}
					else{
						alert(xmlhttp.responseText);	
						return false;
					}
				}
			}
		}
	}
}

function checkxiangce(o){
	/*if(o.chrname.value==""){
		alert("对不起,请输入名称!");
		o.chrname.focus();
		return false;
	}*/
	if(o.filett.value==""){
		alert("对不起,请上传图片!");
		o.filett.focus();
		return false;
	}
}

function deletepic(id,tt){
	if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
	{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="loupan.aspx?action=delpic&id="+id;
		if(tt=="2"){
			url="xiaoqu.aspx?action=delpic&id="+id;
		}
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdeletepic;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletepic()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText.length=="1"){
						alert("删除成功！");
						window.location.href=window.location.href;
						return false;
					}
					else{
						alert(xmlhttp.responseText);	
						return false;
					}
				}
			}
		}
	}
}
function deletexinxi(id,tt){
	if ( confirm("该操作将不可逆！\n您确定要删除吗？"))
	{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var url="loupan.aspx?action=delxx&id="+id;
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		xmlhttp.onreadystatechange=requestdeletexinxi;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletexinxi()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText.length=="1"){
						alert("删除成功！");
						window.location.href=window.location.href;
						return false;
					}
					else{
						alert(xmlhttp.responseText);	
						return false;
					}
				}
			}
		}
	}
}
function checkaddxiaoqu(o){
	if(o.chrloupan.value==""){
		alert("对不起,请输入小区名称!");
		o.chrloupan.focus();
		return false;
	}
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}
	if(o.avgprice.value==""){
		alert("对不起,请输入小区二手房均价价!");
		o.avgprice.focus();
		return false;
	}
}


function checkaddjingjiren(o){
	if(o.truename.value==""){
		alert("对不起,请输入经纪人姓名!");
		o.truename.focus();
		return false;
	}
	if(o.chrcompany.value==""){
		alert("对不起,请输入所属中介公司/门店!");
		o.chrcompany.focus();
		return false;
	}
	if(o.chrtel.value==""){
		alert("对不起,请输入经纪人手机!");
		o.chrtel.focus();
		return false;
	}
}
function checkaddshoulou(o){
	if(o.chrtitle.value==""){
		alert("对不起,请输入标题!");
		o.chrtitle.focus();
		return false;
	}
	/*if(o.R1[0].checked){
		if(o.CommId.value=="" || o.CommId.value=="0"){
			alert("对不起,请输入小区!");
			o.xiaoqu.focus();
			return false;
		}
	}
	else{
		if(o.zidingyi.value=="" ){
			alert("对不起,请输入自定小区名称!");
			o.zidingyi.focus();
			return false;
		}	
	}*/
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	/*if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}*/
	if(o.leixing.value==""){
		alert("对不起,请选择类型!");
		o.leixing.focus();
		return false;
	}
	if(o.shi.value==""){
		alert("对不起,请输入房型!");
		o.shi.focus();
		return false;
	}
	if(o.wei.value==""){
		alert("对不起,请输入房型!");
		o.wei.focus();
		return false;
	}
	if(o.ting.value==""){
		alert("对不起,请输入房型!");
		o.ting.focus();
		return false;
	}
	if(o.chrsize.value==""){
		alert("对不起,请输入面积！");
		o.chrsize.focus();
		return false;
	}
	if(o.zhuangxiu.value==""){
		alert("对不起,请选择装修！");
		o.zhuangxiu.focus();
		return false;
	}
	if(o.styleid[0].checked){
		
	}
	else{
		if(o.manid.value=="" ){
			alert("对不起,请选择经纪人!");
			o.manid.focus();
			return false;
		}	
	}
	if(o.price.value==""){
		alert("对不起,请输入售价！");
		o.price.focus();
		return false;
	}
	if(o.chrtel.value==""){
		alert("对不起,请输入联系电话！");
		o.chrtel.focus();
		return false;
	}
}
function getobject(id){
  if (typeof(id)=="object")
        return id;
    if (typeof(id)=="string")
	{
        var obj = document.getElementById(id);
        if(obj != null)
            return obj;
        obj = document.getElementsByName(id);
        if(obj != null && obj.length > 0)
            return obj[0];
    }
    return null;
}
function getKeyWord()
{
    var obj = getobject("xiaoqu");   //获取文本域对象
   
    var top=0;
    var left=0;
    while(obj)
	{
	    //此循环得到文件域对象在页面中的绝对位置
        top += obj["offsetTop"];
        left += obj["offsetLeft"];
        obj = obj.offsetParent;
	}
	var  Digital=new  Date();
	Digital=Digital+40000;
    getobject("keytishi").style.display = "";  //设置提示层的位置,左
    getobject("keytishi").style.left = left + "px";  //设置提示层的位置,左
    getobject("keytishi").style.top = (top + 25) + "px";  //设置提示层的位置,上
    getobject("keytishi").style.display = "block";  //设置提示层可见
    getobject("listComm").src="request.aspx?action=xiaoqu&search="+encMe(getobject("xiaoqu").value)+"&tt="+encMe(Digital);
}
function getKeyWordjob()
{
    var obj = getobject("xiaoqu");   //获取文本域对象
   
    var top=0;
    var left=0;
    while(obj)
	{
	    //此循环得到文件域对象在页面中的绝对位置
        top += obj["offsetTop"];
        left += obj["offsetLeft"];
        obj = obj.offsetParent;
	}
	var  Digital=new  Date();
	Digital=Digital+40000;
    getobject("keytishi").style.display = "";  //设置提示层的位置,左
    getobject("keytishi").style.left = left + "px";  //设置提示层的位置,左
    getobject("keytishi").style.top = (top + 25) + "px";  //设置提示层的位置,上
    getobject("keytishi").style.display = "block";  //设置提示层可见
    getobject("listComm").src="request.aspx?action=showjob&search="+encMe(getobject("xiaoqu").value)+"&tt="+encMe(Digital);
}
function getKeyWordLoupan()
{
    var obj = getobject("xiaoqu");   //获取文本域对象
   
    var top=0;
    var left=0;
    while(obj)
	{
	    //此循环得到文件域对象在页面中的绝对位置
        top += obj["offsetTop"];
        left += obj["offsetLeft"];
        obj = obj.offsetParent;
	}
	var  Digital=new  Date();
	Digital=Digital+40000;
    getobject("keytishi").style.display = "";  //设置提示层的位置,左
    getobject("keytishi").style.left = left + "px";  //设置提示层的位置,左
    getobject("keytishi").style.top = (top + 25) + "px";  //设置提示层的位置,上
    getobject("keytishi").style.display = "block";  //设置提示层可见
    getobject("listComm").src="request.aspx?action=loupan&search="+encMe(getobject("xiaoqu").value)+"&tt="+encMe(Digital);
}

function getKeyWordShop()
{
    var obj = getobject("xiaoqu");   //获取文本域对象
    var top=0;
    var left=0;
    while(obj)
	{
	    //此循环得到文件域对象在页面中的绝对位置
        top += obj["offsetTop"];
        left += obj["offsetLeft"];
        obj = obj.offsetParent;
	}
	var  Digital=new  Date();
	Digital=Digital+40000;
    getobject("keytishi").style.display = "";  //设置提示层的位置,左
    getobject("keytishi").style.left = left + "px";  //设置提示层的位置,左
    getobject("keytishi").style.top = (top + 25) + "px";  //设置提示层的位置,上
    getobject("keytishi").style.display = "block";  //设置提示层可见
    getobject("listComm").src="request.aspx?action=shop&search="+encMe(getobject("xiaoqu").value)+"&tt="+encMe(Digital);
}

function setfilevalue(val,obj){
	document.getElementById("imgview_apf_id_8_"+val).src=loadingsrc ;
	setTimeout("pre("+val+",'"+obj.name+"')",500);
}
function pre(val,obj){
	getPath(document.getElementById(obj),document.getElementById("imgview_apf_id_8_"+val),document.getElementById("image_file"+val),"")
	//alert(val);
	//var ip = new ImagePreview( document.getElementById("image_file"+val), document.getElementById("imgview_apf_id_8_"+val), {maxWidth: 120, maxHeight: 120, action: "ImagePreview.ashx",number:val
	//});
	//ip1.img.src = ImagePreview.TRANSPARENT;
	//ip.preview();	
}
var getPath=function(obj,img,fileQuery,transImg){ 
	if(window.navigator.userAgent.indexOf("MSIE")>=1){ 
		obj.select(); 
		var path=document.selection.createRange().text; 
		img.removeAttribute("src"); 
		img.setAttribute("src",path	); 
		img.style.filter=   
		"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+path+"', sizingMethod='scale');";  
	} 
	else{ 
		var file =fileQuery.files[0];  
		var reader = new FileReader();  
		reader.onload = function(e){ 
			img.setAttribute("src",e.target.result) 
		} 
		reader.readAsDataURL(file);  
	} 
} 
function delfilevalue(val){
	if (!confirm("您确定要删除上传的这张图片吗？此操作不可逆!"))
	{
		
	}
	else{
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var delfile=document.getElementById("filesrc"+val);
		var url="request.aspx?action=delfile&id="+val+"&delfile="+encMe(delfile.value);
		var  Digital=new  Date();
		Digital=Digital+40000;
		url=url+"&k="+encMe(Digital);
		delfile.value="";
		xmlhttp.onreadystatechange=requestdeletefilet;
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
		function requestdeletefilet()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					document.getElementById("setfile"+val).innerHTML=xmlhttp.responseText;
				}
			}
		}
	}
}

function checkaddchuzhu(o){
	if(o.chrtitle.value==""){
		alert("对不起,请输入标题!");
		o.chrtitle.focus();
		return false;
	}
	/*if(o.R1[0].checked){
		if(o.CommId.value=="" || o.CommId.value=="0"){
			alert("对不起,请输入小区!");
			o.xiaoqu.focus();
			return false;
		}
	}
	else{
		if(o.zidingyi.value=="" ){
			alert("对不起,请输入自定小区名称!");
			o.zidingyi.focus();
			return false;
		}	
	}
	*/
	if(o.loupancategory.value==""){
		alert("对不起,请选择区域!");
		o.loupancategory.focus();
		return false;
	}
	if(o.qu_classid.value==""){
		alert("对不起,请选择地段!");
		o.qu_classid.focus();
		return false;
	}
	/*if(o.chraddress.value==""){
		alert("对不起,请输入地址!");
		o.chraddress.focus();
		return false;
	}*/
	if(o.leixing.value==""){
		alert("对不起,请选择类型!");
		o.leixing.focus();
		return false;
	}
	if(o.shi.value==""){
		alert("对不起,请输入房型!");
		o.shi.focus();
		return false;
	}
	if(o.wei.value==""){
		alert("对不起,请输入房型!");
		o.wei.focus();
		return false;
	}
	if(o.ting.value==""){
		alert("对不起,请输入房型!");
		o.ting.focus();
		return false;
	}
	if(o.zhuangxiu.value==""){
		alert("对不起,请选择装修！");
		o.zhuangxiu.focus();
		return false;
	}
	if(o.styleid[0].checked){
		
	}
	else{
		if(o.manid.value=="" ){
			alert("对不起,请选择经纪人!");
			o.manid.focus();
			return false;
		}	
	}
	if(o.chrsize.value==""){
		alert("对不起,请输入面积！");
		o.chrsize.focus();
		return false;
	}
	if(o.price.value==""){
		alert("对不起,请输入租金！");
		o.price.focus();
		return false;
	}
	if(o.chrtel.value==""){
		alert("对不起,请输入联系电话！");
		o.chrtel.focus();
		return false;
	}
}
function checkaddxuqiu(o){
	if(o.chrtitle.value==""){
		alert("对不起,请输入信息标题!");
		o.chrtitle.focus();
		return false;
	}
	
	if(o.chrcontent.value==""){
		alert("对不起,请输入需求简介!");
		o.chrcontent.focus();
		return false;
	}
}

function changemenu(str)
{ 
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="admin_menu.aspx?action=show&id="+str+"&tt="+(new Date().getTime());
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encMe(Digital);
	xmlhttp.onreadystatechange=requestchangemenu;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	function requestchangemenu()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				BuildSel(xmlhttp.responseText,$("fid"));
			}
		}
	}
} 

function selected(obj)
{
   var allsel=document.getElementsByName(obj);
   for(var i=0;i<allsel.length;i++)
   {
	   allsel[i].checked=true;
   }
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
					if(getobject(obj2)){
						getobject(obj2).innerHTML="<font color=red>"+xmlhttp.responseText+"</font>";
					}
				}
			}
		}
	} 
	
} 
function sendquan(aa)
{
	var xmlhttp=createxmlhttp();
	if(!xmlhttp)
	{
		alert("你的浏览器不支持XMLHTTP！！");
		return;
	}
	var url="../request.aspx?action=sendquan&tt=1&orderid="+aa ;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	xmlhttp.onreadystatechange=requestsendquan;
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	return false;
	function requestsendquan()
	{
		if(xmlhttp.readyState==4)
		{
			if(xmlhttp.status==200)
			{
				if(xmlhttp.responseText=="1"){
					alert("恭喜您,短信发送成功!");
				}
				else
					alert(xmlhttp.responseText);	
			}
		}
	}
}
function setmoban(aa,bb,cc)
{
	if(confirm("您确认要选择此企业模板吗？"))
	{
		if(parent.window.document.getElementById("mobanid"))
		{
			parent.window.document.getElementById("mobanid").value=aa;
			parent.window.document.getElementById("selectmobanshow").innerHTML=cc;
			parent.LoginHide();
		}
		else{
			var url="request.aspx?action=addmoban&str1="+aa+"&str2="+bb;
			var  Digital=new  Date();
			Digital=Digital+40000;
			url=url+"&k="+encMe(Digital);
			var xmlhttp=createxmlhttp();
			if(!xmlhttp)
			{
				alert("你的浏览器不支持XMLHTTP！！");
				return;
			}
			xmlhttp.onreadystatechange=requestsetmoban;
			xmlhttp.open("GET",url,true);
			xmlhttp.send(null);
			return false;
			function requestsetmoban()
			{
				if(xmlhttp.readyState==4)
				{
					if(xmlhttp.status==200)
					{
						if(xmlhttp.responseText=="1")
						{
							alert("模板设置成功，您可以刷新预览。");
							parent.LoginHide();
						}
						else
						{
							alert(xmlhttp.responseText);	
						}
					}
				}
			}
		}
	}
}
function showmobanid(tt){
	document.getElementById("mask").style.display='';
	Demo_login('<div align=center><iframe src="../other.aspx?action=moban&tt='+tt+'" scrolling="no" frameBorder=0 width=600 height=515></iframe></div>',600,515,600,515)
}
function Demo_login(string,ow,oh,w,h){
	 ShowDiv=string;
	 DialogShow(ShowDiv,ow,oh,w,h);	
	 var objDialog = document.getElementById("DialogMove");
	  var lstd = document.getElementById("lstd");
	 
}
function DialogShow(showdata,ow,oh,w,h){
	 var objDialog = document.getElementById("DialogMove");
	 if (!objDialog) 
	 objDialog = document.createElement("div");
	 t_DiglogW = ow;
	 t_DiglogH = oh;
	 DialogLoc();
	 objDialog.id = "DialogMove";
	 var oS = objDialog.style;
	 oS.display = "block";
	 oS.top = t_DiglogY + "px";	
	 oS.left = t_DiglogX + "px"; 
	 oS.margin = "0px";
	 oS.padding = "0px";
	 oS.width = w + "px";
	 oS.height = h + "px";
	 oS.position = "absolute";
	 oS.zIndex = "999";
	 oS.background = "#FFF";
	 oS.border = "solid #1A5189 1px";
	 objDialog.innerHTML = showdata;
	 document.body.appendChild(objDialog);
	 delselect();
}
function DialogLoc(){
	 var dde = document.documentElement;
	 if (window.innerWidth){
	 	var ww = window.innerWidth;
		var wh = window.innerHeight;
		var bgX = window.pageXOffset;
		var bgY = window.pageYOffset;	
	 }else{	 	
		var ww = dde.offsetWidth;
		var wh = dde.offsetHeight;
		var bgX = dde.scrollLeft;
		var bgY = dde.scrollTop;	  
	 }
	 t_DiglogX = (bgX + ((ww - t_DiglogW)/2));
	 t_DiglogY = (bgY + ((wh - t_DiglogH)/2));
}
function LoginHide()
{
	ScreenClean();
	var objDialog = document.getElementById("DialogMove");
	 if (objDialog)
	 {
		 objDialog.style.display = "none";
		 document.getElementById("mask").style.display='none';
	 }
}

function ScreenClean(){
	 var objScreen = document.getElementById("ScreenOver");
	 if (objScreen)
	 objScreen.style.display = "none";
	 var allselect = document.getElementsByTagName("select");
	 for (var i=0; i<allselect.length; i++) 
	 allselect[i].style.visibility = "visible";
}

function delselect(){
	var allselect = document.getElementsByTagName("select");
	 for (var i=0; i<allselect.length; i++) 
	 allselect[i].style.visibility = "hidden";	
}
function showselect(){
	var allselect = document.getElementsByTagName("select");
	 for (var i=0; i<allselect.length; i++) 
	 allselect[i].style.visibility = "visible";	
}
function ScreenConvert(str){
	 var browser = new Browser();
	 var objScreen = document.getElementById("ScreenOver");
	 if(!objScreen) 
	 var objScreen = document.createElement("div");
	 var oS = objScreen.style;
	 objScreen.id = "ScreenOver";
	 oS.display = "block";
	 oS.top = oS.left = oS.margin = oS.padding = "0px";
	 if (document.body.scrollHeight)	{
	 	if(document.body.scrollHeight>document.body.clientHeight){
	 		var wh = document.body.scrollHeight + "px";	
	 	}else{
	 		var wh = document.body.clientHeight + "px";
	 	}	 
	 }else if (window.innerHeight){
	 var wh = window.innerHeight + "px";
	 }else{
	 var wh = "100%";
	 }
	 oS.width = "100%";	 
	 oS.height = wh;
	 oS.position = "absolute";
	 oS.zIndex = "3";
	 if ((!browser.isSF) && (!browser.isOP)){
	 oS.background = "black";
	 }else{
	 oS.background = "black";
	 }
	 oS.filter = "alpha(opacity=50)";
	 oS.opacity = 40/100;
	 oS.MozOpacity = 40/100;
	 document.body.appendChild(objScreen);
	 var allselect = document.getElementsByTagName("select");
	 for (var i=0; i<allselect.length; i++) 
	 allselect[i].style.visibility = "hidden";
}

function locationhref(url)
{
	var word=Request.QueryString(url,"keyword") ;
	url = url.replace(word,escape(word));
	setTimeout(function(){window.location.href=url;},10);
}
Request = {
QueryString : function(str,item){
var svalue = str.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
return svalue ? svalue[1] : svalue;
}
}


function URLEncode(fld) 
{ 
if (fld == "") return false; 
var encodedField = ""; 
var s = fld; 
if (typeof encodeURIComponent == "function") 
{ 
// Use javascript built-in function 
// IE 5.5+ and Netscape 6+ and Mozilla 
encodedField = encodeURIComponent(s); 
} 
else 
{ 
// Need to mimic the javascript version 
// Netscape 4 and IE 4 and IE 5.0 
encodedField = encodeURIComponentNew(s); 
} 
//alert ("New encoding: " + encodeURIComponentNew(fld) + 
// "\n escape(): " + escape(fld)); 
return encodedField; 
} 

function str2asc(strstr){
str2asc = hex(asc(strstr));
}
function asc2str(ascasc){
asc2str = chr(ascasc);
}

function UrlEncodex(str){ 
var ret=""; 
var strSpecial="!\"#$%&'()*+,/:;<=>?[]^`{|}~%"; 
var tt= ""; 

for(var i=0;i<str.length;i++){ 
var chr = str.charAt(i); 
var c=str2asc(chr); 
tt += chr+":"+c+"n"; 
if(parseInt("0x"+c) > 0x7f){ 
ret+="%"+c.slice(0,2)+"%"+c.slice(-2); 
}else{ 
if(chr==" ") 
ret+="+"; 
else if(strSpecial.indexOf(chr)!=-1) 
ret+="%"+c.toString(16); 
else 
ret+=chr; 
} 
} 
return ret; 
} 
function UrlDecodex(str){ 
var ret=""; 
for(var i=0;i<str.length;i++){ 
var chr = str.charAt(i); 
if(chr == "+"){ 
ret+=" "; 
}else if(chr=="%"){ 
var asc = str.substring(i+1,i+3); 
if(parseInt("0x"+asc)>0x7f){ 
ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6))); 
i+=5; 
}else{ 
ret+=asc2str(parseInt("0x"+asc)); 
i+=2; 
} 
}else{ 
ret+= chr; 
} 
} 
return ret; 
} 

function tgtuikuan(chrcode,xiaokill){ 
		var url="tgorder.aspx?action=tuikuan&chrcode=" + chrcode + "&xiaokill=" + xiaokill;
		xmlhttpget(url,"ok","tgtuikuan_ok('" + chrcode + "','" + xiaokill + "');","","","alert(xmlhttp.responseText);","","",chrcode);
}
function tgtuikuan_ok(chrcode,xiaokill){ 
					if(xiaokill=="9" || xiaokill=="19"){
					document.getElementById("cid" + chrcode).innerHTML="<font color='red'>退款中!</font>  <a href='javascript:;' onclick=\"tgtuikuan('" + chrcode + "',0);\"><font color='#000'>取消</font></a>";
				alert("退款申请成功.");
				}else if(xiaokill=="10" || xiaokill=="20"){
						document.getElementById("cid" + chrcode).innerHTML="退款成功!";
				alert("退款成功.");
					}else if(xiaokill=="0"){
						document.getElementById("cid" + chrcode).innerHTML="正常";
				alert("操作成功.");
					}

}
function echo(obj,html){document.getElementById(obj).innerHTML=html;}
function show(_showobj ,_showt){document.getElementById(_showobj).style.dispaly="";$(_showobj).style.display='';if( _showt != "" && _showt != null ){document.getElementById(_showobj).innerHTML=_showt;}}
function show_val(_showobj ,_showt){$(_showobj).value=_showt;document.getElementById(_showobj).value=_showt;}
function hide(_showobj){if( _showobj != "" && _showobj != null ){document.getElementById(_showobj).style.dispaly='none';$(_showobj).style.display='none';}}


