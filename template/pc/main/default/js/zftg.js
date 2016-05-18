function set_newimage(){
	var chraddress=document.getElementById('chraddress').value;
	if(chraddress==""){
		alert("对不起,请先输入详细地址,再进行地图标注");
		document.getElementById('chraddress').focus();
		return false;
	}
	var shop_x=document.getElementById('shop_x').value;
	var shop_y=document.getElementById('shop_y').value;
	var ggmap=document.getElementById('ggmap').value;
 	var url='../ezmarker/index.aspx?city='+escape(chraddress)+'&x='+shop_x+'&y='+shop_y+'&ggmap='+ggmap;
	window.open(url,'newindow','height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=yes');
}

var checktgactivenum_error_length=error+"<font color=\"red\">对不起,请输入十位的活动编号,如2009060810！</font>";
var checktgchrtitle_error_exist=error+"<font color=\"red\">请输入活动标题，30汉字以内！</font>";
var addtgchraddress_error_length=error+"<font color=\"red\">对不起,请输入活动的详细地址！</font>";
var addchrmark_eoor_length='对不起,商家介绍限定在500字内！';
var addjihe_error_length =error+"<font color=\"red\">对不起,请输入活动的集合时间！</font>";
var addcheckfenlei_error_length=error+"<font color=\"red\">对不起,请选择活动分类！</font>";
var addcheckquyu_error_length=error+"<font color=\"red\">对不起,请选择这次活动在哪个地区进行！</font>";
var addtgchrqq_error_length =error+"<font color=\"red\">对不起,请输入腾讯QQ,方便网友与您交流！</font>";
var addxiangmu_error_length =error+"<font color=\"red\">对不起,请输入活动的简单描述！</font>";
var addtruename_error_length=error+"<font color=\"red\">请输入真实姓名！</font>";
var addchrtel_error_length=error+"<font color=\"red\">请输入联系电话！</font>";
var addchrmancode_error_length=error+"<font color=\"red\">请输入身份证号！</font>";
var addchrguanxi_error_length=error+"<font color=\"red\">请输入！</font>";
var addenddate_error_length=error+"<font color=\"red\">请输入活动接受报名的最后时间！</font>";
function checkaddzftg(o){
	if($$("chrname")){
		trimspace($$("chrname"))
		var lent=judgeString($$("chrname").value);
		if(lent<3 || lent>12){
			setmsg('chkhykchrname','addchrname_error_length');
			return false;
		}	
	}
	if($$("chrpwd")){
		trimspace($$("chrpwd"))
		if($$("chrpwd").value.length<6){
			setmsg('chkhykchrpwd','addchrpwd_error_length');
			return false;
		}	
	}
	trimspace($$("activenum"))
	if($$("activenum").value.length!=10){
		setmsg('checktgactivenum','checktgactivenum_error_length');
		return false;
	}
	trimspace($$("chrtitle"));
	if($$("chrtitle").value=="" || $$("chrtitle").value.length>30){
		setmsg('checktgchrtitle','checktgchrtitle_error_exist');
		return false;
	}
	if($$("qu_classid1").value=="" ){
		setmsg('checkfenlei','addcheckfenlei_error_length');
		return false;
	}
	if($$("chrdiqu1").value=="" ){
		setmsg('checkfququ','addcheckquyu_error_length');
		return false;
	}
	trimspace($$("chraddress"))
	if($$("chraddress").value=="" || $$("chraddress").value.length<3){
		setmsg('checktgchraddress','addtgchraddress_error_length');
		return false;
	}
	trimspace($$("jihe"))
	if($$("jihe").value=="" || $$("jihe").value.length<3){
		setmsg('checktgchrjihe','addjihe_error_length');
		return false;
	}
	trimspace($$("enddate"))
	if($$("enddate").value=="" || $$("enddate").value.length<3){
		setmsg('checktgchrenddate','addenddate_error_length');
		return false;
	}
	setmsg('checktgchrenddate','ok');
	trimspace($$("chrmark"))
	if($$("chrmark").value=="" || $$("chrmark").value.length<3){
		setmsg('checktgchrmark','addxiangmu_error_length');
		return false;
	}
	trimspace($$("chrqq"))
	if($$("chrqq").value.length<5){
		setmsg('checktgchrqq','addtgchrqq_error_length');
		return false;
	}
	trimspace($$("truename"))
	if($$("truename").value=="" || $$("truename").value.length<2){
		setmsg('checktgtruename','addtruename_error_length');
		return false;
	}
	trimspace($$("chrtel"))
	if($$("chrtel").value=="" || $$("chrtel").value.length<7){
		setmsg('checktgchrtel','addchrtel_error_length');
		return false;
	}
	trimspace($$("chrmancode"))
	if($$("chrmancode").value=="" || $$("chrmancode").value.length<16){
		setmsg('checktgchrmancode','addchrmancode_error_length');
		return false;
	}
	trimspace($$("chrguanxi"))
	if($$("chrguanxi").value=="" ){
		setmsg('checktgchrguanxi','addchrguanxi_error_length');
		return false;
	}
}
function chktgactivenum(){
	trimspace($$("activenum"))
	if($$("activenum").value.length!=10){
		setmsg('checktgactivenum','checktgactivenum_error_length');
		return false;
	}
	else{
		setmsg('checktgactivenum','ok');
	}
}
function chktgenddate(){
	if($$("enddate").value=="" ){
		setmsg('checktgchrenddate','addenddate_error_length');
		return false;
	}
	else{
		setmsg('checktgchrenddate','ok');
		return false;
	}
}
function showdididi(aa){
	if($$("chrdiqu1").value=="" ){
		setmsg('checkfququ','addcheckquyu_error_length');
		return false;
	}
	else{
		setmsg('checkfququ','ok');
		return false;
	}
}


function showclassid(aa){
	if($$("qu_classid1").value=="" ){
		setmsg('checkfenlei','addcheckfenlei_error_length');
		return false;
	}
	else{
		setmsg('checkfenlei','ok');
		return false;
	}
}
function chktgchrtitle(){
	trimspace($$("chrtitle"))
	if($$("chrtitle").value=="" || $$("chrtitle").value.length>30){
		setmsg('checktgchrtitle','checktgchrtitle_error_exist');
		return false;
	}
	else{
		setmsg('checktgchrtitle','ok');
	}
}
function chktgchraddress(){
	trimspace($$("chraddress"))
	if($$("chraddress").value=="" || $$("chraddress").value.length<3){
		setmsg('checktgchraddress','addtgchraddress_error_length');
		return false;
	}
	else{
		setmsg('checktgchraddress','ok');
	}
}
function chktgchrqq(){
	trimspace($$("chrqq"))
	if($$("chrqq").value.length<5){
		setmsg('checktgchrqq','addtgchrqq_error_length');
		return false;
	}
	else{
		setmsg('checktgchrqq','ok');
	}
}

function chktgjihe(){
	trimspace($$("jihe"))
	if($$("jihe").value=="" || $$("jihe").value.length<3){
		setmsg('checktgchrjihe','addjihe_error_length');
		return false;
	}
	else{
		setmsg('checktgchrjihe','ok');
	}
}
function chktgchrmark(){
	trimspace($$("chrmark"))
	if($$("chrmark").value=="" || $$("chrmark").value.length<3){
		setmsg('checktgchrmark','addxiangmu_error_length');
		return false;
	}
	setmsg('checktgchrmark','ok');
}
function chktgtruename(){
	trimspace($$("truename"))
	if($$("truename").value=="" || $$("truename").value.length<2){
		setmsg('checktgtruename','addtruename_error_length');
		return false;
	}
	setmsg('checktgtruename','ok');
}
function chktgchrtel(){
	trimspace($$("chrtel"))
	if($$("chrtel").value=="" || $$("chrtel").value.length<7){
		setmsg('checktgchrtel','addchrtel_error_length');
		return false;
	}
	setmsg('checktgchrtel','ok');
}
function chktgchrmancode(){
	trimspace($$("chrmancode"))
	if($$("chrmancode").value=="" || $$("chrmancode").value.length<16){
		setmsg('checktgchrmancode','addchrmancode_error_length');
		return false;
	}
	setmsg('checktgchrmancode','ok');
}
function chktgchrguanxi(){
	trimspace($$("chrguanxi"))
	if($$("chrguanxi").value=="" ){
		setmsg('checktgchrguanxi','addchrguanxi_error_length');
		return false;
	}
	setmsg('checktgchrguanxi','ok');
}


function checkaddshop_exist(str)
{ 
	if (str.length > 0)
	{ 
		var url="../request.aspx?action=checkshop&chrname="+str
		xmlHttp=GetXmlHttpObject(requestcheckaddshop_exist)
		xmlHttp.open("POST", url , true)
		xmlHttp.send(null)
	} 
} 
function requestcheckaddshop_exist() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		if(xmlHttp.responseText=="2"){
			setmsg('checkchrshop','ok');
		}else{
			setmsg('checkchrshop','addchrshop_error_exist');
		}
	} 
} 


function set_image(){
	var cityid=document.getElementById('chrdiqu1').value;
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