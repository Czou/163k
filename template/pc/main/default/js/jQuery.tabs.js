$.fn.TabADS = function(){
	var obj = $(this);
	var currentClass = "select";
	var tabs = obj.find(".tab-hd").find("li");
	var conts = obj.find(".tab-cont");
	var t;
	tabs.children('a').eq(0).addClass(currentClass);
	conts.eq(0).nextAll().hide();
	tabs.each(function(i){
		$(this).bind("mouseover",function(){
			 t = setTimeout(function(){
				conts.hide().eq(i).show();
				tabs.children('a').removeClass(currentClass).eq(i).addClass(currentClass);
			},300);
		}).bind("mouseout",function(){
			clearTimeout(t);
		});
	});
}
$.fn.TabADS2 = function(){
	var obj = $(this);
	var currentClass = "select";
	var tabs = obj.find(".tab-hd").find("li");
	var conts = obj.find(".tab-cont");
	var t;
	tabs.eq(0).addClass(currentClass);
	conts.eq(0).nextAll().hide();
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