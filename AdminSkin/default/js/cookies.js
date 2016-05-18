/*function setCookie(k, v, opt){
	var val = encodeURIComponent(v);
	if(!opt) opt = {duration:365};
	if(opt && opt.duration){var d = new Date();d.setTime(d.getTime() + opt.duration*24*3600*1000);val += ';expires=' + d.toGMTString();}
	document.cookie = k + '=' + val + ';';
}
function getCookie(k){
	var c = document.cookie.split("; ");
	for(var i=0; i<c.length; i++) { var p = c[i].split("="); if(k == p[0]) try{return decodeURIComponent(p[1]);}catch(e){return null;} } 
	return null;
}*/

function setCookie(name,value)
{
  var Days = 30; //此 cookie 将被保存 30 天
  var exp  = new Date();    //new Date("December 31, 9998");
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape(value) +";expires="+ exp.toGMTString()+";path=/" ;
}
function getCookie(name)
{
	 var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}
function delCookie(name)
{
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null) document.cookie=name +"="+cval+";expires="+exp.toGMTString();
}