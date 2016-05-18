function windowlocationhref(url){
	if(url.length > 5){window.location.href=url;}
}
function MSGwindowShow(action,showid,str,url,formcode){
	var sys_tips = '<div class="sys_tips" id="sys_tips" style="display:none;"><div class="hd" id="sys_tips_title"></div><div class="bd"><p id="sys_tips_info"></p><div class="btn"><a href="#" class="btn2" id="sys_tips_submit">确定</a></div></div></div>';
	if(!$('#sys_tips')[0]){
		$('body').append(sys_tips);
	}
	var pay_tips = $('#pay_tips'),sys_tips = $('#sys_tips'),sys_tips_title = $('#sys_tips_title'),sys_tips_info = $('#sys_tips_info'),sys_tips_submit = $('#sys_tips_submit');
	
	if(action === "pay"){
		$('#have_login').hide();
		if(showid=="2"){
			if(document.getElementById('formcode')){
				document.getElementById('formcode').value=formcode;//赋值code
				document.forms['submitpay'].submit();//提交支付
				//这里添加支付中信息提示窗口
				pay_tips.show();
				var w_h = $(window).height(),d_h = pay_tips.height(),s_h = $(document).scrollTop(),top_val = (w_h-d_h)/2+s_h;
				pay_tips.css({'top':top_val+'px'});
				
				
			}
		}else if(showid=="1"){
			if(!!win){win.close();}
			if(url.length > 5){window.location.href=url;}
		}else{
			if(!!win){win.close();}
			sys_tips_info.html(str);
			sys_tips_title.html('提示');
			sys_tips_submit.bind('click',function(e){
				e.preventDefault();
				sys_tips.hide();
				windowlocationhref(url);
			});
			sys_tips.show();
			var w_h = $(window).height(),d_h = sys_tips.height(),s_h = $(document).scrollTop(),top_val = (w_h-d_h)/2+s_h;
			sys_tips.css({'top':top_val+'px'});
		}
		if(document.getElementById('formcode')){
			document.getElementById('formcode').value="payok";//设置默认值防止二次提交
		}
	}else{
		if(showid=="0"){ //只提示不跳转
			showConsole('提示',false);
		}else if(showid=="1"){ //提示加跳转
			showConsole('提示',true);
		}else if(showid=="2"){ //直接跳转
			windowlocationhref(url);
		}
		else if(showid=="3"){ //错误信息加跳转
			showConsole('出错了',true);
		}else if(showid=="4"){ //错误信息加只提示不跳转
			showConsole('出错了',false);
		}else if(showid=="5"){ //成功并由页面刷上层页面
			showConsole('提示',false);
		}else{
			return false;
		}
	}
	function showConsole(tit,isredirect){
		sys_tips_info.html(str);
		sys_tips_title.html(tit);
		sys_tips_submit.bind('click',function(e){
			e.preventDefault();
			sys_tips.hide();
			isredirect&&windowlocationhref(url);
			if(showid === '5'){
				window.parent.location.href=window.parent.location.href;
			}
		});
		sys_tips.show();
		var w_h = $(window).height(),d_h = sys_tips.height(),s_h = $(document).scrollTop(),top_val = (w_h-d_h)/2+s_h;
		sys_tips.css({'top':top_val+'px'});
	}
}