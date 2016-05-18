(function($){
	var form = $('#myForm');
	form.find('.tip').addClass('hide');
	form.find(':input[type="text"],:input[type="password"]').focus(function(){
		$(this).addClass('current');
	}).blur(function(){
		$(this).removeClass('current');
	});
	var username = form.find('#username'),username_tip = form.find('#username_tip');
	var pwd = form.find('#pwd'),pwd_tip=form.find('#pwd_tip'),safety=form.find('#safety');

	//用户名
	function s_username(val,boolean){
		if(val.length > 0){
			username.attr("data-sta",'2').removeClass('r_ipt_error');
			show_hide(username_tip,0);
			//alert('aasd');
		}else{
			if(boolean){
				show_hide(username_tip,1);
				username_tip.text(msg_hl_login_username).removeClass('success').addClass('error');
			}else{
				show_hide(username_tip,0);
				username_tip.text('').removeClass('success error');
			}
			username.attr("data-sta",'0').removeClass('r_ipt_error');
		}	
	}
	username.blur(function(){
		s_username($(this).val());
	});
	
	//密码
	function s_pwd(val,boolean){
		if(val.length > 0){
			pwd.attr("data-sta",'2');
			pwd.removeClass('r_ipt_error');
			show_hide(pwd_tip,0);
		}else{
			if(boolean){
				show_hide(pwd_tip,1);
				pwd_tip.text(msg_hl_login_pwd).removeClass('success').addClass('error');
			}else{
				show_hide(pwd_tip,0);
				pwd_tip.text('').removeClass('error success');
			}
			pwd.attr("data-sta",'0').removeClass('r_ipt_error');
		}	
	}
	pwd.blur(function(){
		s_pwd($(this).val());
	});

	//显示隐藏方法
	function show_hide(node,bool){
		if(bool){
			$(node).removeClass('hide');
		}else{
			$(node).addClass('hide');
		}
	}
	//提交前全部重新判断一次，返回值给submit方法
	function checkALL(){
		
		s_pwd(pwd.val(),1);
		s_username(username.val(),1);
		return FORM_submit(["#username","#pwd"]);
	}
	function FORM_submit(elements){
		var bool=true;
        for (var i=0;i<elements.length;i++){
            if ($(elements[i]).attr("data-sta")==2){
                bool=true;
            }else{
                bool=false;
                break;
            }
        }
        return bool;
	}
	form.submit(function(){
		var flag = checkALL();
		if(flag){
			return true;
		}else{
			return false;
		}
	});
})(jQuery);

var dagou = "&nbsp;";
var loading = "载入中...";
var msg_hl_login_username = '请输入用户名';
var msg_hl_login_pwd = '请输入密码';