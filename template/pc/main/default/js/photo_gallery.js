(function($){
	$.extend({
		g_g:{
			inner:$('#gallery-area'),
			countDOM:$('.hidden-container'),
			BigphotoArr:[], //大图url数组
			BigTitleArr:[], //标题数组
			countArr:$('.hidden-container').children('a'),
			tabHTML:'',
			graHTML:'<div class="graphicsContent">'+
					'<div class="photoMenu prev" id="prevPhoto" onclick="return $.prev()"><div id="prevPhotoInner" class="menuPrev"><s class="s png_ie6"><a href="#" onfocus="this.blur()">上一张</a></s></div><div id="prevPhotoBg" class="bg"></div></div>'+
					'<div class="photoMenu next" id="nextPhoto" onclick="return $.next()"><div id="nextPhotoInner" class="menuNext"><s class="s png_ie6"><a href="#" onfocus="this.blur()">下一张</a></s></div><div id="nextPhotoBg" class="bg"></div></div>'+
					'<img src="../template/default/images/gqzt_loading.gif" id="graphics" class="graphics" alt="" /></div>',
			
			time:$('#time').val(),
			autoPlay:$('#autoPlay'),
			intervalTime:5000,
			totalNum:$('.hidden-container').children('a').length,//图总数
			currentIndex:0,//当前位置
			isplay:0,
			cellWidth:141,//单元宽度
			s_pane:'',
			s_api:'',
			preloadN:new Image(),
			end:$('#end')
		},
		init:function(){
			$.g_g.countArr.each(function(i){
				$.g_g.tabHTML += '<li class="tab_item"><a href="#" onclick="return $.change('+ i +')"><img src="'+ $(this).children('img').attr('src') +'"></a><s class="date">'+ (i+1) +'/' + $.g_g.totalNum +'</s></li>';
				$.g_g.BigphotoArr.push($(this).attr('href'));
				$.g_g.BigTitleArr.push($(this).attr('title'));
			});
			$.g_g.countDOM.hide();
			$.g_g.inner.append('<div id="galleryInner"><div class="graphicsHead">'+
							   '<ul id="headInner" class="clearfix">'+
							    $.g_g.tabHTML + 
								'</ul></div>' +
							    '<a href="#" class="scroll_left">上一个</a><a href="#" class="scroll_right">下一个</a>'+
							    $.g_g.graHTML +
							   '<div class="graphicsInfo">'+
							   '<div class="graphicsTitle">'+ $.g_g.BigTitleArr[0] +'</div>' + 
							   '<div class="graphicsTime">'+ $.g_g.time +'</div>'+
							   '</div></div>'
			);
			$('.tab_item').eq(0).addClass('select');
			$('#view_photo').attr('href',$.g_g.BigphotoArr[$.g_g.currentIndex]);
			$('#headInner').css({'width':$.g_g.totalNum*$.g_g.cellWidth});
			$.g_g.autoPlay.click(function(event){
				if(!$.g_g.isplay){
					$.autoPlay();
				}else{
					$.stopPlay();
				}
				event.preventDefault();
			});
			//初始化高度
			setTimeout(function(){$.heights();},100);
			//切换模式
			$('#changeMode').click(function(e){
				if( document.getElementById('galleryInner').style.display=="none" )
				{
					$.g_g.countDOM.hide();	
					$('#galleryInner').show();
					e.preventDefault();
				}
				else
				{
					$('#galleryInner').hide();
					$.g_g.countDOM.show();
					var links = $.g_g.countDOM.children('a');
					links.each(function(i){
						$(this).click(function(event){
							$('#galleryInner').show();
							$.g_g.countDOM.hide();
							$.change(i);
							event.preventDefault();
						});
					});
					e.preventDefault();
					
				}
			});
			//上一张下一张
			$('#prevPhoto').hover(function(){
				$(this).children('.menuPrev').show();
			},function(){
				$(this).children('.menuPrev').hide();
			});
			$('#nextPhoto').hover(function(){
				$(this).children('.menuNext').show();
			},function(){
				$(this).children('.menuNext').hide();
			});
			//滚动组件
			$.g_g.pane = $('.graphicsHead');
			$.g_g.pane.jScrollPane({animateScroll: true});
			$.g_g.api = $.g_g.pane.data('jsp');
			$('.scroll_left').bind('click',function(){$.s_prev();return false;});
			$('.scroll_right').bind('click',function(){$.s_next();return false;
			});
			//分享
			$.bindShareList();
			//键盘事件
			$(document).bind("keydown",function(e){
				e = window.event || e;
				//alert(e.keyCode);
				$.g_g.isplay && $.stopPlay();
				e.keyCode == 37 && $.prev();
				e.keyCode == 39 && $.next();
				//e.keyCode == 38 && $.prev();
				//e.keyCode == 40 && $.next();
			});
			//初始化
			$.getCmtNum();
			$.getURL();
			$.change($.getUrl()-1);
		},
		heights:function(){
			var boxHeight = $('.graphicsContent').height();
			var boxMargin = Math.round((boxHeight - 95)/2);
			$('#prevPhoto,#nextPhoto,#prevPhotoInner,#nextPhotoInner,#prevPhotoBg,#nextPhotoBg').css({'height':boxHeight});
			$('#prevPhotoInner .s,#nextPhotoInner .s').css({'margin-top':boxMargin});
		},
		s_prev:function(){
			$.g_g.api.scrollBy(-$.g_g.cellWidth,0);
		},
		s_next:function(){
			$.g_g.api.scrollBy($.g_g.cellWidth,0);
		},
		change:function(item){
			$('#view_photo').attr('href',$.g_g.BigphotoArr[item]);
			//$('#graphics').removeClass('wid980').attr('src','../template/default/images/gqzt_loading.gif');
			$.Pload(item);
			$('#graphics').load(function(){
				$.autoSca($(this),$.g_g.BigphotoArr[item]);
				$('.graphicsTitle').text($.g_g.BigTitleArr[item]);
				$(this).height() > 600 ? $('.graphicsContent').height($(this).height()):$('.graphicsContent').height(600);
				$(this).css('margin-top',parseInt($(".graphicsContent").height()-$(this).height())/2+"px");
				setTimeout(function(){$.heights();},100);
			});
			$("#graphics").fadeTo("fast", 0,function(){
				$.g_g.currentIndex = item;
				$('.tab_item').removeClass('select').eq(item).addClass('select');
				$.g_g.api.scrollTo((item-2)*$.g_g.cellWidth,0);
				$("#graphics").attr("src",$.g_g.BigphotoArr[item]);
				$("#graphics").fadeTo("800",1);
				
			});
			$.creatUrl(item);
			return false;
		},
		autoSca:function($this,src){
			var img = new Image();
			img.src = src;
			if (img.width > 0 && img.height > 0) {//都大于0
				if (img.width > 980){
					$this.addClass('wid980');
				}else{
					$this.hasClass('wid980') && $this.removeClass('wid980');
				}
			}
		},
		Pload:function(item){
			if($.g_g.totalNum>3){
				if (item != Number($.g_g.totalNum - 1)) {
					//this._preloadN.src = data[n + 1].bigpic
					$.g_g.preloadN.src = $.g_g.BigphotoArr[item + 1];
				}
			}
		},
		creatUrl:function(item){
			var u = /\#p\=/i.test(window.location.href);
			if(!u){
				window.location.href = window.location.href+"#p=1";
			}else{
				window.location.href = window.location.href.split("#p=")[0] + "#p="+parseInt(item+1);
			}
		},
		getUrl:function(){
			var str = window.location.href.toString(),pos = str.indexOf("#p=");
			var nub = 1;
			if(pos!==-1){
				nub=str.match(/\#p\=(\d{1,})/i)[1];
			}
			return nub;
		},
		prev:function(){
			if($.g_g.currentIndex > 0){
				$.change($.g_g.currentIndex-1);
			}else{
				alert('当前已是第一张！');
			}
			 
			return false;
		},
		next:function(){
			//$.g_g.currentIndex+1 <$.g_g.totalNum &&	$.change($.g_g.currentIndex+1);
			if($.g_g.currentIndex+1 <$.g_g.totalNum){
				$.change($.g_g.currentIndex+1);
			}else{
				$.end();
			}
			return false;
		},
		end:function(){
			var scrL = $(document).scrollLeft(),
				scrT = $(document).scrollTop(),
				winW = $(window).width(),
				winH = $(window).height(),
				diaW = $.g_g.end.width(),
				diaH = $.g_g.end.height();
				$.g_g.end.css({'top':(winH-diaH)/2+scrT,'left':(winW-diaW)/2+scrL});
				$.g_g.end.fadeIn();
				
				$('#replay').click(function(e){
					$.change(0);
					$.g_g.end.hide();
					e.preventDefault();
				});
				$('#close').click(function(e){
					$.g_g.end.fadeOut();
					e.preventDefault();
				});
				
		},
		autoPlay:function(){
			interval = setInterval(function(){
				$.next();
				$.g_g.currentIndex+1 >= $.g_g.totalNum && $.stopPlay();
			},$.g_g.intervalTime);
			$.g_g.autoPlay.removeClass('stop').addClass('play').html('<s class="s"></s>暂停播放');
			$.g_g.isplay = 1;
		},
		stopPlay:function(){
			clearInterval(interval);
			$.g_g.autoPlay.removeClass('play').addClass('stop').html('<s class="s"></s>幻灯连播');
			$.g_g.isplay = 0;
		},
		getParamsOfShareWindow:function(width, height) {
			return ['toolbar=0,status=0,resizable=1,width=' + width + ',height=' + height + ',left=',(screen.width-width)/2,',top=',(screen.height-height)/2].join('');
		},
		getDetailID:function(){
			var oSrc,oArr=[],oID;
			oSrc = $('#detailID').attr('src');
			oArr = oSrc.split('=');
			oID = oArr[1];
			return oID;
		},
		getCmtNum:function(){
			var num=Math.random();
			$.getJSON('http://www.idaocao.com/function/detail_json.asp?sid='+ $.getDetailID() +'&act=pinglunnums&timer='+num+'&jsoncallback=?',function(dt){
				$('#commentNum').text(dt.pNum);
			});
		},
		//当前位置
		getURL:function(){
			var num=Math.random();
			$.getJSON('http://www.idaocao.com/function/detail_json.asp?sid='+ $.getDetailID() +'&act=surl&timer='+num+'&jsoncallback=?',function(dt){
				$('#c_url').html(dt.surl);
			});	
		}, 
		bindShareList:function() {
	var link = encodeURIComponent(document.location); // 文章链接
	var title = encodeURIComponent(document.title.substring(0,76)); // 文章标题	
	var source = encodeURIComponent('爱稻草网'); // 网站名称
	var windowName = 'share'; // 子窗口别称
	var site = 'http://www.idaocao.com/'; // 网站链接
	$('.qqZone-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		var url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + link + '&title='+ title +'&pic=' + pic;		
		var params = $.getParamsOfShareWindow(790, 590);
		window.open(url, windowName, params);
	});
	$('.sohu-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		var url = 'http://t.sohu.com/third/post.jsp?&url=' + link + '&title=' + title + '&content=utf-8&pic=' + pic;
		var params = $.getParamsOfShareWindow(630, 400);
		window.open(url, windowName, params);
	});
	$('.kaixin001-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		var url = 'http://www.kaixin001.com/repaste/share.php?rurl=' + link + '&rcontent=' + link + '&rtitle=' + title + '&pic=' + pic;
		var params = $.getParamsOfShareWindow(540, 342);
		window.open(url, windowName, params);
	});
	$('.renren-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		var url = 'http://share.renren.com/share/buttonshare?link=' + link + '&title=' + title + '&pic=' + pic;
		var params = $.getParamsOfShareWindow(626, 436);
		window.open(url, windowName, params);
	});
	$('.douban-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		var url = 'http://www.douban.com/recommend/?url=' + link + '&title=' + title + '&pic=' + pic;
		var params = $.getParamsOfShareWindow(450, 350);
		window.open(url, windowName, params);
	});
	$('.sina-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		var url = 'http://v.t.sina.com.cn/share/share.php?url=' + link + '&title=' + title +'&pic=' + pic;
		var params = $.getParamsOfShareWindow(607, 523);
		window.open(url, windowName, params);
	});
	$('.netease-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		//var url = 'http://t.163.com/article/user/checkLogin.do?link=' + link + 'source=' + source + '&info='+ title + ' ' + link + '&images=' + pic;
		var url = 'http://t.163.com/share/v1/popup?sourceUrl=&link=' + link + '&source=' + source + '&title='+ title + '&check1stImg=false&togImg=true&images=' + pic;
		var params = $.getParamsOfShareWindow(642, 468);
		window.open(url, windowName, params);
	});
	$('.tencent-share').bind('click',function(){
		var pic = site + $.g_g.BigphotoArr[$.g_g.currentIndex];
		var url = 'http://v.t.qq.com/share/share.php?title=' + title + '&url=' + link + '&site=' + site + '&pic=' + pic;
		var params = $.getParamsOfShareWindow(634, 668);
		window.open(url, windowName, params);
	});
	}
	});
	
})(jQuery);



