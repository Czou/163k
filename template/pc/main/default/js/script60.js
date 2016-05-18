window.onload = function(){}
function bookmarkit(){
	try{
	if ((typeof window.sidebar == 'object') && (typeof window.sidebar.addPanel == 'function'))
		{ 
		window.sidebar.addPanel('MSN 中国','http://cn.msn.com','MSN 中国'); 
		} 
	else
		{ 
		window.external.AddFavorite('http://cn.msn.com','MSN 中国'); 
		} 
	}catch(e){}
	return false;
}

var stabid=0;
function setsrch(c){
for(i=0;i<5;i++){document.getElementById("stab"+i).className = "";}
c.className = "cur";
if(c.id=="stab0"){document.srchfrm.action="http://cnweb.search.live.com/results.aspx";stabid=0;}
if(c.id=="stab1"){document.srchfrm.action="http://cnweb.search.live.com/images/results.aspx";stabid=1;}
if(c.id=="stab2"){document.srchfrm.action="http://cnweb.search.live.com/news/results.aspx";stabid=2;}
if(c.id=="stab3"){document.srchfrm.action="http://ditu.live.com/default.aspx";stabid=3;}
if(c.id=="stab4"){document.srchfrm.action="http://cnweb.search.live.com/video/results.aspx";stabid=4;}
}

function searchsubmit(){
  if(stabid==3){
    if (document.srchfrm.q)
    {
        var baseUrl = 'http://ditu.live.com/?where1='+encodeURI(document.srchfrm.q.value);
        window.open(baseUrl);
        return false;
    }
  }
  return true;
}

function encodeq(){if(stabid==2){document.srchfrm.q.value=encodeURIComponent(document.srchfrm.q.value);}}

function tabit(btn){
	var idname = new String(btn.id);
	var s = idname.indexOf("_");
	var e = idname.lastIndexOf("_")+1;
	var tabName = idname.substr(0, s);
	var id = parseInt(idname.substr(e, 1));
	var tabNumber = btn.parentNode.childNodes.length;
	for(i=0;i<tabNumber;i++)
	    {
            document.getElementById(tabName+"_div_"+i).style.display = "none"; 
		    document.getElementById(tabName+"_btn_"+i).className = "";
        
		};		
		document.getElementById(tabName+"_div_"+id).style.display = "block"; 
		btn.className = "curr";
};
var fodTime;
function delaytabit(btn){
clearTimeout(fodTime);
fodTime=setTimeout(function(){tabit(btn)},100);
}
function delaytabitNew(btn){
clearTimeout(fodTime);
fodTime=setTimeout(function(){tabitNew(btn)},100);
}
function tabitNew(btn)
{
	var idname = new String(btn.id);
	var s = idname.indexOf("_");
	var e = idname.lastIndexOf("_")+1;
	var tabName = idname.substr(0, s);
	var id = parseInt(idname.substr(e, 1));
	var tabNumber = btn.parentNode.childNodes.length;
	for(i=0;i<tabNumber;i++)
	{
	    document.getElementById(tabName+"_div_"+i).style.display = "none";
		document.getElementById(tabName+"_btn_"+i).className = "";			
	}
	document.getElementById(tabName+"_leftdiv_0").style.display = "none";
	document.getElementById(tabName+"_leftdiv_1").style.display = "none";
    
    document.getElementById(tabName+"_div_"+id).style.display = "block";
    document.getElementById(tabName+"_div_"+id).style.display = "inline";
	document.getElementById(tabName+"_btn_"+id).className = "curr";
	if(id==1)
	{
	    document.getElementById(tabName+"_leftdiv_1").style.display = "block";
		document.getElementById(tabName+"_leftdiv_1").style.display = "inline";
	}
	else
	{
	    document.getElementById(tabName+"_leftdiv_0").style.display = "block";
		document.getElementById(tabName+"_leftdiv_0").style.display = "inline";
	}
};
/* slide */
var currslid = 0;
var slidint;
function setfoc(id){
	document.getElementById("focpic").src = picarry[id];
	document.getElementById("foclnk").href = lnkarry[id];
	document.getElementById("foclnk").target = tararry[id];
	document.getElementById("fttltxt").innerHTML = "<a href=\""+lnkarry[id]+"\" >"+ttlarry[id]+"</a>";
	currslid = id;
	for(i=0;i<4;i++)
	{
		document.getElementById("tmb"+i).className = "thubpic";
	};
	document.getElementById("tmb"+id).className ="thubpiccur";
	/*focpic.style.visibility = "hidden";
	focpic.filters[0].Apply();
	if (focpic.style.visibility == "visible") {
		focpic.style.visibility = "hidden";
		focpic.filters.revealTrans.transition=12;
	}
	else {
		focpic.style.visibility = "visible";focpic.filters[0].transition=12;
	}
	focpic.filters[0].Play();
	*/
}
function playnext(){
	if(currslid==3){
		currslid = 0;
	}else{
		currslid++;
	};
	setfoc(currslid);
};
function playit(){
	//slidint = setInterval(playnext,3500);
};
function stopit(){
	clearInterval(slidint);
};
/* vidi */
function vidiexp(id){
	for(i=0;i<5;i++){
		document.getElementById("vidi_"+i).className = "";
	};
	document.getElementById("vidi_"+id).className = "exped";
};
/* pro */
var step = 30;
function prorgt(){
	while(document.getElementById("proccc").scrollLeft<828){
		document.getElementById("proccc").scrollLeft = document.getElementById("proccc").scrollLeft+step;
	}
	document.getElementById("proccc").scrollLeft = 828;
	document.getElementById("srbtn").style.backgroundImage = "url(http://img7.cn.msn.com/7/righta.gif)";
	document.getElementById("slbtn").style.backgroundImage = "url(http://img5.cn.msn.com/5/leftb.gif)";
};
function prolft(){
	while(document.getElementById("proccc").scrollLeft>0){
		document.getElementById("proccc").scrollLeft = document.getElementById("proccc").scrollLeft-step;
	}
	document.getElementById("proccc").scrollLeft = 0;
	document.getElementById("srbtn").style.backgroundImage = "url(http://img7.cn.msn.com/7/rightb.gif)";
	document.getElementById("slbtn").style.backgroundImage = "url(http://img5.cn.msn.com/5/lefta.gif)";
};
window.onload = function(){
	//document.getElementById("keyword").focus();
}; 


