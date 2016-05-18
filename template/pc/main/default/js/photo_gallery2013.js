$.fn.imagesLoaded=function(callback){var $this=$(this),$images=$this.find('img').add($this.filter('img')),len=$images.length,blank='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';function triggerCallback(){callback.call($this,$images)}function imgLoaded(event){if(--len<=0&&event.target.src!==blank){setTimeout(triggerCallback);$images.unbind('load error',imgLoaded)}}if(!len){triggerCallback()}$images.bind('load error',imgLoaded).each(function(){if(this.complete||typeof this.complete==="undefined"){var src=this.src;this.src=blank;this.src=src}});return $this};
jQuery.extend(jQuery.easing,{easeOutCubic:function(t,e,i,n,o){return n*((e=e/o-1)*e*e+1)+i}});
$.fn.photoGallery = function(){
	var inner = $('#photoGallery'),
	thumb = $('#photoGallery_thumb'),
	vieworigin = $('.vieworigin'),
	headline = $('.headline'),
	end_inner = $('#end'),
	end_bg = $('#end_bg'),
	data = inner.find('.data a'),
	b_arr = [],
	s_arr = [],
	t_arr = [],
	len = data.length,
	curIndex = 0,
	btn_sta = true,
	is_all = false,
	o=null;
	
	if(!len) return;
	
	//数据装载
	data.each(function(i){
		b_arr.push($(this).attr('href'));
		t_arr.push($(this).attr('title'));
		s_arr.push($(this).find('img').attr('src'))
	});
	//数字导航装载
	function show_thumb(){
		var mo_txt = '<li>...</li>',
			txt = '',
			thumb_inner = thumb.find('ul'),
			thumb_img_wrap = thumb.find('.thumb-img-wrap'),
			thumb_img = thumb_img_wrap.find('img');
		var mousehandler = function(){
			thumb.find('li[class="cur"]').removeClass('cur');
			thumb.find('span').each(function(i,item){
				if((parseInt(curIndex,10)+1) === parseInt($(this).text(),10)){
					$(this).parent().addClass('cur');
				}
			});
			var btn = thumb_inner.find('li');
			btn.bind('click',function(e){				 
				change(parseInt($(this).text(),10)-1);
			});
			btn.filter(':contains("...")').bind('click',function(){show_all();})
			btn.bind('mouseenter',function(){
				var num = parseInt($(this).text(),10)-1;
				var col = $(this).index();
				if (isNaN(num)) return;
				col>0&&(col = col-1);
				if(num === 0){
					thumb_img_wrap.addClass('thumb-img-wrap-first');
				}else{
					thumb_img_wrap.removeClass('thumb-img-wrap-first');
				}
				thumb_img.attr('src',s_arr[num]);
				thumb_img_wrap.css({'left':col*29});
				thumb_img_wrap.fadeIn(200);
			});
			thumb_inner.bind('mouseleave',function(){thumb_img_wrap.hide();});
		}
		var show_all = function(){
			var txt = '';
			for(var i= 0;i<len;i++){
				txt += '<li><span>'+(i+1)+'</span></li>';
			}
			headline.fadeOut();
			thumb_inner.html(txt).stop().animate({'width':len*29+'px'},400,function(){mousehandler();});
			
		}
		var show_few = function(){
			var txt = '';
			if(len<6){
				for(var i= 0;i<len;i++){
					txt += '<li><span>'+(i+1)+'</span></li>';
				}
				fold.hide();
			}else{
				if(curIndex+1<4){
					txt += '<li><span>1</span></li><li><span>2</span></li><li><span>3</span></li><li><span>4</span></li><li><span>5</span></li>'+mo_txt+'<li><span>'+len+'</span></li>'
				}else if(curIndex+4 >= len){
					txt += '<li><span>1</span></li>'+mo_txt+'<li><span>'+(parseInt(len,10)-4)+'</span></li><li><span>'+(parseInt(len,10)-3)+'</span></li><li><span>'+(parseInt(len,10)-2)+'</span></li><li><span>'+(parseInt(len,10)-1)+'</span></li><li><span>'+len+'</span></li>'
				}else{
					txt += '<li><span>1</span></li>'+mo_txt+'<li><span>'+(parseInt(curIndex,10))+'</span></li><li><span>'+(parseInt(curIndex,10)+1)+'</span></li><li><span>'+(parseInt(curIndex,10)+2)+'</span></li>'+mo_txt+'<li><span>'+len+'</span></li>'
				}
			}
			
			headline.fadeIn();
			thumb_inner.stop().animate({'width':'203px'},300,function(){$(this).html(txt);mousehandler();});
			
		}
		if(!!is_all){
			show_all()
		}else{
			show_few()
		}
		fold.unbind('click');
		fold.bind('click',function(){
			is_all?(is_all = false,show_few(),$(this).removeClass('open')):(is_all = true,show_all(),$(this).addClass('open'));
		});
	}
	var html = '<div class="photo"><img src="" id="graphics" alt="" /><div class="picinfo"><div class="progress"><div class="numerator"></div><div class="denominator"></div></div><div class="picinfo-text-wrap"><div class="picinfo-text"><p></p></div></div><div class="fold2" title="隐藏"></div><div class="unfold">显示</div></div></div>';
	inner.append(html);
	
	var photo = inner.find('.photo'),
		picinfo = inner.find('.picinfo'),
		fold = thumb.find('.fold'),
		fold2 = inner.find('.fold2'),
		unfold = inner.find('.unfold'),
		numerator = inner.find('.numerator'),
		denominator = inner.find('.denominator'),
		picinfo_text = inner.find('.picinfo-text'),
		picinfo_text_p = picinfo_text.find('p'),
		whht = [];
	
	function change(item){
		photo.find('img').remove();
		var o = new Image;
		var img = $(o);
		photo.prepend(img);
		img.css({'width':'auto','height':'auto'})
		img.attr('src',b_arr[item]).hide();
		vieworigin.attr({'href':b_arr[item],'target':'_blank'});
		numerator.html(item+1)
		denominator.html(len);
		picinfo_text_p.html(t_arr[item]);
		img.imagesLoaded(function(){
			var o_h = img.height(),o_w = img.width(),h=$(window).height()-90,now_w = 0;
			
			if(o_h > h){
				now_w = o_w*(h/o_h);
				photo.css({'width':now_w+'px','height':h+'px'})
			}else{
				photo.css({'width':o_w+'px','height':o_h+'px'})
			}
			img.css({'width':'100%','height':'100%'}).fadeTo("800",1);
			info_hover();
		});
		curIndex = item;
		show_thumb();
		creatUrl(item);
	}
	change(getUrl()-1);
	function next(){
		curIndex+1 < len? change(curIndex+1):end();
	}
	function prev(){
		curIndex > 0? change(curIndex-1):change(len-1);
	}
	function end(){
		var winH = $('body').height();
		end_inner.fadeIn();
		end_bg.css({'height':winH+'px'}).fadeIn();
		$('#replay').click(function(e){
			change(0);
			end_inner.hide();
			end_bg.hide();
			e.preventDefault();
		});
		$('#close').click(function(e){
			end_inner.fadeOut();
			end_bg.fadeOut();
			e.preventDefault();
		});
	}
	function info_hover(){
		
		var txt_height=picinfo_text_p.height();
		//console.info(txt_height);
		if( txt_height > 42){
			picinfo_text.css({'height':'42px','overflow':'hidden'})
			picinfo.bind('mouseenter',function(){
				picinfo_text.stop().animate({'height':txt_height+'px'},400,'easeOutCubic');
				fold2.stop().animate({'bottom':Math.floor(txt_height/2-20)+'px'},400,'easeOutCubic');
			}).bind('mouseleave',function(){
				picinfo_text.stop().animate({'height':'42px'},400,'easeOutCubic');
				fold2.stop().animate({'bottom':'0px'},400,'easeOutCubic');
			});
		}else{
			picinfo_text.css('height','auto');
			picinfo.unbind('mouseenter mouseleave');
		}
	}
	$(document).bind("keydown",function(e){
		e = window.event || e;
		e.keyCode == 37 && prev();
		e.keyCode == 39 && next();
		
	});
	fold2.click(function(){
		picinfo.addClass('picinfo-fold');
	});
	unfold.click(function(){
		picinfo.removeClass('picinfo-fold');
	});
	picinfo.click(function(e){
		e.stopPropagation();
	});
	inner.bind('mousemove',function(e){
		var x = e.pageX;
		var w = $('body').width();
		x>w/2?(inner.addClass('cursor-right'),btn_sta = true):(inner.removeClass('cursor-right'),btn_sta = false);
	}).bind('click',function(e){
		btn_sta?next():prev();
	});
	function creatUrl(item){
		var u = /\#p\=/i.test(window.location.href);
		if(!u){
			window.location.href = window.location.href+"#p=1";
		}else{
			window.location.href = window.location.href.split("#p=")[0] + "#p="+parseInt(item+1,10);
		}
	}
	function getUrl(){
		var str = window.location.href.toString(),pos = str.indexOf("#p=");
		var nub = 1;
		if(pos!==-1){
			nub=str.match(/\#p\=(\d{1,})/i)[1];
		}
		return nub;
	}
	$(window).resize(function(){
		var o_h = photo.height(),o_w = photo.width(),h=$(window).height()-90,w=$(window).width(),now_w = 0;
		if(w<988){inner.css({'width':'980px'})}else{inner.css({'width':'auto'})}
		o&&clearTimeout(o);
		o = setTimeout(function(){
			if(h>200){
				now_w = o_w*(h/o_h);
				photo.animate({'width':now_w+'px','height':h+'px'},400,'easeOutCubic',function(){setTimeout(function(){info_hover();}),1});
				
			}
		},200);
		
	});
	
}