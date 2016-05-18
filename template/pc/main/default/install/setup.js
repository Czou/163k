var PasswordStrength ={
Level : ["极佳","一般","较弱","太短"],
LevelValue : [15,10,5,0],//强度值
Factor : [1,2,5],//字符加数,分别为字母,数字,其它
KindFactor : [0,0,10,20],//密码含几种组成的加数 
Regex : [/[a-zA-Z]/g,/\d/g,/[^a-zA-Z0-9]/g] //字符正则数字正则其它正则
}
            
PasswordStrength.StrengthValue = function(pwd)
{
    var strengthValue = 0;
    var ComposedKind = 0;
    for(var i = 0 ; i < this.Regex.length;i++)
    {
        var chars = pwd.match(this.Regex[i]);
        if(chars != null)
        {
            strengthValue += chars.length * this.Factor[i];
            ComposedKind ++;
        }
    }
    strengthValue += this.KindFactor[ComposedKind];
    return strengthValue;
} 
        
PasswordStrength.StrengthLevel = function(pwd)
{
    var value = this.StrengthValue(pwd);
    for(var i = 0 ; i < this.LevelValue.length ; i ++)
    {
        if(value >= this.LevelValue[i] )
             return this.Level[i];
    }
}
     
function loadinputcontext(o)
{
    var showmsg=PasswordStrength.StrengthLevel(o.value);
    switch(showmsg)
    {
         case "太短": showmsg+=" <img src=../template/default/install/1.gif width=88 height=10>";break;
         case "较弱": showmsg+=" <img src=../template/default/install/2.gif width=88 height=10>";break;
         case "一般": showmsg+=" <img src=../template/default/install/3.gif width=88 height=10>";break;
         case "极佳": showmsg+=" <img src=../template/default/install/4.gif width=88 height=10>";break;
    }
           
    document.getElementById('showmsg').innerHTML =showmsg;
}

/****************************通过ID号取得对象***********************************/
function $$(id){
  return document.getElementById(id);
}
function checksitename(){
	trimspace($$("sitename"))
	if($$("sitename").value==""){
		$$("checkid1").style.display="";
		return false;
	}
	else{
		$$("checkid1").style.display="none";	
	}
}

function checksiteurl(){
	trimspace($$("siteurl"))
	if($$("siteurl").value=="" || $$("siteurl").value=="http://"){
		$$("checkid2").style.display="";
		return false;
	}
	else{
		$$("checkid2").style.display="none";	
	}
}
function checkchrname(){
	trimspace($$("chrname"))
	if($$("chrname").value.length<4){
		$$("checkid3").style.display="";
		return false;
	}
	else{
		$$("checkid3").style.display="none";	
	}
}
function checkchrpwd(){
	trimspace($$("chrpwd"))
	if($$("chrpwd").value.length<6){
		$$("checkid4").style.display="";
		return false;
	}
	else{
		$$("checkid4").style.display="none";	
	}
}

function checkrepwd(){
	trimspace($$("repwd"))
	if($$("repwd").value!=$$("chrpwd").value){
		$$("checkid5").innerHTML="<font color='red'>对不起,确认密码和密码不一致!</font>";
		return false;
	}
	else{
		$$("checkid5").innerHTML="";	
	}
}

function checkdatasource(){
	trimspace($$("datasource"))
	if($$("datasource").value.length==0){
		$$("msg1").innerHTML="<font color='red'>对不起,请输入网站服务器名或IP地址!</font>";
		return false;
	}
	else{
		$$("msg1").innerHTML="";	
	}
}

function checkdatabasename(){
	trimspace($$("databasename"))
	if($$("databasename").value.length==0){
		$$("msg2").innerHTML="<font color='red'>对不起,请输入网站数据库名称!</font>";
		return false;
	}
	else{
		$$("msg2").innerHTML="";	
	}
}

function checkuserid(){
	trimspace($$("userid"))
	if($$("userid").value.length==0){
		$$("msg3").innerHTML="<font color='red'>对不起,请输入网站数据库用户名称!</font>";
		return false;
	}
	else{
		$$("msg3").innerHTML="";	
	}
}

function checkpassword(){
	trimspace($$("password"))
	if($$("password").value.length==0){
		$$("msg4").innerHTML="<font color='red'>对不起,请输入网站数据库用户口令!</font>";
		return false;
	}
	else{
		$$("msg4").innerHTML="";	
	}
}



function checkbbsdatasource(){
	
	trimspace($$("bbsdatasource"))
	
	if($$("bbsdatasource").value.length==0){
		$$("msgbbs1").innerHTML="<font color='red'>对不起,请输入论坛服务器名或IP地址!</font>";
		return false;
	}
	else{
		$$("msgbbs1").innerHTML="";
		
	}
}

function checkbbsdatabasename(){
	trimspace($$("bbsdatabasename"))
	if($$("bbsdatabasename").value.length==0){
		$$("msgbbs2").innerHTML="<font color='red'>对不起,请输入论坛数据库名称!</font>";
		return false;
	}
	else{
		$$("msgbbs2").innerHTML="";	
	}
}

function checkbbsuserid(){
	trimspace($$("bbsuserid"))
	if($$("bbsuserid").value.length==0){
		$$("msgbbs3").innerHTML="<font color='red'>对不起,请输入论坛数据库用户名称!</font>";
		return false;
	}
	else{
		$$("msgbbs3").innerHTML="";	
	}
}

function checkbbspassword(){
	trimspace($$("bbspassword"))
	if($$("bbspassword").value.length==0){
		$$("msgbbs4").innerHTML="<font color='red'>对不起,请输入论坛数据库用户口令!</font>";
		return false;
	}
	else{
		$$("msgbbs4").innerHTML="";	
	}
}

function checkform(){
	/*
	trimspace($$("sitename"))
	if($$("sitename").value==""){
		$$("checkid1").style.display="";
		return false;
	}
	trimspace($$("siteurl"))
	if($$("siteurl").value=="" || $$("siteurl").value=="http://"){
		$$("checkid2").style.display="";
		return false;
	}
	trimspace($$("chrname"))
	if($$("chrname").value.length<4){
		$$("checkid3").style.display="";
		return false;
	}
	trimspace($$("chrpwd"))
	if($$("chrpwd").value.length<6){
		$$("checkid4").style.display="";
		return false;
	}
	trimspace($$("repwd"))
	if($$("repwd").value!=$$("chrpwd").value){
		$$("checkid5").innerHTML="<font color='red'>对不起,确认密码和密码不一致!</font>";
		return false;
	}
	*/
	trimspace($$("datasource"))
	if($$("datasource").value.length==0){
		$$("msg1").innerHTML="<font color='red'>对不起,请输入网站服务器名或IP地址!</font>";
		return false;
	}
	trimspace($$("databasename"))
	if($$("databasename").value.length==0){
		$$("msg2").innerHTML="<font color='red'>对不起,请输入网站数据库名称!</font>";
		return false;
	}
	trimspace($$("userid"))
	if($$("userid").value.length==0){
		$$("msg3").innerHTML="<font color='red'>对不起,请输入网站数据库用户名称!</font>";
		return false;
	}
	trimspace($$("password"))
	if($$("password").value.length==0){
		$$("msg4").innerHTML="<font color='red'>对不起,请输入网站数据库用户口令!</font>";
		return false;
	}
	/*
	trimspace($$("bbsdatasource"))
	if($$("bbsdatasource").value.length==0){
		$$("msgbbs1").innerHTML="<font color='red'>对不起,请输入论坛服务器名或IP地址!</font>";
		return false;
	}
	trimspace($$("bbsdatabasename"))
	if($$("bbsdatabasename").value.length==0){
		$$("msgbbs2").innerHTML="<font color='red'>对不起,请输入论坛数据库名称!</font>";
		return false;
	}
	trimspace($$("bbsuserid"))
	if($$("bbsuserid").value.length==0){
		$$("msgbbs3").innerHTML="<font color='red'>对不起,请输入论坛数据库用户名称!</font>";
		return false;
	}
	trimspace($$("bbspassword"))
	if($$("bbspassword").value.length==0){
		$$("msgbbs4").innerHTML="<font color='red'>对不起,请输入论坛数据库用户口令!</font>";
		return false;
	}
	*/
}