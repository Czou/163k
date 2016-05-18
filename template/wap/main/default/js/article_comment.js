function getdata(url,obj1,obj2){
	var  Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	$.ajax({url:url}).done(function(msg){
		$('#'+obj1).html(msg);
	});
}
function checkArticleComment(o,action,leiId){
	var $t = $(o),
		newsid = $('#newsid').val(),
		agan = $('#agan').val(),
		needLogin = $('#needLogin'),
		chrmark = $('#chrmark'),
		captcha = $('#captcha_ipt'),
		commentyouke='1';
	var islogin = $('#isLogin');
	if(islogin.val() === '1'){
		commentyouke="0";
	}
	if(needLogin.val() === '1' && islogin.val() === '0'){
		alert('对不起，请登录后再发表评论！');
		window.location.href = nowdomain+'member/login.html?from='+encodeURIComponent(window.location);
		return false;
	}
	if(chrmark.val() === ''){
		alert('请输入评论内容！');
		return false;
	}
	var num = chrmark.val().replace(/[^\x00-\xff]/g, "**");
	if(num.length > 600){
		alert('评论内容不能超过300字！');
		return false;
	} 
	if(captcha.val() === ''){
		alert('请输入验证码！');
		return false;
	}
	var chrname = '',chrpwd = '';	
	var url="../request.aspx?action="+action+"&"+leiId+"="+encodeURIComponent(newsid)+"&chrname="+encodeURIComponent(chrname)+"&chrpwd="+encodeURIComponent(chrpwd)+"&commentyouke="+encodeURIComponent(commentyouke)+"&chrcode="+encodeURIComponent(captcha.val())+"&chrmark="+encodeURIComponent(chrmark.val())+"&agan="+encodeURIComponent(agan);
	var  Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	
	$.ajax({url:url,success:function(data){
		if(data === '0'){
			alert('恭喜您，评论成功啦！请等待管理员审核！');
			captcha.val('');
			chrmark.val('');
		}else{
			alert(data);
		}
	}});
	
	return false;
}