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
	var pwd2 = form.find('#pwd2'),pwd2_tip=form.find('#pwd2_tip');
	var email = form.find('#email'),email_tip=form.find('#email_tip');
	var authcode = form.find('#authcode'),authcode_tip=form.find('#authcode_tip');
	var usernamenumREG = /[^\x00-\xff]/g;
	var passwordReg = /^[A-Za-z0-9_-]+$/;
	var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	//检查用户名中非法字符
	function chkstr(str){
		for (var i = 0; i < str.length; i++){
			if (str.charCodeAt(i) < 127 && !str.substr(i,1).match(/^\w+$/ig)){
				return false;
			}
		}
		return true;
	}
	//用户名
	function s_username(val,boolean){
		if(val.length > 0){
			var unlen = val.replace(usernamenumREG,"**").length;
			if(unlen < 3 || unlen > 15){
				username_tip.text('用户名长度只能在3-15位字符之间');
				username.attr("data-sta",'1').addClass('r_ipt_error');
				username_tip.removeClass('success').addClass('error');
			}else{
				if(!passwordReg.test(val)){
					username_tip.text('用户名只能由中文、英文、数字及“_”、“-”组成');
					username.attr("data-sta",'1').addClass('r_ipt_error');
					username_tip.removeClass('success').addClass('error');
				}else{
					username_tip.html('&nbsp;');
					username.attr("data-sta",'2').removeClass('r_ipt_error');
					username_tip.removeClass('error').addClass('success');
					//ajax检查用户名是否已被注册
					/*username_tip.text(loading);
					$.get('user.php?act=is_registered',{ 'act': "is_registered", 'username': val},function(data){
						if ( data == "true" ){
							username_tip.html(dagou);
							username.attr("data-sta",'2').removeClass('r_ipt_error');
							username_tip.removeClass('error').addClass('success');
						}else{
							username_tip.text(msg_hl_username_registered);
							username.attr("data-sta",'1').addClass('r_ipt_error');
							username_tip.removeClass('success').addClass('error');
						}
					});*/
				}
			}
		}else{
			if(boolean){
				show_hide(username_tip,1);
				username_tip.text('3-15字符内,可以是汉字，a-z,0-9以及下划线');
				username_tip.removeClass('success').addClass('error');
			}else{
				username_tip.text('3-15字符内,可以是汉字，a-z,0-9以及下划线');
				username_tip.removeClass('success error');
				show_hide(username_tip,0);
			}
			username.attr("data-sta",'0').removeClass('r_ipt_error');
			
		}	
	}
	username.focus(function(){
		show_hide(username_tip,1);
		username_tip.text(msg_hl_username_default);
		username_tip.removeClass('success error');
	}).blur(function(){
		s_username($(this).val());
	});
	
	//密码
	function s_pwd(val,boolean){
		if(val.length > 0){
			if(val.length < 6 || val.length > 32){
				pwd_tip.text('密码长度只能在6-16位字符之间');
				pwd.attr("data-sta",'1');
				pwd_tip.removeClass('success').addClass('error');
				pwd.addClass('r_ipt_error');
			}else{
				if(passwordReg.test(val)){
					pwd_tip.html('&nbsp;');
					pwd.attr("data-sta",'2');
					pwd_tip.removeClass('error').addClass('success');
					pwd.removeClass('r_ipt_error');
				}else{
					pwd_tip.text('密码只能由英文、数字及“_”、“-”组成');
					pwd.attr("data-sta",'1');
					pwd_tip.removeClass('success').addClass('error');
					pwd.addClass('r_ipt_error');
				}
			}
		}else{
			if(boolean){
				show_hide(pwd_tip,1);
				pwd_tip.text('密码长度6~32，字母区分大小写');
				pwd_tip.removeClass('success').addClass('error');
			}else{
				show_hide(pwd_tip,0);
				pwd_tip.text('密码长度6~32，字母区分大小写');
				pwd_tip.removeClass('error success');
			}
			pwd.removeClass('r_ipt_error');
			pwd.attr("data-sta",'0');
		}	
	}
	pwd.focus(function(){
		show_hide(pwd_tip,1);
		//pwd_tip.text('');
		pwd_tip.removeClass('success error');
	}).blur(function(){
		s_pwd($(this).val());
	});
	
	//重复密码
	function s_pwd2(val,boolean){
		if(val.length > 0){
			if(val.length < 6 || val.length > 16){
				pwd2_tip.text('重新输入一次密码');
				pwd2.attr("data-sta",'1');
				pwd2_tip.removeClass('success').addClass('error');
				pwd2.addClass('r_ipt_error');
			}else{
				if(passwordReg.test(val)){
					if(val == pwd.val()){
						pwd2_tip.html('&nbsp;');
						pwd2.attr("data-sta",'2');
						pwd2_tip.removeClass('error').addClass('success');
						pwd2.removeClass('r_ipt_error');
					}else{
						pwd2_tip.text('两次输入密码不一致');
						pwd2.attr("data-sta",'1');
						pwd2_tip.removeClass('success').addClass('error');
						pwd2.addClass('r_ipt_error');
					}
				}else{
					pwd2_tip.text('密码只能由英文、数字及“_”、“-”组成');
					pwd2.attr("data-sta",'1');
					pwd2_tip.removeClass('success').addClass('error');
					pwd2.addClass('r_ipt_error');
				}
			}
		}else{
			if(boolean){
				show_hide(pwd2_tip,1);
				pwd2_tip.text('重新输入一次密码');
				pwd2_tip.removeClass('success').addClass('error');
			}else{
				show_hide(pwd2_tip,0);
				pwd2_tip.text('重新输入一次密码');
				pwd2_tip.removeClass('error success');
			}
			pwd2.removeClass('r_ipt_error');
			pwd2.attr("data-sta",'0');
		}
	}
	pwd2.focus(function(){
		show_hide(pwd2_tip,1);
		//pwd2_tip.text(msg_hl_pwd2_default);
		pwd2_tip.removeClass('error success');
	}).blur(function(){
		s_pwd2($(this).val());
	});
	pwd.keyup(function(){
		safety.show().removeClass().addClass(pwdstrength($(this).val()));
	});
	function pwdstrength(val){
		var strength = 0;
		if (val.length>=6&&passwordReg.test(val)){
			if (/\d/i.test(val)){
				strength += 1;
			}
			if (/[a-z]/i.test(val)){
				strength += 1;
			}
			if (/[-_]/i.test(val)){
				strength += 1;
			}
			switch (strength){
				case 1:
					return "safety_1"
				break;
				case 2:
					return "safety_2"
				break;
				case 3:
					return "safety_3"
				break;
				default:
				break;
			}
		}else{
			safety.hide();
		}
	}
	//邮箱地址
	function s_email(val,boolean){
		if(val.length>0){
			if(!emailReg.test(val)){
				email_tip.text('邮箱格式不正确');
				email.attr("data-sta",'1');
				email_tip.removeClass('success').addClass('error');
				email.addClass('r_ipt_error');
			}else{
				email_tip.html('&nbsp;');
				email.attr("data-sta",'2');
				email_tip.removeClass('error').addClass('success');
				email.removeClass('r_ipt_error');
				//ajax检查邮箱是否已被注册
				/*email_tip.text(loading);
				$.get('user.php',{'act':'check_email','email':val},function(data){
					if(data == 'ok'){
						email_tip.html(dagou);
						email.attr("data-sta",'2');
						email_tip.removeClass('error').addClass('success');
						email.removeClass('r_ipt_error');
					}else{
						email_tip.html(msg_hl_email_registered);
						email.attr("data-sta",'1');
						email_tip.removeClass('success').addClass('error');
						email.addClass('r_ipt_error');
					}
				});*/
			}
		}else{
			if(boolean){
				show_hide(email_tip,1);
				email_tip.text('非常重要，取回密码需要');
				email_tip.removeClass('success').addClass('error');
			}else{
				email_tip.text('非常重要，取回密码需要');
				show_hide(email_tip,0);
				email_tip.removeClass('success error');
			}
			email.attr("data-sta",'0');
			email.removeClass('r_ipt_error');
		}
	}
	email.focus(function(){
		show_hide(email_tip,1);
		email_tip.text(msg_hl_email_default);
		email_tip.removeClass('error success');
	}).blur(function(){
		s_email($(this).val());
	});
	
	//验证码
	function s_authcode(val,boolean){
		if(val.length>0){
			authcode_tip.html('&nbsp;');
			authcode.attr("data-sta",'2');
			authcode_tip.removeClass('error').addClass('success');
			authcode.removeClass('r_ipt_error');
			//ajax检查验证问题是否正确
			/*authcode_tip.text(loading);
			$.get('user.php',{'act':'check_captcha','captcha':val},function(data){
				if(data == 'ok'){
					authcode_tip.html(dagou);
					authcode.attr("data-sta",'2');
					authcode_tip.removeClass('error').addClass('success');
					authcode.removeClass('r_ipt_error');
				}else{
					authcode_tip.text(msg_hl_authcode_error);
					authcode.attr("data-sta",'1');
					authcode.addClass('r_ipt_error');
					authcode_tip.removeClass('success').addClass('error');
				}
			});*/
		}else{
			if(boolean){
				show_hide(authcode_tip,1);
				authcode_tip.text('请输入正确的验证答案');
				authcode_tip.removeClass('success').addClass('error');
			}else{
				show_hide(authcode_tip,0);
				authcode_tip.text('请输入正确的验证答案');
				authcode_tip.removeClass('success error');
			}
			authcode.removeClass('r_ipt_error');
			authcode.attr("data-sta",'0');
		}
	}
	authcode.focus(function(){
		show_hide(authcode_tip,1);
		authcode_tip.text(msg_hl_authcode_default);
		authcode_tip.removeClass('error success');
	}).blur(function(){
		s_authcode($(this).val());
	});
	authcode.keyup(function(){
		if($(this).val().length == 4){
			s_authcode(authcode.val(),1);
		}
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
		if(authcode.attr('data-sta')!=2) s_authcode(authcode.val(),1);
		if(email.attr('data-sta')!=2) s_email(email.val(),1);
		s_pwd2(pwd2.val(),1);
		s_pwd(pwd.val(),1);
		if(username.attr('data-sta')!=2) s_username(username.val(),1);
		return FORM_submit(["#username","#pwd","#pwd2","#email","#authcode"]);
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
			$('#submit_btn').attr('disabled',true);
			return true;
		}else{
			return false;
		}
	});
})(jQuery);