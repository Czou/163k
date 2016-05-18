var startid = 1;
var pages = 0;
var aryMenu = new Array();
for (var i=0;i < 10;i++)
{
	aryMenu[i] = new Array();
  for (var ii=0;ii < 300;ii++)
  {
	aryMenu[i][ii] = new Array();
	for (var iii=0;iii < 300;iii++)
  {
	aryMenu[i][ii][iii] = 0;
  }
  }
}
function loadupdate(obj ,gid,on)
{

//var readrectxt = readrec(startid, pages , gid);
//.<a href=\"javascript:getidok(" + startid + "," + pages + " ," + gid + ");\">跳过?</a>startmenutext(startid) + "_" + 
	necho(obj,"第" + pages + "页_" + gid + "项:进行中,请稍等<img src=\"../AdminSkin/default/Images/update.gif\">,<a href=\"javascript:loadupdate(" + obj + "," + gid + " ,1);\">重试?</a>");
	
	
	var url = "admin_update.aspx?action=autoupdata&startid=" + startid + "&getid=" + gid + "&pages=" + pages + "&goversion=" + goversion;
	//echo("testtext1",url);
	var oktext1 = "1";
	var okeval1 = "necho(" + obj + ",'完成'); aryMenu[startid][pages][" + gid + "]= 1;cpagesdbool();";
	var oktext2 = "0";
	//<a href=\"javascript:getidok(" + startid + "," + pages + " ," + gid + ");\">跳过?</a>
	var okeval2 = "necho(" + obj + ",'失败,<a href=\"javascript:loadupdate(" + obj + "," + gid + " ,0);\">重试?</a>');";
	var noeval  = "";
	var rpteval = "";
	//var errstr = "chongshi(" + obj + " ," + gid + ")";alert(xmlhttp.responseText);
	xmlhttpget(url,oktext1,okeval1,oktext2,okeval2,noeval,rpteval,true,obj);
}


//function chongshi(obj ,gid){setTimeout("loadupdate(" + obj + "," + gid + ",0)", 10000);}
function necho(obj,ntext){echo("start" + obj,ntext);}
function getidok(sid, pid,gid){echo("start" + gid,"完成"); aryMenu[sid][pid][gid]= 1;cpagesdbool();}
function writerec(sid, pid,gid)
{  
	if(gid==""){
		aryMenu[0][sid][pid]=1;
	}else{
		aryMenu[sid][pid][gid]=1;
}
}
	function readrec(sid, pid,gid)
{
		try{
			if(gid==""){
			return aryMenu[0][sid][pid];
				//alert("2rec_1_0=" + rec_1_0);
		}else{
			return aryMenu[sid][pid][gid];
			}
     }catch(e){
	   return  0;
     }

   
}
	//clearInterval(timer1);//
	var timer1;
	function autoupdatestart(){for (var i=1;i < 22;i++){aryMenu[1][0][i]=1;} autoupdate();   	timer1 = setInterval( "autoupdate();" , 1000); }

	function autoupdate()
{

	if(startbool()){startid=startid+1; pages=0; for (var i=1;i < 21;i++){necho(i,"");}}//判断菜单进度
	if(pagesdbool()){pages=pages+1; for (var i=1;i < 21;i++){necho(i,"");}}//判断页进度

  startmenushow();
  autostart()


}

	function updatestart(qz)
  {
  	if(qz == 1){
  	for (var i=0;i < 22;i++){aryMenu[1][0][i]=1; autoupdate();}
  }else if (qz == 0) 
  {
  	aryMenu[0][1][0]=0; autoupdate();
  }
  	timer1 = setInterval( "autoupdate();" , 1000); 
  }

  	function upstart()
  {
  	if(startid < 9){for (var i=0;i < 22;i++){aryMenu[startid][pages][i]=1; autoupdate();}}
  }

  	function  wancheng()
  	{
  		document.getElementById("wancheng").style.display="";
  		
  		}

	function autostart()
  {
  if(readrec(startid, pages,"")==0)
  {
 
  	writerec(startid, pages,"");

  	loadupdate(1,0,0); 

  }else{

  	}
  
  }
  //选择目标版本
		function autogoversion(_ver,_vi,_vlen){ goversion = _ver;for (var i=0;i < _vlen;i++){echo("v_" + i,"");}echo("v_" + _vi,"√");echo("toversion",_ver); }
function alertout(tid){var strout ="";for (var i=0;i < 22;i++){strout = strout + "" + startid + "" + pages + "" + i + "=" + aryMenu[startid][pages][i] + "; ";} echo("testtext" + tid,strout);}
///*打印状态-->*/

  ///*菜单显示控制*/ obj.className="w2";
  function startmenushow(){document.getElementById("jd" + startid).className='cur';for (var i=1;i < startid;i++){document.getElementById("jd" + i).className='active';} if(startid==9){document.getElementById("jd" + i).className='active';}echo("jdzt",startmenutext(startid));}
	
	//function startmenushow(){document.getElementById("jd" + startid).style.color='#00f';for (var i=1;i < startid;i++){document.getElementById("jd" + i).style.color='#f00';document.getElementById("jd" + i+"1").style.display='';} if(startid==9){document.getElementById("jd" + i).style.color='#f00';document.getElementById("jd" + i+"1").style.display='';}echo("jdzt",startmenutext(startid));}
	///*菜单显示控制*/

  ///*判断页进度*/
  function pagesdbool(){var boolout = true; for (var i=0;i < 21;i++){if(aryMenu[startid][pages][i]==0){boolout = false;}} return boolout;}
  function cpagesdbool(){var boolout = true; for (var i=1;i < 21;i++){if(aryMenu[startid][pages][i]==0){boolout = false;}} if(boolout==true){aryMenu[startid][pages][0]=1;}}
 
  ///*判断步骤进度*/
  function startbool(){ var boolout = true; for (var i=0;i < 22;i++){if(aryMenu[startid][pages][i]==0){boolout = false;}} return boolout;}


	///*步骤文本*/
	function startmenutext(aid){if(aid==1){return "检查升级环境";}else if(aid==2){return "下载升级文件:一共" + filenum + "个文件," + Math.ceil(filenum / 20) + "页.正在进行第" + pages + "页";}else if(aid==3){return "备份数据库";}else if(aid==4){return "备份现有文件";}else if(aid==5){return "锁定网站访问";}else if(aid==6){return "更新网站文件";}else if(aid==7){return "更新数据库";}else if(aid==8){return "清空临时文件";}else if(aid==9){return "升级完成";}}
	///*步骤文本*/




