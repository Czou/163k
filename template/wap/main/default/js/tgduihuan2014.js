function loginout(siteUrl){
	var url = siteUrl+"request.ashx?action=loginout&json=1&jsoncallback=?&date=" + new Date();
	$.getJSON(url,function(data){
		
		if(data[0].islogin === '0'){
			if(data[0].bbsopen === "open"){
				var   f=document.createElement("IFRAME")   
				f.height=0;   
				f.width=0;   
				f.src=data[0].bbsloginurl;
				if (f.attachEvent){
					f.attachEvent("onload", function(){
						window.location.reload();
					});
				} else {
					f.onload = function(){
						window.location.reload();
					};
				}
				document.body.appendChild(f);
			}else{
				window.location.reload();
			}
		}else{
			alert("对不起，操作失败！");
		}
	}).error(function(){alert("对不起，操作失败！");});
}
function is_login(siteUrl,tplPath,hasQQ){
	var url = siteUrl+"request.ashx?action=islogin&json=1&jsoncallback=?&date=" + new Date(),txt='',guanli = '';
	
	$.getJSON(url,function(data){
		$('#loadding').hide();
		if(data[0].islogin==="1"){
			if(data[0].jibie === '2' || data[0].jibie === '3'){guanli = '<a href="'+siteUrl+'member/mytgorder.aspx?action=ss" target="_blank">店铺管理</a> ';}
			txt=data[0].name+'，您好！ '+guanli+'<a href="'+siteUrl+'member/modify.aspx?action=pass" target="_blank">修改密码</a> <a href="javascript:loginout(\''+siteUrl+'\');">退出登录</a>';
			$('#is_login_fail').hide();
			$('#is_login').show();
			$(document).ready(function(){$("#login_info").append(txt);initPage();});
		}else{
			$('#is_login_fail').show();
			$('#is_login').hide();
		}
		
	}).error(function(){alert("对不起，登录状态获取失败！");});
}


function Login(str1,str2,str3)
{
	
	var url=nowdomain+"request.ashx?action=login&str1="+encodeURIComponent(str1)+"&str2="+(str2)+"&str3="+(str3)+"&json=1&jsoncallback=?";
	if(window.location.href.indexOf("loginother")!=-1){
		url = url.replace("../","");
	}
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	
	var jump_url = purl().param('from');
	if(jump_url =='' || jump_url == null){
		jump_url= window.location;
	}else{
		jump_url = decodeURIComponent(jump_url);
	}
	function reload_go(){
		window.location.href=jump_url;
	}
	
	var jqxhr = $.getJSON(url,function(data){
		var d = data[0];
		if(d.islogin === '1'){
			if(d.bbsopen === 'open'){
				var   f=document.createElement("IFRAME")   
				f.height=0;   
				f.width=0;   
				f.src=d.bbsloginurl;
				if (f.attachEvent){
					f.attachEvent("onload", function(){	reload_go()});
				} else {
					f.onload = function(){reload_go()};
				}
				document.body.appendChild(f);
			}else{
				reload_go();
			}
		}else if(d.islogin === '2'){
			alert('您好，您的账户需要邮件激活才能登录！');
			window.location.href= nowdomain+'member/checkusers.aspx?action=s2&name='+encodeURIComponent(str1);
		}
		else if(d.islogin === '3'){
			alert('您好，您的账户需要短信激活才能登录！');
			window.location.href= nowdomain+'member/checkusers.aspx?action=s3&name='+encodeURIComponent(str1);
		}else{
			alert(d.error);
		}
	}).error(function(){
		alert("error");
	})
}
function checkinput(o){
	var showCode = '';
	var username = $('#username');
	var pwd = $('#pwd');
	var username_val = username.val();
	var pwd_val = pwd.val();
	var username_len = username_val.replace(/[^\x00-\xff]/g, "**");
	var hasWrongPW = false;
	if(username.val() ===''){
		username.trigger('focus');
		showCode = "请输入用户名";
		hasWrongPW = true;	
	}else if(username_len.length<3 || username_len.length>15){
		showCode = '用户名长度为3到15个字符';
		username.trigger('select');
		hasWrongPW = true;	
	}else if(pwd_val===''){
		showCode = '必须填写密码';
		pwd.trigger('focus');
		hasWrongPW = true;
	}else if(pwd_val.length < 6 || pwd_val.length > 32) {
		showCode = '密码最少6个字，不得超过32个字';
		pwd.trigger('select');
		hasWrongPW = true;
	}else {
		hasWrongPW = false;
	}
	if(hasWrongPW){
		alert(showCode);
		return false;
	}
	var remeber=$('#remember').prop('checked');
	Login(username_val,pwd_val,remeber);
	return false;
}
function getQuan(str){
	var mask = $('#mask');
	var inner = mask.find('#inner');
	var mask_init = function(m_h){
		var w_h = $(window).height();
		mask.css({'top':parseInt((w_h-m_h)/2)+'px'});
		mask.find('.close').bind('click',function(e){
			mask.hide();
			e.preventDefault();
		});
	};
	
	var url = nowdomain+'request.ashx?action=tgxfqcx&chrcode='+str;
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	
	$.ajax({url:url,success:function(data){
		data = eval('('+data+')');
		if(data.islogin === '1'){
			inner.empty().append(data.message+'<a href="#" onClick="return duihuan();" class="comn-submit btn_block" style="margin-top:10px;">确认兑换</a>');
			mask_init(mask.outerHeight());
			mask.show();
			$('#state').html('查询成功！');
		}else{
			$('#state').html(data.error);
		}
	}});
}
function duihuan(){
	var mask = $('#mask');
	var mask_init = function(m_h){
		var w_h = $(window).height();
		mask.css({'top':parseInt((w_h-m_h)/2)+'px'});
		mask.find('.close').bind('click',function(e){
			mask.hide();
			e.preventDefault();
		});
	};
	var showCode = '';
	var hasWrongPW = false;
	var quan_num = $('#quan_num');
	var url='';
	var str2 = quan_num.val().replace(/\s/g,"");
	if(str2.length!==12){
		showCode = '消费券号应为12位数字！';
		hasWrongPW = true;
	}else {
		hasWrongPW = false;
	}
	if(hasWrongPW){
		alert(showCode);
		quan_num.focus();
		return false;
	}else{
		url = nowdomain+'request.ashx?action=tgduihuan&chrcode='+quan_num.val()+'&json=1&jsoncallback=?';
		$.getJSON(url,function(data){
			if(data[0].islogin === '1'){
				mask.find('#inner').empty().append(data[0].message);
				
				mask_init(mask.outerHeight());
				mask.show();
				quan_num.val('');
				initPage();
				$('#state').html('请正确输入消费券号');
			}else{
				mask.find('#inner').empty().append(data[0].error);
				mask_init(mask.outerHeight());
				mask.show();
				quan_num.focus();
				$('#state').html('请正确输入消费券号');
			}
		}).error(function(){
			alert("error");
		});
	}
	return false;
}
function get_duihuan_data(start,end){
	if(end.indexOf(' ')===-1) end = end+' 23:59:59';
	var url = nowdomain+'request.ashx?action=tgrecord&startdate='+encodeURIComponent(start)+'&enddate='+encodeURIComponent(end)+'&tgid=&num=&json=1&jsoncallback=?',
		xsl_btn='';
	$.getJSON(url,function(data){
		
		if(data[0].islogin === '1'){
			$('#results').show();
			if(type(data[0].record) === 'string'){
				$('#results_node').html(data[0].record);
				
				$('#num').html(data[0].listnum);
				xsl_btn = '<a href="'+nowdomain+'request.ashx?action=tgrecord&xls=1&startdate='+encodeURIComponent(start)+'&enddate='+encodeURIComponent(end)+'" target="_blank" class="btn xsl_btn">导出报表</a>';
				$('#results_node').append(xsl_btn);
			}
		}else{
			alert(data[0].error);
		}
	}).error(function(){
		alert("error");
	});
}
Date.prototype.Format = function(formatStr){
    var str = formatStr;   
    var Week = ['日','一','二','三','四','五','六'];
	var mo = parseInt(this.getMonth())+1;
  
    str=str.replace(/yyyy|YYYY/,this.getFullYear());   
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   
  
    str=str.replace(/MM/,mo>9?mo.toString():'0' + mo);   
    str=str.replace(/M/g,mo);   
  
    str=str.replace(/w|W/g,Week[this.getDay()]);   
  
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());
    str=str.replace(/d|D/g,this.getDate());
  
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());
    str=str.replace(/h|H/g,this.getHours());   
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());
    str=str.replace(/m/g,this.getMinutes());
  
    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());
    str=str.replace(/s|S/g,this.getSeconds());  
  
    return str;   
}
function initPage(){
	var d = new Date();
	var e = d.Format('yyyy-MM-dd');
	var s =  d.Format('yyyy-MM-dd');
	$('data').html('最近');
	$('#data_start').val('');
	$('#data_end').val('');
	get_duihuan_data(s,e);
}
function findRecord(){
	var showCode = '';
	var hasWrongPW = false;
	var data_start = $('#data_start'),
		data_end = $('#data_end'),
		data_start_val = data_start.val(),
		data_end_val = data_end.val(),
		txt='';
	

	if(data_start.val()===''){
		showCode = '请选择开始时间';
		hasWrongPW = true;
	}else if(data_end.val()===''){
		showCode = '请选择结束时间';
		hasWrongPW = true;
	}else {
		hasWrongPW = false;
	}
	if(hasWrongPW){
		alert(showCode);
		return false;
	}else{
		txt= data_start_val+'至'+data_end_val;
		$('#data').html(txt);
		get_duihuan_data(data_start_val,data_end_val);
	}
	return false;
}
function type(obj) {
	var core_toString = Object.prototype.toString,
		class2type={},
		type_arr=["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"],
		len=type_arr.length,
		i=0;
	for( ;i<type_arr.length;i++ ){
		class2type[ "[object " + type_arr[i] + "]" ] = type_arr[i].toLowerCase();
	}
	return obj == null ?
		String( obj ) :
		class2type[ core_toString.call(obj) ] || "object";
}

