jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};
function isIE6(){return getIEVersion() === '6'}
function getIEVersion(){
	var a=document;
	if(a.body.style.scrollbar3dLightColor!=undefined){
		if(a.body.style.opacity!=undefined){
			return "9"
		}else if(a.body.style.msBlockProgression!=undefined){
			return "8"
		}else if(a.body.style.msInterpolationMode!=undefined){
			return "7"
		}else if(a.body.style.textOverflow!=undefined){
			return "6"
		}else{
			return "IE5.5"
		}
	}
	return false;
}
/*选项卡切换
对象属性{选项卡序号|按钮序号||选项卡总数量}
*/
function Show_TabADSMenu(tabadid_num,tabadnum,tabNums){
	for(var i=0;i<tabNums;i++){document.getElementById("tabadcontent_"+tabadid_num+i).style.display="none";}
	for(var i=0;i<tabNums;i++){document.getElementById("tabadmenu_"+tabadid_num+i).parentNode.className="";}
	document.getElementById("tabadmenu_"+tabadid_num+tabadnum).parentNode.className="selected";
	document.getElementById("tabadcontent_"+tabadid_num+tabadnum).style.display="block";
}
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
function get_login(){
	var user_obj = {'is_login':'0'},
		user_ck = $.cookie('mh163kagan'),
		qq_ck = $.cookie('qq'),
		user_arr = [],
		user_inner_arr = [],
		username = '';
	if(!user_ck && !qq_ck){
		return user_obj;
	}
	if(typeof(qq_ck) !== 'undefined' && qq_ck !== '' && !$.isEmptyObject(qq_ck)){
		user_arr = qq_ck.split('&');
	}else{
		user_arr = user_ck.split('&');
	}
	for(var i = 0; i< user_arr.length;i++){
		user_inner_arr = user_arr[i].split('=');
		user_obj[user_inner_arr[0]] = user_inner_arr[1];
	}	
	username = user_obj.mh163kloginname || user_obj.QQnickName;
	if(!username){
		alert('用户登录数据有误');
	}else{
		user_obj['is_login'] = '1';
	}
	return user_obj;
}
function is_login(siteUrl,tplPath,hasQQ){
	var node = $("#login_info"),txt='',txt_cm='',username = '',userjibie = '';
	var hash = '?from='+encodeURIComponent(window.location.href);
	var hasQQs = hasQQ === '1'
	var qqImg = !!hasQQs?"<a href=\""+siteUrl+"member/qq.aspx"+hash+"\"><img src=\""+tplPath+"images/qq_login.png\" alt=\"\" /></a>":'';
	var show_html = function(){
		node.html(txt);
		$(document).ready(function(){
			var cm_node = $("#login_info_cm");
			cm_node[0]&&cm_node.html(txt_cm);
		});
	}
	var show_noLogin = function(){
		txt="<ul class=\"clearfix\"><li>"+qqImg+"</li><li><a href=\""+siteUrl+"member/register.html\">免费注册</a>　|　<a href=\""+siteUrl+"member/login.html"+hash+"\">登录</a></li></ul><input value=\"0\" id=\"isLogin\" type=\"hidden\" /><input value=\"\" id=\"user_jibie\" type=\"hidden\" />";
		txt_cm="<li class=\"bor\">您好，请先登录！<a a href=\""+siteUrl+"member/login.html"+hash+"\">登录</a></li><li>"+qqImg+"</li><li>还没有账号？<a href=\""+siteUrl+"member/register.html\">免费注册</a></li><li class=\"yellow\" id=\"youke\" style=\"display:none;\">网友：</li><li class=\"youke_li\" style=\"float:right;\"><input value=\"1\" id=\"commentyouke\" name=\"commentyouke\" type=\"checkbox\" style=\"vertical-align:middle;\" /> 游客直接发表 </li>";
		show_html();
	}
	var show_yesLogin = function(name,jibie){
		txt=txt_cm="<p class=\"login_success\"><span class=\"username\">"+name+"</span>，您好！<a href=\""+siteUrl+"member/index.html\">管理</a> <a href=\"javascript:loginout('"+siteUrl+"');\">退出</a></p>";
		txt+="<input value=\"1\" id=\"isLogin\" type=\"hidden\" /><input value=\""+jibie+"\" id=\"user_jibie\" type=\"hidden\" />";
		show_html();
	}
	var u_obj = get_login();
	if(u_obj['is_login'] === '0'){
		show_noLogin();
	}else{
		username = u_obj.mh163kloginname || u_obj.QQnickName;
		userjibie = u_obj.mh163kloginjibie || 0;
		show_yesLogin(username,userjibie);
	}
}
function is_login2(siteUrl,tplPath,hasQQ){
	var node = $("#login_info"),txt='',txt_cm='',username = '',userjibie = '';
	var hash = '?from='+encodeURIComponent(window.location.href);
	var hasQQs = hasQQ === '1';
	var qqImg = !!hasQQs?"<li class=\"bor\"><a href=\""+siteUrl+"member/qq.aspx"+hash+"\"><img src=\""+tplPath+"images/qq_login_2.png\" alt=\"\" /></a></li>":'';
	
	
	var show_html = function(){
		node.prepend(txt);
		$(document).ready(function(){
			var cm_node = $("#login_info_cm");
			cm_node[0]&&cm_node.html(txt_cm);
		});
	}
	var show_noLogin = function(){
		txt="<li><a href=\""+siteUrl+"member/register.html\">免费注册</a></li><li class=\"bor\"><a a href=\""+siteUrl+"member/login.html"+hash+"\">登录</a></li><li class=\"bor\"><a href=\""+siteUrl+"find.aspx\">忘记密码</a></li>"+qqImg+"<input value=\"0\" id=\"isLogin\" type=\"hidden\" /><input value=\"\" id=\"user_jibie\" type=\"hidden\" />";
		txt_cm="<li class=\"bor\">您好，请先登录！<a a href=\""+siteUrl+"member/login.html"+hash+"\">登录</a></li><li>"+qqImg+"</li><li>还没有账号？<a href=\""+siteUrl+"member/register.html\">免费注册</a></li><li class=\"yellow\" id=\"youke\" style=\"display:none;\">网友：</li><li class=\"youke_li\" style=\"float:right;\"><input value=\"1\" id=\"commentyouke\" name=\"commentyouke\" type=\"checkbox\" style=\"vertical-align:middle;\" /> 游客直接发表 </li>";
		show_html();
	}
	var show_yesLogin = function(name,jibie){
		txt=txt_cm="<li><p class=\"login_success\"><span class=\"username\">"+name+"</span>，您好！ <a href=\""+siteUrl+"member/index.html\">管理</a> <a href=\"javascript:loginout('"+siteUrl+"');\">退出</a></p></li>";
		txt+="<input value=\"1\" id=\"isLogin\" type=\"hidden\" /><input value=\""+jibie+"\" id=\"user_jibie\" type=\"hidden\" />";
		show_html();
	}
	var u_obj = get_login();
	if(u_obj['is_login'] === '0'){
		show_noLogin();
	}else{
		username = u_obj.mh163kloginname || u_obj.QQnickName;
		userjibie = u_obj.mh163kloginjibie || 0;
		show_yesLogin(username,userjibie);
	}
}
function get_bbs(bbsUrl,cat,num,node){
	var moban = cat==='new'?'bbs.html':'bbs2.html';
	var timer=Math.random(),
		url = '../request.ashx?action=getdata&timer='+timer+'&tempid=20&template='+moban;
	$.get(url,function(dt){
		node.empty();		
		node.attr('data-success','1').html(dt).removeClass('loadding');
	});
}
function get_live(liveUrl,cat,num,node){
	var timer=Math.random(),
		arr_c = cat.split('_'),
		moban = 'index_'+arr_c[0]+'.html',
		ids = arr_c[1],
		url = '../request.ashx?action=getdata&timer='+timer+'&tempid=20&template='+moban+'&id='+ids+'&jsoncallback=?',
		i=0,
		txt='';
	$.get(url,function(result){
		dataArr = eval('('+result+')');
		showData(dataArr[0].arr);
	});
	function showData(dataArr){
		$.each(dataArr,function(i,item){
			if(num>i&&typeof item.id!=='undefined'){txt+='<li><a href="'+item.catURL+'" target="_blank" class="gray">['+item.cat+']</a> <a href="'+item.sURL+'" target="_blank" style="color:'+item.color+'; font-weight:'+item.fontbold+';">'+item.title+'</a><em>'+item.sdate+'</em></li>';}
		});
		node.attr('data-success','1').html(txt).removeClass('loadding');
	}
}
function get_other(otherUrl,cat,num,node){
	var timer=Math.random(),
		arr_c = cat.split('_'),
		moban = 'index_'+arr_c[0]+'.html',
		ids = arr_c[1],
		url = '../request.ashx?action=getdata&timer='+timer+'&tempid=20&template='+moban+'&id='+ids+'&jsoncallback=?',
		i=0,
		txt='';
	$.get(url,function(result){
		dataArr = eval('('+result+')');
		showData(dataArr[0].arr);
	});
	function showData(dataArr){
		$.each(dataArr,function(i,item){
			if(num>i&&typeof item.id!=='undefined'){txt+='<li><a href="'+item.sURL+'" target="_blank"><img src="'+item.img+'" width="95" height="70" alt="" /><span class="title">'+item.title+'</span><span class="price">'+item.price+'</span></a></li>';}
		});
		node.attr('data-success','1').html(txt).removeClass('loadding');
	}
}
$.fn.TabADS2 = function(thisUrl,num,callback,isGO){
	var obj = $(this),
		currentClass = "selected",
		tabs = obj.find(".tab-hd").find("li"),
		conts = obj.find(".tab-cont"),
		tab,cat,cont,is_success,t;
	
	callback = callback==='bbs'?get_bbs:(callback==='live'?get_live:get_other);
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	isGO&&callback.call(this,thisUrl,tabs.eq(0).attr('data-cat'),num,conts.eq(0))
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				tab=tabs.eq(i);
				cont=conts.eq(i);
				conts.hide();
				cont.show();
				tabs.removeClass(currentClass);
				tab.addClass(currentClass);
			 	is_success=cont.attr('data-success')==='1'?true:false;
				cat=tab.attr('data-cat');
				!is_success&&callback.call(obj,thisUrl,cat,num,cont);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}
$.fn.TabADS = function(){
	var obj = $(this);
	var currentClass = "selected";
	var tabs = obj.find(".tab-hd").find("li");
	var conts = obj.find(".tab-cont");
	var t;
	tabs.eq(0).addClass(currentClass);
	conts.hide();
	conts.eq(0).show();
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				conts.hide().eq(i).show();
				tabs.removeClass(currentClass).eq(i).addClass(currentClass);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}
$.fn.modCity = function(){
	var selectBox = $('#modCity_link');
	var dropDown = $('#modCity');
	dropDown.bind('show',function(){  
		if(dropDown.is(':animated')){ return false; }  
		selectBox.addClass('expanded');
		dropDown.fadeIn();
	}).bind('hide',function(){
		if(dropDown.is(':animated')){ return false; }
		selectBox.removeClass('expanded');
		dropDown.fadeOut();  
	}).bind('toggle',function(){
		if(selectBox.hasClass('expanded')){  
			dropDown.trigger('hide');
		}else{
			dropDown.trigger('show');  
		}
	});
	selectBox.click(function(event){
		dropDown.trigger('toggle');
		event.preventDefault();
	}); 
	$(document).click(function(e){
		dropDown.trigger('hide');
	});  
}
$.fn.showMore = function(){
	var $this = $(this),$po = $this.find('.po');
	$this.hover(function(){
		$po.toggleClass('show')
	});
}
$.fn.showMore2 = function(){
	var $this = $(this);
	$this.hover(function(){
		$this.toggleClass('show')
	});
}
$.returnTop=function(node){
	var node = $('<a href="#" alt="返回顶端" id="returnTop">返回顶端</a>');
	$(document).ready(function(){$('body').append(node)});
	var b = node.click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop: 0},300);
	}),
	c = null;
	$(window).bind("scroll",function(){
	   var d = $(document).scrollTop(),
	   e = $(window).height();
	   0 < d ? b.css("bottom", "10px") : b.css("bottom", "-200px");
	   isIE6() && (b.hide(),clearTimeout(c),c = setTimeout(function(){
			0 < d ? b.show() : b.hide();
			clearTimeout(c);
		},
		300), b.css("top", d + e - 51))
	});
}
$.fn.listNav = function(){
	var $this = $(this);
	$this.delegate('.t','click',function(e){
		$this.find('.open').removeClass('open');
		$(this).parent().toggleClass('open');
		e.preventDefault();
	});
}
$.fn.listNav2 = function(){
	var $this = $(this);
	$this.delegate('.hd','click',function(e){
		$this.find('.open').removeClass('open');
		$this.find('.hd_open').removeClass('hd_open');
		$(this).addClass('hd_open');
		$(this).next().addClass('open');
		e.preventDefault();
	});
}
$.fn.fixed = function(){
	if(isIE6()){return false;}
	var b = $(this),offset = b.offset(),top = offset.top,bottom = $('.footer').outerHeight(true),d_h = $(document).height(),w_h = $(window).height(),h = b.height(),s_h = d_h-bottom-h,s_b = $('.footer').offset().top-h-15;
	$(window).bind("scroll",function(){
		var d = $(document).scrollTop();
		if(top < d){
			if(0>(s_h - d)){
				b.css({'position':'absolute','top':s_b});
			}else{
				b.css({'position':'fixed','top':'0'});
			}
		}else{
			b.css({'position':'static'});
		}
	});
}
$.fn.changeList = function(){
	var _this = $(this),list=_this.find('li');
	list.bind('mouseover',function(){list.removeClass('frist');list.children('.img').hide();$(this).addClass('frist');$(this).children('.img').show();});
	list.eq(0).trigger('mouseover');
}
$.fn.jisu = function(){
	var t = $(this),btns = $('.jisu_btn'),close_btn = $(this).find('.close'),d,top,h=Math.ceil(($(window).height()/2) - (t.height()/2));
	btns.bind('click',function(e){
		d = $(document).scrollTop();
		t.css('top',d+h);
		t.show();
		e.preventDefault();
	});
	close_btn.bind('click',function(e){
		t.hide();
		e.preventDefault();
	});
}
$('#channel_nav').ready(function(){
	var that=$('#channel_nav'),
		url = window.location.href,
		url_L = url.toLowerCase(),
		channel = that.find('a'),
		forlink;
	channel.each(function(){
		forlink = $(this).attr("href").toLowerCase();
		if(url_L.indexOf(forlink)>=0){
			that.find('.select').removeClass();
			$(this).addClass("select");
		}
	});
});
$.fn.reviewTgImg = function(){
	var $this = $(this),imgs=$this.find('img');
	imgs.each(function(){
		var txt = $(this).attr('data-img-src');
		var arr1 = txt.split('/');
		var imgName = arr1.pop();
		var arr2 = imgName.split('.');
		var filename = arr2[0];
		var filetype = '.'+arr2[1];
		var new_name = arr1.join('/')+'/'+imgName.slice(0,filename.length-1)+'2'+filetype;
		
		$(this).attr('src',new_name);
	});
}

$.fn.format_zushou = function(){
	var t = $(this),l = t.find('li');
	l.each(function(i,item){
		var unit = $(item).hasClass('zu')?"元":"万元";
		var price = $(item).find('.price');
		var price_num = price.attr('data-price');
		price_num === '0'?(price.append('面议')):(price.append(price_num+unit));
	});
}

function getdata2014(url,obj){
	var  Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+(Digital);
	$.ajax({url:url,success:function(data){
		$('#'+obj).html(data);
	}});
}