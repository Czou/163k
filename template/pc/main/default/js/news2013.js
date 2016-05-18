function get_bbs(bbsUrl,cat,num,node){
	var timer=Math.random(),
		url = '../request.ashx?action=getdata&timer='+timer+'&tempid=20&template=bbs3.html';
	$.get(url,function(dt){
		node.empty().html(dt);
	});
}