function checknewscomment(o){
	var chrname="",
		chrpwd="",
		agan=$('#agan').val(),
		newsid = $('#newsid').val(),
		chrcode = $('#captcha_ipt').val(),
		chrmark = $('#cmt_txt').val();
	
	var commentyouke='1';
	if($('#isLogin').val() === '1'){
		commentyouke="0";
	}
	var url="../request.aspx?action=addnewscomment&newsid="+encodeURIComponent(newsid)+"&chrname="+encodeURIComponent(chrname)+"&chrpwd="+encodeURIComponent(chrpwd)+"&commentyouke="+encodeURIComponent(commentyouke)+"&chrcode="+encodeURIComponent(chrcode)+"&chrmark="+encodeURIComponent(chrmark)+"&agan="+encodeURIComponent(agan);
	var  Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	
	$.ajax({url:url,success:function(data){
		if(data === '0'){
			alert('恭喜您，评论成功啦！请等待管理员审核！');
			$('#captcha_ipt').val('');
			$('#cmt_txt').val('');
			$('#po_captcha').hide();
			$('#cmt_btn').addClass("disabled").attr("disabled", "disabled");
		}else if(data === '1'){
			alert('恭喜您，评论成功啦！');
			window.location.reload()
		}else{
			alert(data);
		}
	}});
	return false;
}


function checkshopcomment(o){
	var chrname="",
		chrpwd="",
		agan=$('#agan').val(),
		shopid = $('#shopid').val(),
		chrcode = $('#captcha_ipt').val(),
		chrmark = $('#cmt_txt').val();
	
	var commentyouke='1';
	if($('#isLogin').val() === '1'){
		commentyouke="0";
	}
	var url="../request.aspx?action=addshopcomment&chrname="+encodeURIComponent(chrname);
		url =url+"&chrpwd="+encodeURIComponent(chrpwd)+"&code="+encodeURIComponent(chrcode)+"&commentyouke="+encodeURIComponent(commentyouke)+"&chrmark="+encodeURIComponent(chrmark)+"&shopid="+encodeURIComponent(shopid)+"&agan="+encodeURIComponent(agan);
	var  Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	
	$.ajax({url:url,success:function(data){
		if(data === '0'){
			alert('恭喜您，评论成功啦！请等待管理员审核！');
			$('#captcha_ipt').val('');
			$('#cmt_txt').val('');
			$('#po_captcha').hide();
			$('#cmt_btn').addClass("disabled").attr("disabled", "disabled");
		}else if(data === '1'){
			alert('恭喜您，评论成功啦！');
			window.location.reload()
		}else{
			alert(data);
		}
	}});
	return false;
}
$.fn.chackTextarea = function(a, e, b, callback) {
    $("#" + b).attr("disabled", "disabled");
    $("#" + b).addClass("disabled");
	var t = $(this),
	d = t.find('#cmt_txt'),
	g = t.find('#captcha_ipt'),
	u = t.find('#needLogin'),
	btn = $('#cmt_btn'),
	closes = t.find('.close'),
    c;
	btn.click(function(e){
		e.preventDefault();
		var islogin = $('#isLogin')
		if(u.val() === '1' && islogin.val() === '0'){
			alert('对不起，请登录后再发表评论！');
			window.location.href = nowdomain+'member/login.html?from='+encodeURIComponent(window.location);
			return false;
		}
		$('#po_captcha').show();
		$('#captcha_ipt').focus();
	});
    t.submit(function(){
		
		if(!g.val()){
			alert('请输入验证码！');
			$('#captcha_ipt').focus();
			return false;
		}
		callback.call(this);
		return false;
	});
	closes.click(function(e){
		e.preventDefault();
		$('#po_captcha').hide();
	});
	d.focus(function() {
		
       c = setInterval(function() {
                var f = d.val().replace(/[^\x00-\xff]/g, "**");
                if (f.length > 0) {
                    if (f.length > a) {
                        $("#" + e).html("已超出<em>" + parseInt((f.length - a) / 2) + "</em>字");
                        $("#" + e).css({
                            color: "#f30"
                        });
                        $("#" + b).attr("disabled", "disabled");
                        $("#" + b).addClass("disabled")
                    } else {
                        $("#" + e).html(parseInt(f.length/2) + '/300');
                        $("#" + e).css({
                            color: "#404040"
                        });
                       $("#" + b).prop("disabled", false);
                       $("#" + b).removeClass("disabled")
                    }
                } else {
                    $("#" + e).html("0/300");
                    $("#" + e).css({
                        color: "#404040"
                    });
                    $("#" + b).attr("disabled", "disabled");
                    $("#" + b).addClass("disabled")
                }
            },
            100)
    });
    d.blur(function() {
        clearInterval(c)
    })
};























