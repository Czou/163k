function reset_moveBtn(){
	var node = jQuery('#xiangce');
	if(node.length<1){return;}
	node.find('.move_next,.move_prev').show();
	node.find('.move_next').css({'left':'41px'});
	node.find('li:last .move_next').hide();
	node.find('li:first .move_prev').hide();
	node.find('li:first .move_next').css({'left':'0'});
}
reset_moveBtn();
function move_PrevNext(o,index,sortval,picid,pageid,tableid,styleid){
	var url = siteUrl+'request.ashx?action=picmove&pn='+index+'&id='+picid+'&intorder='+sortval+'&table_id='+tableid+'&styleid='+styleid;
	var Digital=new  Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	var ht = jQuery('#'+pageid+sortval),ht2 = '';

	jQuery.ajax({url:url,success:function(data){
		if(data.islogin == '1'){
			if(index === 0){
				ht2 = ht.prev();
				ht.detach().insertBefore(ht2);
			}else{
				ht2 = ht.next();
				ht.detach().insertAfter(ht2);
			}
			reset_moveBtn();
		}else{
			alert(data['error']);
		}
	}});
	return false;
}