jQuery(document).ready(function(){
	jQuery('.login_show').click(function(){
		var xmlhttp=createxmlhttp();
		if(!xmlhttp)
		{
			alert("你的浏览器不支持XMLHTTP！！");
			return;
		}
		var  Digital=new  Date();
		Digital=Digital+40000;
		if(window.location.href.toLowerCase().indexOf("learn/")==-1)
		{
			url="/request.aspx?action=checklogin&k="+Digital;
		}
		else{
			url=nowdomain+"request.aspx?action=checklogin&k="+Digital;
		}
		xmlhttp.onreadystatechange=requestdatalogincheck;
		//window.open(url);
		xmlhttp.open("GET",url,true);
		
		xmlhttp.send(null);
		function requestdatalogincheck()
		{
			if(xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					if(xmlhttp.responseText=="1"){
						jQuery('#login_node').addClass('display');
					}
					else{
						alert("您已经是登陆状态,如果需要更换账号登陆请先退出！");	
					}
				}
			}
		}
	});
	jQuery('input#l_cancel').click(function(){
		jQuery('#login_node').removeClass('display');
	});
});