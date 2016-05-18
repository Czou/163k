(function($){
	$.fn.autoresize = function(){
		//getIEVersion() && $('body').addClass('ie'+getIEVersion());
		var co = $(this),
			len=0,
			arr_left=['0px','3px','6px','9px'];
		co.find('li').each(function(i,item){
			$(item).css({'left':arr_left[i%2]});
		})
		//co.find('li').unbind();
		//co.find('li').bind('mouseenter',function(){$(this).addClass('list_show')});
		//co.find('li').bind('mouseleave',function(){$(this).removeClass('list_show')});
		$(window).resize(function() {
			var w_w = $('body').width();
			var i_w = Math.floor((w_w - 3)/2),
				i_h = Math.floor(i_w/10*7)
				i_w2 =i_w + (w_w - i_w*2 - 3);
			co.find('li').css({'width':i_w,'height':i_h});
			co.find('img').css({'width':i_w,'height':i_h});
			co.find('li:nth-child(4n)').css({'width':i_w2,'height':i_h});
			co.find('li:nth-child(4n) img').css({'width':i_w2,'height':i_h});
		});
		$(window).trigger('resize');
	}	  
})(jQuery);